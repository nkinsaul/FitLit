class Hydration {
    constructor(id, hydrationData) {
         this.userID = id;
         this.dataSet = hydrationData;
    }

    getOneUserData(hydrationData) {
        let oneUserArray = hydrationData.filter(element => {
            return this.userID === element.userID;
        });
        this._oneUserH2ODataSet = oneUserArray;
        return  this._oneUserH2ODataSet;

    }

    getAvgConsumed() {
        let ouncesConsumedPerDay = this.dataSet.filter(element => element.userID === this.userID).map(element => element.numOunces);
        let ouncesConsumedPerDayLength = ouncesConsumedPerDay.length;
        let ouncesConsumedPerDayTotal = ouncesConsumedPerDay.reduce((accumulator, currentValue) => {
          accumulator += currentValue
          return accumulator;
        }, 0);
        return Math.round(ouncesConsumedPerDayTotal / ouncesConsumedPerDayLength);
    }

    getOneDayTotal(oneDay) {
        let ouncesByDate =  this._oneUserH2ODataSet.find(element => element.date === oneDay);
        return ouncesByDate.numOunces;
    } 

    getToday() {
        let currentDay =  this._oneUserH2ODataSet.slice(-1)[0].numOunces;
        return currentDay;
    }

    getOneWeekTotal() {
        let waterWeek =  this._oneUserH2ODataSet.slice(-7);
        return waterWeek;
    }
}

export default Hydration;