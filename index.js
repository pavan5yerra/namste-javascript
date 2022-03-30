//selectors
let button = document.querySelector("#button");
let colorNameDiv = document.querySelector("#color-name");
let container = document.querySelector("#container");


//event listeners
button.addEventListener('click',changeColor);
container.addEventListener('click',eventDelgation);

//actions 
function changeColor (event) {
   let colorName= randomColorGenerator()
   setElementValue(colorNameDiv,colorName)
   document.body.style.backgroundColor= colorName
}

function setElementValue(element,value){
   element.innerText= value
}

function randomColorGenerator(){
   let color =['red','blue','yellow','black','white','pink','orange']
      return color[Math.floor(Math.random() * 7)]
}


function eventDelgation(event) {
   if(event.target.tagName=='BUTTON'){
        console.log("hello" ,event.target)
   }
}

function makeUpperCase(event) {
   if(event.target.dataset.uppercase!=undefined){
      typeof event.target.value === 'string' ? event.target.value=event.target.value.toUpperCase() : '';
           
   }
}
function test(){
   console.log("this is test",arguments[0])
}



//event delegation 



//throttle function
const  throttle  = function (fn,delay) {
   let context = this;
   let flag =true;
   return function () {
      if(flag){
      flag=false
      setTimeout(() => {
         fn.apply(context,arguments);
         flag=true
      }, delay);
      
      }
       
   }
}
const OptimizeInput  =  throttle(test,1000);


// Debouncing 

const debouncing = function (fn,delay) {
   let timer;
   let context = this
   return function (event) {
      makeUpperCase(event)
      clearTimeout(timer)
      timer = setTimeout(()=> {
         fn.apply(context,arguments)
      },delay)
   }
}

const debouceInput = debouncing(test,1000)


