import Chart from "chart.js/auto";

Chart.defaults.color = '#386994';
Chart.defaults.borderColor = '#8eaebb';

const myChart = document.getElementById("hoursSleptOverWeek");

const mySecondChart = document.getElementById("sleepQualityOverWeek");

const myThirdChart = document.getElementById("hydrationDataChart");

const waterConsumedOverWeekChart = (userData) => {
  const waterChart = new Chart(myThirdChart, {
    type: "bar",
    data: {
      labels: [
        `${userData[0].date}`,
        `${userData[1].date}`,
        `${userData[2].date}`,
        `${userData[3].date}`,
        `${userData[4].date}`,
        `${userData[5].date}`,
        `${userData[6].date}`,
      ],
      datasets: [
        {
          label: "Water Consumed (by fluid ounces)",
          data: [
            userData[0].numOunces,
            userData[1].numOunces,
            userData[2].numOunces,
            userData[3].numOunces,
            userData[4].numOunces,
            userData[5].numOunces,
            userData[6].numOunces,
          ],
          borderWidth: 0.5,
          backgroundColor: [
            '#214457', '#214457', '#214457', '#214457', '#214457', '#214457', '#214457'
          ],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

const hoursSleptOverWeekChart = (userData) => {
  const sleepChart = new Chart(myChart, {
    type: "bar",
    data: {
      labels: [
        `${userData[0].date}`,
        `${userData[1].date}`,
        `${userData[2].date}`,
        `${userData[3].date}`,
        `${userData[4].date}`,
        `${userData[5].date}`,
        `${userData[6].date}`,
      ],
      datasets: [
        {
          label: "Hours Slept",
          data: [
            userData[0].hoursSlept,
            userData[1].hoursSlept,
            userData[2].hoursSlept,
            userData[3].hoursSlept,
            userData[4].hoursSlept,
            userData[5].hoursSlept,
            userData[6].hoursSlept,
          ],
          borderWidth: 0.5,
          backgroundColor: [
            '#214457', '#214457', '#214457', '#214457', '#214457', '#214457', '#214457'
          ],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

const sleepQualityOverWeekChart = (userData) => {
  const sleepChart = new Chart(mySecondChart, {
    type: "bar",
    data: {
      labels: [
        `${userData[0].date}`,
        `${userData[1].date}`,
        `${userData[2].date}`,
        `${userData[3].date}`,
        `${userData[4].date}`,
        `${userData[5].date}`,
        `${userData[6].date}`,
      ],
      datasets: [
        {
          label: "Sleep Quality",
          data: [
            userData[0].sleepQuality,
            userData[1].sleepQuality,
            userData[2].sleepQuality,
            userData[3].sleepQuality,
            userData[4].sleepQuality,
            userData[5].sleepQuality,
            userData[6].sleepQuality,
          ],
          borderWidth: 1,
          backgroundColor: [
            '#214457', '#214457', '#214457', '#214457', '#214457', '#214457', '#214457'
          ],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

export { waterConsumedOverWeekChart };
export { hoursSleptOverWeekChart };
export { sleepQualityOverWeekChart };
