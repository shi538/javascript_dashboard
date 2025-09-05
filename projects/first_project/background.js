
const body =  document.querySelector("body")
const buttons =document.querySelectorAll('.button')
 console.log(body)
 buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click',function(e){
    console.log("event is",e);
    console.log("event target is",e.target)
      if(e.target.id === "grey"){
        body.style.backgroundColor = e.target.id
      }
       if(e.target.white === "grey"){
        body.style.backgroundColor = e.target.id
      }
       if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id
      }
       if(e.target.id === "yellow"){
        body.style.backgroundColor = e.target.id
      }
  })
     
 });
 
 

