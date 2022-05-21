<?php


class DB
{
    protected $db;
    public static function connect()
    {   
        try {
          $conn = new PDO('mysql:dbname=u_can_shop;host=localhost','root','');
          // set the PDO error mode to exception
          $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          return $conn;
          // echo "Connected successfully";
        } catch(PDOException $e) {
          echo "Connection failed: " . $e->getMessage();
        }
    }
}