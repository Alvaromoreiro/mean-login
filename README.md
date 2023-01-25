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
Notas
Asegúrate de tener MongoDB instalado y ejecutándose en tu sistema antes de iniciar el servidor
Si deseas cambiar la configuración de la conexión a la base de datos, modifica el archivo config.js en la carpeta backend
Si deseas realizar cambios en el frontend, asegúrate de estar en la carpeta frontend antes de ejecutar cualquier comando de Angular
