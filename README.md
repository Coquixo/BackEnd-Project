# API REST

## General Information

In this project we've made an API, the main theme is film/series renting.

***
### Appendix

We have some functions to use, like (users/orders/films/series)'s CRUD.
Some of them have admin permision in order to limit what an user can do, that means there are register and login functions aswell.


## Table of content
- [API REST](#api-rest)
- [General Information](#general-information)   
- [Appendix](#appendix)   
- [Relations](#relations)   
- [Environment Install](#environment-install)
- [Endpoints](#endpoints) 
- [Technologies](#technologies-dependencies-and-libraries)   
- [Environment Install](#environment-install)   
- [Authors](#authors)   
- [Badges](#badges)   

***
## Relations
![img](/img/relations.PNG)

***

## Environment Install
Steps:

- In order to start the project in our device we have to copy this link: "https://github.com/Coquixo/BackEnd-Project.git"

- Then open our IDE console, insert "git clone" then paste the link and enter.

- Don't forget to work in the correct directory

- Install dependencies in terminal with command:

( npm i bcrypt dotenv express jsonwebtoken mysql mysql2 nodemon sequelize sequelize-cli )

-Project is uploaded on production, if it's close you can create a new container and use enviorment variables.
(Create a file .env where you going to get your db enviorment variables or change config.js with the variables):

https://railway.app/project/ef32896d-1dcb-4551-9419-052b27d777de/plugin/b647133b-fcf8-4589-89af-9f20a0cdf5d7/data

-Migrate tables and seeders with next commands if they ain't launched:

(npx sequelize-cli db:migrate)
(npx sequelize-cli db:seed:all)

Example:

(#DB CONFIG)

NODE_ENV=development
DB_USERNAME=root
DB_PASSWORD=root
DB_DATABASE=netflix
DB_HOST=127.0.0.1
DB_PORT=33065
DB_DIALECT=mysql

(#Auth Config)

AUTH_SECRET = thatsnotmycar
AUTH_EXPIRES = 8h 
AUTH_ROUNDS = 10

- Run the conection to the database with:
(npm run dev)

-Migrate models with command:

( npx sequelize-cli db:migrate )

- Open Postam in order to insert next Endpoints.
(register and login, insert the given tokken into bearer authentification in postman.)
***

### ENDPOINTS:

http://localhost:3000/

####Routes:

http://localhost:3000/users
http://localhost:3000/orders
http://localhost:3000/films
http://localhost:3000/series


##### Users Endpoints:

Register New User(post)
http://localhost:3000/users/register

Login User(post)
http://localhost:3000/users/login

Get all Users
http://localhost:3000/users/getAll

Get a User by Id
http://localhost:3000/users/getById/:id_user

Update a User
http://localhost:3000/users/updateUser/:id_user

Delete a User(Admin Only)
http://localhost:3000/users/delete/:id_user

##### Films Endpoints:

Register New Film(Admin Only)
http://localhost:3000/films/registerFilm

Get All Films
http://localhost:3000/films/getAll

Get Top rated Films
http://localhost:3000/films/getTopRated

Get Film by Id
http://localhost:3000/films/getById/:id

Get Films by Tittle
http://localhost:3000/films/getByTittle/:tittle

Get Films by Genre
http://localhost:3000/films/getByGenre/:genre

Update a Film(Admin Only)
http://localhost:3000/films/update/:id_film

Delete a Film (Admin Only)
http://localhost:3000/films/delete/:id_film

##### Series Endpoints

Register New Serie(Admin Only)
http://localhost:3000/series/register

Get All Series
http://localhost:3000/series/getAll

Get Upcoming before 7 Days Series
http://localhost:3000/series/releasedThisWeek

Get Top Rated Series
http://localhost:3000/series/getTopRated

Get Serie By Id
http://localhost:3000/series/getById/:id_serie

Get Series By Tittle
http://localhost:3000/series/getByTittle/:tittle

Get Seties that are released on theaters
http://localhost:3000/series/getAllTheater

Update Serie(Admin Only)
http://localhost:3000/series/update/:id_serie

Delete Serie(Admin Only)
http://localhost:3000/series/delete/:id_serie

##### Orders Endpoints

Register New Order
http://localhost:3000/orders/register

Get All Orders(Admin Only)
http://localhost:3000/orders/getAll

Get Order By Id
http://localhost:3000/orders/getUserOrders/:user_id

Update Order
http://localhost:3000/orders/update/id_article

Delete Order
http://localhost:3000/orders/delete/:id_article

***

##  Technologies, dependencies and libraries
-   [JavaScript](https://www.javascript.com/)
-   [Node](https://nodejs.org/en/)
-   [Express](https://expressjs.com/)
-   [Sequelize](https://sequelize.org/)
-   [Sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
-   [Nodemon](https://www.npmjs.com/package/nodemon)
-   [Dotenv](https://www.npmjs.com/package/dotenv)
-   [MySQL](https://www.mysql.com/)
-   [Docker](https://www.docker.com/)


***
## Authors

- [@Alex López (Github)](https://github.com/Coquixo)
- [Alex Marcelo López Quiroga (Linked In)](https://www.linkedin.com/in/alex-marcelo-l%C3%B3pez-quiroga-05a7b2194/)
***
## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
***
[Back to top](#appendix)

