<?php

class Product extends DB
{
  private $table = "products";
  private $conn;
  public function __construct()
  {

    $this->conn = $this->connect();
  }

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
  public function selectOne($id)
  {
    $sql = "SELECT * FROM $this->table WHERE id=:id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result;


  }

  public function select_new_products()
  {
    $sql = "SELECT * FROM $this->table WHERE status = '1' ORDER BY id DESC LIMIT 30";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
  }

  public function getUserProducts($id)
  {
    $sql = "SELECT * FROM $this->table WHERE owner_id = :id ORDER BY id DESC";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
  }


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

  public function delete_product($id)
  {
    $sql = "DELETE FROM $this->table WHERE id = :id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    return "Product deleted successfully";
  }
}
