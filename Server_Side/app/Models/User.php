<?php

class User extends DB
{
  private $table = "users";
  private $conn;
  public function __construct()
  {

    $this->conn = $this->connect();
  }
  function checkEmail($str)
  {
    return (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $str)) ? FALSE : TRUE;
  }
  function validationPassword($password)
  {
    // $pattern = "/^(?=.*[!@#$%^&*-])(?=.*[0-9])(?=.*[A-Z]).{8,20}$/";
    $pattern = '/^.{8,}$/';
    if (preg_match($pattern, $password)) {
      return true;
    } else {
      return false;
    }
  }
  public function register($data)
  {

    $first_name = $data['first_name'];
    $last_name = $data['last_name'];
    $email = $data['email'];
    $password = $data['password'];
    
    if ($this->checkEmail($email) == FALSE) {
      echo "Invalid Email";
      return;
    }
    
    elseif($this->validationPassword($password) == FALSE)
    {
      $json = json_encode(['message' => 'Password must have at least 8 character']);
      echo $json;
      return;
    }
    
    
    $password = password_hash($password, PASSWORD_DEFAULT);
    $emails = $this->conn->prepare('SELECT * FROM `' . $this->table . '` where email=:email');
    $emails->bindParam(':email', $email);
    $emails->execute();
    if ($emails->fetch()) {
      echo "Email already exists";
    } else {
      $account = $this->conn->prepare('INSERT INTO `' . $this->table . '`(first_name,last_name,email,password) VALUES(:first_name,:last_name,:email,:password)');
      $account->bindParam(':first_name', $first_name);
      $account->bindParam(':last_name', $last_name);
      $account->bindParam(':email', $email);
      $account->bindParam(':password', $password);
      $account->execute();
      echo "Account created";
    }
  }


  public function login($data)
  {
    $email = $data['email'];
    $password = $data['password'];
    $emails = $this->conn->prepare('SELECT * FROM `' . $this->table . '` where email=:email');
    $emails->bindParam(':email', $email);
    $emails->execute();
    if ($emails->fetch()) {
      $account = $this->conn->prepare('SELECT * FROM `' . $this->table . '` where email=:email');
      $account->bindParam(':email', $email);
      $account->execute();
      $row = $account->fetch();
      if (password_verify($password, $row['password'])) {
        $json = json_encode(['message' => 'You logged in']);
        echo $json;
      } else {
        $json = json_encode(['message' => 'Password is incorrect']);
        echo $json;
      }
    } else {
      $json = json_encode(['message' => 'Email is not exists']);
      echo $json;
    }
  }
}
