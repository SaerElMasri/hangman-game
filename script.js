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
        "Thor",
        "Capitan America",
    ],
    programming: [
        "Python",
        "PHP",
        "JavaScript",
        "Java",
        "C++",
    ],
}

let all_keys = Object.keys(words_disctionary);
let random_key_index = Math.floor(Math.random() * all_keys.length);
let randome_key_name = all_keys[random_key_index];
let key_values = words_disctionary[randome_key_name];
let random_value_index = Math.floor(Math.random() * key_values.length);