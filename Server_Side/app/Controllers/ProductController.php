<?php
class ProductController
{
  public function get_all_products()
  {
    $product = new Product();
    $products = $product->select_all_product();
    foreach ($products as $key => $value) {
      $product_images = new Product_images();
      $images = $product_images->get_product_images($value['id']);
      $products[$key]['images'] = $images;
      $category = new Category();
      $products[$key]['category'] = $category->select_category($value['category_id']);
    }
    $json = json_encode($products);
    echo $json;
    return;
  }

  public function get_new_products()
  {
    $product = new Product();
    $result = $product->select_new_products();
    $images = new Product_images();
    foreach ($result as $key => $value) {
      $result[$key]['images'] = $images->get_product_images($value['id']);
      $category = new Category();
      $products[$key]['category'] = $category->select_category($value['category_id']);
    }
    echo json_encode($result);
    return;
  }

  public function get_top_products()
  {
    $product = new Product();
    $result = $product->select_top_products();
    $images = new Product_images();
    foreach ($result as $key => $value) {
      $result[$key]['images'] = $images->get_product_images($value['id']);
      $category = new Category();
      $products[$key]['category'] = $category->select_category($value['category_id']);
    }
    echo json_encode($result);
    return;
  }
  public function get_Product($id)
  {
    $product = new Product();
    $product  = $product->selectOne($id);
    $product_images = new Product_images();
    $images = $product_images->get_product_images($id);
    $product['images'] = $images;
    $category = new Category();
    $product['category'] = $category->select_category($product['category_id']);
    $user = new User();
    $product['owner'] = $user->getUserInfo($product['owner_id']);
    echo json_encode($product);
    return;
  }
  public function get_products($id)
  {
    $product = new Product();
    $product = $product->getUserProducts($id);
    foreach ($product as $key => $value) {
      $products['products'][$key] = $value;
      $product_images = new Product_images();
      $images = $product_images->get_product_images($value['id']);
      $products['products'][$key]['images'] = $images;
      $category = new Category();
      $products['products'][$key]['category'] = $category->select_category($value['category_id']);
    }
    $user = new User();
    $user = $user->getUserInfo($id);
    $products['user'] = $user;
    $json = json_encode($products);
    echo $json;
    return;
  }
  public function get_products_by_category($id)
  {
    $products = new Product();
    $products = $products->getProductsByCategory($id);
    foreach ($products as $key => $value) {
      $product_images = new Product_images();
      $images = $product_images->get_product_images($value['id']);
      $products[$key]['images'] = $images;
      $category = new Category();
      $products[$key]['category'] = $category->select_category($value['category_id']);
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
    
   
    $product = new Product();
    $result = $product->insert_Product($data);
    $image = new Product_images();
    if ($result['status'] == true) {
     for ($i=0; $i < 3; $i++) { 
      $filename = $_FILES["image$i"]['name'];
      $tempname = $_FILES["image$i"]["tmp_name"];
      $folder = APP . "/../../src/assets/images/uploads/" . $filename;
      $image->insert_image(['product_id' => $result['id']['id'], 'path' => $filename]);
      move_uploaded_file($tempname, $folder);
     }
      $json = json_encode(['message' => ['success' => 'Product created successfully']]);
      echo $json;
      return;
    } else {
      echo json_encode(['error' => 'ERROR img']);
      return;
    }
  }
  //
  public function get_product_search($search)
  {
    $product = new Product();
    $products = $product->search_product($search);
    foreach ($products as $key => $value) {
      $product_images = new Product_images();
      $images = $product_images->get_product_images($value['id']);
      $products[$key]['images'] = $images;
      $category = new Category();
      $products[$key]['category'] = $category->select_category($value['category_id']);
    }
    $json = json_encode($products);
    echo $json;
    return;
  }

  // category 

  public function get_categories()
  {
    $category = new Category();
    $result = $category->select_categories();
    echo json_encode($result);
    return;
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
