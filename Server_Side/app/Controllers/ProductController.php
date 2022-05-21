<?php
class ProductController
{
  function create_product()
  {
    $data = [
      'product_name' => $_POST['product_name'],
      'description' => $_POST['description'],
      'price' => $_POST['price'],
      'category_id' => $_POST['category_id'],
      'status' => $_POST['status'],
      'owner_id' => $_POST['owner_id'],
      'quantity' => $_POST['quantity'],
    ];
    if (trim($data['product_name']) == '') {
      echo "product_name is required";
      return;
    }
    if (trim($data['description']) == '') {
      echo "description is required";
      return;
    }
    if (trim($data['price']) == '') {
      echo "price is required";
      return;
    }
    if (trim($data['category_id']) == '') {
      echo "category_id is required";
      return;
    }
    if (trim($data['status']) == '') {
      echo "status is required";
      return;
    }
    if (trim($data['owner_id']) == '') {
      echo "owner is required";
      return;
    }
    if (trim($data['quantity']) == '') {
      echo "quantity is required";
      return;
    } else {
      $product = new Product();
      $result = $product->insert_Product($data);
      $json = json_encode(['message'=>$result]);
      echo $json;
      return;
      
    }
  }

  public function create_category()
  {
    $data = [
      'name' => $_POST['name']
    ];
    if (trim($data['name']) == '') {
      echo "name is required";
      return;
    } else {
      $category = new Category();
      $result = $category->insert_category($data);
      $json = json_encode([
        'status' => 'success',
        'message' => $result
      ]);
      echo $json;
      return;
    }
  }
}
