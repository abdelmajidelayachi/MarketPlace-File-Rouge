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
    $sql = "INSERT INTO $this->table (from_user_id, to_user_id,amount,order_id,store_amount) VALUES (:from_user_id, :to_user_id,:amount,:order_id,:store_amount)";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':from_user_id',$data['from_user_id']);
    $stmt->bindParam(':to_user_id',$data['to_user_id']);
    $stmt->bindParam(':amount',$data['amount']);
    $stmt->bindParam(':order_id',$data['order_id']);
    $stmt->bindParam(':store_amount',$data['store_amount']);
    $stmt->execute();
    return $this->get_last_transaction_id();
    

  }

  public function get_transactions($id)
  {
    $sql = "SELECT * FROM `transactions` WHERE from_user_id = :id OR to_user_id = :id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id',$id);
    $stmt->execute();
    return $stmt->fetchAll();

  }

  public function get_last_transaction_id()
  {
    $sql = "SELECT id FROM $this->table  ORDER BY id DESC LIMIT 1";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute();
    return $stmt->fetch();

  }



}