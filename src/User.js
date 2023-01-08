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
        // console.log("activityRepo1: ", activityRepo1);
        this._activityData = activityRepo1.findUserActivityObjectsList(this.id);
        console.log("this._activityData: ", this._activityData);
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
}

export default User;