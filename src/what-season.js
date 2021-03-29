const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date == undefined)
    return 'Unable to determine the time of year!';

  if(!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]')
    throw Error;
  let isValid = true,
  year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate();

  if(month < 0 || month > 11)
    isValid =  false;

  let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

  if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    monthLength[1] = 29;
  
  isValid = day > 0 && day <= monthLength[month];

  if(!isValid)
    throw Error;
  season = '';
  switch(month) {
      case 11:
      case 0:
      case 1:
          season = 'winter';
      break;
      case 2:
      case 3:
      case 4:
          season = 'spring';
      break;
      case 5:
      case 6:
      case 7:
          season = 'summer';
      break;
      case 8:
      case 9: 
      case 10:
          season = 'autumn';
      break;
  }
  return season;
};
