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

insert into cadastroUsuario values
(null, 'Felipe', 'felipe@gmail', '12345', 'rogerio');

create table estatisticas (
idEstatisticas int auto_increment,
fkUsuario int,
foreign key (fkUsuario) references cadastroUsuario (idUsuario),
gols int,
assistencias int,
cartoesAmarelos int,
cartoesVermelhos int,
melhorDoMundo int,
primary key (idEstatisticas, fkUsuario)
);

insert into estatisticas values
(1, 1, 250, 200, 12, 23, 1);

insert into estatisticas values
(null, 1, 500, 200, 12, 23, 1);

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

select max(gols),
username 
from estatisticas join cadastroUsuario
on idUsuario = fkUsuario
group by username;