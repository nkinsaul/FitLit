class Activity {
    constructor(activityObj) {
        this.userID = activityObj.userID;
        this.date = activityObj.date;
        this.numSteps = activityObj.numSteps;
        this.minutesActive = activityObj.minutesActive;
        this.flightsOfStairs = activityObj.flightsOfStairs;
    }

    getMinutesActive() {
        return this.minutesActive;
    }
}

export default Activity;