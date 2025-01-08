// bai 1
let user = {};
user.name = "David";
user.surname = "Xuan";
user.name = "Cafedev"
delete user.name;
console.log(user);
// bai 2
function isEmpty(obj) {
    for (let i in obj) {
        return false;
    }
    return true;
}
let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));
// bai 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let a = Object.values(salaries);
 console.log(a)
 tongluong = 0;
for(let i = 0; i < a.length; i++ ){
    tongluong+= a[i];
}
console.log("tong luong = ", tongluong);
// bai 4
function multiplyNumeric(obj) {
    for(let key in obj){
        if(typeof obj[key] == "number"){
            obj[key]*=2;
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu cafedev"
};
multiplyNumeric(menu);
console.log(menu)
//  bai 5
let objA = {
    a: 1,  
    b: 2,  
    read() {
        console.log(`a: ${this.a}, b: ${this.b}`);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};
objA.read();
console.log(objA.sum()); 
console.log(objA.mul()); 
