 const arr={Name:"kiana" , Mojoodi:10000 , Morajee:2 , Mablagh:3000 , transaction:2}  //variz : 1 , Bardasht : 2

if (arr.transaction === 1) {
    const variz =arr.Mojoodi +arr.Mablagh;
    console.log(arr);
    console.log("Mojoodi : " , variz);
} 
else {
    const bardasht = arr.Mojoodi -arr.Mablagh;
    console.log(arr);
    console.log("Mojoodi : " , bardasht);
}