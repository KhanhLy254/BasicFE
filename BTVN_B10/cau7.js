const data1 = [-1, 2, 3, 4, 2, 6];
const data2 = [0, 6];
function cau7(array, value) {
    const firstIndex = array.indexOf(value);
    const lastIndex = array.lastIndexOf(value);
    if (firstIndex !== -1) {
        console.log(`${firstIndex} ${lastIndex}`);
    } else {
        console.log("No result");
    }
}

cau7(data1, 2);
cau7(data2, 2);
