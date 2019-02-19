/* eslint-disable linebreak-style */
import Navigation from './src/Navigation';

var name;
var originalContent = document.body.innerHTML;

var blankChecker = function blankChecker(){
    if(name === ''){
        name = prompt('name pls');
        blankChecker(); // putting this inside the if statement will break the loop if the condition is false, and let the code move on to the next stage
    }

    // putting the blankChecker() recursion statement out here would allow the loop to keep going infinitely, checking whether the name variable is blank or not
};

var namePrompt = function namePrompt(){
    name = prompt('new website who this');
    
    blankChecker();

    document.querySelector('#header span').textContent = `, ${name}`;
};

namePrompt();


document.body.innerHTML = `
        ${Navigation}
        ${originalContent}
`
;