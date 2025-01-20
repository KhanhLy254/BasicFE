const a = [1, 2, 3, 4, 5];
const b = [1, 1, 3, 1, 5]
function chan(element, index, array) {
    return element % 2 == 0;
}
function check(array){
    if(array.some(chan)){
        return "yes";
    } else {
        return "no"
    }
    
}
console.log(check(a))
console.log(check(b))