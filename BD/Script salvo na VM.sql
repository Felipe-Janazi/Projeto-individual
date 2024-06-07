create database SP;
drop database SP;
use SP;

create table cadastroUsuario (
idUsuario int auto_increment primary key,
username varchar(45) ,
email varchar(45) unique,
senha varchar(45),
jogadorPreferido varchar(45)
);

select * from cadastroUsuario;

create table estatisticas (
idEstatisticas int auto_increment,
fkUsuario int,
foreign key (fkUsuario) references cadastroUsuario (idUsuario),
apelido varchar(45) unique,
gols int,
assistencias int,
cartoesAmarelos int,
cartoesVermelhos int,
melhorDoMundo int,
primary key (idEstatisticas, fkUsuario)
);	

select * from cadastroUsuario;
select * from estatisticas;	
select * from Titulos;

truncate table cadastroUsuario;
truncate table Titulos;
truncate table estatisticas;

create table Titulos (
idTitulos int auto_increment,
fkUsuario int,
foreign key (fkUsuario) references cadastroUsuario(idUsuario),
apelido varchar(45) unique,
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


select count(jogadorPreferido) from cadastroUsuario
where jogadorPreferido = 'rogerio';

select count(jogadorPreferido) from cadastroUsuario
where jogadorPreferido = 'luis';

select count(jogadorPreferido) from cadastroUsuario
where jogadorPreferido = 'lugano';

select count(jogadorPreferido) from cadastroUsuario
where jogadorPreferido = 'calleri';

select count(jogadorPreferido) from cadastroUsuario
where jogadorPreferido = 'nestor';

select count(jogadorPreferido) from cadastroUsuario
where jogadorPreferido = 'luciano';

select count(jogadorPreferido) from cadastroUsuario
where jogadorPreferido = 'rai';

select count(jogadorPreferido) from cadastroUsuario
where jogadorPreferido = 'chulapa';

select count(jogadorPreferido) from cadastroUsuario
where jogadorPreferido = 'outro';

select sum(estaduais + brasileiroes + copaDoBrasil + libertadores + mundial + sulAmericana + recopa + supercopa + copaDoMundo) 
    as SomaDosTitulos, 
    idTitulos, 
    apelido
    from Titulos join cadastroUsuario
    on idUsuario = fkUsuario
    group by idTitulos, apelido
    order by sum(estaduais + brasileiroes + copaDoBrasil + libertadores + mundial + sulAmericana + recopa + supercopa + copaDoMundo) desc
    limit 1;
    
    select estaduais, username from Titulos join cadastroUsuario
    on idUsuario = fkUsuario
    where idTitulos = 1;

select * from Titulos;

insert into Titulos values 
(null, 1, 10, 2, 4, 4, 2, 4, 4, 1, 2, 33),
(null, 1, 8, 2, 4, 4, 2, 4, 2, 1, 2, 29);

select * from cadastroUsuario;

select max(gols),
apelido 
from estatisticas
group by apelido, gols
order by gols desc
limit 1;

select max(assistencias) as assistencias,
    apelido 
    from estatisticas 
    group by apelido, assistencias
    order by assistencias desc
    limit 1;
    
    select * from estatisticas;
    
select max(cartoesAmarelos) as cartoesAmarelos,
    apelido 
    from estatisticas 
    group by apelido, cartoesAmarelos
    order by cartoesAmarelos desc
    limit 1;
    
    select max(cartoesVermelhos) as cartoesVermelhos,
    apelido 
    from estatisticas
    group by apelido, cartoesVermelhos
    order by cartoesVermelhos desc
    limit 1;
    
     select max(melhorDoMundo) as melhorDoMundo,
    apelido 
    from estatisticas 
    group by apelido, melhorDoMundo
    order by melhorDoMundo desc
    limit 1;



select max(totalTitulos) as totalTitulos,
username
from Titulos join cadastroUsuario
    on idUsuario = fkUsuario
    group by username
    order by totalTitulos desc
    limit 1;
    
    
    select * from cadastroUsuario join estatisticas
    on idUsuario = estatisticas.fkUsuario
    join Titulos 
    on idUsuario = Titulos.fkUsuario;