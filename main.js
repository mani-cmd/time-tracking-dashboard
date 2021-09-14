import './scss/main.scss';

// let data = require('./data.json');

import data from './data.json';

let options = document.querySelectorAll('.option');
let choices = ['daily', 'weekly', 'monthly'];

options.forEach(option => {
    option.addEventListener('click', e => {
        // Removing the Active class from the options
        let parentList = document.querySelector('#option-list');
        parentList.querySelector('.active').classList.remove('active');

        // Changing the text in the Card through this function
        theDataHandler(e.target.innerText.toLowerCase());

        // adding active class list to the event target
        e.target.classList.add('active');
    });
});

let workHours = document.querySelector('.work .hours');
let workPreviousHours = document.querySelector('.work .last-info');

let playHours = document.querySelector('.play .hours');
let playPreviousHours = document.querySelector('.play .last-info');

let studyHours = document.querySelector('.study .hours');
let studyPreviousHours = document.querySelector('.study .last-info');

let exerciseHours = document.querySelector('.exercise .hours');
let exercisePreviousHours = document.querySelector('.exercise .last-info');

let socialHours = document.querySelector('.social .hours');
let socialPreviousHours = document.querySelector('.social .last-info');

let selfCareHours = document.querySelector('.self-care .hours');
let selfCarePreviousHours = document.querySelector('.self-care .last-info');

function theDataHandler(element) {
    // For days
    if (element === choices[0]) {
        // work
        workHours.innerText = `${data[0].timeframes.daily.current}hrs`;
        workPreviousHours.innerText = `Yesterday - ${data[0].timeframes.daily.previous}hrs`;

        // play
        playHours.innerText = `${data[1].timeframes.daily.current}hrs`;
        playPreviousHours.innerText = `Yesterday - ${data[1].timeframes.daily.previous}hrs`;

        // study
        studyHours.innerText = `${data[2].timeframes.daily.current}hrs`;
        studyPreviousHours.innerText = `Yesterday - ${data[2].timeframes.daily.previous}hrs`;

        // exercise
        exerciseHours.innerText = `${data[3].timeframes.daily.current}hrs`;
        exercisePreviousHours.innerText = `Yesterday - ${data[3].timeframes.daily.previous}hrs`;

        // social
        socialHours.innerText = `${data[4].timeframes.daily.current}hrs`;
        socialPreviousHours.innerText = `Yesterday - ${data[4].timeframes.daily.previous}hrs`;

        // self-care
        selfCareHours.innerText = `${data[5].timeframes.daily.current}hrs`;
        selfCarePreviousHours.innerText = `Yesterday - ${data[5].timeframes.daily.previous}hrs`;
    }
    // for weeks
    if (element === choices[1]) {
        // work
        workHours.innerText = `${data[0].timeframes.weekly.current}hrs`;
        workPreviousHours.innerText = `Last week - ${data[0].timeframes.weekly.previous}hrs`;

        // play
        playHours.innerText = `${data[1].timeframes.weekly.current}hrs`;
        playPreviousHours.innerText = `Last week - ${data[1].timeframes.weekly.previous}hrs`;

        // study
        studyHours.innerText = `${data[2].timeframes.weekly.current}hrs`;
        studyPreviousHours.innerText = `Last week - ${data[2].timeframes.weekly.previous}hrs`;

        // exercise
        exerciseHours.innerText = `${data[3].timeframes.weekly.current}hrs`;
        exercisePreviousHours.innerText = `Last week - ${data[3].timeframes.weekly.previous}hrs`;

        // social
        socialHours.innerText = `${data[4].timeframes.weekly.current}hrs`;
        socialPreviousHours.innerText = `Last week - ${data[4].timeframes.weekly.previous}hrs`;

        // self-care
        selfCareHours.innerText = `${data[5].timeframes.weekly.current}hrs`;
        selfCarePreviousHours.innerText = `Last week - ${data[5].timeframes.weekly.previous}hrs`;
    }
    // For months
    if (element === choices[2]) {
        // work
        workHours.innerText = `${data[0].timeframes.monthly.current}hrs`;
        workPreviousHours.innerText = `Last month - ${data[0].timeframes.monthly.previous}hrs`;

        // play
        playHours.innerText = `${data[1].timeframes.monthly.current}hrs`;
        playPreviousHours.innerText = `Last month - ${data[1].timeframes.monthly.previous}hrs`;

        // study
        studyHours.innerText = `${data[2].timeframes.monthly.current}hrs`;
        studyPreviousHours.innerText = `Last month - ${data[2].timeframes.monthly.previous}hrs`;

        // exercise
        exerciseHours.innerText = `${data[3].timeframes.monthly.current}hrs`;
        exercisePreviousHours.innerText = `Last month - ${data[3].timeframes.monthly.previous}hrs`;

        // social
        socialHours.innerText = `${data[4].timeframes.monthly.current}hrs`;
        socialPreviousHours.innerText = `Last month - ${data[4].timeframes.monthly.previous}hrs`;

        // self-care
        selfCareHours.innerText = `${data[5].timeframes.monthly.current}hrs`;
        selfCarePreviousHours.innerText = `Last month - ${data[5].timeframes.monthly.previous}hrs`;
    }
    // console.log(data);
}

theDataHandler('weekly');
