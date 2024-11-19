let N = 365;
let Month;
let Day;

if (N <= 186) {
    Month =parseInt(N / 31 + 1);
    Day = parseInt(N % 31);
}
else if (N > 186){
    N = N - 186;
    Month = parseInt(N / 30 + 7); // Mah yedone bishtar mishe 
    Day = N % 30;

}
console.log(Month,"/",Day);