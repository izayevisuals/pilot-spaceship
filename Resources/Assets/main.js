const spaceship = document.querySelector('.spaceship')
const moveBy = 70 //amt. of px's

window.addEventListener('load', () => {
    spaceship.style.position = 'absolute'; //position of spaceship
    spaceship.style.left = 0; //original position in px's
    spaceship.style.top = 0;
})

window.addEventListener('keydown', (e) => { //key can be held down to move
    switch(e.key) { //kind of like an if...else (?) The value of the expression is compared with the values of each case.

        // 'break' jumps out of the loop 
            // parseInt parses a string argument and returns an integer of the specified radix (converts from string to a number)

        case 'ArrowLeft':
            spaceship.style.left = parseInt(spaceship.style.left) - moveBy + 'px'; break; 
        case 'ArrowRight':
            spaceship.style.left = parseInt(spaceship.style.left) + moveBy + 'px'; break;
        case 'ArrowUp':
            spaceship.style.top = parseInt(spaceship.style.top) - moveBy + 'px'; break;
        case 'ArrowDown':
            spaceship.style.top = parseInt(spaceship.style.top) + moveBy + 'px'; break;

    }
})


