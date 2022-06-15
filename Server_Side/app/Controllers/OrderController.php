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
    ];

    $order = new Order();
    $pay = new Transaction();
    $product_class=new Product();

    $order_id = $order->insert_order($data);
    $order_id = $order_id[0];
    foreach($data["products"] as $product )
    {
        $prod= get_object_vars(get_object_vars($product)["product"]);
        $quantity = get_object_vars($product)["quantity"];
        $prod_sub_price_store= $prod["price"]*0.95*$quantity;
        $prod_sub_price_user = $prod["price"]*0.05*$quantity+10;

      $dat = ["from_user_id"=>$data['order_of_user_id'],'to_user_id'=>$prod['owner_id'],'order_id'=>$order_id,'amount'=>$prod_sub_price_store,'store_amount'=>$prod_sub_price_user];
      $id_payment=$pay->insert_transaction($dat);
      $dt =[
        "product_id"=>$prod['id'],
        "user_id"=>$prod['owner_id'],
        "order_id"=>$order_id,
        "owner_id"=>$data['order_of_user_id'],
        'transaction_id'=>$id_payment['id'],
        "quantity_ordered_products"=>$quantity,

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
      $category = new Category();
      $category_name = $category->select_category($value['category_id']);
      $orders[$key]['category'] = $category_name;
      $orders[$key]['images'] = $images;
    }
    $json = json_encode($orders);
    echo $json;
    return;
  }



}