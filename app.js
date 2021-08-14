

// import functions and grab DOM elements
const inputEl1 = document.getElementById('input1');
const inputEl2 = document.getElementById('input2');
const inputEl3 = document.getElementById('input3');
const inputEl4 = document.getElementById('input4');
const inputEl5 = document.getElementById('input5');
const inputEl6 = document.getElementById('input6');
const inputEl7 = document.getElementById('input7');
const inputEl8 = document.getElementById('input8');
const inputEl9 = document.getElementById('input9');
const inputEl10 = document.getElementById('input10');
const inputEl11 = document.getElementById('input11');
const inputEl12 = document.getElementById('input12');
const subEl = document.getElementById('btn-sub');




const spanEl1 = document.getElementById('year');
const spanEl2 = document.getElementById('vehicle');
const spanEl3 = document.getElementById('firstNoun');
const spanEl4 = document.getElementById('price');
const spanEl5 = document.getElementById('object');
const spanEl6 = document.getElementById('adjective1');
const spanEl7 = document.getElementById('number1');
const spanEl8 = document.getElementById('number2');
const spanEl9 = document.getElementById('number3');
const spanEl10 = document.getElementById('noun2');
const spanEl11 = document.getElementById('noun3');
const spanEl12 = document.getElementById('animal');
const paragraph = document.getElementById('mad-ad');
const siteName = document.getElementById('site-name');
// initialize state

// set event listeners 
subEl.addEventListener('click', () => {
    siteName.classList.remove('hidden');
    paragraph.classList.remove('hidden');
    spanEl1.textContent = inputEl1.value;
    spanEl2.textContent = inputEl2.value;
    spanEl3.textContent = inputEl3.value;
    spanEl4.textContent = inputEl4.value;
    spanEl5.textContent = inputEl5.value;
    spanEl6.textContent = inputEl6.value;
    spanEl7.textContent = inputEl7.value;
    spanEl8.textContent = inputEl8.value;
    spanEl9.textContent = inputEl9.value;
    spanEl10.textContent = inputEl10.value;
    spanEl11.textContent = inputEl11.value;
    spanEl12.textContent = inputEl12.value;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
