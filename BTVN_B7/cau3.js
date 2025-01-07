const NUM = 1547;
let check = 1;
let so = NUM;
let chusocuoi = so%10;
so /=10;
while(so != 0){
    let chusokecuoi = so % 10;
    so /= 10;
    if(chusocuoi < chusokecuoi){
        check = 0;
        break;
    } else {
        chusocuoi = chusokecuoi;
    }
}
if(check){
    console.log("true");
} else {
    console.log("false");
}

