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
        debugger;
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
        let today = this._oneUserDataSet.slice(-1);
        this.today = today[0].numOunces;
        return this.today;
    }

    getOneWeekTotal() {
        // TODO(): You need to turn the week array into some string
        // that will get added to innertext
        let waterWeek = this._oneUserDataSet.slice(-7).map(element => element.numOunces);
        return waterWeek;
    }
}

export default Hydration;