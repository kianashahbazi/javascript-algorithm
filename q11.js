let N = 80;
let count = 0;
let sum = 0;

for (let i = 1 ; i <= N ; i++) {
    if (N%i == 0) {
        if (i%4 == 0) {
            sum = sum + i;
            count = count + 1;
            console.log("Mazrab 4 : " , i);    
        }  
    }   
}
console.log("Tedad : " , count);
console.log("Majmoo Mazareb : " , sum);