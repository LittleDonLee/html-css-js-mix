const btn = document.querySelector("button");
const body= document.querySelector("body");
const colors = ["red","blue","lightyellow"];

body.style.backgroundColor ="salmon";
btn.addEventListener("click",colorChange);

function colorChange(){
    

    const num = Math.floor(Math.random()*colors.length);
    
   body.style.backgroundColor =colors[num];

    
};




