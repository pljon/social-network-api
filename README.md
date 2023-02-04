# Social Network API

by [Jonathan Plaras](https://github.com/pljon/social-network-api)

## Description

This is a social network API that uses a `NoSQL` database that handles data. When the application is invoked, the Mongoose models will be synced with the `MongoDB` database. 

The API supports `GET`, `POST`, `PUT`, and `DELETE` routes for `users`, `thoughts`, `reactions`, and `friends`. 

The routes can be tested using `Insomnia` to `create`, `read`, `update`, and `delete` data in the database.

## Table of Contents

* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)

## Technologies Used
* [VSCode](https://code.visualstudio.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Insomnia](https://insomnia.rest/)
* [Moment.js](https://momentjs.com/)

## Installation

Download the repository or clone it to your local machine by running this command in your terminal:

```
git clone git@github.com:pljon/social-network-api.git
```

In order to run the application, you will need to install [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/). 


## Usage

Install the dependencies by running these commands in your terminal:

```
npm install
```
Adjust the `/connection.js` file in the `/config` folder to connect to your local database. 

Run the application by running this command in your terminal:

```
node index
```
Once connected to the database, you can test the routes using `Insomnia`. See Demo below for more information.


## Demo

A demo video can be viewed [here](https://www.dropbox.com/s/t2jhnd45yqe099n/module-18-demo.mp4?dl=0) and inside the `/demo` folder.