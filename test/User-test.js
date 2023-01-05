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

        //method6 find all-time stair-climbing record for 1 user
        //--> could sort() and get index position 0?
        //--> since this is iterating over all the data for one User, should it be done here? We could have a method to make an array of Objects for one user taking in a userID, then that could be manipulated for a User's averages. So what class should handle one User's array of data?
        //--> maybe instantiate ActivityRepo in User, to call the method to get one User's activity profile(array of objects with the userID), then
        //-----> method in User.js to instantiate ActivityRepo, call the ActivityRepo method to filter for one user, return an array of objects to represent the User's activity data. Then in User.js make this function a property. Then refer to this property as needed to find one user's averages

//--> use the parameter to get the last 7 index positions for the following methods:
        //method10 get stepCount for past week (for function 6 on dash)
        //method11 get stairsClimbned for past week (for function 6 on dash)
        //method12 get minutesActive for past week (for function 6 on dash)

        //method1 miles a user has walked 
        //--> do we need a mile calculation?
        //--> #steps(from Activity) + striedLength(from User) to calculate
        //--> instantiate user here for the stridelength using the userID passed in
        //--> how to use User class in Activity class? Also add activity profile to User? add methods to User?
        //could instead instantiate Activity in User class to be less destructive? use this.id that way?

        //method2 get minutes active on a date:
            //find the date in the user activity list and instantiate the Activity to call the minutesActive property

            //method3 get average minutes active for a week
        //--> helper function to get a week of data to iterate over?

    //method4 calculate step goal met for a given date (pass in date parameter?)
        //--> User.dailyStepGoal + Activity.numSteps   
    
    //method5 get all days exceeded step goal (call method4?)    
});