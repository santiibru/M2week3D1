/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

// function crazySum(somma) {
//     let a = 2;
//     let b = 2;
//     let c = (a + b);
//     if (a === b) {
//         c = (c * 30)
//     }
    
//     console.log(c);
// }

// crazySum();



/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) 
 o se è esattamente uguale a 400.
*/

// function boundary() {
//     let a = 400;
//     if (a >= 20 && a <= 100 || a === 400){
//         console.log("vero");
//     }
//     else {
//         console.log("falso");
//     }
        
// }

// boundary();
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

// function reverseString(str) {
//     let splitArray = str.split("");
//     let reverseArray = splitArray.reverse();
//     let joinArray = reverseArray.join("");
//     return joinArray;
    
// }
// console.log(reverseString("EPICODE"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

// function upperFirst(arr) {
//     let newArr = arr.split(" ")

//     for(i = 0; i < newArr.length; i++){
//         newArr[i] = newArr[i][0].toUpperCase() + newArr[i].slice(1)    
//     }
//     return newArr.join(" ")

// }

// console.log(upperFirst("le lezioni di epicode sono molto divertenti"));



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

// function giveMeRandom() {
//     let n = Array.from({length: 6}, () => Math.floor(Math.random() * 10));
//     console.log(n);
// }
// giveMeRandom();




//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
