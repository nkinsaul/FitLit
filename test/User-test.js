import { expect } from 'chai';
import User from '../src/User';
import userData from '../src/data/users';


describe ("User", function() {
    let user1; 
    beforeEach(function() {
        user1 = new User(userData[0])
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
        //method 1 to instantiate ActivityRepo, call the ActivityRepo method to filter for one user, return an array of objects to represent the User's activity data. Then in User.js make this function a property (see prompt below). Then refer to this property as needed to find one user's averages.
    });

    it("Should have a property this._activityData to store the ActivityRepo's method return of one user's activity data array with a value that stores the return of getUserActivityData method", () => {
        //since this property isn't in the constructor upon instantiation, it is developer habit to include an underscore like in this prompt^  with "this._activityData"
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