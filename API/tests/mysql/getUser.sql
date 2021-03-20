CREATE SCHEMA IF NOT EXISTS `PataPetShop` ;
USE `PataPetShop` ;

CREATE TABLE IF NOT EXISTS `PataPetShop`.`user` (
  `username` VARCHAR(255) NOT NULL,
  `password` CHAR(64) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`username`));

INSERT INTO `user` VALUES ('teste1', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'admin');
INSERT INTO `user` VALUES ('teste2', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'client');
INSERT INTO `user` VALUES ('teste3', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'vet');
INSERT INTO `user` VALUES ('teste4', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'seller');
INSERT INTO `user` VALUES ('teste5', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'washer');