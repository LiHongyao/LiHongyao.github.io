CREATE DATABASE  IF NOT EXISTS `SHOPStore` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `SHOPStore`;
-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: localhost    Database: SHOPStore
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `commodities`
--

DROP TABLE IF EXISTS `commodities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commodities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgUrl` text,
  `title` text,
  `des` text,
  `stock` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `kind` text,
  `sale` int(11) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commodities`
--

LOCK TABLES `commodities` WRITE;
/*!40000 ALTER TABLE `commodities` DISABLE KEYS */;
INSERT INTO `commodities` VALUES (1,'clothes-1','LeBron','男子全长拉链开襟篮球连帽衫',345,749,'clothes',1,'白色、黑色、绿色','S、M、L'),(2,'clothes-2','Nike Sportswear Swoosh','男子夹克',200,699,'clothes',0,'白色、黑色、绿色、蓝色','S、M、L'),(3,'clothes-3','NikeCourt Slam','男子双面穿网球夹克',88,499,'clothes',0,'白色、黑色、绿色','S、M、L'),(4,'clothes-4','Nike AeroLoft ','男子跑步夹克',145,1899,'clothes',0,'白色、红色、绿色','S、M、L'),(5,'clothes-5','Jordan Legacy AJ4','Lightweight 男子夹克',33,1099,'clothes',0,'白色、黑色、绿色','S、M、L'),(6,'clothes-6','巴黎圣日耳曼','Flight Suit 男子夹克',315,1099,'clothes',0,'白色、灰色、绿色','S、M、L'),(7,'pants-1','Nike Sportswear Tech Pack','男子梭织长裤',276,899,'pants',1,'白色、黑色、绿色','S、M、L'),(8,'pants-2','Jordan Legacy AJ4','男子长裤',146,599,'pants',0,'白色、黑色、紫色','S、M、L'),(9,'pants-3','Nike Sportswear','男子梭织长裤',78,599,'pants',0,'白色、黑色、绿色','S、M、L'),(10,'pants-4','Nike Sportswear Tech Pack','男子针织长裤',90,699,'pants',0,'橙色、黑色、绿色','S、M、L'),(11,'pants-5','Nike Sportswear Heritage','男子长裤',112,499,'pants',0,'白色、黑色、绿色','S、M、L'),(12,'pants-6','Nike Sportswear NSW','男子长裤',10,699,'pants',0,'银色、黑色、绿色','S、M、L'),(13,'shoes-1','Air Jordan 1 High React','男子运动鞋',32,1299,'shoes',0,'白色、黑色、绿色','38、39、40、41'),(14,'shoes-2','Jordan Mars 270','男子运动鞋',28,1299,'shoes',1,'白色、黑色、金色','38、39、40、41'),(15,'shoes-3','Air Jordan 9 Retro','复刻男子运动鞋',30,1399,'shoes',0,'白色、黑色、绿色','38、39、40、41'),(16,'shoes-4','Air Jordan 10 Retro','复刻男子运动鞋',190,1399,'shoes',0,'白色、黑色、绿色','38、39、40、41'),(17,'shoes-5','Air Jordan 1 Mid SE (GS)','大童运动童鞋',240,799,'shoes',0,'白色、黑色、绿色','38、39、40、41'),(18,'shoes-6','Air Jordan 1 Mid SE GC','男子运动鞋',150,969,'shoes',0,'白色、黑色、绿色','38、39、40、41'),(19,'package-1','Jordan','双肩包',170,499,'packages',1,'白色、黑色、绿色','大、中、小'),(20,'package-2','Nike Hoops Elite Pro','篮球双肩包',130,499,'packages',0,'白色、黑色、绿色','大、中、小'),(21,'package-3','Nike F.C','足球双肩包',210,349,'packages',0,'白色、黑色、绿色','大、中、小'),(22,'package-4','Nike Brasilia','训练双肩包',80,299,'packages',0,'白色、黑色、绿色','大、中、小'),(23,'package-5','LeBron','篮球双肩包',8,599,'packages',0,'白色、黑色、绿色','大、中、小'),(24,'package-6','Nike Vapor Speed','印花训练双肩包',56,419,'packages',0,'白色、黑色、绿色','大、中、小');
/*!40000 ALTER TABLE `commodities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_cart`
--

DROP TABLE IF EXISTS `shopping_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_cart` (
  `username` varchar(45) DEFAULT NULL,
  `imgUrl` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `des` varchar(45) DEFAULT NULL,
  `total` float DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_cart`
--

LOCK TABLES `shopping_cart` WRITE;
/*!40000 ALTER TABLE `shopping_cart` DISABLE KEYS */;
INSERT INTO `shopping_cart` VALUES ('oZbIs5NsFDmdeNjfJVOBvzYFjzgI','clothes-1.jpg','LeBron',3,749,'男子全长拉链开襟篮球连帽衫',2247,'绿色','L',92),('oZbIs5NsFDmdeNjfJVOBvzYFjzgI','clothes-2.jpg','Nike Sportswear Swoosh',10,699,'男子夹克',6990,'黑色','M',93);
/*!40000 ALTER TABLE `shopping_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `username` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `tel` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('admin','123','123'),('lihy','123','17398888669');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-04 11:11:31
