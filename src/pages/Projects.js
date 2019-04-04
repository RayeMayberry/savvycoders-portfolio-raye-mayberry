import Screenshot from '../images/birdclicker.png'

export default function Projects(){
    return `
    <figure>
        <a href="https://birdclicker.netlify.com/">
        <figcaption><h2>BirdClicker: a Game of Avian Iteration</h2></figcaption>
        <img class="cap" src=${Screenshot} alt="screenshot of BirdClicker game">
        </a>
    </figure>

    <p>BirdClicker is an incremental or "idle" game, inspired by the likes of Cookie Clicker and <a href="http://bloodrizer.ru/games/kittens/">Kittens Game</a>. Using straightforward JavaScript, HTML and CSS, the game begins with a single button that invites player to repeatedly click and accumulate resources. With those resources, the player can unlock additional features, increasing the game's complexity.</p>
    <ul>
        <li><a href ="https://github.com/RayeMayberry/savvy-final-project">GitHub</a></li>
        <li><a href="https://trello.com/b/5yK0aEv3/bird-clicker">Trello</a></li>
    </ul>
    `;
}