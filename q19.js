let n = 13405;
let Zoj = 0;
let fard = 0;
let ziro = 0;

while (n > 0) {
    let b = n % 10;
    console.log("Adade Joda Shode : ", b);
    n = parseInt(n / 10);
    if (b % 2 === 0) {
        Zoj++;
    } else {
        fard++;
    }
    if (b === 0) {
        ziro++;
    }
}
console.log("Tedad Adade Zoj : " , Zoj);
console.log("Tedad Adade Fard : " , fard);
console.log("Tedad Adade Ziro : " , zero);