/* eslint-disable linebreak-style */
var name;

var blankChecker = function blankChecker(){
    if(name === ''){
        name = prompt('name pls');
        blankChecker(); // putting this inside the if statement will break the loop if the condition is false, and let the code move on to the next stage
    }
};

var namePrompt = function namePrompt(){
    name = prompt('new website who this');
    
    blankChecker();

    document.querySelector('#header span').textContent = `, ${name}`;
};

namePrompt();
