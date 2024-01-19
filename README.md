# Support Ticket Entry System
Support ticket entry system is a project which manages support ticket. It

## Table of content
- [Requirements](#requirements)
- [Project setup](#project-setup)
- [Run Application](#run-application)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Technologies used](#technologies-used)
## Requirements
For development, you will only need Node.js installed on your environement
### Node
[Node](https://nodejs.org/en) is really easy to install & now include [NPM](https://www.npmjs.com/). You should be able to run the following command after the installation procedure below.

``` 
$ node --version
v0.10.24

$ npm --version
1.3.21
````

## Project setup
 1. Clone the project 
```shell
https://github.com/KeerthanaR2910/support-ticket-entry-system.git
```
2. install packages on frontend
```shell
cd frontend
npm install
```
3. install packages on backend
```shell
cd backend
npm install
```
4. Add backend url to .env.local
   1. Create `.env.local` in frontend directory
   2. Add backend base url to `REACT_APP_SERVICE_BASE_URL` variable

## Start Application
### Frontend
Frontend code will be available in the frontend directory
In the project directory, you can run:

```bash
cd frontend
npm run start
```

This command will start the app in http://localhost:3000 

### Backend
Backend code will be available in the backend directory
In the project directory, you can run:

```bash
cd backend
npm run dev
```

This command will start the app in development mode http://localhost:8888.
The api will reload when you make changes.


```bash
cd backend
npm run start
```

This command will start the app in production mode http://localhost:8888.
Changes would not be reflected immediately on apis

## Technologies used
 1. React
2. Node
3. Express js
4. Mongoose
5. MongoDb
