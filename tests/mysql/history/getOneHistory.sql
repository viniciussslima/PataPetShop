CREATE SCHEMA IF NOT EXISTS `PataPetShop` ;
USE `PataPetShop` ;

CREATE TABLE IF NOT EXISTS `PataPetShop`.`user` (
  `username` VARCHAR(255) NOT NULL,
  `password` CHAR(64) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`username`))
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `PataPetShop`.`product` (
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `price` FLOAT NOT NULL,
  `stock` INT NOT NULL, 
  PRIMARY KEY (`name`))
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `PataPetShop`.`buy` (
  `id` VARCHAR(255) NOT NULL,
  `value` FLOAT NOT NULL,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_buy_user1_idx` (`user` ASC) VISIBLE,
  CONSTRAINT `fk_buy_user1`
    FOREIGN KEY (`user`)
    REFERENCES `PataPetShop`.`user` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `PataPetShop`.`buy_products` (
  `buy` VARCHAR(255) NOT NULL,
  `product` VARCHAR(255) NOT NULL,
  `qty` INT NOT NULL,
  PRIMARY KEY (`buy`, `product`),
  INDEX `fk_buys_has_cart_product_buys1_idx` (`buy` ASC) VISIBLE,
  INDEX `fk_buy_products_product1_idx` (`product` ASC) VISIBLE,
  CONSTRAINT `fk_buys_has_cart_product_buys1`
    FOREIGN KEY (`buy`)
    REFERENCES `PataPetShop`.`buy` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_buy_products_product1`
    FOREIGN KEY (`product`)
    REFERENCES `PataPetShop`.`product` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8;

INSERT INTO `user` VALUES ('admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'admin');
INSERT INTO `product` VALUES ('Racao de cachorro', 'descricao', 1.3, 10);
INSERT INTO `product` VALUES ('racao recheada', 'descricao', 10, 88);
INSERT INTO `buy` VALUES ("db4dc8a0-a64b-47c0-ae5d-1f6fdfefdb0e", 33.9, "2021-04-17T17:48:49.000Z", "admin");
INSERT INTO `buy_products` VALUES ("db4dc8a0-a64b-47c0-ae5d-1f6fdfefdb0e", "Ração de cachorro", 3);
INSERT INTO `buy_products` VALUES ("db4dc8a0-a64b-47c0-ae5d-1f6fdfefdb0e", "racao recheada", 3);