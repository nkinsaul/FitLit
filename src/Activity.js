class Activity {
    constructor(userId, activityDate, activityData) {
        this.userID = userId;
        this.date = activityDate;
        this.activityObj = this.getActivityObject(userId, activityDate, activityData);
        this.numSteps = this.activityObj.numSteps;
        this.minutesActive = this.activityObj.minutesActive;
        this.flightsOfStairs = this.activityObj.flightsOfStairs;
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