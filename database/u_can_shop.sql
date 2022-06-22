-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220621.da7c7a84e1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 22, 2022 at 04:54 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u_can_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `image`) VALUES
(1, 'Sport and Outdoors', 'All products related to sport & bicycles here', 'sport.webp'),
(2, 'Electronic & phone', 'All products related to Electronic and phones here', 'phone & electronic.webp'),
(3, 'Electronic & Laptop', 'All products related to Electronic and Laptop here', 'laptop&electronic.webp'),
(5, 'Shoes', 'All products realted to shoes & closes here', 'shoes.jpg'),
(6, 'Mens Watches & accessoirs', 'Mens Watches & accessoirs and electronic watches', 'watches.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `order_of_user_id` int(11) NOT NULL,
  `address` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `tel`, `country`, `city`, `order_of_user_id`, `address`) VALUES
(47, '938686628632', 'Morocco', 'safi', 31, 'smorocco'),
(48, '+1 (931) 614-7435', 'Obcaecati nemo id fu', 'Veritatis eius in qu', 48, 'Officia sint sint qu'),
(49, '+1 (131) 847-9036', 'Quia placeat sit vo', 'Perspiciatis numqua', 50, 'Saepe saepe cupidata'),
(50, '938686628632', 'Morocco', 'safi', 31, 'smorocco'),
(51, '+23765288678244', 'morco', 'safi', 51, 'safi'),
(52, '+23765288678244', 'morco', 'safi', 51, 'safi'),
(53, '+23765288678244', 'morco', 'safi', 51, 'safi'),
(54, '06666666666', 'Maroc', 'Safi', 51, 'safi jrayfat'),
(55, '06666666666', 'Maroc', 'Safi', 51, 'safi jrayfat'),
(56, '06666666666', 'Maroc', 'Safi', 51, 'safi jrayfat'),
(57, '06666666666', 'Maroc', 'Safi', 51, 'safi jrayfat'),
(58, '+1 (526) 567-5669', 'Iusto officia sed am', 'Iste sit et iusto q', 53, 'Eius ea duis alias q'),
(59, '06666666666', 'Morocco', 'Safi', 55, 'Youcode Safi'),
(60, '06666666666', 'Morocco', 'Safi', 55, 'Youcode Safi'),
(61, '06666666666', 'Morocco', 'Safi', 55, 'Youcode Safi'),
(62, '0652525525', 'Morocco', 'safi', 57, 'maroc safi NT232,Maroc'),
(63, '0652525525', 'Morocco', 'safi', 57, 'maroc safi NT232,Maroc'),
(64, '0652525525', 'Morocco', 'safi', 57, 'maroc safi NT232,Maroc'),
(65, '0652525525', 'Morocco', 'safi', 57, 'maroc safi NT232,Maroc'),
(66, '0666666666', 'Safi', 'safi', 57, 'Maroc'),
(67, '+1 (693) 936-2803', 'Ducimus autem est v', 'Consequatur volupta', 58, 'Illo harum qui rerum');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `product_name` varchar(500) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` float NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `owner_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `number_orders` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `description`, `category_id`, `price`, `status`, `owner_id`, `quantity`, `number_orders`) VALUES
(42, 'Smart Watch', 'this is nice  for sport and protected from water', 1, 199.5, 1, 20, 96, 0),
(43, 'Back Smart Watch ', 'This a brand high equality watch ', 1, 219, 1, 20, 9, 2),
(46, 'Gaming Mousse', 'gaming mousse high quality , a quick react time when in gaming ', 1, 100, 1, 20, 5, 0),
(47, 'bicycle ', 'nice byc check out and tell your friends abuout is qgek ', 1, 120, 1, 20, 12, 0),
(49, 'Ipad gaming', 'Voluptatem eveniet Voluptatem eveniet Voluptatem eveniet Voluptatem ', 1, 400, 1, 20, 10, 0),
(52, 'Skybroard', 'sky board with a great quality ', 1, 100, 1, 32, 7, 0),
(53, 'Macaulay Rhodes', 'Itaque laborum asper', 1, 638, 1, 32, 741, 0),
(54, 'Router', 'this a route internet wifi is free proce hahah', 1, 21, 1, 35, 27, 0),
(55, 'louder', 'louder louder louder louder ', 2, 123, 1, 20, 8, 0),
(56, 'earphones', 'earCOMISO Wireless Earbuds, True Wireless in Ear Bluetooth 5.0 with Microphone, Deep Bass,', 2, 20, 1, 42, 10, 0),
(57, 'earphone black', 'COMISO Wireless Earbuds, True Wireless in Ear Bluetooth 5.0 with Microphone, Deep Bass,', 2, 100, 1, 42, 0, 0),
(59, 'Trainers', 'this is oussama shoes a make a good price for you', 1, 1000, 1, 48, 0, 0),
(60, 'BIKE BLACK', 'Blanditiis dicta delBlanditiis dicta delBlanditiis dicta del', 1, 150, 1, 48, 45, 0),
(62, 'Laptop HA479 Lite', 'Acer Chromebook 314, Intel Celeron N4000, 14\" Full HD Display, 4GB LPDDR4, 64GB eMMC, Gigabit WiFi, ', 3, 350, 1, 52, 18, 5),
(63, 'Addidas shoes', 'adidas Men\'s Lite Racer Adapt 4.0 Running Shoes', 5, 44, 1, 53, 9, 0),
(65, 'Nike Runing Shoes', 'Nike Men\'s Revolution 5 Wide Running Shoe', 5, 32, 1, 53, 10, 0),
(66, 'Skechers Shoes', 'Skechers Men\'s Cessnock Food Service Shoe', 1, 42, 1, 53, 39, 0),
(73, 'T-shirt', 'T-shirt with a high equilty we make a good price for you', 5, 12, 1, 53, 14, 22),
(74, 'Watches Rolex', 'this is Rolex high quality you have seen we make a good price for you', 1, 5000, 1, 53, 8, 8),
(75, 'Mens Watches ', 'Mens Watches Chronograph Stainless Steel Waterproof Date Analog Quartz Watch Business Wrist Watches ', 1, 200, 1, 56, 19, 11),
(76, 'GOLDEN HOUR', 'GOLDEN HOUR Fashion Business Mens  Steel Waterproof Chronograph Quartz Watch for Men, Auto Date', 6, 299, 1, 56, 21, 0),
(77, 'CRRJU Men\'s Fashion', 'CRRJU Men\'s Fashion Stainless Steel Watches Date Waterproof Chronograph Wristwatches', 6, 199, 1, 56, 22, 0),
(78, 'CRRJU Men', 'CRRJU Men\'s Fashion Stainless Steel Watches Date Waterproof Chronograph Wristwatches', 6, 999, 1, 56, 1, 4),
(81, 'Sport Military Watches', 'Sport Military Watches Sport Military Watches Sport Military Watches Sport Military Watches ', 6, 209, 1, 56, 17, 4),
(82, 'Apple iPhone 13 Mini', 'Apple iPhone 13 Mini, 128GB, Red - Unlocked (Renewed)', 2, 100, 1, 56, 9, 0),
(83, 'watch', 'Ullamco incidunt bl', 3, 785, 1, 56, 590, 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `product_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `path`, `product_id`) VALUES
(6, 'Mibro-A1-Smartwatch-1-28---HD-Touch-Screen-BT5-0-Black-501275-0._w500_p1_.png', 42),
(7, 'lemfo-lemd-smartwatch---earbuds-set-red-d252f6-1649417217019.png', 43),
(10, 'razer-deathadder-essential-optical-gaming-mouse-black-aa9d23-1638169302886._w280_p1_Pixcleaner.png', 46),
(11, 'NAVEE--N65-10in-48V-500W-65KM-Mileage-Electric-Scooter-471545-3._w280_p1_Pixcleaner.png', 47),
(13, 'rg351p-anbernic-retro-game-console-black-1611123134436._w280_p1_Pixcleaner.png', 49),
(16, 'syl-08-electric-skateboard-off-road-with-remote-control-black-1598514023841._w280_p1_Pixcleaner.png', 52),
(17, '1 (2)Pixcleaner.png', 53),
(18, 'TANIX-TX6S-Allwinner-H616-4GB-32GB-TV-Box-891088-._w280_p1_Pixcleaner.png', 54),
(19, 'tronsmart-element-t6-plus-bluetooth-speaker-black-1574132869322._w280_p1_Pixcleaner.png', 55),
(20, 'compare_airpods_3rd_gen__dyuzfy04ht0m_large.png', 56),
(21, 'Apollo-Air-Plus-Qualcomm-QCC3046-ANC-TWS-Earphones-Black-459844-0._w280_p1_Pixcleaner.png', 57),
(23, 'shoes.jpg', 59),
(24, 'sport.webp', 60),
(26, 'laptop&electronic.webp', 62),
(27, '81cuTtPn6L_AC_UL320_-transformed.png', 63),
(29, '71pebHVL_AC_UL320_-transformed.png', 65),
(30, '81VXmKLHeL_AC_UL320_-transformed.png', 66),
(32, 'A1Qw0o08LL_AC_UL320_-transformed.png', 73),
(33, '71rhVkUv5zL_AC_UL320_-transformed.png', 73),
(34, '61R1vTAFL_AC_UL320_-transformed.png', 73),
(35, '91WvnZ1g40L_AC_UL320_-transformed.png', 74),
(36, '61tapuLwkNL_AC_UL320_-transformed.png', 74),
(37, '816p5ZS1NoL_AC_UL320_-transformed.png', 74),
(38, 'watches.jpg', 75),
(39, '71WdQbhrCoL._AC_SY741._SX._UX._SY._UY_.jpg', 75),
(40, '71VjM5LOeYL._AC_UX679_ (1).jpg', 75),
(41, '71ad8b9ibOL._AC_UX679_.jpg', 76),
(42, '61Z8mbhC+-L._AC_UX679_.jpg', 76),
(43, '61lg5RzIzPL._AC_UX679_.jpg', 76),
(44, '71hCBq010-L._AC_UX679_.jpg', 77),
(45, '710oAB0K4cL._AC_UX679_.jpg', 77),
(46, '71MzkFE3rGL._AC_UX679_.jpg', 77),
(47, '61bmR1xfq+L._AC_UL1000_.jpg', 78),
(48, '71wI70uiFZL._AC_SX679._SX._UX._SY._UY_.jpg', 78),
(49, '71KJRaUAT6L._AC_SX679._SX._UX._SY._UY_.jpg', 78),
(54, '71XFTuHLDNL._AC_UX679_.jpg', 81),
(55, '51oERoFIzuL.jpg', 81),
(56, '61xq9DGfjZL._AC_UX679_.jpg', 81),
(57, '31jguHaagqL._AC_US200_.jpg', 82),
(58, '61thdjmfHcL._AC_SX522_.jpg', 82),
(59, '712aIQLVl9L._AC_SX522_.jpg', 82),
(60, '61ig5iglbmL._AC_UX679_.jpg', 83),
(61, '71Zf5+GFx6L._AC_UX679_.jpg', 83),
(62, '81Vd4yw5yML._AC_UX679_.jpg', 83);

-- --------------------------------------------------------

--
-- Table structure for table `product_orders`
--

CREATE TABLE `product_orders` (
  `id` int(11) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `transaction_id` int(11) NOT NULL,
  `quantity_ordered_products` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_orders`
--

INSERT INTO `product_orders` (`id`, `product_id`, `user_id`, `order_id`, `owner_id`, `transaction_id`, `quantity_ordered_products`, `created_at`) VALUES
(37, 49, 20, 47, 31, 26, 3, '2022-06-15 20:09:13'),
(38, 55, 20, 48, 48, 27, 4, '2022-06-15 20:09:13'),
(39, 57, 42, 49, 50, 28, 4, '2022-06-15 20:09:13'),
(40, 57, 42, 50, 31, 29, 5, '2022-06-15 20:09:13'),
(41, 59, 48, 50, 31, 30, 3, '2022-06-15 20:09:13'),
(42, 59, 48, 51, 51, 31, 2, '2022-06-15 20:09:13'),
(43, 59, 48, 52, 51, 32, 5, '2022-06-15 20:09:13'),
(46, 66, 53, 55, 51, 35, 3, '2022-06-15 20:37:53'),
(47, 63, 53, 56, 51, 36, 3, '2022-06-15 20:38:18'),
(48, 65, 53, 57, 51, 37, 5, '2022-06-15 20:55:07'),
(49, 73, 53, 58, 53, 38, 3, '2022-06-16 13:32:55'),
(50, 74, 53, 59, 55, 39, 4, '2022-06-16 14:06:59'),
(51, 62, 52, 60, 55, 40, 2, '2022-06-16 16:20:57'),
(53, 73, 53, 61, 55, 42, 4, '2022-06-16 16:22:11'),
(54, 62, 52, 61, 55, 43, 3, '2022-06-16 16:22:11'),
(55, 75, 56, 62, 57, 44, 3, '2022-06-19 01:34:07'),
(56, 75, 56, 63, 57, 45, 5, '2022-06-19 01:35:17'),
(57, 75, 56, 64, 57, 46, 1, '2022-06-19 01:36:50'),
(58, 75, 56, 65, 57, 47, 2, '2022-06-19 01:37:38'),
(59, 81, 56, 66, 57, 48, 4, '2022-06-22 01:51:50'),
(60, 78, 56, 67, 58, 49, 4, '2022-06-22 09:48:16'),
(61, 43, 20, 67, 58, 50, 2, '2022-06-22 09:48:16');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `from_user_id` int(11) NOT NULL,
  `to_user_id` int(11) NOT NULL,
  `amount` float NOT NULL,
  `order_id` int(11) NOT NULL,
  `store_amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `from_user_id`, `to_user_id`, `amount`, `order_id`, `store_amount`) VALUES
(26, 31, 20, 1140, 47, 70),
(27, 48, 20, 467.4, 48, 34.6),
(28, 50, 42, 380, 49, 30),
(29, 31, 42, 475, 50, 35),
(30, 31, 48, 2850, 50, 160),
(31, 51, 48, 1900, 51, 110),
(32, 51, 48, 4750, 52, 260),
(33, 51, 52, 997.5, 53, 62.5),
(34, 51, 52, 5985, 54, 325),
(35, 51, 53, 119.7, 55, 16.3),
(36, 51, 53, 125.4, 56, 16.6),
(37, 51, 53, 152, 57, 18),
(38, 53, 53, 34.2, 58, 11.8),
(39, 55, 53, 19000, 59, 1010),
(40, 55, 52, 665, 60, 45),
(41, 55, 53, 354.35, 60, 28.65),
(42, 55, 53, 45.6, 61, 12.4),
(43, 55, 52, 997.5, 61, 62.5),
(44, 57, 56, 570, 62, 40),
(45, 57, 56, 950, 63, 60),
(46, 57, 56, 190, 64, 20),
(47, 57, 56, 380, 65, 30),
(48, 57, 56, 794.2, 66, 51.8),
(49, 58, 56, 3796.2, 67, 209.8),
(50, 58, 20, 416.1, 67, 31.9);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(7) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_photo_path` varchar(255) NOT NULL DEFAULT 'default_profile.png',
  `role` varchar(20) NOT NULL DEFAULT 'user',
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `profile_photo_path`, `role`, `created_at`) VALUES
(1, 'Mohammed', 'amine', 'mohammed@gmail.com', '1234', '', 'user', '2022-06-15 13:50:04'),
(2, 'Mohammed', 'amine', 'houssam@gmail.com', '$2y$10$Zlj1BZsrZoJx4DqqlSYgFu/5Lp9cc1gE5ze.eLY3oUK4V9UyeUo6u', '', 'user', '2022-06-15 13:50:04'),
(3, 'Abdelmjaid', 'Youchi', 'majid@gmail.com', '$2y$10$p.Rpekyc6Y9BZHQAvnfk.OUIrOg/zYSZhVDDzlDT5/P2jB1IBCELO', '', 'user', '2022-06-15 13:50:04'),
(4, 'Abdelmjaid', 'Youchi', 'majidA@gmail.com', '$2y$10$sJHpp1QCj.0xKKupZ4f.oeGs7FFMilxCYDzZBUd3eIXKxtjf9y/O2', '', 'user', '2022-06-15 13:50:04'),
(5, 'Abdelmjaid', 'Youchi', 'mohhammed@gmail.com', '$2y$10$0jRyw8rZl4wslR3JYzE4zuqqxj6f5AcPUAGIIuX.JL2PVDkY1z21a', '', 'user', '2022-06-15 13:50:04'),
(6, 'Abdelmjaid', 'Youchi', 'test@gmail.com', '$2y$10$H.kZAfjoNxHGxSHr7k0kbegUl927T1QKeH6HChBJeUuuaEb3FPU8S', '', 'user', '2022-06-15 13:50:04'),
(7, 'Abdelmjaid', 'Youchi', 'test@gmail.coms', '$2y$10$0qPsb00y9xgWpp9AVAungut0/kIBP6MTtcSezzvqcJlsAaVGO2B8S', '', 'user', '2022-06-15 13:50:04'),
(8, 'Quasi et ea sed blan', 'Omnis eu aut occaeca', 'sanoby@mailinator.com', '$2y$10$5tzUrRlVQUwYbWpe6RTCkO2QKLewVrlSJ96EjhzSz4.ElY4DsYAvK', '', 'user', '2022-06-15 13:50:04'),
(9, 'Exercitation ipsum ', 'Ipsum commodi corrup', 'gyqoza@mailinator.com', '$2y$10$jLVTbt4JSjQV8D7ATsoQKeTZyLn3wQcEV/vVQIzQxMT2T/Gj7Tp.a', '', 'user', '2022-06-15 13:50:04'),
(10, 'Eaque atque consequa', 'Dolorum sed necessit', 'elayachiabdel2001@gmail.com', '$2y$10$AgHVVyWOPlWUHib.R4Mq4O0l8YwwTDN5785HK2nlGCstHXZKrS4n2', '', 'user', '2022-06-15 13:50:04'),
(11, 'Eaque atque consequa', 'Dolorum sed necessit', 'elayachabdel2001@gmail.com', '$2y$10$lwDeHbCzTk87Q4utgjyWI..yIpFvEbsih/AqpjoW33uHzwGZamC.K', '', 'user', '2022-06-15 13:50:04'),
(12, 'Molestias vel volupt', 'Earum et laborum To', 'pipuxepi@mailinator.com', '$2y$10$yE4vYmOWH90BPfekzlbVnOqZHUGX0kvs4v7oHdRa.Ca155uck.fRq', '', 'user', '2022-06-15 13:50:04'),
(13, 'Reprehenderit at pr', 'Debitis repudiandae ', 'fixi@mailinator.com', '$2y$10$qR86RfdeThPuTiwUXrv.f.a5Rp6m40apMItX1e5sYOA2OAIfQuLlS', '', 'user', '2022-06-15 13:50:04'),
(14, 'Similique anim rerum', 'Aut molestias tempor', 'bixusahi@mailinator.com', '$2y$10$Ofs0P9NIjuf6YQFfLDyfOuvUll7Aq6lwqBtVp0gW.M6nO2Gj0wL46', '', 'user', '2022-06-15 13:50:04'),
(15, 'Minus ut id eaque ex', 'Molestias modi dolor', 'hedojyq@mailinator.com', '$2y$10$0tlNt2kC9yq6Sn.RQRRbT.sWgy6w2uCom6XoL5X9QpAebVfx4I7nK', '', 'user', '2022-06-15 13:50:04'),
(16, 'Odit cupidatat ea re', 'Itaque commodo et al', 'qapodecyjy@mailinator.com', '$2y$10$3naD7S02BEGFHwgz5pGbNer/wqYEYxa5WbtwAG3hRRRyaBeXUmpqq', '', 'user', '2022-06-15 13:50:04'),
(17, 'Eligendi et in cumqu', 'Dolor sit illum Na', 'mecitalep@mailinator.com', '$2y$10$zRbuP6Wq1m07g4epID908eHolpSwtVq00Wzm.KtnS5mEjxgVuWyAa', '', 'user', '2022-06-15 13:50:04'),
(18, 'Aperiam aute molesti', 'Dolor anim explicabo', 'elayachiabde2001@gmail.com', '$2y$10$GYL4/0eoh1XzURYRu8Bd5OvyvAEIDkA1QR.hYMLce6mdHMLAikFee', '', 'user', '2022-06-15 13:50:04'),
(19, 'Quasi ut expedita il', 'Quas ut consectetur ', 'test@test.com', '$2y$10$Cv5Agrs9ijRVv.l0C2BqNOX3xU2o3qlhGG6oZm2TlJ/xJrbsxzDBe', '', 'user', '2022-06-15 13:50:04'),
(20, 'youness', 'Austin', 'xycob@mailinator.com', '$2y$10$WJuW6.Q/zhNA99grO4n4feMZnp9nOZCxOyFZpzmaH1m1iWxLNTFPi', 'pexels-photo-2690323.jpeg', 'user', '2022-06-15 13:50:04'),
(21, 'Accusantium qui quod', 'Aut in impedit veni', 'test2@test.test', '$2y$10$B8RfnGG4qqVDRxztNFwX.ugCe7Mmi4lVKq7qkvm9Zt9pvD43iznVe', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(22, 'Impedit veritatis e', 'Dolorum dolore quis ', 'domana@mailinator.com', '$2y$10$DfjY7XMdeKzXy.oQv6.Iu.xudsTH3JIN.MoCtUzY2B1VL0OdbOqX6', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(23, 'Possimus cupidatat ', 'Nisi ut nihil pariat', 'cucuf@mailinator.com', '$2y$10$qFVUKBiC8aBPphgphXJoJ.Wb6s5LqyHSl4YXvKCHChBsJ.JdcMh5O', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(24, 'Anim irure ad aliqua', 'Magnam at voluptatem', 'vygyte@mailinator.com', '$2y$10$lQ6bYhei/rUHDMMdS/8Kfe.AuvatmRzQvxDLwkyjwKwG1e3vkJJYa', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(25, 'Cumque elit maxime ', 'Corrupti ea eos aut', 'tofyvavaha@mailinator.com', '$2y$10$zZXjsf7XE9PIF8SMD6QaZ.33HzV4Oiq/9guLMhJy92qQgA6RzfKlW', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(26, 'Praesentium ut harum', 'Eius deserunt veniam', 'qarajaxuwy@mailinator.com', '$2y$10$e4wLNXFAMG4uGHStvVom.uxlW140TlmWLO5Arfx3wpxvG9GsAf616', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(27, 'Minim in mollitia au', 'Accusamus veniam fu', 'fateqad@mailinator.com', '$2y$10$Bca8Zw5FaWu5dxcnbaPaquCk/b/ycGz2WOK9H9.dv/I//lqgX2GJK', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(28, 'Obcaecati officia in', 'Consequuntur enim eu', 'dicime@mailinator.com', '$2y$10$Uo7K0XimF8MRM9VE47/ao.Ic.6Ik7MqdBworbkiTOLbwsZb/mJqtO', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(29, 'ABDELMAJID', 'EL AYACHI', 'test1@test.testd', '$2y$10$kqyM6GmGnz08y7orTtNduekh2PPP0ScftvEQgcXf8W/Pg6tH3vUG6', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(30, 'oussama', 'ENNADAFY', 'ennadafy@gmail.com', '$2y$10$teA26gmIBEpnoSpoj2uND.pyuTx./BYaLAJTGsr48mSfTRhRZb/HG', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(31, 'Abdelmajid', 'EL AYACHI', 'elayachiabdel@gmail.com', '$2y$10$nbt8TBD31wajZdLd6auipOHydOkFbSj1JStBV.wVUd2Tf07Cak4wu', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(32, 'mohammed', 'amine', 'mohammedamine@test.test', '$2y$10$TgPrizut9q8RcFISEfJVx.EzzcYTkkbfLe.dXx6MBvdFSWTNJyOpi', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(33, 'Anas', 'Tagnawti', 'anas@anas.anas', '$2y$10$Nd4ZwH5/b9HyRmBiS8rNgeNTizSDFZ8QZAeT7IphY05LPagr3.uYS', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(34, 'younes ', 'younes', 'younes@younes.younes', '$2y$10$AymZZrEiY6LFIm.fLDkMW.rL55WfljDFIUyEBe2w6xA/r06YHUUq6', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(35, 'seller1', 'seller1', 'seller1@gmail.com', '$2y$10$dzt3bsmnBkPzxXdQuIp3cuVT6ZglR2FMEoOMHC9z6dyUPMPm0Jh06', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(36, 'ABDELMAJID', 'EL AYACHI', 'abdel@gmail.com', '$2y$10$yB7.ZDFTNB.1v480rJNPmuwoQBCD9M3vrFd7Gb3/t1xt5pWq2NqKu', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(37, 'amine', 'amine', 'amine.amine@gmail.com', '$2y$10$S0ryDSgglCwiYHyH1fTsg.DFuxjZEIsE5ot6x29gU6YO1tyRbIO8K', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(38, 'amine', 'amine', 'amine@a.com', '$2y$10$L2DlByQKVIARys2oM/0YjeLtw5s4s1/jk1D8a1DG1ySvMG7YnM9e', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(39, 'ABDELMAJID', 'EL AYACHI', 'testT@test.test', '$2y$10$p.CWryQoM8Mu8I2OhMjYQuLtdyVqJUY7.KJr1qfwDXsu5ynmKQ1V6', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(40, 'Sarah', 'YIU', 'abdel@abdel2.com', '$2y$10$Tqer0cFNwJhE0trmMFBNF.LC93sMjXptvJAK2P2d42kAgT0sJcb5i', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(41, 'Jillian', 'Ford', 'pize@mailinator.com', '$2y$10$bboU7zGZlUI5OkCosVYVAuzIYFF8SFRmZ0jLAiJwEldYCtCAs0dka', 'Instagram-2000-x-2000-1 (1).png', 'user', '2022-06-15 13:50:04'),
(42, 'Sarah', 'Ahmedi', 'rimexynuv@mailinator.com', '$2y$10$uvu4/I7x4Kjmqnr1Vh3D1ONuYtVdyZh1zElF40yjsVYrxnYremlyq', 'pexels-photo-2690323.jpeg', 'admin', '2022-06-15 13:50:04'),
(43, 'Nisi dolore rerum a ', 'Velit aut do nostrud', 'qeno@mailinator.com', '$2y$10$/GNR3HsHkHpZqBaJNHoWZurTcg654R93.jMi/V0rDJ8/tEZ9h6Mga', 'pexels-photo-2690323.jpeg', 'user', '2022-06-15 13:50:04'),
(44, 'Moad', 'Moad', 'bipahaxeny@mailinator.com', '$2y$10$ggjXO/MYx6bKnlZVaK45DuKgnEzpMiY3rq9JBmPQmVGoh0fUqaZhi', '2021-Annual-Report-Image.png', 'seller', '2022-06-15 13:50:04'),
(45, 'Esse eaque et sit a', 'Mollit laborum Volu', 'mepunyza@mailinator.com', '$2y$10$JH3icnb0G2pt6jrL1sknJODvz.EOe12NGlffrF0CQEmoNl3rr1E4S', 'pexels-photo-2690323.jpeg', 'seller', '2022-06-15 13:50:04'),
(46, 'abdelhak', 'abdelhak', 'abdelhak@abdelhak.com', '$2y$10$fknwn8tMBVlh6zSVYOE7u.wZPdp/JoBhN6qDPOcfgpBeXXw5MqG8.', 'pexels-photo-2690323.jpeg', 'seller', '2022-06-15 13:50:04'),
(47, 'Mohammed', 'amine', 'mohammed@mohammed.com', '$2y$10$aHwCzgsihvrM0PTujiUZ2uDh2o.OU.TaM8Zb2v.5qnU8LeBSieauO', 'moha.jpg', 'seller', '2022-06-15 13:50:04'),
(48, 'Oussama', 'Ennadafy', 'oussama.ennadafy@gmail.com', '$2y$10$1uCebDhuo1FJiQAoDGXSkurJuvL0XN/MbpWiJFiy4EworZM968iGK', '1654180838524.jpg', 'seller', '2022-06-15 13:50:04'),
(49, 'test', 'test ', 'buytest@gamil.com', '$2y$10$kmS2qFszXRvSVMXZBpxgBeA7J0b4ILw2ztJAVVLIec3DEG35rOhfu', 'default_profile.png', 'user', '2022-06-15 13:50:04'),
(50, 'Optio opti', 'Officia velit ', 'myrib@mailinator.com', '$2y$10$gVjvTV6sbFgCd1LHbRbXmu8bRRhmhF1pTGw5UXd7UFAts69wMX.s.', 'imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg', 'seller', '2022-06-15 13:50:04'),
(51, 'Oussama ', 'Bounou', 'test@test.ts', '$2y$10$4nExznLA3IjYTE3arBcgk.yyQ6zvAa6Bc/fB3Bx2s8HHaZyN.4hy2', '1654180838524.jpg', 'user', '2022-06-15 13:50:04'),
(52, 'Mohammed Amine', 'LAHMAMI', 'mohammedamine@gmail.com', '$2y$10$03ZTh2jOGPa3B3zrsQms/eik/npFOv3g/0NGelGK94o/YRBt4hPom', 'moha.jpg', 'seller', '2022-06-15 14:49:34'),
(53, 'Max', 'maximailian', 'max@mailinator.com', '$2y$10$CkuJtqY55iFunUMTqb7J0O9gUQTSnm5It6kH8ui.LmScaiZnrRClW', 'robin-mikalsen-Z2qdxxXszU0-unsplash.jpg', 'seller', '2022-06-10 15:57:49'),
(54, 'mohammed', 'mohammed', 'mohammed12@gmail.com', '$2y$10$yyMCa/ZxJac0x2ymvnuw9uinE1AaAx04bUj4xd4Sx3v7APUuHDz8.', 'imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg', 'seller', '2022-06-15 17:50:03'),
(55, 'Youssef', 'Wakhidi', 'youssef@gmail.com', '$2y$10$xWmmX7XY30dMezUhaCpone1Eb42Sb57aL5jeUpPU.4maMxulQVvqG', 'robin-mikalsen-Z2qdxxXszU0-unsplash.jpg', 'user', '2022-06-16 13:58:53'),
(56, 'ABDELMAJID', 'EL AYACHI', 'elayachi@mshop.com', '$2y$10$NOj7HhLJtcgzwJObvhXbLuWN09xiFLcM5i8iYZTpeSpGdc2VVTdh6', '16558195821650980285351.jpg', 'seller', '2022-06-19 00:50:07'),
(57, 'Mohammed Amine', 'buyer', 'abdel.buyer@gmail.com', '$2y$10$WWWA4tDvSIPBfrPoXLAv/OxfiLxWV00eLswe9cMOXhN1Hi2wRErrK', '1655858168moha1.jpg', 'user', '2022-06-19 01:30:49'),
(58, 'Aut distinctio Quis', 'Possimus anim repud', 'elay@gmail.com', '$2y$10$SYVCDTo1YtUyK/YKdTopY.CjTmq/qmQf8EN9yqhRmp7829HOKukKe', 'default_profile.png', 'user', '2022-06-22 09:45:33'),
(59, 'Molestias ratione qu', 'Rem possimus anim a', 'vapu@mailinator.com', '$2y$10$3MdH9KuGPcFET7lBckrBa.LQir48BiHEnWxvG.COxckMBdAIN4Kri', 'default_profile.png', 'user', '2022-06-22 10:06:59'),
(60, 'Consequatur eaque ne', 'Repudiandae autem ni', 'kupi@mailinator.com', '$2y$10$13VfCkPbzZ/QX6W6ey7ebODGtXvXaISAEEf/f1Z/qfcN7Lc4.Byny', '1655895382712aIQLVl9L._AC_SX522_.jpg', 'user', '2022-06-22 10:07:23');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id_wishlist` int(11) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`id_wishlist`, `product_id`, `user_id`) VALUES
(33, 74, 53),
(34, 73, 53),
(40, 54, 53),
(41, 76, 56),
(44, 43, 56);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_of_user_id` (`order_of_user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `owner_id` (`owner_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_orders`
--
ALTER TABLE `product_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `owner_id` (`owner_id`),
  ADD KEY `transaction_id` (`transaction_id`),
  ADD KEY `product_orders_ibfk_1` (`product_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `from_user_id` (`from_user_id`),
  ADD KEY `to_user_id` (`to_user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id_wishlist`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `product_orders`
--
ALTER TABLE `product_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id_wishlist` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`order_of_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `owner_id` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product_orders`
--
ALTER TABLE `product_orders`
  ADD CONSTRAINT `product_orders_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `product_orders_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_orders_ibfk_3` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_orders_ibfk_4` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `product_orders_ibfk_5` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`id`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`from_user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`to_user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



