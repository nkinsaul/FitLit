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

});