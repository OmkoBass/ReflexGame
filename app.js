const grid = document.querySelector('.grid');

const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');

let difficulty = document.querySelector('.difficulty');

window.addEventListener('load', () => {
    difficulty.classList.add('difficulty-appear');
});

easy.addEventListener('click', () => {
    difficulty.classList.remove('difficulty-appear');

    for(i = 0; i < 9; i++)
    {
        let btn = document.createElement('button');
        grid.appendChild(btn);
    }

    let children = grid.children;

    let choosen = Math.floor(Math.random() * 9);

    children[choosen].classList.add('clickme');
});