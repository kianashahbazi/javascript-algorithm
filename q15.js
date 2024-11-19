const arraystudenet = [
    { Sname: "kiana", Snumber: 1, Scode: 0, Sage: 20, codeReshte: 24, codeGenre: "girl" },
    { Sname: "kiaran", Snumber: 2, Scode: 1, Sage: 10, codeReshte: 24, codeGenre: "boy" },
    { Sname: "bita", Snumber: 3, Scode: 2, Sage: 16, codeReshte: 12, codeGenre: "girl" },
    { Sname: "zahra", Snumber: 4, Scode: 2, Sage: 25, codeReshte: 54, codeGenre: "girl" },
    { Sname: "ali", Snumber: 5, Scode: 1, Sage: 9, codeReshte: 24, codeGenre: "boy" },
];

let code = 0; 
let age = 0;  
let reshte = 0; 

arraystudenet.map(item => {
    if (item.codeGenre === "boy" && item.codeReshte === 24) {
        code++;        
    }
    if (item.Sage < 18) {
        age++;
    }
    if (item.codeReshte === 24) {
        reshte++;
    }
});

reshte = (reshte / arraystudenet.length) * 100;

console.log("darsad codeReshte 24 : ", reshte , "%");
console.log("tedad boys : " ,  code);
console.log("tedad zir 18 : " ,  age);
