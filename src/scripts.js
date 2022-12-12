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
const dailyWater = document.getElementById("dailyWater");
const weeklyWater = document.getElementById("weeklyWater");

// global variables 👇🏻

let newRepo;
let aNewUser;
let userId = 1;
let usersAvgSteps;
let userData;
let hydrationData;
let sleepData;
let waterProfile;

// event listeners 👇🏻




// functions 👇🏻

Promise.all([fetchUserData(), fetchSleepData(), fetchHydrationData()])
.then(data => {
    userData = data[0].userData;
    sleepData = data[1].sleepData;
    hydrationData = data[2].hydrationData;
    onLoad(hydrationData, userData);
});

function onLoad( hydrationData, userData) {
    addUser(userData);

    waterForAddUserFunc(hydrationData, userId);
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

const addUser = (userData) => {
    createNewUser(userData);
    userName.innerText = aNewUser.name;
    userAddress.innerText = aNewUser.address;
    userStrideLength.innerText = aNewUser.strideLength;
    userDailyStepGoal.innerText = aNewUser.dailyStepGoal;
    userEmail.innerText = aNewUser.email;
    userFirstName.innerText = `Hi ${aNewUser.getFirstName()}!`;
};

function waterForAddUserFunc (hydrationData, userId) {
    createWaterProfile(userId, hydrationData);
    waterTodayWidget(waterProfile);
    waterThisWeekWidget(waterProfile);
}

function createWaterProfile (userId, hydrationData) {
    waterProfile = new Hydration(userId, hydrationData);
    waterProfile.getOneUserData(hydrationData);
    console.log(waterProfile._oneUserDataSet);
}

function waterTodayWidget (waterProfile) {
    const todayWidgetData = waterProfile.getToday();
    dailyWater.innerHTML = `<p>${todayWidgetData}</p>`;
    // dailyWater.innertext = todayWidgetData;
    console.log(todayWidgetData);
}

function waterThisWeekWidget (waterProfile) { 
    const weekWidgetData = waterProfile.getOneWeekTotal();
    weeklyWater.innerText = weekWidgetData;
    console.log(weekWidgetData);
}
