// imports 👇🏻

import './images/turing-logo.png'
import './css/styles.css';
import User from './User'
import UserRepository from './UserRepository';
import {fetchUserData} from './apiCalls'
import {fetchSleepData} from './apiCalls';
import {fetchHydrationData} from './apiCalls';
import Hydration from './Hydration';

// query selectors 👇🏻

const userInfoBox = document.getElementById("userInfoBox");
const userName = document.getElementById("name");
const userAddress = document.getElementById("address");
const userStrideLength = document.getElementById("strideLength");
const userDailyStepGoal = document.getElementById("dailyStepGoal");
const userEmail = document.getElementById("email");
const userFriends = document.getElementById("friends");
const userFirstName = document.getElementById("firstName");
const userStepComparison = document.getElementById("stepCompareResults");


// global variables 👇🏻

let newRepo;
let aNewUser;
let userId = 1;
let usersAvgSteps;
let userData;
let hydrationData;
let sleepData;

// event listeners 👇🏻




// functions 👇🏻

Promise.all([fetchUserData(), fetchSleepData(), fetchHydrationData()])
.then(data => {
    userData = data[0].userData;
    sleepData = data[1].sleepData;
    hydrationData = data[2].hydrationData;
    onLoad(userData);
});

function onLoad() {
    addUser();
};

const createUserArray = (userData) => {
    newRepo = new UserRepository(userData);
    usersAvgSteps = newRepo.avgStepGoal();
    userStepComparison.innerText = `${usersAvgSteps} steps`;
    return newRepo;
};

function createNewUser() {
    createUserArray(userData);
    const userObject = newRepo.getUserData(userId);
    aNewUser = new User(userObject);
    return aNewUser;
};

const addUser = () => {
    createNewUser(userData);
    userName.innerText = aNewUser.name;
    userAddress.innerText = aNewUser.address;
    userStrideLength.innerText = aNewUser.strideLength;
    userDailyStepGoal.innerText = aNewUser.dailyStepGoal;
    userEmail.innerText = aNewUser.email;
    userFirstName.innerText = `Hi ${aNewUser.getFirstName()}!`;
};
// ----------------water widgets
const dailyWater = document.getElementById("dailyWater");
const weeklyWater = document.getElementById("weeklyWater");
// function waterForAddUserFunc (id, hydrationData) {
//     //(FOR ON LOAD, FOR ADDUSER)
//     createWaterProfile(id, hydrationData)
//     //(RETURNS WATERPROFILE)
// }

function createWaterProfile (id, hydrationData) {
    let waterProfile = new Hydration(id, hydrationData);
    waterProfile.getOneUserData(hydrationData);
    console.log(waterProfile.oneUserDataSet);
    //^does this return one user's water? does it match the id?
    //this should instantiate our hydration class to use the methods,
    //this should create our constructor property hydration.oneUserDataSet
}
//^ call this in the addUser?
function waterTodayWidget () {
    const todayWidgetData = waterProfile.getToday();
    dailyWater.innertext = todayWidgetData;
    // function to display water consumed today on one of the widgets
    
    // (query selector?)
}

function waterThisWeekWidget () {
    const weekWidgetData = waterProfile.getOneWeekTotal();
    weeklyWater.innerText = weekWidgetData;
    // function to display water consumed this week on one of the widgets
    
    // (query selector?)
}

// what is “a display”