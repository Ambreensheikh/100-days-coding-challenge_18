//get current date
let currentDate = new Date();
let nextNewYear = new Date(currentDate.getFullYear() + 1, 0, 1);
//calculate the differnce in hours*minutes*seconds*miliseconds
let oneDay = 24 * 60 * 60 * 1000;
let daysLeft = Math.round(Math.abs((nextNewYear - currentDate) / oneDay));
console.log(`New year days left:`, daysLeft);
export {};
