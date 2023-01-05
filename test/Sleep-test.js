import Sleep from '../src/Sleep'
import sleepData from '../src/data/Sleep-data'
import { expect } from 'chai';

describe('Sleep', () => {
    let sleep1;

    beforeEach(function () {
        sleep1 = new Sleep(sleepData);
    });

    it('should be a function', () => {
        expect(Sleep).to.be.a('function');
    });

    it('should be an instance of Sleep', () => {
        expect(sleep1).to.be.an.instanceOf(Sleep);
    });

    it('should store the sleep data', () => {
        expect(sleep1.sleepData).to.deep.equal(sleepData);
    });
    
    it('should have a method that returns the sleep data for 1 user', () => {
        let getAvgHours = sleep1.avgHoursSleptPerDay(1);
        expect(getAvgHours).to.equal(6)
    });

    it('should have a method that returns the average sleep quality for 1 user', () => {
        let getAvgSleepQual = sleep1.avgSleepQuality(1);
        expect(getAvgSleepQual).to.equal(5)
    });

    it('should have a method that returns the hours slept for 1 user on a given date', () => {
        let getOneDayHoursSlept = sleep1.getHoursSleptOnDay(1, '2019/06/15')
        expect(getOneDayHoursSlept).to.equal(6.1)
    });

    it('should have a method that returns the sleep quality for 1 user on a given date', () => {
        let getOneDaySleepQual = sleep1.getSleepQualityOnDay(1, '2019/06/15')
        expect(getOneDaySleepQual).to.equal(2.2)
    });

    it('should have a method that return the hours slept over 7 days', () => {
        let getSleepWeek = sleep1.getHoursSleptOverWeek(1, '2019/06/15')
        expect(getSleepWeek).to.deep.equal([6.1, 5.1, 6.1, 10.1, 8.1, 4.5, 4.5])
    });

    it('should have a method that return the sleep quality over 7 days', () => {
        let getSleepWeekQual = sleep1.getSleepQualityOverWeek(1, '2019/06/15')

        expect(getSleepWeekQual).to.deep.equal([ 2.2, 1.2, 4.2, 7.2, 8.5, 6.5,6.5])
    });

    it('should average sleep quality between all users', () => {
        let usersSleepQualityAvg = sleep1.getSleepQualityAllUsers()
        expect(usersSleepQualityAvg).to.equal(5.3);
    })

})