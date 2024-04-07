//make function format
function currentFormat() {
    let now = new Date();
    let date = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let year = String(now.getFullYear());
    return `${date}-${month}-${year}`;
}
console.log(currentFormat());
export {};
