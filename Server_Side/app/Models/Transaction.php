<?php

class Transaction extends DB
{
  private $table = "transactions";
  private $conn;
  public function __construct()
  {
   
    $this->conn=$this->connect();
  }

  public function insert_transaction($data)
  {
    $sql = "INSERT INTO $this->table (from_user_id, to_user_id,amount,order_id) VALUES (:from_user_id, :to_user_id,:amount,:order_id)";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':from_user_id',$data['from_user_id']);
    $stmt->bindParam(':to_user_id',$data['to_user_id']);
    $stmt->bindParam(':amount',$data['amount']);
    $stmt->bindParam(':order_id',$data['order_id']);
    $stmt->execute();

  }



}