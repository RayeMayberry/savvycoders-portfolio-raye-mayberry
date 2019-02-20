export default function namePrompt(){
    var name = prompt('new website who this');

    if(name === ''){
        name = prompt('name pls');
    }
    else if(name === null){
        document.querySelector('#header span').textContent = '';
    }
    else{
        document.querySelector('#header span').textContent = `, ${name}`;
    }
}