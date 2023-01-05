import { expect } from "chai";
import Activity from "../src/Activity";

describe("Activity", () => {
    let activity1;
    let activityObject = {
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16
    };
    let activityData1 = [
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
        flightsOfStairs: 8
        },
    ];
    beforeEach(function() {
        activity1 = new Activity(1, "2019/06/15", activityData1);
    })

    it("Should be a function that is an instanceOf Activity", () => {
        expect(Activity).to.be.a('function');
        expect(activity1).to.be.an.instanceOf(Activity);

    })

    it("Should have a property to store a userID that is passed in as a parameter", () => {
        expect(activity1.userID).to.be.equal(1);
    })

    it("Should have a property that stores an activity date", () => {
        expect(activity1.date).to.be.equal("2019/06/15");
    })

    it("Should have a property to store the number of steps for this.date", () => {
        expect(activity1.numSteps).to.be.equal(3577);
    })

    it("Should have a property to store the minutes active on this.date", () => {
        expect(activity1.minutesActive).to.be.equal(140);
    })

    it("Should have a property to record flights of stairs taken on this.date", () => {
        expect(activity1.flightsOfStairs).to.be.equal(16);
    })

    it("Should have a method to return minutes active on this activity's date", () => {
        let getMinActive = activity1.getMinutesActive();
        //do we really need this method, or can we just refer to the minutesActive property?
        expect(getMinActive).to.be.equal(140)
    })

    it("Should have a method to find its own activity object using userID and date arguments passed in as parameters", () => {
        let foundActivityObject = activity1.getActivityObject(1, "2019/06/15");
        expect(foundActivityObject).to.be.equal({
            userID: 1,
            date: "2019/06/15",
            numSteps: 3577,
            minutesActive: 140,
            flightsOfStairs: 16
        });
    });

    it("Should store the result of the getActivityObject method as a parameter", () => {
        expect(this.activityObject).to.be.equal(activityObject);
        expect(this.activityObject).to.be.equal({
            userID: 1,
            date: "2019/06/15",
            numSteps: 3577,
            minutesActive: 140,
            flightsOfStairs: 16
        });
    });
 
})