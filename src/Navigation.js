import { lowerCase } from 'lodash';

function linkBuilder(array){
    var i = 0;
    var output = '';
    var destination = '';

    array.forEach((element) => {
        if(element !== 'Home'){
            destination = lowerCase(element);
        }
        output += `<li><a data-navigo href="./${destination}">${element}</a></li>`;
    });
    
    
    return output;
}

export default function Navigation(state){
    return `
    <div id="navigation">
        <ul class="container">
            ${linkBuilder(state.links)}  
        </ul>
    </div>
`;
}