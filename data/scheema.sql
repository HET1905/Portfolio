DROP DATABASE IF EXISTS portfolio_db;
CREATE DATABASE portfolio_db;

USE portfolio_db;

CREATE TABLE contact (
  id INT NOT NULL AUTO_INCREMENT,
  client_Name VARCHAR(255) NOT NULL,
  email VARCHAR(50) NOT NULL,
  client_message TEXT
  PRIMARY KEY (id)
);