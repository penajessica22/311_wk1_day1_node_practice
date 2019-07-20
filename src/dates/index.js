// import moment here; use this package in each function
const moment = require('moment');

const today = () => {
  let day = moment().format('dddd'); 
  return day;
}


const calendar = () => {
  let cal = moment().format('ll')
  return cal;

}
const currentTime = () => {
  // write code for dates.currentTime
    const time = moment().format('LTS');
    return time

}

module.exports = {
  today,
  calendar,
  currentTime
}