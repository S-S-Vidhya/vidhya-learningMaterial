let a = 187;
let sum = 0;
while (a > 0) {
    sum += a % 10;
    a = (a- (a % 10)) / 10;
}
console.log(sum); 
