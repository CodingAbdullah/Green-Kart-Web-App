# Green Kart Web Application 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In this project directory, you will find two server folders, one to run the front-end and another for the back-end. This documentation will help with setup.

### `.env` file setup

Under the node server folder, you will need to add environment variables for the `PORT` you want to run the server (5050). <br/>

You will also need to specify the `USERNAME`, `PASSWORD` and `DATABASE` to which you will use to authenticate and gain access to MongoDB. A `SECRET` which will verify you and sign a JWT to gain access to protected routes.

A sample `.env` file looks like this, simple key-value pairs:
```dosini
USERNAME=<insert username here>
PASSWORD=<insert password here>
DATABASE=<insert database here>
PORT=<insert database here>
SECRET_KEY=<insert password here>
```

#### WARNING with `.env`
DO NOT commit/push your `.env` file to git because your credentials will be leaked. This file should be hidden for local use only. <br />

Make sure to have a `.gitignore` file and add `.env` to it to make sure that when you commit/push changes, `.env` is not committed and pushed to the repo accidently.  <br /> 

For more information on the `.env` file and how to use environment variables and their purpose, please read their documentation here: https://github.com/motdotla/dotenv

### `npm start` to run the react server

Runs the app in development mode on port 3000. Make sure to be within the react-server to launch. <br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `node server.js` to run the node server

Launches the back-end node server to activate the db models, routes, protected routes, JWT activation, validation, and MongoDB connection.<br />

Run `node server.js` within the node server folder to spin up the server on port 5050. [http://localhost:5050](http://localhost:5050).

## Libraries/Technologies used
`axios`
`bcryptjs`
`cors`
`dotenv`
`express`
`jsonwebtoken`
`localstorage`
`mongodb`
`mongoose`
`react-router`
`react-router-dom`
`react-redux`
`redux`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment