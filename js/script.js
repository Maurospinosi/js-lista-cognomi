var surname = prompt("Inserisci il Cognome");

var nameList = ["bianchi", "rossi", "duzioni", "balsano", "verdi"];
nameList.push(surname);

for(var i = 0; i < nameList.length; i++){
  nameList.sort();
  var content = document.getElementById('list').innerHTML;
  content = content + "<li>" + nameList[i];
  document.getElementById('list').innerHTML = content;
}
var n = nameList.indexOf(surname);
document.getElementById('number').innerHTML = n;
