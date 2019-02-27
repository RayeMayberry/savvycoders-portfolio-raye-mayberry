/* eslint-disable func-names */
/* eslint-disable linebreak-style */
import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
// import namePrompt from './src/Greeter';

// these objects contain data to be displayed on each of our pages
var globalState = {
    'home': {
        'title': 'Welcome to my SavvyCoders Website!'
    },
    'blog': {
        'title': 'We are the Blog'
    },
    'contact': {
        'title': 'Contact Me'
    },
    'projects': {
        'title': 'My Projects'
    }
};

var root = document.querySelector('#root');

function render(state){
    var links;

    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state.title)}
        ${Content(state)}
        ${Footer(state)}`;

    links = document.querySelectorAll('#navigation > ul > li > a');

    links[0].addEventListener('click',
        (event) => {
            event.preventDefault();
            render(state[event.target.textContent]);
        }
    );

    links[1].addEventListener('click',
        (event) => {
            event.preventDefault();
            render(state[event.target.textContent]);
        }
    );

    links[2].addEventListener('click',
        (event) => {
            event.preventDefault();
            render(state[event.target.textContent]);
        }
    );

    links[3].addEventListener('click',
        (event) => {
            event.preventDefault();
            render(state[event.target.textContent]);
        }
    );

    links[4].addEventListener('click',
        (event) => {
            event.preventDefault();
            render(state[event.target.textContent]);
        }
    );
}

render(globalState.home);


