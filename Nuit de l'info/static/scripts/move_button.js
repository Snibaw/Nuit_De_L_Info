// Global variable
var isLeft = true;
var last_x = 0;
var last_y = 0;
var button = document.getElementById('button');

function move() {
    if (isLeft) {
        button.style.translate = '300px';
    } else {
        button.style.translate = '0px';
    }
    isLeft = !isLeft;
}

function move_random() {
    var x = Math.floor(Math.random() * 85);
    var y = Math.floor(Math.random() * 85);
    // Trnaslate the button along x and y axis
    var distance = Math.sqrt(Math.pow(x - last_x, 2) + Math.pow(y - last_y, 2));
    button.style.transitionDuration = 20 * distance + 'ms';
    button.style.transform = 'translate(' + x + 'vw, ' + y + 'vh)';
    last_x = x;
    last_y = y;
}

button.addEventListener('mouseover', (event) => {
    move_random();
});

button.addEventListener('click', (event) => {
    alert("Yahaha ! Nom d'une feuille, tu m'as trouvé !");
});
