<?php

class Order extends DB
{
  private $table = "orders";
  private $conn;
  public function __construct()
  {
   
    $this->conn=$this->connect();
  }

  public function insert_order($data){
   

  }


  
  
}