var surname = prompt("Inserisci cognome");

var nameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
nameList.push(surname);

nameList.sort();

var content = document.getElementById('list').innerHTML;
content = content + nameList;
document.getElementById('list').innerHTML = content;


// document.write(nameList.sort());
// document.getElementById('list').innerHTML = content;
