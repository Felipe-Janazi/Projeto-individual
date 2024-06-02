create database SP;
drop database SP;
use SP;

create table cadastroUsuario (
idUsuario int auto_increment primary key,
username varchar(45),
email varchar(45) unique,
senha varchar(45),
jogadorPreferido varchar(45)
);

create table Estastisticas (
idEstastisticas int auto_increment,
fkUsuario int,
foreign key (fkUsuario) references cadastroUsuario (idUsuario),
gols int,
assistencias int,
cartoesAmarelos int,
cartoesVermelhos int,
melhorDoMundo int,
primary key (idEstastisticas, fkUsuario)
);

create table Titulos (
idTitulos int auto_increment,
fkUsuario int,
foreign key (fkUsuario) references cadastroUsuario(idUsuario),
estaduais int,
brasileiroes int, 
copaDoBrasil int,
libertadores int, 
mundial int, 
sulAmericana int,
recopa int, 
supercopa int, 
copaDoMundo int,
primary key (idTitulos, fkUsuario)
);

select * from cadastroUsuario;