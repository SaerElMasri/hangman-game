const words_disctionary = {
    fruits: [
      "Apple",
      "Blueberry",
      "Mandarin",
      "Pineapple",
      "Pomegranate",
      "Watermelon",
    ],
    animals: ["Hedgehog", 
        "Rhinoceros", 
        "Squirrel", 
        "Panther", 
        "Walrus", 
        "Zebra"],
    countries: [
      "India",
      "Hungary",
      "Kyrgyzstan",
      "Switzerland",
      "Zimbabwe",
      "Dominica",
    ],
    superheroes: [
        "Superman",
        "Batman",
        "Spiderman",
        "Ironman",
        "Hulk",
        "Thor"
    ],
    programming: [
        "Python",
        "PHP",
        "JavaScript",
        "Java",
        "C++",
    ],
}
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabet_arr = Array.from(alphabet);
let letter_container = document.querySelector(".letters");
alphabet_arr.forEach(letter => {
    let span = document.createElement("span");
    let letter_node = document.createTextNode(letter);
    span.appendChild(letter_node);
    span.className = 'letter-btn';
    letter_container.appendChild(span);
});
let category_span = document.getElementById("category");
let all_keys = Object.keys(words_disctionary);
let random_key_index = Math.floor(Math.random() * all_keys.length);
let randome_key_name = all_keys[random_key_index];
let key_values = words_disctionary[randome_key_name];
let random_value_index = Math.floor(Math.random() * key_values.length);
let random_value = key_values[random_value_index];
category_span.innerHTML = randome_key_name;
let guess_container = document.querySelector(".guesses");
let letter_space = Array.from(random_value);
letter_space.forEach(letter => {
    let span = document.createElement("span");
    guess_container.appendChild(span);
});
let letter_guess = document.querySelectorAll(".guesses span");
let wrong_counter = 0;
let draw = document.querySelector(".man-draw");
document.addEventListener("click", function(e){
    let game = false;
    if(e.target.className == "letter-btn"){
        e.target.classList.add("clicked");
    }
    let clicked_btn = e.target.innerHTML.toLowerCase();
    let word_value = Array.from(random_value.toLowerCase());
    word_value .forEach((w, i) => {
        if(clicked_btn == w){
            game = true;
            letter_guess.forEach((span, sIndex) => {
                if(i == sIndex){
                    span.innerHTML = clicked_btn;
                }
            });
        }
    });
    console.log(game);
    if(game !== true){
        wrong_counter++;
        draw.classList.add(`wrong-${wrong_counter}`);
        if(wrong_counter == 8){
            letter_container.classList.add("game-over");
        }
    }
});