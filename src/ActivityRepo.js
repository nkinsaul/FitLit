class ActivityRepo {
    constructor(activityData) {
        this.activityData = activityData;
    }

    findAvgStairsClimbedOneDay(searchDate) {
        const stairsData = this.activityData.filter(element => element.date === searchDate).map(element => element.flightsOfStairs);
        const avgStairs = stairsData.reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0);
        return Math.round(avgStairs/(stairsData.length));
    }

    findAvgStepsOneDay(searchDate) {
        const stepsData = this.activityData.filter(element => element.date === searchDate).map(element => element.numSteps);
        const avgSteps = stepsData.reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0);
        return Math.round(avgSteps/(stepsData.length));
    }

    findAvgMinActive(searchDate) {
        const minActiveData = this.activityData.filter(element => element.date === searchDate).map(element => element.minutesActive);
        const avgMinActive = minActiveData.reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0);
        return Math.round(avgMinActive/(minActiveData.length));
    }

}


export default ActivityRepo;