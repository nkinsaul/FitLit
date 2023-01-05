import { expect } from "chai";
import ActivityRepo from "../src/ActivityRepo";

describe("ActivityRepo", () => {
    let activityRepo1;
    let smallActivityData = [
        {
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16
        },
        {
        userID: 2,
        date: "2019/06/15",
        numSteps: 4294,
        minutesActive: 138,
        flightsOfStairs: 10
        },
        {
        userID: 3,
        date: "2019/06/15",
        numSteps: 7402,
        minutesActive: 116,
        flightsOfStairs: 33
        }
    ];

    beforeEach(function() {
        activityRepo1 = new ActivityRepo(smallActivityData);
    })

    it("Should be a function that is an instanceOf Activity", () => {
        expect(ActivityRepo).to.be.a('function');
        expect(activityRepo1).to.be.an.instanceOf(ActivityRepo);

    })

    it("Should have a property to store activityData", () => {
        expect(activityRepo1.activityData).to.deep.equal(smallActivityData);
    })

    //method7 get for all users avg stairs on a date (pass in date param)
    //method8 get for all users avg steps on a date (pass in date param)
    //method9 get for all users avg minutesActive on a date (pass in date param)

    //method6 find all-time stair-climbing record for 1 user (taking in one userID, get their data from ActivityRepo)
        //--> could sort() and get index position 0?
        //--> since this is iterating over all the data for one User, should it be done here? We could have a method to make an array of Objects for one user taking in a userID, then that could be manipulated for a User's averages. So what class should handle one User's array of data?
        //--> maybe instantiate ActivityRepo in User.js, to call the method to get one User's activity profile(array of objects with the userID), then
        //-----> method6.5 in User.js to instantiate ActivityRepo, call the ActivityRepo method to filter for one user, return an array of objects to represent the User's activity data. Then in User.js make this function a property. Then refer to this property as needed to find one user's averages

})