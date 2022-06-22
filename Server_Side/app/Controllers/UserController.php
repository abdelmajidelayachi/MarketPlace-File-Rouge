


<?php

class UserController
{
  public function register()
  {
    $data = [
      'first_name' => $_POST['first_name'],
      'last_name' => $_POST['last_name'],
      'email' => $_POST['email'],
      'password' => $_POST['password']
    ];

    if (trim($data['first_name']) == '') {
      $json = json_encode([
        'fNameError' => 'first name is required',
        'lNameError' => '',
        'emailError' => '',
        'passwordError' => '',
        'confirmPasswordError' => '',
        'success' => ''
      ]);
      echo $json;
      return;
    }
    if (trim($data['last_name']) == '') {
      $json = json_encode([
        'fNameError' => '',
        'lNameError' => 'last name is required',
        'emailError' => '',
        'passwordError' => '',
        'confirmPasswordError' => '',
        'success' => ''
        
      ]);
      echo $json;
      return;
    }
    if (trim($data['email']) == '') {
      $json = json_encode([
        'fNameError' => '',
        'lNameError' => '',
        'emailError' => 'email is required',
        'passwordError' => '',
        'confirmPasswordError' => '',
        'success' => ''
        
      ]);
      echo $json;
      return;
    } else {
      $user = new User();
      return $user->register($data);
    }
  }


  public function login()
  {
    $data = [
      'email' => $_POST['email'],
      'password' => $_POST['password']
    ];
    if (trim($data['email']) == '') {
      $json = json_encode([
        'emailError' => 'email is required',
        'passwordError' => '',
        'success' => ''
      ]);
      echo $json;
      return;
    }
    if (trim($data['password']) == '') {
      $json = json_encode([
        'emailError' => '',
        'passwordError' => 'password is required',
        'success' => ''
      ]);
      return;
    } else {
      $user = new User();
      return $user->login($data);
    }
  }
  public function update_profile()
  {
    $data = [
      'first_name'=> $_POST['first_name'],
      'last_name'=> $_POST['last_name'],
      'email'=> $_POST['email'],
      'id'=> $_POST['id']
    ];
  
   
    $user = new User();
    if($user->update_profile($data)===true)
    {

      if(isset($_FILES['image']["name"]))
      {
  
        $filename = time().$_FILES["image"]["name"];
        $tempname = $_FILES["image"]["tmp_name"];
        $folder = APP . "/../../client_side/src/assets/images/profiles/" . $filename;
        $photo = $filename;

        if($user->update_image($data['id'],$photo))
        {
          move_uploaded_file($tempname, $folder);
        }
        else
        {

          echo json_encode(["success"=>false,"message"=>"Error inserting image"]);
          return;
        }
      }
      $userInfo = $user->getUserInfo($data['id']);
      $json = json_encode(["success"=>true,"message"=>"Profile updated successfully","user"=>$userInfo]);
      
    }else{
      $json = json_encode(["success"=>false,"message"=>"Something went wrong"]);
    }

    echo $json;
    return;
    
  }
  public function update_password()
  {
    $data = [
      'id'=> $_POST['id'],
      'current_password' => $_POST['current_password'],
      'new_password' => $_POST['new_password'],
      'new_password_confirmation' => $_POST['new_password_confirmation']
    ];

    $user = new User();
    // check old password is correct
    if($user->check_password_is_correct($data['id'],$data['current_password']))
    {
      // update password
      if($user->update_password($data['id'],$data['new_password']))
      {
        $json = json_encode(['success'=>true,'message'=>'success']);
        echo $json;
        return;
      }else{
        $json = json_encode(['success'=>false,'message'=>'error']);
        echo $json;
        return;
      }
    }else{
      $json = json_encode(['success'=>false,'message'=>'error']);
      echo $json;
      return;
    }
  }
  
  public function add_store()
  {
    $id = $_POST['id'];
    $user = new User();
    if($user->change_role_to_seller($id))
    {
      $user = $user->getUserInfo($id);
      $json = json_encode(['success'=>true,'message'=>'success','user'=>$user]);
      echo $json;
      return;
  }else{
    $json = json_encode(['success'=>false,'message'=>'error']);
    echo $json;
    return;
  }
}


}
