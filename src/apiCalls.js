// fetch requests 👇🏻

const fetchData = (urlPath) => {
    return fetch(`http://localhost:3001/api/v1/${urlPath}`)
            .then(response => response.json());
}

const addSleepData = (userID, date, hoursSlept, sleepQuality) => {
    fetch('http://localhost:3001/api/v1/sleep', {
        method: "POST",
        body: JSON.stringify({ 
            userID: userID, 
            date: date, 
            hoursSlept: hoursSlept, 
            sleepQuality: sleepQuality  
            }),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

const addHydrationData = (userID, date, numOunces) => {
    fetch('http://localhost:3001/api/v1/hydration', {
        method: "POST",
        body: JSON.stringify({ 
            userID: userID, 
            date: date, 
            numOunces: numOunces 
            }),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

const addActivityData = (userID, date, numSteps, minutesActive, flightsOfStairs) => {
    fetch('http://localhost:3001/api/v1/activity', {
        method: "POST",
        body: JSON.stringify({ 
            userID: userID, 
            date: date,
            numSteps: numSteps,
            minutesActive: minutesActive,
            flightsOfStairs: flightsOfStairs
            }),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

export {fetchData};
export {addSleepData};
export {addHydrationData};
export {addActivityData};