function saveOutput(jakchceszdanetodawaj){
  document.getElementById("outputpytanie").innerHTML = document.getElementById("outputpytanie").innerHTML + document.getElementById('inputpytanie').value;
  var takczynie = Math.floor((Math.random() * 2) + 1);
  if(jakchceszdanetodawaj == 1){
    takczynie = 1
  }
  if(jakchceszdanetodawaj == 2){
    takczynie = 2
  }
  if (takczynie == 2){
    document.getElementById("outputpytanie").innerHTML = document.getElementById("outputpytanie").innerHTML + "\n Magiczna kula mowi: TAK! \n";
  }
  if (takczynie == 1){
    document.getElementById("outputpytanie").innerHTML = document.getElementById("outputpytanie").innerHTML + "\n Magiczna kula mowi: NIE! \n";
  }
}