// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Fizzbuzz</h1>`;

const fizzbuzz = (limit: number):void => {
  let num = 1; 
  console.log('test')
  
  while (num < limit) {
    // appDiv.innerHTML += num

  if (num % 3 == 0) {
    if (num % 5 ==0 ) {
      appDiv.innerHTML += 'fizzbuzz'
    } else appDiv.innerHTML += 'fizz'

} else if (num % 5 == 0) appDiv.innerHTML += 'buzz'
else appDiv.innerHTML += num


    num += 1
    appDiv.innerHTML +=  '<br>'
  }

};

fizzbuzz(100)