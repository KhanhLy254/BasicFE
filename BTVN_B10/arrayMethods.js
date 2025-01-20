const arr = [1, 2, 8, 3, 5];
// ham forech
console.log("func_foreach")
function func_forEach(array, callback) {
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }
}
func_forEach(arr, function(value, index, array) {
    console.log(value, index, array) 
})
// ham map
console.log("func_map")
function func_map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i] * array[i]));
    }
    return result;
}

func_map(arr, function(value) {
    console.log(value) 
})
// ham find
console.log("func_find")
function func_Find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}

const result = func_Find(arr, function(value) {
    return value > 3;
})
console.log(result); 
// ham findindex
console.log("func_FindIndex")
function func_FindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
const result2 = func_FindIndex(arr, function(value) {
    return value % 2 === 0;
});

console.log(result2); 
// ham filter
console.log("func_filter")
function func_Filter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}
const result3 = func_Filter(arr, function(value) {
    return value % 2 === 0; 
});

console.log(result3); 
