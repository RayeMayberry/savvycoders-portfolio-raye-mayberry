/* eslint-disable func-names */
/* eslint-disable linebreak-style */
import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
// import namePrompt from './src/Greeter';
import { startCase } from 'lodash';

// these objects contain data to be displayed on each of our pages
var globalState = {
    'Blog': {
        'links': [ 'Home', 'Contact', 'Projects' ],
        'title': 'Welcome to my Blog'
    },
    'Home': {
        'links': [ 'Blog', 'Contact', 'Projects' ],
        'title': 'Welcome to my Portfolio'
    },
    'Contact': {
        'links': [ 'Home', 'Blog', 'Projects' ],
        'title': 'Contact Me'
    },
    'Projects': {
        'links': [ 'Home', 'Blog', 'Contact' ],
        'title': 'Check out my Projects'
    }
};

var root = document.querySelector('#root');

function render(state){
    var links;
    var i = 0;

    var handleNavigation = function handleNavigation(event){
        var destination = startCase(event.target.textContent);

        event.preventDefault();
        render(globalState[destination]);
    };

    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state.title)}
        ${Content(state)}
        ${Footer(state)}
    `;

    links = document.querySelectorAll('#navigation > ul > li > a');
    
    while(i < links.length){
        links[i].addEventListener('click',handleNavigation);
        i++;
    }
}

render(globalState.Home);