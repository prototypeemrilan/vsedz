let m1= "*"
while (m1.length<=7) {
    console.log(m1);
    m1+="*";
}
const list = [];
for (let i = 1; i <= 100; i++) {
if (i % 15 === 0) {
list.push("FizzBuzz");
} else if (i % 3 === 0) {
list.push("Fizz");
} else if (i % 5 === 0) {
list.push("Buzz");
} else {
list.push(i);
}
}
console.log(list);
