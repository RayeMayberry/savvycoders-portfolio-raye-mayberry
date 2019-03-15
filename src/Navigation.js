import { lowerCase } from 'lodash';

function linkBuilder(links){
    var output = links.map((element) => {
        var destination = '';

        if(element !== 'Home'){
            destination = lowerCase(element);
        }
        
        return `<li><a data-navigo href="./${destination}">${element}</a></li>`;
    }).join(' ');
    
    console.log(output);
    
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