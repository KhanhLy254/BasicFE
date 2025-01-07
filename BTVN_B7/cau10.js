function kiem_tra_snt(n) {
    if (n < 2) {
        return false;  
    }
    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i == 0) {
            return false; 
        }
    }
    return true; 
}

function cau10(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    for (let i = min; i <= max; i++) 
        if (kiem_tra_snt(i)) {
            console.log(i);
        } 
    }
cau10(1, 20); 
