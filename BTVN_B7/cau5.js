function cau5(string){
    if(string.length % 2 === 0){
        console.log("Khong phai la chuoi le")
        return
    }
    const ptgiua = (string.length - 1) / 2
    const result = string[ptgiua-1] + string[ptgiua] + string[ptgiua+1]
    console.log(result)
}

cau5('vothikhanhlyy')
