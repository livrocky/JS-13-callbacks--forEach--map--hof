const skArray = [0, 10, 15, -2, 30, -15, 10, -50, { title: "blue" }, { title: "green" }];
//naudosim forEach

//1. console atspauzdinti kiekviena reiksme

skArray.forEach((sk) => console.log("sk===", sk));

//2. atspaustinti visu skaiciu suma

let total = 0;
skArray.forEach((skaicius) => {
  total += skaicius;
});
console.log("Sum total===", total);

// 3. atspausdinti tik teigiamus skaicius

skArray.forEach((sk) => {
  if (sk > 0) {
    console.log(`${sk} Teigiami`);
  }
});

// 4. grazinti nauja masyva su neigiamais skaiciais
// const neigiami = [];
// skArray.forEach((sk) => {
//   if (sk < 0) {
//     neigiami.push(sk);
//   }
// });
//filter grazinti nauja masyva kuriame nebutinai yra visos reiksmes
const neigiami = skArray.filter((sk) => sk < 0);
const teigiami = skArray.filter((sk) => sk > 0);
console.log(`neigiami===`, neigiami);
console.log(`teigiami===`, teigiami);

// 5. grazinti nauja masyva kur visos neigiamos reiksmes paverstos teigiamom

skArray.forEach((sk) => {
  if (sk < 0) {
    const convert = Math.abs(sk);
    console.log(convert);
  }
});

//// 6. grazinti koks yra -15 skaiciaus indexas

skArray.forEach((sk, i) => {
  if (sk === -15) {
    console.log(`-15 index yra`, i);
  }
});

//kad surasti viena reiksme atitinkancia salyga naudojant .find

const found = skArray.find((sk) => sk.title === "blue");
console.log("found===", found);

//7.

//8. grazinti nauja masyva kuriame yra padvigubintos reiksmes su .map
//map - kai norim grazinti kitokia struktura ar pakeistas reiksmes (VISAS)
//_________________________________//
const dvigubosReiksmes = skArray.map((sk) => {
  const double = sk * 2;
  return double;
});
//SHORT VERSION//
const dvigubosReiksmesShort = skArray.map((sk) => sk * 2);
console.log("dvigubosReiksmes===", dvigubosReiksmes);
console.log("dvigubosReiksmesShort===", dvigubosReiksmesShort);

//10. Sukurti sarasa ir ideti ji i ul
const ulEl = document.getElementById("ul");
//gaunam masyva su li ele textu
const liArr = skArray.map((sk) => `<li> skaicius ${sk} </li>`);

//masyva paverciam i string
const liStringFromArr = liArr.join("");
//ikeliam sugeneruota stringa i html
ulEl.innerHTML = liStringFromArr;

// Chain methods
const liStrigChain = skArray
  .filter((sk) => sk > 5)
  .map((sk) => `<li> skaicius ${sk} </li>`)
  .join("");
console.log("liStrigChain ===", liStrigChain);

// extra sunkesnis
// e1. is skArray su reduce grazinti vidurki
// e2. is skArray su reduce grazinti objekta
{
  vidurkis: "";
}
// e2. is skArray su reduce grazinti objekta
{
  vidurkis: "";
  totalSuma: "";
}
// e2. is skArray su reduce grazinti objekta
// {
//   teigiami: [...]
//   neigiami: [...]
// }

const arr2 = [
  [0, 15, 25],
  [15, -5, 30],
  [-15, 7, 12],
];
// e2. is arr2 su reduce grazinti nauja masyva kuriame yra tik vienas masyvo lygis. is visu vidiniu masyvu istraukiam reiksmes ir sukeliam i viena masyva
