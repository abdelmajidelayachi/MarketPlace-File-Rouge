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
      'products' => json_decode($_POST['products'])
    ];

    // $products=$_POST['products'];
    $order = new Order();
    $order_id = $order->insert_order($data);
    $order_id = $order_id[0];
    $product_class=new Product();
    foreach($data["products"] as $product )
    {
      $prod= get_object_vars( get_object_vars($product)["product"]);
      $quantity = get_object_vars($product)["quantity"];
      $dt =[
        "product_id"=>$prod['id'],
        "user_id"=>$prod['owner_id'],
        "order_id"=>$order_id,
      ];
      $order->insert_ordered_products($dt);
      $info=["id"=>$prod['id'],"quantity"=>$quantity];
      $product_class->sub_buying_products($info);
    }
    echo "done";
    return; 
  }
}