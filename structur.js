// output
console.log("Hello world !!!!");
// for loop rang beetween 10 and 10000 and logic operators
for (var i = 10; i <= 10000; i++) {
    if (i % 5 == 0 && i % 8 == 0) {
        console.log("values is: " + i);
    }
}
// arrays and initializations 
var sum = 0;
var arrayOfValues = [100, 200, 300, 45, 67, 89, 23, 44, 72, 33];
for (var w = 0; w < 10; w++) {
    sum += arrayOfValues[w];
}
console.log("sum of values is: " + sum);
