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

CREATE TABLE IF NOT EXISTS `PataPetShop`.`cart_product` (
  `qty` INT NOT NULL,
  `product` VARCHAR(255) NOT NULL,
  `user` VARCHAR(255) NOT NULL,
  INDEX `fk_cart_product_product1_idx` (`product` ASC) VISIBLE,
  INDEX `fk_cart_product_user1_idx` (`user` ASC) VISIBLE,
  PRIMARY KEY (`user`, `product`),
  CONSTRAINT `fk_cart_product_product1`
    FOREIGN KEY (`product`)
    REFERENCES `PataPetShop`.`product` (`name`),
  CONSTRAINT `fk_cart_product_user1`
    FOREIGN KEY (`user`)
    REFERENCES `PataPetShop`.`user` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `PataPetShop`.`buy` (
  `id` VARCHAR(255) NOT NULL,
  `value` FLOAT NOT NULL,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `PataPetShop`.`buy_products` (
  `buy` VARCHAR(255) NOT NULL,
  `user` VARCHAR(255) NOT NULL,
  `product` VARCHAR(255) NOT NULL,
  `qty` INT NOT NULL,
  PRIMARY KEY (`buy`, `user`, `product`),
  INDEX `fk_buys_has_cart_product_buys1_idx` (`buy` ASC) VISIBLE,
  CONSTRAINT `fk_buys_has_cart_product_buys1`
    FOREIGN KEY (`buy`)
    REFERENCES `PataPetShop`.`buy` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8;

INSERT INTO `user` VALUES ('teste1', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'admin');
INSERT INTO `product` VALUES ('Racao de cachorro', 'descricao', 1.3, 1);
INSERT INTO `cart_product` VALUES (1, 'Racao de cachorro', 'teste1');