import * as pages from './pages';

export default function Content(state){
    return `
    <div id="main" class="container">
        ${pages[state.body]()}
    </div>
`;
}