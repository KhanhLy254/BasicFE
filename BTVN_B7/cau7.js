function cau7(string){
    const arr = string.split(' ');
    let result = false;
    for(i = 0; i < arr.length; i++){
        // if(arr[i] == "java"){
        //     result = true;
        //     break;
        // }
        if(arr[i].includes("java")){
            result = true;
            break;
        }
    }
    console.log(result);
}
cau7('khhlie javaaaa khanhly');