<?php
class ProductController
{
  public function get_new_products()
  {
    $product = new Product();
    $result = $product->select_new_products();
    $images = new Product_images();
    foreach ($result as $key => $value) {
      $result[$key]['images'] = $images->get_product_images($value['id']);
    }
    echo json_encode($result);
    return;
  }
  public function get_products($id)
  {
    $products = new Product();
    $products = $products->getUserProducts($id);
    foreach ($products as $key => $value) {
      $product_images = new Product_images();
      $images = $product_images->get_product_images($value['id']);
      $products[$key]['images'] = $images;
    }
    $json = json_encode($products);
    echo $json;
    return;

  }
  public function create_product()
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

    $filename = $_FILES["image"]["name"];
    $tempname = $_FILES["image"]["tmp_name"];
    $folder = APP . "/../../src/assets/images/uploads/" . $filename;
    $product = new Product();
    $result = $product->insert_Product($data);
    $image = new Product_images();
    if($result['status'] == true){
      $image->insert_image(['product_id'=>$result['id']['id'], 'path'=>$filename]);
      move_uploaded_file($tempname, $folder);
      $json = json_encode(['message'=>['success'=>'Product created successfully']]);
      echo $json;
      return;
      
    }
    else{
        echo json_encode(['error'=>'ERROR img']);
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
  public function update_product($id)
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

    $product = new Product();
    $result = $product->update_product($data, $id);
    $json = json_encode([
      'status' => 'success',
      'message' => $result
    ]);
    echo $json;
    return;

  }
  public function delete_product($id)
  {
    $product = new Product();
    $result = $product->delete_product($id);
    $json = json_encode([
      'status' => 'success',
      'message' => $result
    ]);
    echo $json;
    return;
  }
}
  