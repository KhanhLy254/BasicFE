const data = [1, 2, 3, 4, 5];
const data1 = [2, 4, 6]
function chan(num) {
    return num % 2 === 0;
}
function check(array){
    if(array.every(chan)){
        return "yes";
    } else {
        return "no"
    }
    
}
console.log(check(data)); 
console.log(check(data1))
