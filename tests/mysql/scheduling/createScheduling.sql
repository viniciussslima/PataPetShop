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

INSERT INTO `user` VALUES ('admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'admin');
INSERT INTO `user` VALUES ('teste1', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'client');
INSERT INTO `user` VALUES ('teste2', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'vet');
INSERT INTO `scale` VALUES ('teste2', '2021-01-01 00:00:00', '2021-01-01 10:30:00', '2021-01-01 12:00:00');
INSERT INTO `scale` VALUES ('teste2', '2021-01-01 00:00:00', '2021-01-01 15:00:00', '2021-01-01 20:00:00');
INSERT INTO `scale` VALUES ('teste2', '2021-04-11 00:00:00', '2021-04-11 14:30:00', '2021-04-11 15:00:00');
INSERT INTO `scale` VALUES ('teste2', '2021-04-12 00:00:00', '2021-04-12 14:30:00', '2021-04-12 15:00:00');
INSERT INTO `scheduling` VALUES ('teste2', '2021-01-01 12:00:00', '2021-01-01 10:30:00', '2021-01-01 00:00:00', 'teste1');
INSERT INTO `scheduling` VALUES ('teste2', '2021-01-01 20:00:00', '2021-01-01 15:00:00', '2021-01-01 00:00:00', 'teste1');
INSERT INTO `scheduling` VALUES ('teste2', '2021-04-11 15:00:00', '2021-04-11 14:30:00', '2021-04-11 00:00:00', 'teste1');