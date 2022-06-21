<?php

class Product extends DB
{
  private $table = "products";
  private $conn;
  public function __construct()
  {

    $this->conn = $this->connect();
  }
  // insert a new product in table products
  public function insert_Product($data)
  {
    $product = "SELECT * FROM $this->table WHERE product_name = :product_name AND category_id = :category_id AND owner_id = :owner_id";
    $stmt = $this->conn->prepare($product);
    $stmt->bindParam(':product_name', $data['product_name']);
    $stmt->bindParam(':category_id', $data['category_id']);
    $stmt->bindParam(':owner_id', $data['owner_id']);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($result) {
      $result= ['status'=>false];
      return $result;
    } else {
      $sql = "INSERT INTO $this->table (product_name, description, price, category_id, status, owner_id, quantity) VALUES (:product_name, :description, :price, :category_id, :status, :owner_id, :quantity)";
      $stmt = $this->conn->prepare($sql);
      $stmt->bindParam(':product_name', $data['product_name']);
      $stmt->bindParam(':description', $data['description']);
      $stmt->bindParam(':price', $data['price']);
      $stmt->bindParam(':category_id', $data['category_id']);
      $stmt->bindParam(':status', $data['status']);
      $stmt->bindParam(':owner_id', $data['owner_id']);
      $stmt->bindParam(':quantity', $data['quantity']);
      $stmt->execute();
      $sql = "SELECT id FROM $this->table WHERE product_name = :product_name AND category_id = :category_id AND owner_id = :owner_id ORDER BY id DESC LIMIT 1";
      $stmt = $this->conn->prepare($sql);
      $stmt->bindParam(':product_name', $data['product_name']); 
      $stmt->bindParam(':category_id', $data['category_id']);
      $stmt->bindParam(':owner_id', $data['owner_id']);
      $stmt->execute();
      $result = $stmt->fetch();
      return ['id'=>$result, 'status'=>true];
    }
  }

  // select all products from products table
  public function select_all_product()
  {
    $sql = "SELECT * FROM $this->table";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
  }

  // select a searching products from products table
  public function search_product($search)
  {
    $search = "%$search%";
    $sql = "SELECT * FROM $this->table WHERE product_name LIKE :search OR description LIKE :search";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':search', $search);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
  }

  // select one product by id from products table
  public function selectOne($id)
  {
    $sql = "SELECT * FROM $this->table WHERE id=:id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result;


  }
  // select all recent inserted products from products table
  public function select_new_products($id,$page_number)
  {
    $sql = "SELECT $this->table.*,`categories`.name FROM $this->table INNER JOIN `categories` ON $this->table.category_id = categories.id WHERE status = '1' AND $this->table.id>$id ORDER BY $this->table.id ASC LIMIT $page_number";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
  }
  // select 30 top ordered products
  public function select_top_products()
  {
    $sql = "SELECT * FROM $this->table  WHERE status = '1' ORDER BY number_orders DESC LIMIT 30";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;  
  }
  // select last for pagination
  public function select_last_pagination_id($number_product_in_page)
  {
    //SELECT id from products ORDER BY id limit 20;
    $sql = "SELECT id FROM $this->table ORDER BY id limit $number_product_in_page";
    $stmt = $this->conn->prepare($sql);
    // $stmt->bindParam(':number_product',$number_product_in_page);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result; 

  }
  // count number of all product
  public function count_product_number()
  {
    $sql = "SELECT COUNT(*) FROM $this->table";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetch();
    return $result;
  }


  // select products
  public function get_user_products($id)
  {
    $sql = "SELECT * FROM $this->table WHERE owner_id = :id ORDER BY id DESC";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
  }

  // select all product by category
  public function get_products_by_category($id)
  {
    $sql = "SELECT $this->table.*,`categories`.name FROM $this->table INNER JOIN `categories` ON $this->table.category_id = categories.id WHERE $this->table.category_id = :id AND $this->table.status = '1' ORDER BY $this->table.id DESC";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
  }

  // update product
  public function update_product($data,$id)
  {
    $sql = "UPDATE $this->table SET product_name = :product_name, description = :description, price = :price, category_id = :category_id, status = :status, owner_id = :owner_id, quantity = :quantity WHERE id = :id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':product_name', $data['product_name']);
    $stmt->bindParam(':description', $data['description']);
    $stmt->bindParam(':price', $data['price']);
    $stmt->bindParam(':category_id', $data['category_id']);
    $stmt->bindParam(':status', $data['status']);
    $stmt->bindParam(':owner_id', $data['owner_id']);
    $stmt->bindParam(':quantity', $data['quantity']);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    return "Product updated successfully";
  }
  // delete product by id
  public function delete_product($id)
  {
    $sql = "DELETE FROM $this->table WHERE id = :id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    return "Product deleted successfully";
  }

  // subtract quantity from product quantity after order
  public function sub_buying_products($data)
  {
    $product = $this->selectOne($data['id']);
    $orders_quantity = $data['quantity']+$product['number_orders'];
    $product_cal = $product['quantity']- $data['quantity'];
    $sql = "UPDATE $this->table SET quantity = :quantity,number_orders=:number_orders WHERE id = :id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':quantity',$product_cal);
    $stmt->bindParam(':number_orders',$orders_quantity);
    $stmt->bindParam(':id', $data['id']);
    $stmt->execute();
    echo 'update prod';
    return;
  }

  // count all products for seller
  public function count_All_products($id)
  {
    $sql = "SELECT SUM(quantity) FROM $this->table WHERE owner_id = :id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $result = $stmt->fetch();
    return $result;
  }
  
}
