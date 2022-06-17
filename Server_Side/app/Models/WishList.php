<?php

class WishList extends DB
{
  private $table = "wishlist";
  private $conn;
  public function __construct()
  {
   
    $this->conn=$this->connect();
  }
  public function insert_wish_product($data)
  {
    $sql = "INSERT INTO $this->table (user_id,product_id) VALUES (:user_id,:product_id)";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam('user_id',$data['user_id']);
    $stmt->bindParam('product_id',$data['product_id']);
    if($stmt->execute())
    {
      return true;
    }else
    {
      return false;
    }

  }

  public function select_if_in_wishlist($data)
  {
    $sql = "SELECT * FROM $this->table WHERE user_id=:user_id && product_id=:product_id";
    $stmt= $this->conn->prepare($sql);
    $stmt->bindParam('user_id',$data['user_id']);
    $stmt->bindParam('product_id',$data['product_id']);
    $stmt->execute();
    $result = $stmt->fetch();
    if(!$result)
    {
      return true;
    }else{
      return false;
    }

  }

  public function select_list_product($id)
  {
    $sql = "SELECT * FROM $this->table INNER JOIN `products` ON $this->table.product_id=products.id  WHERE $this->table.user_id=:user_id ";
    $stmt= $this->conn->prepare($sql);
    $stmt->bindParam('user_id',$id);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function delete_from_wishlist($id)
  {
    $sql = "DELETE FROM $this->table WHERE id_wishlist = :id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id',$id);
    if($stmt->execute())
    {
      return true;
    }else
    {
      return false;
    }

  }

  
  
}