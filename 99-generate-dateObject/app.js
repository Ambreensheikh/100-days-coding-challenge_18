//date object
function getNextBirthday(month, day) {
    let today = new Date();
    let year = today.getFullYear();
    let birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
let nextBirthday = getNextBirthday(1, 3);
console.log(`My next birthday is on:`, nextBirthday.toLocaleDateString());
export {};
