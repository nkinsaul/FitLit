class Hydration {
    constructor(id, hydrationData) {
         this.userID = id;
         this.dataSet = hydrationData;
    }

    getOneUserData(hydrationData) {
        let oneUserArray = hydrationData.filter(element => {
            if (this.userID === element.userID) {
                return element;
            }
        });
        this._oneUserDataSet = oneUserArray;
        return this._oneUserDataSet;
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

    getOneDayTotal(thisDate) {
        let ouncesByDate = this._oneUserDataSet.find(element => element.date === thisDate);
        return ouncesByDate.numOunces;
    } 

    getToday() {
        console.log(this._oneUserDataSet.slice(-1));
        let currentDay = this._oneUserDataSet.slice(-1)[0].numOunces;
        console.log(currentDay);
        return currentDay;
    }

    getOneWeekTotal() {
        let waterWeek = this._oneUserDataSet.slice(-7);
        console.log(waterWeek);
        return waterWeek;
    }
}

export default Hydration;