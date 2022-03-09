//JS CALLBACK

//Sukurk dvi funkcijas: alertName, consoleName. Abi funkcijos turės vieną parametrą - vardą. Jos bus callback funkcijos, pirma tą vardą alertins, kita - console.log'ins. O dabar susikuriame pagrindę funkciją (coreFunction), ši funkcija - paima pirmą raidę, ją padidina ir prijungia kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia viena iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).

// function alertName(text) {
//   alert(text);
// }

function consoleName(text) {
  console.log(text);
}

function coreFunction(name, callback) {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  callback(capitalizedName);
}
coreFunction("rOkas", consoleName);

//JS ARRAY

//1. Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

const cars = ["BMW", "VW", "Audi"];

cars.forEach((car) => {
  console.log("car===", car);
});

//2. Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

const newCars = cars.map((value, index) => index + ": " + value);
console.log(newCars);

//3. Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

const vardai = ["JoNas", "rokAS", "MaNtAs", "OsKARAS"];
const newNames = vardai.map((value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
console.log("newNames===", newNames);

//4. Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

const amziai = [18, 90, 20, 16, 23, 4];
console.log(amziai.filter((legalAge) => legalAge >= 18));

//5. Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

const miestai = ["Vilnius", "Kaunas", "Klaipeda", "utena"];
console.log(miestai.find((value) => value.charAt(0) === "K"));

//6. Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

console.log(miestai.some((value) => value.charAt(0) === value.charAt(0).toLowerCase(0)));

//7. Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda is mažosios, bet ar visi iš didžiosios.

console.log(miestai.every((value) => value.charAt(0) === value.charAt(0).toUpperCase()));
