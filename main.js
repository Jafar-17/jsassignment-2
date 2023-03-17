let number = -12;
if(number > 0)
{
    console.log("positive");
} 
else if(number < 0)
{
   console.log("negative");
}
else
{
    console.log("zero");
}
 
function iseven(x){
    if(x%2 ==0){
        console.log(x + 'is even');
    }
    else{
       console.log(x + 'is not even');
    }
}
iseven(4);
iseven(9)