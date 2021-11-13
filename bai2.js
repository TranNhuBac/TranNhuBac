let arr=[60, 40, 55, 75, 64];
let sum1=0;
let sum2=0;
for (let i=0;i<=arr.lenght;i++){
    if (i%2==0){
        sum1+=arr[i];
    }
    else{
        sum2+=arr[i];
    }
}
console.log(sum1);
console.log(sum2);

