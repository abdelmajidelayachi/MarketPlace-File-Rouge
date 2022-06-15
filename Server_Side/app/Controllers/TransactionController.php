<?php
class TransactionController
{

  public function getTransaction($id)
  {
    $transaction = new Transaction();
    $transactions = $transaction->get_order_transactions($id);
    foreach ($transactions as $key => $value) {
      $product_images = new Product_images();
      $images = $product_images->get_product_images($value['product_id']);
      $category = new Category();
      $category_name = $category->select_category($value['category_id']);
      $transactions[$key]['category'] = $category_name;
      $transactions[$key]['images'] = $images;
    }
    echo json_encode($transactions);
    return;
  }


}