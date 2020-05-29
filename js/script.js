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
