import { lowerCase } from 'lodash';

function linkBuilder(links){
    var output = links.map((element) => {
        var destination = '';

        if(element !== 'Home'){
            destination = lowerCase(element);
        }
        
        return `<a data-navigo href="./${destination}">${element}</a>`;
    }).join(' ');
    
    
    return output;
}

export default function Navigation(state){
    return `
    <div id="navigation">
            ${linkBuilder(state.links)}  
        
    </div>
`;
}