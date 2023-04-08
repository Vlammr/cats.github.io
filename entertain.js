// get the cat toy element
const catToy = document.getElementById('cat-toy');

// set the initial position of the cat toy
let positionX = Math.floor(Math.random() * (window.innerWidth - catToy.offsetWidth));
let positionY = Math.floor(Math.random() * (window.innerHeight - catToy.offsetHeight));
catToy.style.left = positionX + 'px';
catToy.style.top = positionY + 'px';

// set the initial speed and direction of the cat toy
let speed = 1;
let directionX = 1;
let directionY = 1;

// move the cat toy every frame
function moveCatToy() {
    // calculate the new position of the cat toy
    positionX += speed * directionX;
    positionY += speed * directionY;

    // check if the cat toy hits the edges of the screen
    if (positionX + catToy.offsetWidth >= window.innerWidth || positionX <= 0) {
        directionX *= -1;
    }
    if (positionY + catToy.offsetHeight >= window.innerHeight || positionY <= 0) {
        directionY *= -1;
    }

    // update the position of the cat toy
    catToy.style.left = positionX + 'px';
    catToy.style.top = positionY + 'px';
}

// call the moveCatToy function every 10 milliseconds
let intervalId = setInterval(moveCatToy, 10);

// add a click event listener to the cat toy
catToy.addEventListener('click', function() {
    // generate a random position for the cat toy
    positionX = Math.floor(Math.random() * (window.innerWidth - catToy.offsetWidth));
    positionY = Math.floor(Math.random() * (window.innerHeight - catToy.offsetHeight));
    catToy.style.left = positionX + 'px';
    catToy.style.top = positionY + 'px';

    // generate a random direction for the cat toy
    directionX = Math.random() < 0.5 ? -1 : 1;
    directionY = Math.random() < 0.5 ? -1 : 1;

    // increase the speed of the cat toy
    speed += 1;

    // clear the old interval and start a new one with the updated speed
    clearInterval(intervalId);
    intervalId = setInterval(moveCatToy, 10);
});
