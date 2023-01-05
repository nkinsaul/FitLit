class Activity {
    constructor(userID, activityObj) {
        this.userID = activityObj.userID;
        this.date = activityObj.date;
        this.numSteps = activityObj.numSteps;
        this.minutesActive = activityObj.minutesActive;
        this.flightsOfStars = activityObj.flightsOfStars;
    }
}

export default Activity;