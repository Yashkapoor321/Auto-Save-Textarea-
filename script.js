const text = document.getElementById("text");

text.addEventListener("input", ()=>{
    localStorage.setItem("saveText", text.value);
   
})
text.value = localStorage.getItem("saveText");


//For Color
let colorBtn = document.getElementById("colorBtn");
let color = ["lightgreen","voilet","blue","yellow","lightgreen","lemon"];
var index = 0;

colorBtn.addEventListener("click", colorFunction);
  
function colorFunction(){
    if(index === color.length){
        index = 0;
    }
    text.style.backgroundColor = color[index];
    index++;
}

//for Background Color
let stopColor; 
const randomColor = function (){
   let hex = "0123456789ABCDEF" 
   let color = "#";
  for(let i = 0; i < 6; i++){ 
    color = color + hex[Math.floor(Math.random() * 16)];  //[]remember 
  }
   return color;
} 

const startColorChange = function (){
    if(!stopColor){ 
    stopColor  = setInterval(function(){
       document.body.style.backgroundColor = randomColor(); 
   }, 1000)  
}      
}

const stopColorChange = function (){
   clearInterval(stopColor) 
   stopColor = null; 
}

document.querySelector("#start").addEventListener("click", startColorChange);
document.querySelector("#stop").addEventListener("click", stopColorChange);