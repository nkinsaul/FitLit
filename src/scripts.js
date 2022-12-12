// imports 👇🏻


import "./images/turing-logo.png";
import "./css/styles.css";
import User from "./User";
import UserRepository from "./UserRepository";
import Sleep from "./Sleep";
import { fetchUserData } from "./apiCalls";
import { fetchSleepData } from "./apiCalls";
import { fetchHydrationData } from "./apiCalls";
import { waterConsumedOverWeekChart } from "./Chart"
import { hoursSleptOverWeekChart } from "./Chart";
import { sleepQualityOverWeekChart } from "./Chart";
import Hydration from './Hydration';

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
const dailyWater = document.getElementById("dailyWater");
const weeklyWater = document.getElementById("weeklyWater");
const avgSleepHoursAllTime = document.getElementById("avgSleepHoursAllTime");
const avgSleepQualAllTime = document.getElementById("avgSleepQualAllTime");

// global variables 👇🏻

let newRepo;
let aNewUser;
let randomUserId;
let usersAvgSteps;
let userData;
let hydrationData;
let sleepData;
let waterProfile;
let userSleepData;

// event listeners 👇🏻

// functions 👇🏻

Promise.all([fetchUserData(), fetchSleepData(), fetchHydrationData()]).then(
  (data) => {
    userData = data[0].userData;
    sleepData = data[1].sleepData;
    hydrationData = data[2].hydrationData;
    instantiateSleep(sleepData);
    createWaterProfile(1, hydrationData);
    onLoad(hydrationData, userData);
});

const generateRandomUserId = () => {
    randomUserId = Math.floor(Math.random() * 50)
}

function onLoad(hydrationData, userData) {
    generateRandomUserId();
    addUser(userData);
    waterForAddUserFunc(hydrationData, randomUserId);
    displayDailySleep();
    displayWeeklySleep();
    displayWeeklySleepQuality();
    displayAvgAllTime();
    displayCharts();
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
  const userObject = newRepo.getUserData(randomUserId);
  aNewUser = new User(userObject);
  return aNewUser;
}

const addUser = () => {
  createNewUser(userData);
  userName.innerHTML = `<span class="widgetDataNumberMiniSize">${aNewUser.name}</span>`;
  userAddress.innerHTML = `<span class="widgetDataNumberMiniSize">${aNewUser.address}</span>`;
  userStrideLength.innerHTML = `Stride length: <span class="widgetDataNumberMiniSize">${aNewUser.strideLength}</span>`;
  userDailyStepGoal.innerHTML = `Steps: <span class="widgetDataNumberMiniSize">${aNewUser.dailyStepGoal}</span>`;
  userEmail.innerHTML = `<span class="widgetDataNumberMiniSize">${aNewUser.email}</span>`;
  userFirstName.innerHTML = `Hi, ${aNewUser.getFirstName()}!`;
};

function waterForAddUserFunc (hydrationData, randomUserId) {
    createWaterProfile(randomUserId, hydrationData);
    waterTodayWidget(waterProfile);
    waterThisWeekWidget(waterProfile);
}

function createWaterProfile (randomUserId, hydrationData) {
    waterProfile = new Hydration(randomUserId, hydrationData);
    waterProfile.getOneUserData(hydrationData);
}

function waterTodayWidget (waterProfile) {
    const todayWidgetData = waterProfile.getToday();
    dailyWater.innerHTML = `
    <div id="widgetTitle">Amount of water consumed today: 
    <BR></BR>
        <div class="widgetDataNumber">${todayWidgetData} fl. oz.
        </div>
    </div>`;
}

function waterThisWeekWidget (waterProfile) { 
    const weekWidgetData = waterProfile.getOneWeekTotal();
    console.log('weekWidgetData', weekWidgetData)
    weeklyWater.innerHTML = `
      <div id="widgetTitle">Amount of water consumed last week:
        <BR></BR>
        <div id="day1">${weekWidgetData[6].date}: <span class="widgetDataNumberMiniSize">${weekWidgetData[6].numOunces} fl. oz.</span></div>
        <div id="day2">${weekWidgetData[5].date}: <span class="widgetDataNumberMiniSize">${weekWidgetData[5].numOunces} fl. oz.</span></div>
        <div id="day3">${weekWidgetData[4].date}: <span class="widgetDataNumberMiniSize">${weekWidgetData[4].numOunces} fl. oz.</span></div>
        <div id="day4">${weekWidgetData[3].date}: <span class="widgetDataNumberMiniSize">${weekWidgetData[3].numOunces} fl. oz.</span></div>
        <div id="day5">${weekWidgetData[2].date}: <span class="widgetDataNumberMiniSize">${weekWidgetData[2].numOunces} fl. oz.</span></div>
        <div id="day6">${weekWidgetData[1].date}: <span class="widgetDataNumberMiniSize">${weekWidgetData[1].numOunces} fl. oz.</span></div>
        <div id="day6">${weekWidgetData[0].date}: <span class="widgetDataNumberMiniSize">${weekWidgetData[0].numOunces} fl. oz.</span></div>
      </div>`;
};

const instantiateSleep = () => {
  userSleepData = new Sleep(sleepData);
  return userSleepData;
};

const displayDailySleep = () => {
  let user1 = userSleepData.getUserData(randomUserId).reverse();
  let lastNightDate = user1[0].date;
  dailySleepHours.innerHTML = `
    <div id="widgetTitle">Hours slept last night: 
    <BR></BR>
        <div class="widgetDataNumber">${userSleepData.getHoursSleptOnDay(randomUserId,lastNightDate)} hours
        </div>
    </div>`;
  dailySleepQuality.innerHTML = `
    <div id="widgetTitle">Sleep quality last night: 
    <BR></BR>
        <div class="widgetDataNumber">${userSleepData.getSleepQualityOnDay(randomUserId,lastNightDate)}
        </div>
    </div>`;
};

const displayWeeklySleep = () => {
  const user = userSleepData.getUserData(randomUserId).slice(-7);
  weeklySleepHours.innerHTML = `              
    <div id="widgetTitle">Hours slept last week:
        <BR></BR>
        <div id="day1">${user[6].date}: <span class="widgetDataNumberMiniSize">${user[6].hoursSlept} hours</span></div>
        <div id="day2">${user[5].date}: <span class="widgetDataNumberMiniSize">${user[5].hoursSlept} hours</span></div>
        <div id="day3">${user[4].date}: <span class="widgetDataNumberMiniSize">${user[4].hoursSlept} hours</span></div>
        <div id="day4">${user[3].date}: <span class="widgetDataNumberMiniSize">${user[3].hoursSlept} hours</span></div>
        <div id="day5">${user[2].date}: <span class="widgetDataNumberMiniSize">${user[2].hoursSlept} hours</span></div>
        <div id="day6">${user[1].date}: <span class="widgetDataNumberMiniSize">${user[1].hoursSlept} hours</span></div>
    </div>`;
};

const displayWeeklySleepQuality = () => {
  const user = userSleepData.getUserData(randomUserId).slice(-7);
  weeklySleepQuality.innerHTML = `              
    <div id="widgetTitle">Sleep quality last week:
        <BR></BR>
        <div id="day1">${user[6].date}: <span class="widgetDataNumberMiniSize">${user[6].sleepQuality}</span></div>
        <div id="day2">${user[5].date}: <span class="widgetDataNumberMiniSize">${user[5].sleepQuality}</span></div>
        <div id="day3">${user[4].date}: <span class="widgetDataNumberMiniSize">${user[4].sleepQuality}</span></div>
        <div id="day4">${user[3].date}: <span class="widgetDataNumberMiniSize">${user[3].sleepQuality}</span></div>
        <div id="day5">${user[2].date}: <span class="widgetDataNumberMiniSize">${user[2].sleepQuality}</span></div>
        <div id="day6">${user[1].date}: <span class="widgetDataNumberMiniSize">${user[1].sleepQuality}</span></div>
    </div>`;
};

const displayAvgAllTime = () => {
  const avgAllSleepQuality = userSleepData.avgSleepQuality(randomUserId);
  const avgAllSleepHours = userSleepData.avgHoursSleptPerDay(randomUserId);
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

const displayCharts = () => {
  const usersSleepOverWeek = userSleepData.getUserData(randomUserId).slice(-7);
  const usersHydrationOverWeek = waterProfile.getOneUserData(hydrationData).slice(-7);
  hoursSleptOverWeekChart(usersSleepOverWeek);
  sleepQualityOverWeekChart(usersSleepOverWeek);
  waterConsumedOverWeekChart(usersHydrationOverWeek);
};
