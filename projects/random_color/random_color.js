
const randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){
        color +=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let changeMe;
const start_button  = document.querySelector('#start');
const stop_button = document.querySelector('#stop');

const startChangingColor = ()=>{
  window.document.body.style.backgroundColor =randomColor();
console.log(randomColor());

}

const changeId = function(){
    if(!changeMe){

     changeMe = setInterval(startChangingColor,1000)
       
    }
}

const stopChangingColor = ()=>{
    clearInterval(changeMe)
    changeMe = null;
}

start_button.addEventListener('click',changeId);
stop_button.addEventListener('click',stopChangingColor);

