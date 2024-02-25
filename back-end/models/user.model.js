const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('postgres://admin:admin@localhost:5432/books-db') // Example for postgres

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


const User = sequelize.define("users", {
   username: {
     type: DataTypes.STRING,
     allowNull: false
   },
   password: {
     type: DataTypes.STRING,
     allowNull: false
   },
   first_name: {
     type: DataTypes.STRING,
   },
   last_name: {
     type: DataTypes.STRING,
   }, 
   date_created: {
     type: DataTypes.DATEONLY,
     allowNull: false,
   },
   last_login: {
     type: DataTypes.DATEONLY,
     allowNull: false,
   }
});

sequelize.sync().then(() => {
    console.log('User table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });