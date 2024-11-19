for (let n = 10; n <= 99 ; n++) {
    let b = n % 10;
    let a = parseInt(n / 10);
    if (b % 2 == 0) {
        continue;
    }
    else{
        console.log("Adade Fard : " , n);
    }
}