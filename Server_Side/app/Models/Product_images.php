<?php

class Product_images extends DB
{
  private $table = "product_images";
  private $conn;
  public function __construct()
  {

    $this->conn = $this->connect();
  }

  public function insert_image($data)
  {
    $sql = "INSERT INTO $this->table (product_id, path) VALUES (:product_id, :path)";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':product_id', $data['product_id']);
    $stmt->bindParam(':path', $data['path']);
    $stmt->execute();
    return true;
  }

  public function get_product_images($id)
  {
    $sql = "SELECT * FROM $this->table WHERE product_id = :id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $result;
  }
  
  
  
}