// imports 👇🏻

import "./images/turing-logo.png";
import "./css/styles.css";
import User from "./User";
import UserRepository from "./UserRepository";
import Sleep from "./Sleep";
import { fetchUserData } from "./apiCalls";
import { fetchSleepData } from "./apiCalls";
import { fetchHydrationData } from "./apiCalls";
import { hoursSleptOverWeekChart } from "./Chart";
import { sleepQualityOverWeekChart } from "./Chart";

// query selectors 👇🏻

const userInfoBox = document.getElementById("userInfoBox");
const userName = document.getElementById("name");
const userAddress = document.getElementById("address");
const userStrideLength = document.getElementById("strideLength");
const userDailyStepGoal = document.getElementById("dailyStepGoal");
const userEmail = document.getElementById("email");
const userFirstName = document.getElementById("firstName");
const userStepComparison = document.getElementById("stepCompareResults");
const dailySleepHours = document.getElementById("dailySleepHours");
const weeklySleepHours = document.getElementById("weeklySleepHours");
const dailySleepQuality = document.getElementById("dailySleepQuality");
const weeklySleepQuality = document.getElementById("weeklySleepQuality");
const avgSleepHoursAllTime = document.getElementById("avgSleepHoursAllTime");
const avgSleepQualAllTime = document.getElementById("avgSleepQualAllTime");

// global variables 👇🏻

let newRepo;
let aNewUser;
let userId = 1;
let usersAvgSteps;
let userData;
let hydrationData;
let sleepData;
let userSleepData;

// event listeners 👇🏻

// functions 👇🏻

Promise.all([fetchUserData(), fetchSleepData(), fetchHydrationData()]).then(
  (data) => {
    // console.log(data)
    userData = data[0].userData;
    sleepData = data[1].sleepData;
    hydrationData = data[2].hydrationData;
    instantiateSleep(sleepData);
    onLoad(userData);
  }
);

function onLoad() {
  addUser();
  displayDailySleep();
  displayWeeklySleep();
  displayWeeklySleepQuality();
  displayAvgAllTime();
  displaySleepChart();
}

const createUserArray = (userData) => {
  newRepo = new UserRepository(userData);
  usersAvgSteps = newRepo.avgStepGoal();
  userStepComparison.innerHTML = `
    <div class="widgetDataNumber">${usersAvgSteps} steps
    </div>`;
  return newRepo;
};

function createNewUser() {
  createUserArray(userData);
  const userObject = newRepo.getUserData(userId);
  aNewUser = new User(userObject);
  return aNewUser;
}

const addUser = () => {
  createNewUser(userData);
  userName.innerText = aNewUser.name;
  userAddress.innerText = aNewUser.address;
  userStrideLength.innerText = `Stride length: ${aNewUser.strideLength}`;
  userDailyStepGoal.innerText = `Steps: ${aNewUser.dailyStepGoal}`;
  userEmail.innerText = aNewUser.email;
  userFirstName.innerText = `Hi ${aNewUser.getFirstName()}!`;
};

const instantiateSleep = () => {
  userSleepData = new Sleep(sleepData);
  return userSleepData;
};

const displayDailySleep = () => {
  let user1 = userSleepData.getUserData(1).reverse();
  let lastNightDate = user1[0].date;
  dailySleepHours.innerHTML = `
    <div id="widgetTitle">Hours slept last night: 
    <BR></BR>
        <div class="widgetDataNumber">${userSleepData.getHoursSleptOnDay(1,lastNightDate)} hours
        </div>
    </div>`;
  dailySleepQuality.innerHTML = `
    <div id="widgetTitle">Sleep quality last night: 
    <BR></BR>
        <div class="widgetDataNumber">${userSleepData.getSleepQualityOnDay(1,lastNightDate)}
        </div>
    </div>`;
};

const displayWeeklySleep = () => {
  const user = userSleepData.getUserData(1).slice(-7);
  weeklySleepHours.innerHTML = `              
    <h4>Hours Slept Last Week
        <BR></BR>
        <div id="day1">${user[6].date} : ${user[6].hoursSlept} hours</div>
        <div id="day2">${user[5].date} : ${user[5].hoursSlept} hours</div>
        <div id="day3">${user[4].date} : ${user[4].hoursSlept} hours</div>
        <div id="day4">${user[3].date} : ${user[3].hoursSlept} hours</div>
        <div id="day5">${user[2].date} : ${user[2].hoursSlept} hours</div>
        <div id="day6">${user[1].date} : ${user[1].hoursSlept} hours</div>
    </h4>`;
};

const displayWeeklySleepQuality = () => {
  const user = userSleepData.getUserData(1).slice(-7);
  weeklySleepQuality.innerHTML = `              
    <h4>Sleep Quality Last Week
        <BR></BR>
        <div id="day1">${user[6].date} : ${user[6].sleepQuality}</div>
        <div id="day2">${user[5].date} : ${user[5].sleepQuality}</div>
        <div id="day3">${user[4].date} : ${user[4].sleepQuality}</div>
        <div id="day4">${user[3].date} : ${user[3].sleepQuality}</div>
        <div id="day5">${user[2].date} : ${user[2].sleepQuality}</div>
        <div id="day6">${user[1].date} : ${user[1].sleepQuality}</div>
    </h4>`;
};

const displayAvgAllTime = () => {
  const avgAllSleepQuality = userSleepData.avgSleepQuality(1);
  const avgAllSleepHours = userSleepData.avgHoursSleptPerDay(1);
  avgSleepHoursAllTime.innerHTML = `
    <div id="compareSleepQual">All-time average hours slept: 
        <div class="widgetDataNumber">${avgAllSleepHours} hours
        </div>
    </div>`
  avgSleepQualAllTime.innerHTML = `
    <div id="compareSleepHours">All-time average sleep quality:
        <div class="widgetDataNumber">${avgAllSleepQuality}
        </div>
    </div>`;
};

const displaySleepChart = () => {
  const usersSleepOverWeek = userSleepData.getUserData(1).slice(-7);
  hoursSleptOverWeekChart(usersSleepOverWeek);
  sleepQualityOverWeekChart(usersSleepOverWeek);
};
