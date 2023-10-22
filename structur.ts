// output

console.log("Hello world !!!!");


// for loop rang beetween 10 and 10000 and logic operators

for(let i =10; i<=10000;i++){
    if(i % 5 == 0 && i % 8 == 0){
        console.log("values is: " + i );
    }
}


// arrays and initializations 

let sum = 0;

let arrayOfValues = [100,200,300,45,67,89,23,44,72,33];

for(let w = 0;w<10;w++){
    sum+=arrayOfValues[w];
}

console.log("sum of values is: " + sum);
