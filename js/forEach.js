const skaiciaiArray = [1, 2, 3];

//apskaiciuojam vidurki su for loop//
function avgFor(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    total += element;
  }
  return total / arr.length;
}

const avg1 = avgFor(skaiciaiArray);
console.log(avg1);

//forEach - kazka atlikti su kiekviena reiksme
let total = 0;
skaiciaiArray.forEach((skaicius) => {
  console.log("skaicius===", skaicius);
  total += skaicius;
});

const avt2 = total / skaiciaiArray.length;
console.log("avt2===", avt2);

// skaiciaiArray.forEach(getTotal);
// function getTotal(skaicius) {
//   console.log("skaicius===", skaicius);
//   total += skaicius;
// }

//forEach info

skaiciaiArray.forEach((sk, i, arr) => {
  console.log(`${i} tasis el, kurio reiksme yra ${sk}`);
  console.log(`arr===`, arr);
});
//padvigubinti visas skaiciai masyvo reiksmes
skaiciaiArray.forEach((sk, i, arr) => {
  arr[i] = sk * 2;
});
console.log("skaiciaiArray===", skaiciaiArray);
