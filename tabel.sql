CREATE TABLE list
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255)NOT NULL,
    address varchar(255),
    email  varchar(255),
    PRIMARY KEY(ID)
);
CREATE TABLE signup
(
    id int NOT NULL AUTO_INCREMENT PRIMARY key,
    name varchar(255)NOT NULL,
    email  varchar(255),
     password varchar(255),
   
);
CREATE TABLE orderdetails
(
    id int NOT NULL AUTO_INCREMENT PRIMARY key,
    name varchar(255)NOT NULL,
    phn_no  int(10),
     address varchar(255),
   
);