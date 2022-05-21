


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
      echo "first name is required";
      return;
    }
    if (trim($data['last_name']) == '') {
      echo "last name is required";
      return;
    }
    if (trim($data['email']) == '') {
      echo "email is required";
      return;
    } else {
      $user = new User();      return $user->register($data);
    }
  }


  public function login()
  {
    $data = [
      'email' => $_POST['email'],
      'password' => $_POST['password']
    ];
    if (trim($data['email']) == '') {
      echo "email is required";
      return;
    }
    if (trim($data['password']) == '') {
      echo "password is required";
      return;
    } else {
      $user = new User();
      return $user->login($data);
    }
  }







































  // public function products()
  // {
  //   $db=new Product();
  //   $data['products']=$db->getAllProducts();

  //   echo json_encode($data['products']);
  // //  View::load('product/index',$data);
  // // header('location: '.BURL.'product/index');
  // }
  // public function index()
  // {

  //   View::load('product/index');
  // }
  // public function add()
  // {

  //   View::load('product/add');
  // }
  // public function store()
  // {
  //   if(isset($_POST['submit']))
  //   {
  //     $name = $_POST['name'];
  //     $price =$_POST['price'];
  //     $description = $_POST['description'];
  //     $qty = $_POST['qty'];
  //     $data=array("name"=>$name,"price"=>$price,"description"=>$description,"qty"=>$qty);

  //     $db = new Product();
  //     if($db->insertProduct($data))
  //     {
  //       // echo json_encode($data);
  //       View::load("product/add",["success"=>"Data created Successfully"]);
  //       // header('location: '.BURL.'product/add');

  //     }else{
  //       View::load("product/add");
  //     }

  //   }
  // }
  // // public function delete($id){
  // //   $db = new Product();
  // //   if($db->deleteProduct($id))
  // //   {
  // //     View::load("product/delete");
  // //   }else
  // //   {
  // //     echo "Error";
  // //   }

  // // }
  // public function edit($id)
  // {
  //   $db=new Product();
  //   if($db->getRow($id))
  //   {
  //     $data['row']=$db->getRow($id);
  //     View::load('Product/edit',$data);

  //   }
  //   else
  //   {
  //     echo "Error";
  //   }

  // }
  // public function update($id){
  //   if(isset($_POST['submit']))
  //   {
  //     $name = $_POST['name'];
  //     $price =$_POST['price'];
  //     $description = $_POST['description'];
  //     $qty = $_POST['qty'];
  //     $dataDelete=array("name"=>$name,"price"=>$price,"description"=>$description,"qty"=>$qty);

  //     $db = new Product();
  //     if($db->updateProduct($id,$dataDelete))
  //     {
  //       View::load("product/edit",["success"=>"Data updated Successfully",'row'=>$db->getRow($id)]);

  //     }else{
  //       View::load("product/edit",['row'=>$db->getRow($id)]);
  //     }

  //   }
  // }

}
