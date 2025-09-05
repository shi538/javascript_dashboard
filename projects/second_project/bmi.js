
const form = document.querySelector('form');
console.log(form)

//when i put the value in this section then take the  always empty value
//  const weight = parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', function (event) {
   event.preventDefault();
   const height = parseInt(document.querySelector('#height').value);
   console.log(height)
   const weight = parseInt(document.querySelector('#weight').value);
   console.log(weight)

   const result = document.querySelector('#results')
   console.log(result);
   let bmi;
   if (height === '' || height < 0 || isNaN(height)) {
      result.innerHTML = `Please give a valid height ${height}`
   } else if (weight === '' || weight < 0 || isNaN(weight)) {
      result.innerHTML = `Please give a valid weight ${weight}`
   } else {
      bmi = ((weight) / ((height * height) / 10000)).toFixed(2)
      result.innerHTML = `<span>${bmi}</span>`

   }
   console.log(bmi)
   const weight_guides = document.querySelector('#weight-guides')
   const p = document.createElement("p");
   if (bmi < 18.6) {
      p.innerText = "You are Underweight ❗";
   } else if (bmi >= 18.6 && bmi <= 24.9) {
      p.innerText = "You are Normal 🙂";
   } else {
      p.innerText = "You are Overweight ⚠️";
   }
   weight_guides.appendChild(p)

})