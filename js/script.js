var surname = prompt("Inserisci cognome");

var nameList = [surname, "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

for(var i = 0; i < nameList.length; i++){
  var content = document.getElementById('list').innerHTML;
  content = content + "<li>" + nameList[i] + "</li>";
  nameList.sort();
  document.getElementById('list').innerHTML = content;

}

// document.write(nameList.sort());
// document.getElementById('list').innerHTML = content;
