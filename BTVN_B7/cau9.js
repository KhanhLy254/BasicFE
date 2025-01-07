function cau9(string){
    const arr = string.split(' ')
    let result = arr[0];
    for(i = 1; i < arr.length; i++){
        const charAtIndex = arr[i];
        if(charAtIndex.length > result.length){
            result = arr[i];
        }
    }
    console.log(result);
}
cau9('vo thi khanh ly');