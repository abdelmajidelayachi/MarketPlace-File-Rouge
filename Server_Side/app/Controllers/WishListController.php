<?php

class WishListController
{

  // add_to_wishlist
  public function add_to_wishlist()
  {
    $data = [
      'user_id' => $_POST['user_id'],
      'product_id' => $_POST['product_id']
    ];
    // var_dump($data);
    $wishlist = new WishList();
    $select_existence = $wishlist->select_if_in_wishlist($data);
    if($select_existence){
      $wishlist = $wishlist->insert_wish_product($data);
      echo json_encode(['success'=>true,'message'=>'product added to wishlist']);
    }else {
      echo json_encode(['success'=>false,'message'=>'product are already exist']);
    }
    return;
  }

  public function get_wishlist($id)
  {
    $wishlist= new WishList();
    $product_list = $wishlist->select_list_product($id);
    foreach ($product_list as $key => $value) {
      $product_list[$key]['wish_product_id']=$value["id_wishlist"];
      $product_images = new Product_images();
      $images = $product_images->get_product_images($value['product_id']);
      $product_list[$key]['images'] = $images;
      $category = new Category();
      $product_list[$key]['category'] = $category->select_category($value['category_id']);
    }
    echo json_encode($product_list);
  }

  public function remove_from_wishlist($id)
  {
    $wishlist = new WishList();
    if($wishlist->delete_from_wishlist($id))
    {
      echo json_encode(['success'=>true,'product remove successfully from wishlist']);
    }
    else{
      echo json_encode(['success'=>false,'something went wrong!']);
    }
  }
}
