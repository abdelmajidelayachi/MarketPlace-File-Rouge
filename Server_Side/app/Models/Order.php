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
   $sql = "INSERT INTO $this->table (order_of_user_id,tel,`address`, city,country) VALUES (:order_of_user_id,:tel,:address, :city,:country)";
   $stmt = $this->conn->prepare($sql);
   $stmt->bindParam(':order_of_user_id',$data['order_of_user_id']); 
   $stmt->bindParam(':tel',$data['tel']); 
   $stmt->bindParam(':address',$data['address']); 
   $stmt->bindParam(':city',$data['city']); 
   $stmt->bindParam(':country',$data['country']); 
   $stmt->execute();
    echo 'insert order';
   $sql ="SELECT id FROM $this->table  ORDER BY id DESC LIMIT 1";
   $stmt = $this->conn->prepare($sql);
   $stmt->execute();
   return $stmt->fetch();

  }

  public function insert_ordered_products($products)
  {
    $sql = "INSERT INTO `product_orders` (product_id, user_id,order_id,owner_id) VALUES(:product_id, :user_id,:order_id,:owner_id)";
    $stmt =$this->conn->prepare($sql);
    $stmt->bindParam(':product_id',$products["product_id"]);
    $stmt->bindParam(':user_id',$products["user_id"]);
    $stmt->bindParam(':order_id',$products["order_id"]);
    $stmt->bindParam(':owner_id',$products["owner_id"]);
    $stmt->execute();
    echo 'great';
    return;
  }

  public function get_orders($id)
  {
    $sql = "SELECT * FROM `product_orders` INNER JOIN `users` ON product_orders.user_id = users.id INNER JOIN `products`ON product_orders.product_id = products.id INNER JOIN `orders`ON product_orders.order_id = orders.id  WHERE product_orders.user_id = :id";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':id',$id);
    $stmt->execute();
    return $stmt->fetchAll();

  }

  
  
}