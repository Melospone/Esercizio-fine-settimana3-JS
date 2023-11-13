/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 30 + 20;

console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Carmelo",
  surname: "Bonanno",
  age: 24,
};

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = [];
me.skills.push("html", "css", "javascript");

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("xxxx");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

var result = dice();
console.log(result);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

console.log(whoIsBigger(10, 25));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(code) {
  return code.split(" ");
}

let code = "I love coding";
console.log(splitMe(code));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(stringa, cencellaPrima) {
  if (cencellaPrima) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
}

const primaStr = deleteOne("ciao", true);
const secondaStr = deleteOne("ciao", false);

console.log(primaStr);
console.log(secondaStr);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(stringa) {
  let risultato = "";
  for (let i = 0; i < stringa.length; i++) {
    let stringaAttuale = stringa.charAt(i);
    if (!(stringaAttuale >= "0" && stringaAttuale <= "9")) {
      risultato += stringaAttuale;
    }
  }
  return risultato;
}

let risultato = onlyLetters("io ho 24 anni");
console.log(risultato);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

//ho cercato la regex cosi da evitare un ciclo in cui cercava la presenza di "@" e "." all'interno della lunghezza della stringa

function isThisAnEmail(email) {
  const emailValidazioneRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailValidazioneRegex.test(email);
}

let esempioUno = isThisAnEmail("ciao@comestai.it");
let esempioDue = isThisAnEmail("ciaocomestai.it");

console.log(esempioUno);
console.log(esempioDue);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const giorniSettimana = [
    "domenica,",
    "lunedi",
    "martedi",
    "mercoledi",
    "giovedi",
    "venerdi",
    "sabato",
  ];
  const giornoOggi = new Date().getDay();

  return giorniSettimana[giornoOggi];
}

let oggi = whatDayIsIt();
console.log(oggi);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numeri) {
  let values = [];
  let sum = 0;

  for (let i = 0; i < numeri; i++) {
    let risultatiDice = dice();
    values.push(risultatiDice);
    sum += risultatiDice;
  }
  return {
    sum: sum,
    values: values,
  };
}
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

let diceRisultato = rollTheDices(3);
console.log("Sum:", diceRisultato.sum);
console.log("Values:", diceRisultato.values);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(data) {
  const oggi = new Date();

  const tempo = data.getTime()

  const tempoOggi = oggi.getTime()
  const differenzaTempo = tempoOggi - tempo

  const giorniDifferenza = Math.floor(differenzaTempo / (1000 * 60 * 60 * 24));
  return giorniDifferenza
}

const data = new Date("2023-11-11");
const giorniPassati = howManyDays(data)

console.log(howManyDays(data))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(oggetto, strElimina) {
  delete oggetto[strElimina];

  return oggetto
}

let mioOggetto = {
  nome: "Carmelo",
  eta: 24,
  citta: "Catania"
};

console.log(deleteProp(mioOggetto, "nome"))



/* ARRAY FILM  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/*---------FILM PIU RECENTE-------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (array) => {
  let piuRecente = array[0];

  for (let i = 1; i < array.length; i++) {
    let anno = parseInt(array[i].Year, 10);
    let annoRecente = parseInt(piuRecente.Year, 10);

    if (anno > annoRecente) {
      piuRecente = array[i];
    }
  }

  return piuRecente;
};

const piuRecente = newestMovie(movies);
console.log(piuRecente);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (array) => {
  return array.length
};

const numeroFilmTot = countMovies(movies)
console.log(numeroFilmTot);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(array) {
  let anniUscitaFilm = []

  for (let i = 0; i < array.length; i++) {
    anniUscitaFilm.push(array[i].Year)
  }
  return anniUscitaFilm
}

const anniUscitaFilm = onlyTheYears(movies)
console.log(anniUscitaFilm);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(array) {
  let millennioScorso = 2000;
  let filmMillennioScorso = []

  for (let i = 0; i < array.length; i++) {
    let anno = array[i].Year;
    if (anno >= millennioScorso) {
      filmMillennioScorso.push(array[i])
    }
  }
  return filmMillennioScorso
}

const filmDiQuestoMillennio = onlyInLastMillennium(movies)
console.log(filmDiQuestoMillennio);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(array) {
  let sommaAnniFilm = 0;

  for (let i = 0; i < array.length; i++) {
    sommaAnniFilm += parseInt(array[i].Year, 10)
  }
  return sommaAnniFilm
}

const risultatoSommaAnni = sumAllTheYears(movies)
console.log(risultatoSommaAnni);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(array, stringaTitolo) {
  const risultatoFilm = array.filter((film) =>
    film.Title.includes(stringaTitolo)
  )
  return risultatoFilm
}

const risultatoFilm = searchByTitle(movies, "Lord")
console.log(risultatoFilm);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(array, stringaTitolo) {
  const match = [];
  const unmatch = [];
  for (let i = 0; i < array.length; i++) {
    const film = array[i]
    if (film.Title.includes(stringaTitolo)) {
      match.push(film)
    } else {
      unmatch.push(film)
    }

  }
  return { match, unmatch }
}

const risultatoMatchUnmatch = searchAndDivide(movies, "Lord")
console.log(risultatoMatchUnmatch);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selezioneContainer() {
  const container = document.getElementById("container");
  return container
}

const elementiContainer = selezioneContainer()
console.log(elementiContainer);

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selezioneTd() {
  const td = document.querySelectorAll("td")
  return td
}

const elementiTd = selezioneTd()
console.log(elementiTd);


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function cicloTd() {
  const testoTd = document.querySelectorAll("td");

  testoTd.forEach((td) => {
    console.log(td.textContent);
  });
}

cicloTd();


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addBackGround() {
  const linkColor = document.querySelectorAll("a")
   for (let i= 0; i < linkColor.length; i++) {
    linkColor[i].style.backgroundColor = "red";
    linkColor[i].style.color = "white";
   }
}

addBackGround()



/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function aggiungiElemento() {
  const nuovoEle = document.createElement("li")

  nuovoEle.textContent = "QUARTO ELMENTO CREATO DINAMICAMENTE"

  const listaEsistente = document.getElementById("myList");

  listaEsistente.appendChild(nuovoEle).style.color = "blue"
}
aggiungiElemento()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* FATTO CON REMOVE */
/* function svuotaLista() {
  const lista = document.getElementById("myList")

  lista.remove(lista)
  console.log(lista);
}

svuotaLista() */


function svuotaLista() {
  const lista = document.getElementById("myList");

  if (lista) {
    lista.children.forEach((e) =>
    lista.removeChild(e))
  }
}

svuotaLista()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClasse() {
  const daiClasse = document.querySelectorAll("tr");
  daiClasse.forEach((tr) => {
    tr.classList.add("test");
  });
}

aggiungiClasse();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

