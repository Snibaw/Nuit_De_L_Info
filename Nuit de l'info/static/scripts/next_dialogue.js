//
// CHOIX
//

var choices_div = document.getElementById('choices');
var waypoints_div = document.getElementById('waypoints');

function display_choices(choice1, choice2) {
    console.log('display_choice');
    var choice_div_1 = document.createElement('button');
    var choice_div_2 = document.createElement('button');
    choice_div_1.innerHTML = choice1;
    choice_div_2.innerHTML = choice2;
    choice_div_1.onclick = select_choice_1;
    choice_div_2.onclick = select_choice_2;
    choices_div.appendChild(choice_div_1);
    choices_div.appendChild(choice_div_2);
}

function select_choice_1() {
    console.log('select_choice_1');
    switch (game_state) {
        case 2:
            game_state = 1;
            current_dialogue = [{ character: 'Moi', text: 'Il faudrait que je leur demande mais par qui commencer ?' }];
            next_dialogue();
            display_waypoints_capote_2();
            break;
    }
    // Delete choices
    choices_div.innerHTML = '';
}

function select_choice_2() {}

//
// WAYPOINTS
//

function display_waypoints_capote() {
    var waypoint_div_1 = document.createElement('button');
    var waypoint_div_2 = document.createElement('button');
    var waypoint_div_3 = document.createElement('button');
    var waypoint_div_4 = document.createElement('button');
    waypoint_div_1.className = 'waypoints_class';
    waypoint_div_2.className = 'waypoints_class';
    waypoint_div_3.className = 'waypoints_class';
    waypoint_div_4.className = 'waypoints_class';
    waypoint_div_1.onclick = function () {
        click_on_waypoint(1);
    };
    waypoint_div_2.onclick = function () {
        click_on_waypoint(2);
    };
    waypoint_div_3.onclick = function () {
        click_on_waypoint(3);
    };
    waypoint_div_4.onclick = function () {
        click_on_waypoint(4);
    };
    waypoint_div_1.style.top = '68vh';
    waypoint_div_1.style.left = '93vw';
    waypoint_div_2.style.top = '40vh';
    waypoint_div_2.style.left = '35vw';
    waypoint_div_3.style.top = '5vh';
    waypoint_div_3.style.left = '20vw';
    waypoint_div_4.style.top = '26vh';
    waypoint_div_4.style.left = '35vw';
    document.body.appendChild(waypoint_div_1);
    document.body.appendChild(waypoint_div_2);
    document.body.appendChild(waypoint_div_3);
    document.body.appendChild(waypoint_div_4);
}
function display_waypoints_capote_2() {
    waypoints_currently_displayed = true;
    var waypoint_div_1 = document.createElement('button');
    var waypoint_div_2 = document.createElement('button');
    var waypoint_div_3 = document.createElement('button');
    var waypoint_div_4 = document.createElement('button');
    waypoint_div_1.className = 'waypoints_class';
    waypoint_div_2.className = 'waypoints_class';
    waypoint_div_3.className = 'waypoints_class';
    waypoint_div_4.className = 'waypoints_class';
    waypoint_div_1.onclick = function () {
        click_on_waypoint_2(1);
    };
    waypoint_div_2.onclick = function () {
        click_on_waypoint_2(2);
    };
    waypoint_div_3.onclick = function () {
        click_on_waypoint_2(3);
    };
    waypoint_div_4.onclick = function () {
        click_on_waypoint_2(4);
    };
    waypoint_div_1.style.top = '45vh';
    waypoint_div_1.style.left = '60vw';
    waypoint_div_2.style.top = '30vh';
    waypoint_div_2.style.left = '60vw';
    waypoint_div_3.style.top = '55vh';
    waypoint_div_3.style.left = '35vw';
    waypoint_div_4.style.top = '40vh';
    waypoint_div_4.style.left = '15vw';
    document.body.appendChild(waypoint_div_1);
    document.body.appendChild(waypoint_div_2);
    document.body.appendChild(waypoint_div_3);
    document.body.appendChild(waypoint_div_4);
}

//
// DIALOGUE
//

let dialogue_1_dict_1 = {
    character: 'Moi',
    text: [
        'Oh le mal de crâne...',
        "Oh merde... Où est-ce que j'ai dormi encore ?",
        'On est pas chez Julien ? Ah oui... la soirée... on a encore fini complètement morts.',
        "Ahh ! C'est quoi ça, qu'est-ce que j'ai foutu hier soir encore. Mes souvenirs sont flous, j'ai du mal à réflechir.",
        "*Regarde les gens autour* J'ai quand même pas couché avec l'un d'entre eux ?",
        "Attends ! J'ai utilisé une capote hier au moins j'espère... Elle doit bien être quelque part dans l'appart.",
    ],
};
let dialogue_1 = [dialogue_1_dict_1];
// Waypoints Dialogues
let waypoint_dialogue_1 = [{ character: 'Moi', text: ['Le tiroir est rempli d’objets divers mais rien qui ne ressemble à un préservatif, mis à part cet objet en latex en forme de verge.'] }];
let waypoint_dialogue_2 = [{ character: 'Moi', text: ['Rien sous le drap, à part Alexa.'] }];
let waypoint_dialogue_3 = [{ character: 'Moi', text: ['Un cendrier et quelques cigarettes éteintes mais rien de plus malheureusement.'] }];
let waypoint_dialogue_4 = [{ character: 'Moi', text: ['Quelques poussières, un string, mais rien de plus. Je crois que la chambre aurait besoin d’un petit coup de ménage.'] }];

//2nd dialogue
let dialogue_2 = [{ character: 'Moi', text: ['Oh le con ! Elle était juste dans mon pantalon. Par contre elle est pas ouverte…', 'Il faudrait que je leur demande mais par qui commencer ?'] }];

// Waypoints Dialogues 2
let waypoint_dialogue_2_1 = [{ character: 'Eliott', text: ['Hmmmpf... Oh frérot tu veux quoi ? Tu vois pas que je dors ?'] }];
let waypoint_dialogue_2_1_1 = [{ character: 'Moi', text: ['Désolé mon pote, tu te rappelles de la soirée de hier soir ?'] }];

// Elements and variables
var dialogue_box = document.getElementById('dialogue_box');
var character_box = document.getElementById('character_box');
var current_index_dialogue = -1;
var current_index_dialogue_dict = 0;
var current_dialogue = dialogue_1;
var waypoints_currently_displayed = false;
var game_state = 0;

function get_next_dialogue_text(dialogue) {
    if (current_index_dialogue < dialogue[current_index_dialogue_dict].text.length - 1) {
        current_index_dialogue++;
        character_box.innerHTML = dialogue[current_index_dialogue_dict].character;
        dialogue_box.innerHTML = dialogue[current_index_dialogue_dict].text[current_index_dialogue];
    } else if (current_index_dialogue_dict < dialogue.length - 1) {
        console.log('1');
        current_index_dialogue_dict++;
        current_index_dialogue = 0;
        character_box.innerHTML = dialogue[current_index_dialogue_dict].character;
        dialogue_box.innerHTML = dialogue[current_index_dialogue_dict].text[current_index_dialogue];
    } else if (!waypoints_currently_displayed) {
        switch (game_state) {
            case 0:
                display_waypoints_capote();
                waypoints_currently_displayed = true;
                break;
            case 1:
                display_waypoints_capote_2();
                waypoints_currently_displayed = true;
                break;
            case 2:
                display_choices('Excuse-moi, je te laisse.', 'Désolé mon pote, tu te rappelles de la soirée de hier soir ?');
        }
    }
}

function next_dialogue() {
    get_next_dialogue_text(current_dialogue);
}

var waypoints_visited = [false, false, false, false];
function click_on_waypoint(number) {
    switch (number) {
        case 1:
            current_dialogue = waypoint_dialogue_1;
            waypoints_visited[0] = true;
            break;
        case 2:
            current_dialogue = waypoint_dialogue_2;
            waypoints_visited[1] = true;
            break;
        case 3:
            current_dialogue = waypoint_dialogue_3;
            waypoints_visited[2] = true;
            break;
        case 4:
            current_dialogue = waypoint_dialogue_4;
            waypoints_visited[3] = true;
            break;
    }
    current_index_dialogue = -1;
    current_index_dialogue_dict = 0;
    if (waypoints_visited[0] && waypoints_visited[1] && waypoints_visited[2] && waypoints_visited[3]) {
        // If all waypoints have been visited
        current_dialogue[0].text[0] += " Ah j'ai pas vérifié mon pantalon !";
        current_dialogue = current_dialogue.concat(dialogue_2);
        console.log(current_dialogue);
        // Get all waypoint_class and remove them
        var waypoints_class = document.getElementsByClassName('waypoints_class');
        while (waypoints_class.length > 0) {
            document.body.removeChild(waypoints_class[0]);
        }
        waypoints_currently_displayed = false;
    }
    get_next_dialogue_text(current_dialogue);
}

var waypoints_visited_2 = [false, false, false, false];
function click_on_waypoint_2(number) {
    switch (number) {
        case 1:
            current_dialogue = waypoint_dialogue_2_1;
            waypoints_visited[0] = true;
            break;
        case 2:
            current_dialogue = waypoint_dialogue_2_2;
            waypoints_visited[1] = true;
            break;
        case 3:
            current_dialogue = waypoint_dialogue_2_3;
            waypoints_visited[2] = true;
            break;
        case 4:
            current_dialogue = waypoint_dialogue_2_4;
            waypoints_visited[3] = true;
            break;
    }
    current_index_dialogue = -1;
    current_index_dialogue_dict = 0;
    var waypoints_class = document.getElementsByClassName('waypoints_class');
    while (waypoints_class.length > 0) {
        document.body.removeChild(waypoints_class[0]);
    }
    waypoints_currently_displayed = false;
    get_next_dialogue_text(current_dialogue);
}
