# FSJS-7-React-Gallery-App

## Description

For this project, I used the very popular and in-demand React library to create an image gallery app. With the help of this powerful "MVC" (Model, View, Controller) library, the app will be built in the style of modern single-page applications to keep it fast, modular, and in sync with current web development trends.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How to run the project](#how-to-run-the-project)
  <!-- - [Style Updates](#style-updates) -->
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

In this project, I have utilized the npm package axios to handle the API requests to Flickr's database of images.

The app will allow users to search for images based on a topic, and display the results in a gallery format.

- Import the required dependencies
- Used `npm start` to start the server
- Set up routes to handle requests
- Use the axios package to fetch data from the Flickr API
- Use React to display the images

### Links

- Live Site URL: [React Gallery App hosted by Netlify](https://typeerrordev-react-gallery.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/versions) - v18.2.0
- [Axios](https://www.npmjs.com/package/axios) - v 0.27.2
- [Flickr API](https://www.flickr.com/services/developer/api/)

### How to run the project

- npm install
- create a config.js file in the src folder
- add the following code to the config.js file:

```js
const apiKey = "YOUR_API_KEY";
export default apiKey;
```

- npm start

### What I learned

- How to use React to create a single-page application
- How to use the axios package to fetch data from an API
- How to use React Router to set up routes for the app

## Author

- Portfolio - [www.MatthewPantel.com](https://www.matthewpantel.com)
- LinkedIn - [@MatthewPantel](https://www.linkedin.com/in/MatthewPantel)
- Twitter - [@TypeErrorDev](https://www.twitter.com/TypeErrorDev)

## Acknowledgments

I'd like to give thanks to the Student Success Mentors with Team Treehouse, the other students in their Slack channel and my friends on Discord that helped me along the way. Without everyone's support, I'd still be figuring out how to center a <div>

Finally, I'd like to acknowledge Voice Chat 3 in #100Devs for assisting me with the project.
