let arr = [1, 2, 4, 6, 2, 4, 2, 4, 4, 7, 8];
let solan = 0;
let dem = 1;
let soxuathiennhieunhat;
for(let i = 0; i < arr.length; i++){
    let dem = 1;
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] == arr[j]){
            dem++;
        }
        if(solan<dem){
            solan = dem;
            soxuathiennhieunhat = arr[i]
        }
    }
}
console.log(soxuathiennhieunhat);