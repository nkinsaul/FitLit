import { expect } from 'chai';
import User from '../src/User';
import userData from '../src/data/users';
import ActivityRepo from '../src/ActivityRepo';


describe ("User", function() {
    let user1; 
    let user2;
    let activityRepo1;
    const userData = [
        {
          "id": 1,
          "name": "Luisa Hane",
          "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
          "email": "Diana.Hayes1@hotmail.com",
          "strideLength": 4.3,
          "dailyStepGoal": 10000,
          "friends": [
            16,
            4,
            8
          ]
        },
        {
          "id": 2,
          "name": "Jarvis Considine",
          "address": "30086 Kathryn Port, Ciceroland NE 07273",
          "email": "Dimitri.Bechtelar11@gmail.com",
          "strideLength": 4.5,
          "dailyStepGoal": 5000,
          "friends": [
            9,
            18,
            24,
            19
          ]
        } 
    ];
    const smallActivityData = [
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
        user1 = new User(userData[0])
        user2 = new User(userData[1])
        activityRepo1 = new ActivityRepo(smallActivityData);
    })

    it("should be a function", function() {
        expect(User).to.be.a('function');
    });

    it('should be an instance of User', function() {
        expect(user1).to.be.an.instanceOf(User);
    });

    it('should have an id', function() {
        expect(user1.id).to.equal(1);
    });

    it('should have a name', function() {
        expect(user1.name).to.equal('Luisa Hane');
    });

    it('should have an address', function() {
        expect(user1.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697')
    });

    it('should have an email', function() {
        expect(user1.email).to.equal('Diana.Hayes1@hotmail.com');
    });

    it('should have a stride length', function() {
        expect(user1.strideLength).to.equal(4.3);
    });

    it('should have a daily step goal', function() {
        expect(user1.dailyStepGoal).to.equal(10000);
    });

    it('should have friends', function() {
        expect(user1.friends).to.deep.equal([16, 4, 8]);
    });

    it('should return users first name', function() {
        const firstName = user1.getFirstName();

        expect(firstName).to.equal('Luisa');
    });

    it("Should have a method getUserActivityData to instantiate an ActivityRepo to call a method from that class instance and get all of one user's activity data", () => {
        let method1Part1 = user1.getUserActivityData(smallActivityData);
        let method1Part2 = activityRepo1.findUserActivityObjectsList(1);
        expect(method1Part1 && method1Part2).to.have.deep.members([
            {
              userID: 1,
              date: '2019/06/15',
              numSteps: 3577,
              minutesActive: 140,
              flightsOfStairs: 16
            },
            {
              userID: 1,
              date: '2019/06/16',
              numSteps: 6637,
              minutesActive: 175,
              flightsOfStairs: 36
            }
          ]);
    });
        
    it("Should have a property this._activityData to store the ActivityRepo's method return of one user's activity data array with a value that stores the return of getUserActivityData method", () => {
        let method1Part3 = user2.getUserActivityData(smallActivityData);
        let method1Part4 = activityRepo1.findUserActivityObjectsList(2);
        expect(user2._activityData).to.be.a.property;
        expect(method1Part3 && method1Part4).to.have.deep.members([
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
            }])
    });
    

    it("Should have a method to find the all-time stair climbing record for the user using the this.activityData", () => {
        //method2 to find all-time stair-climbing record for 1 user
        //--> could sort() and get index position 0?
    });

    it("Should have a method to get the step count for the past week using this.activityData", () => {
        //method3 to get stepCount for past week (for function 6 on dash)
    });

    it("Should have a method to get the stairs climbed for the past week using this.activityData", () => {
        //method4 to get stairsClimbned for past week (for function 6 on dash)
    });

    it("Should have a method to get the minutes active for the past week using this.activityData", () => {
        //method5 to get minutesActive for past week (for function 6 on dash)
    });

    it("Should have a method to calculate the miles a user has walked", () => {
        //--> method6: is this for a particular day, week, or all time?
        //--> do we need a mile calculation?
        //--> #steps(from Activity) + strideLength(from User) to calculate
    });

    it("Should get minutes active on a particular date", () => {
        //method7 to get minutes active on a date:
        //find the date in the user activity list and instantiate the Activity to call the minutesActive property
    });

    it("Should have a method to calculate if the step goal was met for a given date passed as a parameter", () => {
        //method8 to calculate step goal met for a given date (pass in date parameter?)
            //--> User.dailyStepGoal + Activity.numSteps   
    })
    
    it("Should have a method to get all the days the user's step goal was exceeded", () => {
        //method9 to get all days exceeded step goal (call method4?)    
    });
});