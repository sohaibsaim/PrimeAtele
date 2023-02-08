-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: primeatle
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(500) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,
  `password` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,NULL,'waqas@email.com','$2b$10$ZYfz3X7IO5WdcUqw/5F7M.VlNtXrV7O5O9vxBZ10xrT10c3BWGJNq'),(2,NULL,'adf@sdfasd','$2b$10$ch8Pf7.738qM8ya5PrWuUOE/h1.cwkSLPV..e.UXA/3BuYx1wbVr2');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(500) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,
  `phone` varchar(500) DEFAULT NULL,
  `note` varchar(5000) DEFAULT NULL,
  `todaysPickup` varchar(500) DEFAULT NULL,
  `meals` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Aakash','aakash@email.com','+91254546','adsfladskjfkdashjkfhasdkjfsadl','10','5'),(2,'asdf','asdf@sadfas','asdfasd','asdf','10','10');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;


DELIMITER ;;
CREATE PROCEDURE `sp_create_account`(
in _email varchar(500),
in _password varchar(1000)
)
BEGIN
INSERT INTO `account`(`email`,`password`)values(_email,_password);
select * from `account` where id =last_insert_id();
END ;;
DELIMITER ;

DELIMITER ;;
CREATE  PROCEDURE `sp_create_customer`(
in _name varchar(500),
in _email varchar(500),
in _phone varchar(500),
in _note varchar(5000),
in _todaysPickup varchar(500),
in _meals varchar(500)

)
BEGIN
INSERT INTO `customer`(`name`,`email`,`phone`,`note`,`todaysPickup`,`meals`)
VALUES(_name,_email,_phone,_note,_todaysPickup,_meals);
select * from `customer` where id =last_insert_id();

END ;;
DELIMITER ;

DELIMITER ;;
CREATE PROCEDURE `sp_get_customers`()
BEGIN
select * from `customer`;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE PROCEDURE `sp_get_user_by_email`(
in _email varchar(500)
)
BEGIN
select * from `account` where email = _email;
END ;;
DELIMITER ;
