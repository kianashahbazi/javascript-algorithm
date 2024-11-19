let n   = 43;
sum = 0;
let c=2;
if (c <= n/2) {
    if(n % c ===0)
    {
        sum=sum+1;
    } 
}
if (sum ===0) {
    console.log("number is prime");
}
else
{
    console.log("number is not prime");   
}