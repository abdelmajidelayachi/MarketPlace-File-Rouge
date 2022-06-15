<?php


class AnalyticController
{
  // start of the class
  //get number of users  and amount of money

  public function get_statistics($id)
  {
    $user = new Analytic();
    $users = $user->countTotalUsers($id);
    $total_amount = $user->getTotalAmount($id);
    $store_create_at = $user->getStoreCreateAt($id);
    //make created_at readable for the user difference between created_at and now
    $created_at = new DateTime($store_create_at['created_at']);
    $now = new DateTime();
    $diff = $created_at->diff($now);
    $days = $diff->days + $diff->y * 365+$diff->m*30;
    $days = $days + 1;
    $data['data']['users']=$users;
    $data['data']['total_amount']=$total_amount;
    $data['data']['store_create_at']=$days;
    echo json_encode($data);
    return;
  }
}