<?php

class Product extends DB
{
  private $table = "products";
  private $conn;
  public function __construct()
  {
   
    $this->conn=$this->connect();
  }

  public function insert_Product($data){
    $product = "SELECT * FROM $this->table WHERE product_name = :product_name AND category_id = :category_id AND owner_id = :owner_id";
    $stmt = $this->conn->prepare($product);
    $stmt->bindParam(':product_name', $data['product_name']);
    $stmt->bindParam(':category_id', $data['category_id']);
    $stmt->bindParam(':owner_id', $data['owner_id']);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    if($result){
      return "Product already exists";

    }else{
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
      return "Product created successfully";
    }
  }




  

 
}
