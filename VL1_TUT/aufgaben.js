//Aufgabe 1
const preis = 2.00;
const mehrwertsteuer = 19;

function berechneMehrwertsteuer(mehrwertsteuer,preis){
    return preis * mehrwertsteuer / 100
} 

console.log(berechneMehrwertsteuer(mehrwertsteuer,preis))

//Aufgabe 2

let tabelle = "produkte";
let produkt = "Seagate";

stringA = "SELECT * FROM " + tabelle + " WHERE name=" + "'" + produkt + "'";

console.log(stringA);

stringB = `SELECT * FROM ${tabelle} WHERE name='${produkt}'`;

console.log(stringB);

// Aufgabe 3

let lebensenergie = [
    {name: "Alice", energie: 95},
    {name: "Bob", energie: 45},
    {name: "Carla", energie: 75}
]

lebensenergie['b'] = {};

for (spieler of lebensenergie) {
    console.log(`Spieler: ${spieler.name}, Energie: ${spieler.energie}`);
}

function getNameslist(liste) {
    const sammlung = [];
    for (spieler of liste) {
        console.log(obj)
        sammlung.push(spieler.name);
    }
    return sammlung;
}

console.log(getNameslist(lebensenergie));