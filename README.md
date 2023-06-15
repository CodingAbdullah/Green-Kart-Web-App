# Green Kart Web Application 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). A full stack application using <b>Node, Express, MongoDB, React, Redux, and AWS. </b>

<br />

## Project URL
<b>The project has been successfully deployed to AWS and here is the URL:</b> `https://greenkartstore.com`

<br/>

## Start here
A fun little project completed with boiler-plate code a couple of years ago now fully upgraded with the latest version of React/Redux and in addition with new features:

<ul>
    <li>Product Order History</li>
    <li>User Profile Upgrades</li>
    <li>Password Resets with Verification codes via a GMAIL service</li>
    <li>Versatile Cart functionality (data persistance, clearing, and real-time notifications)</li>
    <li>Enhanced validators filtering/validating data and protected routes to ensure security </li>
</ul>
<br>

## Project Setup

In this project directory, you will find two server folders, one to run the front end and another for the back end. This documentation will help with setup.

<br />

### `node_modules`
These modules were not committed to the repo due to their size but the dependencies for the project are listed under the package.json file in each of the server folders. 

To install these modules locally and to ensure proper functionality, you will need to run `npm install` within each of these server directories.

<br />

### `.env` file setup

Under the node server folder, you will need to add environment variables for the `PORT` you want to run the server (5001). <br/>

You will also need to specify the fields in the markdown below to which you will use to authenticate and gain access to MongoDB, a `SECRET` which will verify you and sign a JWT to gain access to protected routes, and if you are using nodemailer, your own authentication pieces for that. 

Of course, this is not limited, you can add as many keys as you need securely for any additional features you would like to add. This is up to you but a bare minimum is required to make sure the application works as intended locally.

A sample `.env` file for this project looks like this, simple key-value pairs:
```dosini
DB_USERNAME=<insert username here>
DB_PASSWORD=<insert password here>
DATABASE=<insert database here>
SECRET=<insert token signing secret here>
PORT=<insert database here>
EMAIL=<insert email address here>
EMAIL_AUTH_KEY=<insert email auth key here>
```

#### WARNING with `.env`
DO NOT commit/push your `.env` file to git because your credentials will be leaked. This file should be hidden for local use only. <br />

Make sure to have a `.gitignore` file and add `.env` to it to make sure that when you commit/push changes, `.env` is not committed and pushed to the repo accidently.  <br /> 

For more information on the `.env` file and how to use environment variables and their purpose, please read their documentation here: https://github.com/motdotla/dotenv

<br />

### `npm start` to run the react server

Runs the app in development mode on port 3000. Make sure to be within the react-server to launch. <br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

<br />

### `node server.js` to run the node server

Launches the back-end node server to activate the db models, routes, protected routes, JWT activation, validation, and MongoDB connection.<br />

Run `node server.js` within the node server folder after adding the `.env` file to spin up the server on port 5001. [http://localhost:5001](http://localhost:5001).

<br />

## `Dockerfile`
Attached within the server folders are Dockerfiles needed to Dockerize the servers and run as standalone containers. This will essentially, allow users to containerize the applications by generating an image to represent the servers and run them as containers.
 
<br />

## `Scripts`
For basic project setup, scripts for each operating system (MAC/WINDOWS) have been provided as bash, powershell scripts respectively.

<br />

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
`nodemailer`
`react-router`
`react-router-dom`
`react-redux`
`reduxjs/toolkit`
`validator`
`uuid`

<br/>

## Learn More About React

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