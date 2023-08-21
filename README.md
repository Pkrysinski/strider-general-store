# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Purpose...

The purpose of this project is to demonstrate my ability in the React development space and fulfull the requirements set forth by Strider Technologies.  This app has been developed with an Express back-end and a React UI to showcase data fetched from the provided API (https://doc.strider.tech/content/receipts.json).  The app has a homepage which displays some high-level data about the receipts retrieved from the API in a Material UI table, as well as links below the table which takes the user to more information about the customers in the table as well as items purchased.  There is also a basic navigation bar in the upper-right of the app which can redirect users to the home page, as well as to an "About Strider" page which takes the user to some external links to both www.striderintel.com as well as the project repo.  The app has been built to have a responsive interface whether the user is on mobile or desktop.

## How to run...

Required technologies:

Node/NPM, any web browser.

Steps to run:

1 - Clone this repository to your local computer.

2 - Once successfully cloned, open up Git Bash or any other comand prompt of your choosing.

3 - Start the backend server...

3a - Navigate to the root of the strider-general-store project, then go into the /server folder (by using the "cd" comand to get to the location).

3b - Run command "npm install" to download the node modules for the back end dependencies.

3c - Run command "npm start".

3d - Confirm that the server is running by seeing "Server is running on port 4000" in the terminal.

4 - Start the frontend server...

4a - In a separate terminal, navigate to the root of the strider-general-store project.

4b - Run command "npm install" to download the node modules that the UI depends on.

4c - Run command "npm start" and launch the app in Google Chrome.  Navigate around, try to break it, and most of all - have fun!

## Personal Statement

I hope this app showcases my skillset as a React developer so far!  I had the most trouble with the fetch request and a cors issue upon retrieving the data from the provided URL.  I decided to add a dedicated back end server with CORS configuration to get around the issue, and now it works across all browsers.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
