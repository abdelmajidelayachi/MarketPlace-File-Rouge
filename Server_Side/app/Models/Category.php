<?php

class Category extends DB
{
  private $table = "categories";
  private $conn;
  public function __construct()
  {
   
    $this->conn=$this->connect();
  }

  public function insert_category($data){
    $category = "SELECT * FROM $this->table WHERE name = :name";
    $stmt = $this->conn->prepare($category);
    $stmt->bindParam(':name', $data['name']);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($result) {
      return  "Category already exists";
    } else {
      $sql = "INSERT INTO $this->table (name) VALUES (:name)";
      $stmt = $this->conn->prepare($sql);
      $stmt->bindParam(':name', $data['name']);
      $stmt->execute();
      return "Category created successfully";
    }

  }


  
  
}