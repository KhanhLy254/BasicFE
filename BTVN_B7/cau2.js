let today = new Date();
let date1 = (today.getMonth()+1) +'-'+ today.getDate() +'-'+  today.getFullYear();
console.log(date1);
let date2 = (today.getMonth()+1) +'/'+ today.getDate() +'/'+  today.getFullYear();
console.log(date2);
let date3 = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
console.log(date3);
let date4 = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
console.log(date4);