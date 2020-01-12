const grid = document.querySelector('.grid');

const easySize = 9;
const mediumSize = 16;
const hardSize = 40;

const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');

let difficulty = document.querySelector('.difficulty');
let points = 0;
let score = document.getElementById('score');

window.addEventListener('load', () => {
    difficulty.classList.add('difficulty-appear');
});

easy.addEventListener('click', () => {
    difficulty.classList.remove('difficulty-appear');
    let i;

    for(i = 0; i < easySize; i++)
    {
        let btn = document.createElement('button');
        grid.appendChild(btn);
    }

    let children = grid.children;

    let time = 1000;
    let missed = false;
    
    let interval = setInterval( () => {
        if(missed)
        {
            clearInterval(interval);
            for(i = 0; i < easySize; i++)
            {
                children[i].removeEventListener('click', handler);
                children[i].classList.remove('clickme');
            }
            alert('You lost!\nReload the page. \nI am too lazy to implement a reload button');
            return;
        } 
        let random = Math.floor(Math.random() * easySize);
        lastRand = random;

        children[random].classList.add('clickme');
        children[random].addEventListener('click', handler = () => {
            children[random].classList.remove('clickme');
            missed = false;
            points += 100;
            score.innerHTML = points;
            time -= 25;
            children[random].removeEventListener('click', handler);
        });

        missed = true;
    }, time);
});

medium.addEventListener('click', handler = () => {
    grid.classList.add('grid-medium');
    difficulty.classList.remove('difficulty-appear');
    let i;

    for(i = 0; i < mediumSize; i++)
    {
        let btn = document.createElement('button');
        grid.appendChild(btn);
    }

    let children = grid.children;

    let time = 1000;
    let missed = false;

    let interval = setInterval( () => {
        if(missed)
        {
            clearInterval(interval);
            for(i = 0; i < mediumSize; i++)
            {
                children[i].removeEventListener('click', handler);
                children[i].classList.remove('clickme');
            }
            alert('You lost!\nReload the page. \nI am too lazy to implement a reload button');
            return;
        } 
        let random = Math.floor(Math.random() * mediumSize);
        lastRand = random;

        children[random].classList.add('clickme');
        children[random].addEventListener('click', handler = () => {
            children[random].classList.remove('clickme');
            missed = false;
            points += 100;
            score.innerHTML = points;
            time -= 50;
            children[random].removeEventListener('click', handler);
        });

        missed = true;
    }, time);
})

hard.addEventListener('click', handler = () => {
    grid.classList.add('grid-top');
    grid.classList.add('grid-hard');
    difficulty.classList.remove('difficulty-appear');
    let i;

    for(i = 0; i < hardSize; i++)
    {
        let btn = document.createElement('button');
        grid.appendChild(btn);
    }

    let children = grid.children;

    let time = 1000;
    let missed = false;

    let interval = setInterval( () => {
        if(missed)
        {
            clearInterval(interval);
            for(i = 0; i < hardSize; i++)
            {
                children[i].removeEventListener('click', handler);
                children[i].classList.remove('clickme');
            }
            alert('You lost!\nReload the page. \nI am too lazy to implement a reload button');
            return;
        } 
        let random = Math.floor(Math.random() * hardSize);
        lastRand = random;

        children[random].classList.add('clickme');
        children[random].addEventListener('click', handler = () => {
            children[random].classList.remove('clickme');
            missed = false;
            points += 100;
            score.innerHTML = points;
            time -= 55;
            children[random].removeEventListener('click', handler);
        });

        missed = true;
    }, time);
});