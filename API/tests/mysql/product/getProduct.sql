CREATE SCHEMA IF NOT EXISTS `PataPetShop` ;
USE `PataPetShop` ;
  
CREATE TABLE IF NOT EXISTS `PataPetShop`.`product` (
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `price` FLOAT NOT NULL,
  `stock` INT NOT NULL,
  PRIMARY KEY (`name`))

INSERT INTO `product` VALUES ('produto1', 'descrição1', 10.1, 10);
INSERT INTO `product` VALUES ('produto2', 'descrição2', 15, 50);
