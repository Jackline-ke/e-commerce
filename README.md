## Requirements
You must make a single page application (only one index.html file) using create-react-app
Your app should use at least 5 components in a way that keeps your code well organized
There should be at least 3 client-side routes using react-routerLinks to an external site.
Use the RESTful API that has been provided by your Technical Mentor.
Use the following docLinks to an external site. for reference to the remaining MANDATORY requirements.
Stretch Goals
Once you have met the minimum requirements, feel free to explore! These are only the basic requirements — you're free to add on as much stuff as you'd like.

## Setup
For this project, you will need one repository: front-end.

Use create-react-app to generate starter code for your your project. Follow the instructions on the create-react-appLinks to an external site. site to get started.

## Deploying
When your project is complete, you are encouraged to deploy it! You'll need to deploy your frontend .

For your frontend, we recommend using NetlifyLinks to an external site.; however, there are a number of free services you can use if you'd like to explore alternatives.

## Deploying Tips & Tricks
Routing
If you're using React Router, you'll also need to set up a _redirects file as specified here:

Netlify RedirectsLinks to an external site.
Your redirects file should be placed in the public folder. It look like this:

/*    /index.html   200
## Environment Variables
When working on your app, it's useful to consider which environment you're working on:

Development: when working locally
Test: when running tests
Production: when deployed to server
You'll likely have some variables that change depending on what environment you're working in. For example, after deploying your site to production, you won't be able to access your backend on localhost anymore.

To handle these kind of environment variables, we can use .env files. (API Keys and passwords need to also be stored in environment variables)