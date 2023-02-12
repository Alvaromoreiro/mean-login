# Proyecto Angular 14 con MEAN Stack y Store de NGRX

Este proyecto de Angular 14 con MEAN Stack y Store de NGRX es un ejemplo de una aplicación web completa con una arquitectura moderna y escalable. Utiliza tecnologías y librerías populares para el desarrollo de aplicaciones web, tanto en el front-end como en el back-end.

## Requisitos previos

Antes de poder ejecutar el proyecto, debe tener instalado lo siguiente en su sistema:

Node.js (versión 12 o superior)
MongoDB (versión 4 o superior)
Configuración del proyecto
Para configurar el proyecto, siga los siguientes pasos:

Clone este repositorio a su sistema local.
Abra una terminal y navegue hasta el directorio raíz del proyecto.
Ejecute el siguiente comando para instalar las dependencias del proyecto:
bash
Copy code
npm install
Cree un archivo .env en la raíz del proyecto y configure las variables de entorno necesarias, como se indica a continuación:
bash
Copy code
## Configuración del Backend

Modifica el siguiente archivo
```js 
/mean-login/backend/config/properties.js
```

**USER:** Usuario propietario de la base de datos MongoDB

**PASSWORD:** Contraseña de la base de datos MongoDB

**PORT:** Puerto en el que se desplegará el servidor

## Ejecute los siguientes comandos para iniciar el servidor:
```node
npm i
```
---
```node
npm run start
```
## Tecnologías y librerías utilizadas
Este proyecto utiliza las siguientes tecnologías y librerías:

Front-end
Angular 14
PrimeNG
RxJS
PrimeFlex
PrimeIcons
NGRX Store
NGRX Effects
Back-end
BcryptJS
Body-parser
Express
Jsonwebtoken
Mongoose
Nodemon
## Estructura del proyecto

El proyecto está estructurado en diferentes directorios para separar las responsabilidades del front-end y del back-end.

### Directorio frontend

Este directorio contiene todo el código fuente del front-end de la aplicación. Se utiliza Angular 14 para desarrollar la interfaz de usuario y PrimeNG para los componentes de la interfaz de usuario.

### Directorio backend

Este directorio contiene todo el código fuente del back-end de la aplicación. Se utiliza Express para crear el servidor y Mongoose para interactuar con la base de datos MongoDB. Además, se utiliza Nodemon para reiniciar automáticamente el servidor cuando se detectan cambios en los archivos.


## Contribuye!

Si desea contribuir a este proyecto, puede hacerlo de la siguiente manera:

Fork este repositorio.
Cree una rama nueva en su repositorio.
Haga sus cambios en la rama nueva.
Cree un pull request desde su rama a la rama main de este repositorio.
