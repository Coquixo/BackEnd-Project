create table users(
id_user int auto_increment,
name_user varchar(25) not null,
surname_user varchar(25) not null,
is_admin boolean not null,

primary key (id_user)
);

create table orders(
id_article int auto_increment not null,
order_date date not null,
return_date date not null,

user_id int,

primary key (id_article),
foreign key (user_id) references users(id_user)

);

create table films(
 id_film int auto_increment,
 tittle varchar(25) not null,
 genre varchar(25) not null,
 rate int,
 release_date date,
 
 article_id int not null,
 
 primary key (id_film),
 foreign key (article_id) references orders(id_article)
);

create table series(
 id_serie int auto_increment,
 tittle varchar(25) not null,
 genre varchar(25) not null,
 rate int,
 release_date date,
 
 article_id int not null,
 
 primary key (id_serie),
 foreign key (article_id) references orders(id_article)
);