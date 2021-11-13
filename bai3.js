const colors=['white','black','green','blue','yellow','orange']
const colorEL=document.querySelector(".color");
const buttonEl=document.querySelector(".button");
const relEl=document.querySelector(".rel");



function randomColor(){
    const color=Math.floor(Math.random()*16777215).toString(16);
    return color;
}
buttonEl.addEventListener("click",function(){
    const color=randomColor();
    console.log(color);
    colorEL.style.backgroundColor ="#"+ color;
});

