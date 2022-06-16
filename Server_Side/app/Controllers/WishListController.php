<?php

class WishListController
{

  // add_to_wishlist
  public function add_to_wishlist()
  {
    $data = [
      'user_id' => $_POST['user_id'],
      'product_id' => $_POST['user_id']
    ];
    $wishlist = new WishList();
    


  }
}
