 //synchronous programming
 setTimeout
function pickWinner(){
  const names = ["Labonno", "Ripen", "Rahim", "Karim", "Mim"];
  const w = names[Math.floor(Math.random()*names.length)];
  document.getElementById("demo").innerHTML = w;
  document.getElementById("winner").innerHTML = "Winner: " + w + " Nripen ";
}

         



 








