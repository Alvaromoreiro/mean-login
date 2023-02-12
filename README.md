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
Ejecute el siguiente comando para instalar las dependencias del proyecto (realizar en ambos repositorios frontend & backend):
```bash
npm install
```
## Configuración del backend

Modifica el siguiente archivo
```js 
/mean-login/backend/config/properties.js
```

**USER:** Usuario propietario de la base de datos MongoDB

**PASSWORD:** Contraseña de la base de datos MongoDB

**PORT:** Puerto en el que se desplegará el servidor
## Ejecute los siguientes comandos para iniciar el servidor (frontend & backend):
```node
npm run start
```
## Tecnologías y librerías utilizadas
Este proyecto utiliza las siguientes tecnologías y librerías:

**Angular 14:** es un framework de desarrollo web de código abierto y basado en TypeScript. Es utilizado para construir aplicaciones web dinámicas del lado del cliente, con enfoque en la modularidad y la escalabilidad.

**PrimeNG** es una biblioteca de componentes de interfaz de usuario (UI) para Angular, que proporciona una amplia gama de componentes y temas predefinidos para crear interfaces de usuario modernas y atractivas.

**RxJS** es una biblioteca de programación reactiva para JavaScript, que proporciona una amplia gama de operadores para trabajar con secuencias de eventos, incluyendo observables, promesas y eventos.

**PrimeFlex** es una biblioteca de clases CSS para construir diseños responsivos y flexibles en Angular, que proporciona una amplia gama de utilidades de diseño y de utilidades de visualización.

**PrimeIcons** es una biblioteca de iconos para Angular, que proporciona una amplia gama de iconos vectoriales para su uso en interfaces de usuario.

**NGRX Store** es una biblioteca de gestión de estado para Angular, que proporciona una arquitectura de almacenamiento unificado para las aplicaciones que utilizan Angular, facilitando la gestión del estado de la aplicación.

**NGRX Effects** es una biblioteca para la gestión de efectos secundarios (side effects) en aplicaciones Angular con NGRX, que ayuda a manejar las llamadas HTTP, la navegación y otros efectos secundarios que pueden ser necesarios en las aplicaciones.

En cuanto al back-end, 

**BcryptJS** es una biblioteca para el cifrado de contraseñas.

**Body-parser** es un middleware para parsear los cuerpos de las solicitudes HTTP.

**Express** es un framework para construir aplicaciones web en Node.js.

**Jsonwebtoken** es una biblioteca para la creación y verificación de tokens de autenticación JWT.

**Mongoose es una biblioteca de modelado de datos para MongoDB, y Nodemon es una herramienta para reiniciar automáticamente una aplicación Node.js en el servidor cuando se detectan cambios en el código fuente.

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
