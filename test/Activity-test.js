import { expect } from "chai";
import Activity from "../src/Activity";

describe("Activity", () => {
    let activity1;
    let activityObject =         {
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16
        };
    let activityData = [
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
        activity1 = new Activity(1, activityObject);
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

    //method1 miles a user has walked 
        //--> do we need a mile calculation?
        //--> #steps(from Activity) + striedLength(from User) to calculate

    //method2 get minutes active on a date
    
    //method3 get average minutes active for a week
        //--> helper function to get a week of data to iterate over?

    //method4 calculate step goal met for a given date (pass in date parameter?)
        //--> User.dailyStepGoal + Activity.numSteps   
    
    //method5 get all days exceeded step goal (call method4?)

    //method6 find all-time stair-climbing record 
        //--> could sort() and get index position 0?

    //method7 get for all users avg stairs on a date (pass in date param)
    //method8 get for all users avg steps on a date (pass in date param)
    //method9 get for all users avg minutesActive on a date (pass in date param)

    //method 10 get stepCount for past week (for function 6 on dash)
    //method 11 get stairsClimbned for past week (for function 6 on dash)
    //method 12 get minutesActive for past week (for function 6 on dash)

    
})