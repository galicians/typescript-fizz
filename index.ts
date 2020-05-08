// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const fizzbuzz = (limit: number):number => {
  let num = 0; 
  while (num < limit) {
    if (num % 3 == 0) {
      if (num % 5 == 0) console.log('fizzbuzz')
      else console.log('fizz')
    } 
    if (num % 5 == 0) console.log('buzz')

  }
};

fizzbuzz(100)