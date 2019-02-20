/* eslint-disable linebreak-style */
import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
// import namePrompt from './src/Greeter';

// var originalContent = document.body.innerHTML;

var root = document.querySelector('#root');

root.innerHTML = `
        ${Navigation()}
        ${Header('Welcome to my SavvyCoders Profile')}
        ${Content()}
        ${Footer()}
        
`
;

// namePrompt();

