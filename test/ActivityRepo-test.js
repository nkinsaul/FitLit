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
    });

    it("Should be a function that is an instanceOf Activity", () => {
        expect(ActivityRepo).to.be.a('function');
        expect(activityRepo1).to.be.an.instanceOf(ActivityRepo);

    });

    it("Should have a property to store activityData", () => {
        expect(activityRepo1.activityData).to.deep.equal(smallActivityData);
    });

    it("Should have a method that takes in a parameter of a date and gets the average stairs climbed for all users on that specific date", () => {
        //method7 get for all users avg stairs on a date (pass in date param)
    });

    it("Should have a method that takes in a parameter of a date and gets the average steps for all users on that specific date", () => {
        //method8 get for all users avg steps on a date (pass in date param)
    });

    it("Should have a method that takes in a parameter of a date and gets the average minutes active for all users on that specific date", () => {
        //method9 get for all users avg minutesActive on a date (pass in date param)
    });

    it("Should have a method that takes in a parameter of a userID to find all the activity date for that one user", () => {
        // We could have a method to make an array of Objects for one user taking in a userID, then that could be manipulated for a User's averages. Have ActivityRepo handle its data, then have User.js recieve that data for one user by instantiating ActivityRepo in a method, setting the one user's activity array as a property, and finding the averages for one user in User.js. 
    });
})