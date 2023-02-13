## ![Moreiro_minimalist_galaxy_2955319d-892d-4304-b5bb-7fda2506975b](https://user-images.githubusercontent.com/57747327/218338031-f4100736-4083-49cc-8563-2f43bc4c1b10.png)

# Angular 14 Project with MEAN Stack and NGRX Store

This Angular 14 project with MEAN Stack and NGRX Store is an example of a complete web application with a modern and scalable architecture. It uses popular technologies and libraries for web application development, both on the front-end and back-end.

- [Readme file in spanish](README-es.md)

## Prerequisites

Before running the project, you must have the following installed on your system:

Node.js (version 12 or higher)
MongoDB (version 4 or higher)

Project Setup:

To set up the project, follow these steps:

Clone this repository to your local system.
Open a terminal and navigate to the root directory of the project.
Run the following command to install the project dependencies (for both frontend & backend repositories):

```bash
npm install
```

## Backend Configuration

Modify the following file:

```bash
/mean-login/backend/config/properties.js
```

**USER**: MongoDB database owner user

**PASSWORD**: MongoDB database password

**PORT**: Port on which the server will be deployed

**SECRET_KEY**: Password with which you can sign access tokens privately

## Run the following commands to start the server (frontend & backend):

```bash
npm run start
```

## Technologies and Libraries Used

This project uses the following technologies and libraries:

**Angular 14** is an open-source web development framework based on TypeScript. It is used to build dynamic client-side web applications, with a focus on modularity and scalability.

**PrimeNG** is a UI component library for Angular, providing a wide range of pre-defined components and themes to create modern and attractive user interfaces.

**RxJS** is a reactive programming library for JavaScript, providing a wide range of operators for working with event sequences, including observables, promises, and events.

**PrimeFlex** is a CSS class library for building responsive and flexible layouts in Angular, providing a wide range of design utilities and display utilities.

**PrimeIcons** is an icon library for Angular, providing a wide range of vector icons for use in user interfaces.

**NGRX Store** is a state management library for Angular, providing a unified storage architecture for applications using Angular, making application state management easier.

**NGRX Effects** is a library for managing side effects in Angular applications with NGRX, helping to handle HTTP calls, navigation, and other side effects that may be necessary in applications.

Backend-wise,

**BcryptJS** is a library for password encryption.

**Body-parser** is middleware for parsing HTTP request bodies.

**Express** is a framework for building web applications in Node.js.

**Jsonwebtoken** is a library for creating and verifying JWT authentication tokens.

**Mongoose** is a data modeling library for MongoDB, and Nodemon is a tool for automatically restarting a Node.js application on the server when changes to the source code are detected.

## Project Structure

The project is structured into different directories to separate the responsibilities of the front-end and back-end.

## Frontend Directory

This directory contains all the front-end source code for the application. Angular 14 is used to develop the user interface, and PrimeNG is used for the UI components.

## Backend Directory

This directory contains all the back-end source code for the application. Express is used to create the server and Mongoose is used to interact with the MongoDB database. In addition, Nodemon is used to automatically restart the server when changes to the files are detected.

## Contribute!

If you want to contribute to this project, you can do so by:

Forking this repository.
Creating a new branch in your repository.
Making your changes in the new branch.
Creating a pull request from your branch to the main branch of this repository.
