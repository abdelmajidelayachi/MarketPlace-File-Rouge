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
      $json = json_encode([
        'fNameError' => '',
        'lNameError' => '',
        'emailError' => 'email is not valid',
        'passwordError' => '',
        'confirmPasswordError' => '',
        'success' => ''
      ]);
      echo $json;
      return;
    } elseif ($this->validationPassword($password) == FALSE) {
      $json = json_encode([
      'fNameError' => '',
      'lNameError' => '',
      'emailError' => '',
      'passwordError' => 'Password must have at least 8 character', 
      'confirmPasswordError' => '',
      'success' => ''
    ]);
      echo $json;
      return;
    }


    $password = password_hash($password, PASSWORD_DEFAULT);
    $emails = $this->conn->prepare('SELECT * FROM `' . $this->table . '` where email=:email');
    $emails->bindParam(':email', $email);
    $emails->execute();
    if ($emails->fetch()) {
      $json = json_encode([
        'fNameError' => '',
        'lNameError' => '',
        'emailError' => 'Email already exist',
        'passwordError' => '',
        'confirmPasswordError' => '',
        'success' => '',
        ]);
      echo $json;
      return;
    } else {
      $account = $this->conn->prepare('INSERT INTO `' . $this->table . '`(first_name,last_name,email,password) VALUES(:first_name,:last_name,:email,:password)');
      $account->bindParam(':first_name', $first_name);
      $account->bindParam(':last_name', $last_name);
      $account->bindParam(':email', $email);
      $account->bindParam(':password', $password);
      $account->execute();
      $json = json_encode([
        'fNameError' => '',
        'lNameError' => '',
        'emailError' => '',
        'passwordError' => '',
        'confirmPasswordError' => '',
        'success' => 'Account created successfully']);
      echo $json;
      return;
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
        $json = json_encode([
          'emailError' => '',
          'passwordError' => '',
          'success' => 'Login successfully',
          'user' => $row
        ]);
        echo $json;
      } else {
        $json = json_encode([
          'emailError' => '',
          'passwordError' => 'password is incorrect',
          'success' => ''
        ]);
        echo $json;
      }
    } else {
      $json = json_encode([
        'emailError' => 'Email does not exist',
        'passwordError' => '',
        'success' => ''
      ]);
      echo $json;
    }
  }
}
