<?php

class Analytic extends DB
{
  private $table = "categories";
  private $conn;
  public function __construct()
  {
   
    $this->conn=$this->connect();
  }

  public function countTotalUsers($id)
  {
    $sql = "SELECT COUNT(*) AS total FROM `users` WHERE id != :id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    return $stmt->fetch();
  }
// user transactions

  public function getTotalAmount($id)
  {
    $sql = "SELECT SUM(amount) AS total FROM `transactions` WHERE  to_user_id = :id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    return $stmt->fetch();
  }

  // getStoreCreateAt
  public function getStoreCreateAt($id)
  {
    $sql = "SELECT created_at FROM `users` WHERE id = :id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    return $stmt->fetch();
  }


  
  
}