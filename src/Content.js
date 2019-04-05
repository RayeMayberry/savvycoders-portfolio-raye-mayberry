import * as pages from './pages';

export default function Content(state){
    return `
    <div id="content" class="container">
        ${pages[state.body]()}
    </div>
`;
}