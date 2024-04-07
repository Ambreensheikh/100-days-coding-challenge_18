//make function format
function currentFormat():string{
    let now = new Date();
    let date = String(now.getDate()).padStart(2 , '0'); //2 for two digits/DD
    let month = String(now.getMonth()+1).padStart(2 , '0');  //0 for length +1
    let year = String(now.getFullYear());

    return `${date}-${month}-${year}`;

}  console.log(currentFormat());


     

