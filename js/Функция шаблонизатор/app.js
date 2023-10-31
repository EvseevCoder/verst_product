const template1 = { tag: 'div'}; // <div></div>

function templateEngine(block) {
    const element = document.createElement(block.tag);
    return element;
}
const container = document.querySelector('.container');

container.appendChild(templateEngine(template1));