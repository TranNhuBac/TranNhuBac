let arr=['BINH', 'HUNG', 'PHUOC', 'CAO' ,] ;
let max=0;
let long;
for (let i=0;i<arr.length;i++){
    if(arr[i].length>max){
        max=arr[i].length;
        long=arr[i];
        }
    }
console.log(long);
