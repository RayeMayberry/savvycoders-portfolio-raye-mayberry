function linkBuilder(linksArray){
    var i = 0;

    var output = '';

    while(i < linksArray.length){
        output += `<li><a href="./${linksArray[i]}">${linksArray[i]}</a></li>`;
        i++;
    }
    
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