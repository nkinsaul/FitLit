import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import userData from '../src/data/users';

describe('User Repository', () => {
  let userRepo1; 
  beforeEach(function () {
    const user1 = new User(userData[0]);
    const user2 = new User(userData[1]);
    const user3 = new User(userData[2]);
    userRepo1 = new UserRepository([user1, user2, user3]);
  });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of user repository', function() {
    expect(userRepo1).to.be.an.instanceOf(UserRepository);
  });

  it('should store users data', function() {
    expect(userRepo1.users).to.deep.equal([userData[0], userData[1], userData[2]]);
  });

  it('should have an average step goal', function() {
    expect(userRepo1.avgStepGoal()).to.equal(6667);
  });

  it('should find a user by their id', function() {
    expect(userRepo1.getUserData(2)).to.deep.equal(userData[1])
  });

  it('should find a different user by their id', function() {
    expect(userRepo1.getUserData(3)).to.deep.equal(userData[2]);
  });

  it('should be able to add new users', function() {
    const user4 = new User(userData[3]);
    userRepo1.addNewUser(user4);
    
    expect(userRepo1.users).to.deep.equal([userData[0], userData[1], userData[2], userData[3]]);
  });

});