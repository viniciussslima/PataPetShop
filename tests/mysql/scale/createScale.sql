CREATE SCHEMA IF NOT EXISTS `PataPetShop` ;
USE `PataPetShop` ;

CREATE TABLE IF NOT EXISTS `PataPetShop`.`user` (
  `username` VARCHAR(255) NOT NULL,
  `password` CHAR(64) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`username`))
DEFAULT CHARACTER SET = utf8;

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

INSERT INTO `user` VALUES ('admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'admin');
INSERT INTO `user` VALUES ('teste2', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'vet');
