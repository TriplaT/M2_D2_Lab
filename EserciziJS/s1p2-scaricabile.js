/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
console.log("I principali tipi di dato in JavaScript sono:");
console.log("1. Number: rappresenta i numeri, come 1, 2, 3. È come contare le mele.");
console.log("2. String: rappresenta il testo, come 'Ciao'. È come scrivere il tuo nome.");
console.log("3. Boolean: rappresenta vero o falso, come una luce accesa o spenta.");

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
console.log("Un oggetto in JavaScript è come una scatola dei giocattoli. Può contenere diversi giocattoli (proprietà) e ognuno di essi ha un nome e un valore.");

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let sum = 12 + 20;
console.log("La somma di 12 e 20 è:", sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Francesco";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let subtraction = 4 - x;
console.log("La sottrazione tra 4 e x è:", subtraction);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
let name1 = "john";
let name2 = "John";
console.log("name1 è diverso da name2:", name1 !== name2);
console.log("name1 è uguale a name2 in lowercase:", name1.toLowerCase() === name2.toLowerCase());
