import { expect } from "chai";
import ActivityRepo from "../src/ActivityRepo";

describe("ActivityRepo", () => {
    let activityRepo1;
    let userID = 2;
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
        },
        {
        userID: 1,
        date: "2019/06/16",
        numSteps: 6637,
        minutesActive: 175,
        flightsOfStairs: 36
        },
        {
        userID: 2,
        date: "2019/06/16",
        numSteps: 4112,
        minutesActive: 220,
        flightsOfStairs: 37
        },
        {
        userID: 3,
        date: "2019/06/16",
        numSteps: 12304,
        minutesActive: 152,
        flightsOfStairs: 17
        },
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
        let method1 = activityRepo1.findAvgStairsClimbedOneDay("2019/06/16");
        expect(method1).to.be.equal(30);
    });

    it("Should have a method that takes in a parameter of a date and gets the average steps for all users on that specific date", () => {
        let method2 = activityRepo1.findAvgStepsOneDay("2019/06/16");
        expect(method2).to.be.equal(7684);
    });

    it("Should have a method that takes in a parameter of a date and gets the average minutes active for all users on that specific date", () => {
        let method3 = activityRepo1.findAvgMinActive("2019/06/16");
        expect(method3).to.be.equal(182);
    });

    it("Should have a method that takes in a parameter of a userID to find all the activity date for that one user", () => {
        let method4 = activityRepo1.findUserActivityObjectsList(userID);
        expect(method4).to.have.deep.members([
            {userID: 2,
            date: "2019/06/15",
            numSteps: 4294,
            minutesActive: 138,
            flightsOfStairs: 10
            },
            {
            userID: 2,
            date: "2019/06/16",
            numSteps: 4112,
            minutesActive: 220,
            flightsOfStairs: 37
            }]);
    });
});