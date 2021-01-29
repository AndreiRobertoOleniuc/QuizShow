drop database if EXISTS wheeloffortune;
create DATABASE wheeloffortune;
use wheeloffortune;
create table kategorie(
    id int not null auto_increment,
    kategorie varchar(100) not null,
    PRIMARY key (id)
);
create table woerter(
    id int not null auto_increment,
    wort varchar(255) not null,
    kategorie int not null,
    PRIMARY KEY(id),
    FOREIGN KEY(kategorie) REFERENCES kategorie (id)     
);
create table frage(
    id int not null auto_increment,
    frage varchar(255) not null,
    kategorie int not null,
    antwort TINYINT not null,
    PRIMARY KEY(id),
    FOREIGN KEY(kategorie) REFERENCES kategorie (id)
);

create table rangliste(
    id int not null auto_increment,
    name varchar(50) not null,
    geldbetrag int(255) not null,
    anzahlrunden int(100) not null,
    spielzeit DATETIME DEFAULT CURRENT_TIMESTAMP not null,
    PRIMARY Key (id)
);

insert into kategorie(kategorie)
values("Essen"),
    ("Filme"),
    ("Sport"),
    ("Wirtschaft"),
    ("Gaming"),
    ("Welt");

insert into woerter(wort,kategorie)
values("Prosciutto e Funghi",1),
    ("Spiderman",2),
    ("FIFA Worldcup",3),
    ("Apple",4),
    ("Playstation",5),
    ("Swiss",6),
    ("Champions League",3),
    ("Spain",6),
    ("Real Madrid",3),
    ("Burger",1),
    ("Tesla",4);

insert into frage(frage,kategorie,antwort)
values("Ist es wahr dass eine Pizza mehr Kalorien hat als ein Big Mac",1,true),
    ("Hat Facebook mehr Geld als Apple",4,false),
    ("Ist es wahr das Elon Musk reicher ist als Jeff Bezos",6,true),
    ("Ist Amerika grösser als Russland",6,false),
    ("Hat ein MCFlurry mehr Kalorien als ein Doghnut",1,true),
    ("Hat Real Madrid mehr CL Titel als Barcelona",3,true),
    ("Ist BIll Gates die Reichste Person",6,true);

insert into rangliste(name,geldbetrag,anzahlrunden)
values("Andrei",350300,2),
    ("Tim",20000020,5),
    ("Shenia",1040,1);

select wort,kategorie.kategorie 
from woerter
left join kategorie
on woerter.kategorie = kategorie.id;

select frage,kategorie.kategorie,antwort
from frage
left join kategorie
on frage.kategorie = kategorie.id;

select @rownum := @rownum + 1 as row_number,name,geldbetrag,anzahlrunden,spielzeit
from rangliste
cross join (select @rownum := 0) r
order by geldbetrag DESC;

select wort,kategorie.kategorie 
from woerter
left join kategorie
on woerter.kategorie = kategorie.id
where wort = "Prosciutto e Funghi";