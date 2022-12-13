# HealthDash

## Table of Contents

  * [Abstract](#abstract)
  * [Set-Up Instructions](#set-up-instructions)
  * [Developers](#developers)
  * [Goals](#goals)
  * [Demonstration](#demonstration)
  * [Technologies Used](#technologies-used)
  * [Reflections](#reflections)
    + [Challenges](#challenges)
    + [Wins](#wins)
  * [Acknowledgements](#acknowledgements)
  
## Abstract
**HealthDash** is a web application designed to track and display health and fitness-related information of a particular user onto a dashboard. A user is able to record the following data and much more:
- The number of water consumed in a particular day by ounces
- The average number of water consumed in a week by ounces
- The average number of hours slept per day
- The quality of sleep reported in a particular night

The activity of a particular user can be optionally displayed in the form of bar graphs with the click of a button. This service works as a simple and convenient way for a user to view and access many types of measurements pertaining to one's well-being.

## Set-Up Instructions
1. Copy the following SSH link: `git@github.com:nkinsaul/HealthDash.git`
2. After determining one's desired installation location, open one's command line interpreter and run the following text into one's command line interpreter: `git clone git@github.com:nkinsaul/HealthDash.git`
3. Install NPM packages:
  1. Run `npm install` to install project dependencies.
  2. Run `npm start` through the command line interpreter to see the HTML page.
4. After cloning down the repository onto one's local machine, run the following command: `npm install chart.js`
5. Clone down the local API server by following the instructions listed [here](https://github.com/turingschool-examples/fitlit-api).
6. Enter `https://localhost:8080` in your web browser to view the web application.
  1. To stop the web application from running on one's local server, enter `CTRL + C` into one's command line interpreter.

## Developers
- [El Brewster](https://github.com/ElBrewster)
- [Natalie Kinsaul](https://github.com/nkinsaul)
- [Quynh Luu](https://github.com/quynhtlluu)
- [Derek Yeh](https://github.com/derekgithub2)

## Goals
- Implement ES6 classes for the first time
- Use object and array prototype methods to perform data manipulation
- Create a dashboard that is easy to use and displays information in an accessible way for users
- Write code that follows SRP (Single Responsibility Principle).
- Use TDD to implement robust testing suites
- Make network requests to retrieve data using `.fetch()` and other methods
- Introduce chart libraries such as [Chart.js](https://www.chartjs.org/) to provide an interactive representation of data

*More information can be found on [the official project specifications document](https://frontend.turing.edu/projects/Fitlit-part-one.html).*

## Demonstration
The video below demonstrates a user interacting with the main HeathDash application interface. They are showing how to show and hide visual displays of charts for the following measurements: water intake over the course of a week by fluid ounces, hours slept over the course of a week, and sleep quality over the course of a week. The web application is also able to show a different user's information upon refreshing the web browser.

https://user-images.githubusercontent.com/103916293/207191034-b43fa333-bcd2-4a0f-922e-fb156b81b6ca.mp4


## Technologies Used
- Javascript (ES5, ES6)
- [Node.js](https://nodejs.org/en/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- Chart.js

## Reflections
### Challenges
- There was some challenge in getting information for our widgets to display. We realized that we needed to modify the names of our `document.querySelector()` variables and the arguments that our function to take in.
- Since this was the first time we all used API calls, we had some trouble making sure that certain data was being updated and displayed onto our web application. We first made sure our tests ran successfully using mock data before we learned how to connect APIs and the use of `Promise.all()`.
- We experienced merge conflicts when using Git and GitHub. There were times where we we would receive older version of the code that we desire when pulling from the main branch of our repository. We were able to resolve the issues by reviewing Git workflow practices determined by our program guidelines.
- There were times where all of us as developers had different approaches and tasks we desired to take on at a given time throughout the development of our project. We made sure to communicate major changes using our GitHub project board and had daily scheduled meetings to check in with one another through Zoom.
- We had trouble with finding effective and efficient ways of simultaneously working on the same piece of code with three other individuals.
- We had to learn how to make minor and major decisions as a group in an efficient way without making any group members feel like their ideas we're bad or wrong if not used in the project.

### Wins
- We were able to get our classes for our different pieces of information to display successfully onto the main interface of our web application.
- We successfully utilized Chart.js to display the information of some of our informational widgets other than a text format.
- We were able to get network requests to run smoothly for the first time that any of our team members have ever implemented them into any project.
- We learned a lot about proper group communication especially when it comes to having productive and efficient meetings.
- We completed the first part of the project feeling somewhat comfortable with the new skills taught in this portion of the project (i.e. API fetch calls, Chart.js, Git project boards, TDD, using prototype array methods).
- We successfully added the GitHub project board feature to our workflow.
- We implemented intuitive UX/UI features for charts display.

## Acknowledgements
- Icons from [Icons8](https://icons8.com/)
- Background Image from Eduardo Enrietti on [Unsplash](https://unsplash.com/)
