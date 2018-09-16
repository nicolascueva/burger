create database burgers_db;

use burgers_db;

create table burgers (
	id integer (11) NOT NULL AUTO_INCREMENT,
    burger_name varchar(100) not null,
    devoured boolean,
    PRIMARY KEY (id)
    );