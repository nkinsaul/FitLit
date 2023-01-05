class Activity {
    constructor(userId, activityDate, activityData) {
        this.userID = userId;
        this.date = activityDate;
        this.activityObj = this.getActivityObject(userId, activityDate, activityData);
        this.numSteps = activityObj.numSteps;
        this.minutesActive = activityObj.minutesActive;
        this.flightsOfStairs = activityObj.flightsOfStairs;
    }

    getActivityObject(userId, activityDate, activityData) {
        let currentActivityObject = activityData.find(element => {
           return (element.userID === userId) && (element.date === activityDate);
        });
        return currentActivityObject;
    }

    getMinutesActive() {
        return this.minutesActive;
    }
}

export default Activity;