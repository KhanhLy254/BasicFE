console.log("current date time")
let today = new Date();
let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let datetime = date + " " + time
console.log(datetime);
