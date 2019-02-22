export default function namePrompt(){
    var name = prompt('new website who this');

    if(name === ''){
        name = prompt('name pls');
    }
    else if(name === null){
        document.querySelector('#root #header span').textContent = 'Hi!';
    }
    else{
        document.querySelector('#root #header span').textContent = `Hi, ${name}!`;
    }
}