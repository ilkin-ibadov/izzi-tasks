const C = document.getElementById("C");
const slash = document.getElementById("/");
const percentage = document.getElementById("%");
const multifycation = document.getElementById("*");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const subtraction = document.getElementById("-");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const addition = document.getElementById("+");
const point = document.getElementById(".");
const zero = document.getElementById("0");
const arrow = document.getElementById("←");
const equal = document.getElementById("=");
const calcPlaceholder = document.getElementById("calcPlaceholder");
const buttons = document.querySelectorAll('[type="button"]');
const result = document.getElementById('res')
console.log(calcPlaceholder);


function pressNum(e) {
    if (calcPlaceholder.innerHTML === '' && e != '.') {
      calcPlaceholder.innerHTML = e;
    } else {
      calcPlaceholder.innerHTML += e;
    }
  }

  buttons.forEach(button => {
    if(button.value !== '='){
      button.addEventListener('click', () => {
        pressNum(button.value)
      })
    }
  })


function clear(){
 calcPlaceholder.innerHTML = '';
 result.innerHTML = '';
}

C.addEventListener('click', () => {
  clear()
})

function compute () {
  const computedValue = eval(calcPlaceholder.innerHTML);
  if(computedValue.toString().includes('.')){
    result.innerHTML = computedValue.toFixed(3)
  } else{
    result.innerHTML = computedValue
  }
}

equal.addEventListener('click', () => {
  compute()
})

