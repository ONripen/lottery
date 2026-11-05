 //synchronous programming
 setTimeout
 https://onripen.github.io/lottery-winner-delay-fix-it/

 setTimeout(function() {
              box.innerHTML += '<p>' + myWinner[i] + ' - ' + i + '</p>';
            },i*2000)
         

             setTimeout(function() {
               box.innerHTML += '<p>' + myWinner[i] + ' - ' + i + '</p>';
            },i*3000)
         

             setTimeout(function() {
               box.innerHTML += '<p>' + myWinner[i] + ' - ' + i + '</p>';
            },i*4000)
         

             setTimeout(function() {
               box.innerHTML += '<p>' + myWinner[i] + ' - ' + i + '</p>';
            },i*5000)}

 if (winner) {
                    const winnerDiv = document.createElement("div");
                    winnerDiv.textContent = `Winner ${i + 1}: ${winner}`;
                    listDiv.appendChild(winnerDiv);
                }
            }
            if (winners.length === 0) {
                alert("Please enter at least one name.");
                return;
            }
            const listDiv = document.getElementById("list");
            listDiv.innerHTML = "<h3>Lottery Participants:</h3><ul>" + names.map(name => `<li>${name}</li>`).join("") + "</ul>";
        }


        </script>
       <script src="app.js">  </script>
         



 








