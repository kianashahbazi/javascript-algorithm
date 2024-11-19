let S   = 75000;

if (S < 50000) {
    console.log("MOAF");    
}
else if (S >= 50000 && S < 100000) 
{
    Tax = 10/100*50000;
    console.log(Tax , "is your Tax");   
}
else
{
    Tax = 15/100*100000 ;
    console.log(Tax , "is your Tax"); 
}
