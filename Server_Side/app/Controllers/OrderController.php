<?php
class OrderController
{
  public function add_order()
  {
    $data = [
      'order_of_user_id' => $_POST['orderOf'],
      'tel' => $_POST['tel'],
      'address' => $_POST['address'],
      'city' => $_POST['city'],
      'country' => $_POST['country'],
    ];
    $order = new Order();
    $order = $order->insert_order($data);
    
  }
}