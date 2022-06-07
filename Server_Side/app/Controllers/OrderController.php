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
      'amount'=>$_POST['amount'],
      'products' => json_decode($_POST['products']),
      'store_user_id' => $_POST['store_user_id']
    ];

    // $products=$_POST['products'];
    $order = new Order();
    $order_id = $order->insert_order($data);
    $order_id = $order_id[0];
    $pay = new Transaction();
    $dat = ["from_user_id"=>$data['order_of_user_id'],'to_user_id'=>31,'order_id'=>$order_id,'amount'=>$data['amount']];
    $pay->insert_transaction($dat);
    $product_class=new Product();
    foreach($data["products"] as $product )
    {
      $prod= get_object_vars( get_object_vars($product)["product"]);
      $quantity = get_object_vars($product)["quantity"];
      $dt =[
        "product_id"=>$prod['id'],
        "user_id"=>$prod['owner_id'],
        "order_id"=>$order_id,
        "owner_id"=>$data['order_of_user_id'],
      ];
      $order->insert_ordered_products($dt);
      $info=["id"=>$prod['id'],"quantity"=>$quantity];
      $product_class->sub_buying_products($info);
    }
   

    echo "done";
    return; 
  }
  public function get_orders($id)
  {
    $order = new Order();
    $orders = $order->get_orders($id);
    foreach ($orders as $key => $value) {
      $product_images = new Product_images();
      $images = $product_images->get_product_images($value['product_id']);
      $orders[$key]['images'] = $images;
    }
    $json = json_encode($orders);
    echo $json;
    return;
  }



}