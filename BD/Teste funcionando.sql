create database SP;

use SP;

create table cadastroUsuario (
idUsuario int primary key auto_increment,
username varchar(45),
email varchar(45),
senha varchar(45),
jogadorPreferido varchar(45)
);

select * from cadastroUsuario;

drop database SP;