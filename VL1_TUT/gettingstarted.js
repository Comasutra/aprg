let bicycle = {
    type: "Fixie",
    gears: 1,
    color: "black"
};

let bicycle1 = {}; //Leeres Objekt
bicycle1["type"] = "Giro";
bicycle1["gears"] = 33;
bicycle1["color"] = "red";

console.log(bicycle.color);

//property ist Name des Attributs
for (property in bicycle) {
    console.log(property);
}

//Ausgabe des Wertes des Attributs
for (property in bicycle) {
    console.log(bicycle[property]);
}

let names = ["Alice","Bob","Carla"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (name of names) {
    console.log(name);
}

// Aufgabe: Geben Sie in einer Schleife das Type-Attribut aller Elemente im Array aus.

let namesList = [
    {vorname: "Alice", nachname: "im Wunderland"},
    {vorname: "Bob", nachname: "der Meister"},
    {vorname: "Carla", nachname: "Kolumna"}
];

for (obj of namesList) {
    console.log(obj.vorname + " " + obj.nachname);
    console.log(`Vorname: ${obj.vorname} Nachname: ${obj.nachname}`);
}

namesList.push({vorname: "Benjamin", nachname: "Blümchen"});

console.log(namesList);

function addieren(a,b) {
    const summe = a + b;
    return summe;
}

console.log(addieren(42,23));


