const a = [-1, -2, 3, 4, -5];
const result = a.find((item) => item > 0);
const index = a.findIndex((item) => item > 0);
if (result != undefined){
    console.log(`${index} ${result}`);
} else {
    console.log("No result")
}