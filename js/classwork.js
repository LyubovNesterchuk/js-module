let i;
for (let i = 6; i > 3; i--) { }
console.log(i)


for (i = 6; i > 3; i--) {}
console.log(i)

for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}

console.log("Alice" < "alice"); 
// true


function add(a, b) {
    const total = a + b;
    return total;
}

const a = add(5, 6);
console.log("a", a);
// a 11

function calcBMI(height, weight) {
    let numWeight = weight.replace(",", ".");
    numWeight = Number.parseFloat(numWeight);
    let numHeight = height.replace(",", ".");
    numHeight =  Number.parseFloat(numHeight);
    // const bmi = numWeight / (numHeight ** 2);
    const bmi = numWeight / Math.pow(numHeight,2);
    return bmi.toFixed(10);
}
const bmi = calcBMI("176,9", "1,8");
console.log(bmi);

const user = "Alice";
for (let i = 0; i < user.length; i++){
    console.log(user[i], i)
}

const uSer = "Philipe";
for (let i = 0; i < user.length; i++){
    if (uSer[i] === "i") {
        break;
    }
    console.log(uSer[i], i)
}

console.log("before")
let counter = 8;
while (counter < 5) {
    console.log(counter);
    counter++;
  }
console.log("after")

do {
    console.log(counter);
    counter++;
} while (counter < 5)
    
const n = 5;
const m = 40;
for (let i = n; i <= m; i--){
    if (i % 5 === 0) {
        console.log(i)
    }
}

