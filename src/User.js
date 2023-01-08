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
        // console.log("this._activityData: ", this._activityData);
        return this._activityData;
    }
}

export default User;