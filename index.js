/* eslint-disable func-names */
/* eslint-disable linebreak-style */
import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
// import namePrompt from './src/Greeter';

// these objects contain data to be displayed on each of our pages
var home = {
    'title': 'Welcome to my SavvyCoders Website!'
};

var blog = {
    'title': 'We are the Blog'
};

var contact = {
    'title': 'Contact Me'
};

var projects = {
    'title': 'My Projects'
};


var root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state.title)}
        ${Content(state)}
        ${Footer(state)}`;
}

render(home);

// namePrompt();


// Create event handlers for each nav link, rendering the coresponding page title

document.querySelector('#navigation li:nth-of-type(1) > a').addEventListener('click',
    (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.href);
        render(home);
    }
);

document.querySelector('#navigation li:nth-of-type(2) > a').addEventListener('click',
    (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.href);
        render(blog);
    }
);

document.querySelector('#navigation li:nth-of-type(3) > a').addEventListener('click',
    (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.href);
        render(contact);
    }
);

document.querySelector('#navigation li:nth-of-type(4) > a').addEventListener('click',
    (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.href);
        render(projects);
    }
);