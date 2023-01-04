import { expect } from 'chai';
import Hydration from '../src/Hydration.js';

describe ("Hydration", function() {
    let hydration1;
    let id;
    let miniHydrationData = [{
        userID: 3,
        date: "2019/06/15",
        numOunces: 47
        },
        {
        userID: 3,
        date: "2019/06/16",
        numOunces: 99
        },
        {
        userID: 3,
        date: "2019/06/17",
        numOunces: 28
        },
        {
        userID: 3,
        date: "2019/06/18",
        numOunces: 40
        },    
        {
        userID: 3,
        date: "2019/06/19",
        numOunces: 85
        },    
        {
        userID: 3,
        date: "2019/06/20",
        numOunces: 51
        },  
        {
        userID: 3,
        date: "2019/06/21",
        numOunces: 41
        },
    ];
    let miniHydrationData2 = [{
        userID: 3,
        date: "2019/06/15",
        numOunces: 47
        },
        {
        userID: 3,
        date: "2019/06/16",
        numOunces: 99
        },
        {
        userID: 1,
        date: "2019/06/16",
        numOunces: 98
        },
        {
        userID: 3,
        date: "2019/06/17",
        numOunces: 28
        },
        {
        userID: 3,
        date: "2019/06/18",
        numOunces: 40
        },    
        {
        userID: 3,
        date: "2019/06/19",
        numOunces: 85
        },    
        {
        userID: 3,
        date: "2019/06/20",
        numOunces: 51
        },  
        {
        userID: 3,
        date: "2019/06/21",
        numOunces: 41
        },
    ];
    beforeEach(function() {
        id = 3;
        hydration1 = new Hydration(3, miniHydrationData);
        hydration1.getOneUserData(miniHydrationData2);
    });
    
    it('should be a function', function() {
        expect(Hydration).to.be.a('function');
    });

    it('should instantiate our good Friend Hydration', function() {
        expect(hydration1).to.be.an.instanceOf(Hydration);
    })

    it('should have a userID', function() {
        expect(hydration1.userID).to.deep.equal(miniHydrationData[0].userID);
    });

    it('should receive information from a data set', function() {
        expect(hydration1.dataSet).to.deep.equal(miniHydrationData)
    });

    it('should have a property to store a data set for one user', function() {
        expect(hydration1.oneUserDataSet).to.be.a.property;
    });

    it('should have a property to store a date for today', function() {
        expect(hydration1.today).to.be.a.property;
    });

    it('should have a method to create a hydration data set for a particular user', function() {
        const oneUserDataSet = hydration1.getOneUserData(miniHydrationData2);
        expect(oneUserDataSet).to.deep.equal(miniHydrationData);
    });

    it('should have a method to return the average fluid ounces consumed per day by a user for all time', function() {
        const averageHydrationPerDay = hydration1.getAvgConsumed();
        expect(averageHydrationPerDay).to.equal(56);
    });

    it('should have a method to return the ounces water consumed for a particular date passed as an argument', function() {
        const ouncesConsumedByDate = hydration1.getOneDayTotal("2019/06/15");
        expect(ouncesConsumedByDate).to.equal(47);
    });

    it('should have a method to return the date for today', function() {
        const numOuncesToday = hydration1.getToday();
        expect(numOuncesToday).to.equal(41);
    });

    it('should have a method to return the user hydration for the most recent 7 days', function() {
        const ouncesConsumedInAWeek = hydration1.getOneWeekTotal();
        expect(ouncesConsumedInAWeek[0]).to.be.deep.equal( { userID: 3, date: '2019/06/15', numOunces: 47 });
    });
});
