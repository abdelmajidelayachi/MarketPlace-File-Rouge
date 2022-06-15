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
  public function getUserInfo($id)
  {
    $user = $this->conn->prepare('SELECT * FROM `' . $this->table . '` where id=:id');
    $user->bindParam(':id', $id);
    $user->execute();
    return $user->fetch();
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
  // check current password
  public function check_password_is_correct($id,$password)
  {
    $account = $this->conn->prepare("SELECT * FROM $this->table  WHERE id=:id");
    $account->bindParam(':id', $id);
    $account->execute();
    $row = $account->fetch();
    // var_dump( $row['password']);
    if (password_verify($password, $row['password'])) {
      // echo :"true";
      return true;
    } else {
      // echo "false";
      return false;
    }
    return;

  }
  // update profile
  public function update_profile($data)
  {
    $sql = "UPDATE `" . $this->table . "` SET `first_name`=:first_name,`last_name`=:last_name,`email`=:email WHERE `id`=:id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':first_name', $data['first_name']);
    $stmt->bindParam(':last_name', $data['last_name']);
    $stmt->bindParam(':email', $data['email']);
    $stmt->bindParam(':id', $data['id']);
    $stmt->execute();
    return true;
  }
  // update image
  public function update_image($id,$photo)
  {
    $sql = "UPDATE `" . $this->table . "` SET `profile_photo_path` =:profile_photo_path WHERE `id`=:id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':profile_photo_path',$photo);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    return true;
  }
  // change password
  public function update_password($email,$password)
  {
    $password = password_hash($password, PASSWORD_DEFAULT);
    $account = $this->conn->prepare('UPDATE `' . $this->table . '` SET password=:password WHERE email=:email');
    $account->bindParam(':email', $email);
    $account->bindParam(':password', $password);
    $account->execute();
    return true;
  }

  public function change_role_to_seller($id)
  {
    $account = $this->conn->prepare('UPDATE `' . $this->table . '` SET role= "seller" WHERE id=:id');
    $account->bindParam(':id', $id);
    $account->execute();
    return true;
  }

  //count user 
  


}
