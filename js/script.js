// //PRIMO ESERCIZIO
//
//inizializzo funzione
//PARAMETRO: stringa
//RETUTRN: booleano
function palindromo (stringa){
  //risposta preimpostata a falsa
  var risposta = false;
  //calcolo quanto è lunga metà della parola per velocizzare il ciclo
  var lunghezza = parseInt((stringa.length)/2);
  //controllo col ciclo se è palindromo
  for (var i = 0; i < lunghezza; i++) {
    if (stringa[i] != stringa[stringa.length - i -1]) {
      return false;
      }else {
      risposta = true;
      }
  }
  return risposta;
}
 var parola = prompt('Inserisci una parola per scoprire se è palindroma');
 if (palindromo (parola)) {
   document.getElementById('risposta').innerHTML = 'Palindroma!'
 } else {
   document.getElementById('risposta').innerHTML = 'Non è palindroma...'
 }


//SECONDO ESERCIZIO

//inizializzo funzione
//RETURN: numero casuale da 1 a 5
// function numeroCasuale(){
//  return Math.floor(Math.random() * 5) + 1;
// }
// var scelta;
// var numero;
// //faccio scegliere pari o dispari
// while (scelta != 'p' && scelta != 'd') {
//   scelta = prompt('Inserisci p per pari o d per dispari').toLowerCase();
// }
// // faccio scegliere un numero da 1 a 5
// while (!(numero>0 && numero<6)) {
//   numero = parseInt(prompt('Inserisci un numero da 1 a 5'));
// }
// //il computer sceglie il numero
// var numeroPC = numeroCasuale();
// alert('Il computer ha scelto ' + numeroPC);
// //calcolo la somma e verifico
// var somma = numero + numeroPC;
// var messaggio = 'La somma è: ' + somma;
// if (somma % 2 == 0 && scelta == 'p') {
//   document.getElementById('risposta').innerHTML = messaggio + ' Hai vinto';
// }else if (somma % 2 != 0 && scelta == 'd') {
//   document.getElementById('risposta').innerHTML = messaggio + ' Hai vinto';
//
// }else {
//   document.getElementById('risposta').innerHTML = messaggio + ' Hai perso';
// }
