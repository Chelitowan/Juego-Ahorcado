const words: string[] = [

    "COMPUTADORA",
    "PROGRAMACION",
    "BICICLETA",
    "TELEFONO",
    "ESCUELA",
    "PELUCHE",
    "PELOTA",
    "PERFUME",
    "TUCUMAN",
    "VIVORA",
    "VETERINARIO",
    "ZAPATILLA",
    "HELADERA",
    "MATEMATICAS",
    "CUMBIA"
];


export function getRandomWord() {

    const randomIndex = (Math.floor(Math.random() * words.length));




    return words[randomIndex];
}