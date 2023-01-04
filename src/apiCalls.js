// fetch requests 👇🏻

const fetchData = (urlPath) => {
    return fetch(`http://localhost:3001/api/v1/${urlPath}`)
            .then(response => response.json());
}

const addSleepData = (userID) => {
    fetch('http://localhost:3001/api/v1/sleep', {
        method: "POST",
        body: JSON.stringify({ 
            userID: userID, 
            date: "12/12/2022" , 
            hoursSlept: 5.5 , 
            sleepQuality: 6.6  
            }),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

const addHydrationData = (userID) => {
    fetch('http://localhost:3001/api/v1/hydration', {
        method: "POST",
        body: JSON.stringify({ 
            userID: userID, 
            date: "12/12/2022" , 
            numOunces: 37 
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