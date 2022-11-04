use netflix;

create table users(
id_user int auto_increment not null,
name_user varchar(25) not null,
surname_user varchar(25) not null,
is_admin boolean not null,

primary key (id_user)
);

create table orders(
id_article int auto_increment not null,
order_date date not null,
return_date date not null,
film_id int,
serie_id int,

user_id int not null,

primary key (id_article),
foreign key (user_id) references users(id_user),
foreign key (film_id) references films(id_film),
foreign key (serie_id) references series(id_serie)
);

create table films(
 id_film int auto_increment not null,
 tittle varchar(25) not null,
 genre varchar(25) not null,
 rate int,
 release_date date,
 
 primary key (id_film)
);

create table series(
 id_serie int auto_increment not null,
 tittle varchar(25) not null,
 genre varchar(25) not null,
 rate int,
 in_theater boolean,
 release_date date,
 
 primary key (id_serie)
);