-- -----------------------------------------------------
-- Schema PataPetShop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `PataPetShop`;
USE `PataPetShop`;

-- -----------------------------------------------------
-- Table `PataPetShop`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PataPetShop`.`product` (
  `name` VARCHAR(255) NOT NULL,
  `price` FLOAT NOT NULL,
  `stock` INT NOT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`name`))
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `PataPetShop`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PataPetShop`.`user` (
  `username` VARCHAR(255) NOT NULL,
  `password` CHAR(64) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`username`))
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `PataPetShop`.`cart_product`
-- -----------------------------------------------------
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

-- -----------------------------------------------------
-- Table `PataPetShop`.`scale`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PataPetShop`.`scale` (
  `employee` VARCHAR(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `startTime` DATETIME NOT NULL,
  `endTime` DATETIME NOT NULL,
  PRIMARY KEY (`employee`, `endTime`, `startTime`, `date`),
  CONSTRAINT `fk_scale_user1`
    FOREIGN KEY (`employee`)
    REFERENCES `PataPetShop`.`user` (`username`))
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `PataPetShop`.`buy`
-- -----------------------------------------------------
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

-- -----------------------------------------------------
-- Table `PataPetShop`.`buy_products`
-- -----------------------------------------------------
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

-- -----------------------------------------------------
-- Table `PataPetShop`.`scheduling`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PataPetShop`.`scheduling` (
  `employee` VARCHAR(255) NOT NULL,
  `endTime` DATETIME NOT NULL,
  `startTime` DATETIME NOT NULL,
  `date` DATETIME NOT NULL,
  `client` VARCHAR(255) NOT NULL,
  INDEX `fk_table1_scale1_idx` (`employee` ASC, `endTime` ASC, `startTime` ASC, `date` ASC) VISIBLE,
  PRIMARY KEY (`employee`, `endTime`, `startTime`, `date`),
  INDEX `fk_table1_user1_idx` (`client` ASC) VISIBLE,
  CONSTRAINT `fk_table1_scale1`
    FOREIGN KEY (`employee` , `endTime` , `startTime` , `date`)
    REFERENCES `PataPetShop`.`scale` (`employee` , `endTime` , `startTime` , `date`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_table1_user1`
    FOREIGN KEY (`client`)
    REFERENCES `PataPetShop`.`user` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
DEFAULT CHARACTER SET = utf8;