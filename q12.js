let a = 0 + Math.floor(Math.random() * 1000);
let win = false;
let i = 60;

while (win === false) {
    console.log("Random number : " , a);
    let i=500;
    if (i < a)
        {
            console.log("your guess is low");
           
        }
        else if (i > a)
        {
           console.log("your guess is up");
           
        }
        else if (i === a)
        {
           console.log("you win");
           
            win = true;
        }
    while (win === false);
}