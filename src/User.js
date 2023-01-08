import ActivityRepo from "./ActivityRepo";

class User {
    constructor (userData) {
        this.id = userData.id;
        this.name = userData.name;
        this.address = userData.address;
        this.email = userData.email;
        this.strideLength = userData.strideLength;
        this.dailyStepGoal = userData.dailyStepGoal;
        this.friends = userData.friends;
        this._activityData;
    }

    getFirstName() {
        const splitName = this.name.split(' ');
        return splitName[0];
    }

    getUserActivityData(activityData) {
        const activityRepo1 = new ActivityRepo(activityData);
        this._activityData = activityRepo1.findUserActivityObjectsList(this.id);
        return this._activityData;
    }

    findStairClimbingRecord(activityData) {
        this.getUserActivityData(activityData);
        const record = this._activityData.map(activityObj => activityObj.flightsOfStairs).sort((a, b) => b - a);
        return record[0];
    }

    findWeekStepCount(activityData) {
        this.getUserActivityData(activityData);
        const stairsWeek = this._activityData.slice(-7);
        const steps = stairsWeek.reduce((acc, curr) => {
            acc += curr.numSteps;
            return acc;
        }, 0);
        return steps;
    }

    findWeekStairsCount(activityData) {
        this.getUserActivityData(activityData);
        const stairsWeek = this._activityData.slice(-7);
        const stairs = stairsWeek.reduce((acc, curr) => {
            acc += curr.flightsOfStairs;
            return acc;
        }, 0);
        return stairs;
    }

    findWeekMinutesActive(activityData) {
        this.getUserActivityData(activityData);
        const activeMinWeek = this._activityData.slice(-7);
        const minutes = activeMinWeek.reduce((acc, curr) => {
            acc += curr.minutesActive;
            return acc;
        }, 0);
        return minutes;
    }

    findWeekAvgMinutesActive(activityData) {
        this.getUserActivityData(activityData);
        const activeMinWeek = this._activityData.slice(-7);
        const minutes = activeMinWeek.reduce((acc, curr) => {
            acc += curr.minutesActive;
            return acc;
        }, 0);
        return Math.round(minutes/activeMinWeek.length);
    }

    calculateMilesToday(activityData) {
        this.getUserActivityData(activityData);
        const today = this._activityData.slice(-1);
        const stepLength = ((this.strideLength) * (today[0].numSteps));
        let miles = (stepLength) / 5280;
        let milesRounded = Math.round(miles * 100) / 100;
        return milesRounded;
    }

    getMinutesActiveOnDay(dateInput, activityData) {
        this.getUserActivityData(activityData);
        const locateDay = this._activityData.find(element => element.date === dateInput);
        return locateDay.minutesActive;
    }

    calculateStepGoalMet(dateInput, activityData) {
        this.getUserActivityData(activityData);
        const stepDayCheck = this._activityData.find(element => element.date === dateInput);
        if(stepDayCheck.numSteps >= this.dailyStepGoal) {
            return `On ${dateInput} you beat your step goal of ${this.dailyStepGoal} steps!`
        } else {
            return `On ${dateInput} you did not reach your step goal of ${this.dailyStepGoal} steps.`
        }
    }

    getDaysStepGoalMet(activityData) {
        this.getUserActivityData(activityData);
        let daysMet = [];
        this._activityData.forEach(element => {
            if(element.numSteps >= this.dailyStepGoal) {
                daysMet.push(element.date);
            }
        })
        return daysMet;
    }
}

export default User;