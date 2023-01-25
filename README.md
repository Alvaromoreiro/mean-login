# MEAN Login Web Project

This project is a web login application developed with the MEAN stack (MongoDB, Express.js, Angular and Node.js). It includes state control and a MongoDB database.

## Backend

The backend is developed with JavaScript and uses the following libraries:

**bcryptjs** to encrypt user passwords

**body-parser** to parse data sent in HTTP requests

**express** as a framework for server development

**jsonwebtoken** to generate authentication tokens

**mongoose** to connect to and perform operations on the MongoDB database

**nodemon** to facilitate development, as it allows the server to automatically restart when code changes are detected

## Frontend

The frontend is developed with Angular 13.2.3 and uses the following libraries:

**primeng** to provide a set of UI components

**primeflex** to facilitate the creation of a responsive design

**primeicons** to provide a set of icons

**rxjs** to facilitate reactive programming

## Usage Instructions

Clone the repository and navigate to the project folder in your terminal
Run npm install to install the backend dependencies
Run ng install to install the frontend dependencies
Run npm run start to start the server and the frontend
Open http://localhost:3000 in your browser to access the application

## Notes

Make sure MongoDB is installed and running on your system before starting the server
If you want to change the database connection settings, modify the config.js file in the backend folder
If you want to make changes to the frontend, make sure to be in the frontend folder before running any Angular commands

---

# Proyecto MEAN de Login Web

Este proyecto es una aplicación web de login desarrollada con el stack MEAN (MongoDB, Express.js, Angular y Node.js). Incluye control de estados y una base de datos MongoDB.

## Backend

El backend está desarrollado con JavaScript y utiliza las siguientes librerías:

**bcryptjs** para encriptar las contraseñas de los usuarios

**body-parser** para parsear los datos enviados en las peticiones HTTP

**express** como framework para el desarrollo del servidor

**jsonwebtoken** para generar tokens de autenticación

**mongoose** para conectarse y realizar operaciones en la base de datos MongoDB

**nodemon** para facilitar el desarrollo, ya que permite reiniciar automáticamente el servidor al detectar cambios en el código

## Frontend

El frontend está desarrollado con Angular 13.2.3 y utiliza las siguientes librerías:

**primeng** para proveer un conjunto de componentes de UI

**primeflex** para facilitar la creación de un diseño responsive

**primeicons** para proveer un conjunto de iconos

**rxjs** para facilitar la programación reactiva

## Instrucciones de uso

Clona el repositorio y navega hasta la carpeta del proyecto en tu terminal
Ejecuta npm install para instalar las dependencias del backend
Ejecuta ng install para instalar las dependencias del frontend
Ejecuta npm run start para iniciar el servidor y el frontend
Abre http://localhost:4200 en tu navegador para acceder a la aplicación

## Notas

Asegúrate de tener MongoDB instalado y ejecutándose en tu sistema antes de iniciar el servidor
Si deseas cambiar la configuración de la conexión a la base de datos, modifica el archivo config.js en la carpeta backend
Si deseas realizar cambios en el frontend, asegúrate de estar en la carpeta frontend antes de ejecutar cualquier comando de Angular
