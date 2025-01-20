const arr = [1, -2, 3, 4, -5]
const a = arr.filter((value, index, array ) => {
    return value > 0;
}) 
console.log(a)