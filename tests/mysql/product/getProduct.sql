CREATE SCHEMA IF NOT EXISTS `PataPetShop` ;
USE `PataPetShop` ;
  
CREATE TABLE IF NOT EXISTS `PataPetShop`.`product` (
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `price` FLOAT NOT NULL,
  `stock` INT NOT NULL,
  PRIMARY KEY (`name`))
DEFAULT CHARACTER SET = utf8;

INSERT INTO `product` VALUES ('produto1', 'descricao1', 10.1, 10);
INSERT INTO `product` VALUES ('produto2', 'descricao2', 15, 50);
