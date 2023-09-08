/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log(pets[0])
console.log(pets[1])
console.log(pets[2])
console.log(pets[3])

//oppure

// let count = 0
// while (count<pets.length) {
//   console.log(pets[count])
//   count++
// }

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort()
// console.log(pets)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse()
// console.log(pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstElement = pets.shift()
pets.push(firstElement)
// console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  if (i % 2 === 0) {
    cars[i].licensePlate = 'California'
  } else {
    cars[i].licensePlate = 'Oregon'
  } 
 }

//  console.log(cars)


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: 'Fiat',
  model: 'Panda',
  color: 'white',
  trims: ['easy', 'lounge', 'cross'],
  licensePlate: 'Nevada',
},)

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()  
}

// console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}

// console.log(justTrims)

//diversi console.log() li commento dopo averli utlizzati per mantere la console quanto più pulita e facilitarmi la vita nello svolgimento degli esercizi

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === 'b') {
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }  
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let j=0
while (numericArray[j] !== 32) {
  console.log(numericArray[j])
  j++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const positionInTheItalianAlphabet = []

// for (let i = 0; i < charactersArray.length; i++) {
//   switch (charactersArray[i]) {
//     case 'g':
//       positionInTheItalianAlphabet.push(7)
//       break;
//     case 'n':
//       positionInTheItalianAlphabet.push(12)
//       break;
//     case 'u':
//       positionInTheItalianAlphabet.push(19)
//       break;
//     case 'z':
//       positionInTheItalianAlphabet.push(21)
//       break;
//     case 'd':
//       positionInTheItalianAlphabet.push(4)
//       break;

//     default:
//       positionInTheItalianAlphabet.push('n/a')
//       break;
//   }
// }

//metodo più carino

const italianAlphabet = ' abcdefghilmnopqrstuvz'

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'g':
      positionInTheItalianAlphabet.push(italianAlphabet.indexOf('g'))
      break;
    case 'n':
      positionInTheItalianAlphabet.push(italianAlphabet.indexOf('n'))
      break;
    case 'u':
      positionInTheItalianAlphabet.push(italianAlphabet.indexOf('u'))
      break;
    case 'z':
      positionInTheItalianAlphabet.push(italianAlphabet.indexOf('z'))
      break;
    case 'd':
      positionInTheItalianAlphabet.push(italianAlphabet.indexOf('d'))
      break;

    default:
      positionInTheItalianAlphabet.push('n/a')
      break;
  }
}

// console.log(positionInTheItalianAlphabet)

// visto che la stringa italianAlphabet mi è piaciuta molto la utilizzo per fare una piccola funzione che restituisce la posizione di qualsiasi lettere dell'alfabeto italiano

const tellMePosition = function (x) {
  if (typeof x === 'string') {
    const y =x.toLowerCase()
    if (italianAlphabet.indexOf(y) > 0) {
      if (x.length !== 1){
        return "Inserici solo una lettera"
      } else {
      return "La posizione della lettera "+ y + " è " + italianAlphabet.indexOf(y)
      }
    } else {
      return "Inserisci una lettere dell'alfabeto italiano"
    }
  } else {
    return 'Fornisci un valore di tipo: stringa'
  }
  
}

console.log(tellMePosition('E'))
