<?php

class WishList extends DB
{
  private $table = "wishlist";
  private $conn;
  public function __construct()
  {
   
    $this->conn=$this->connect();
  }

  
  
}