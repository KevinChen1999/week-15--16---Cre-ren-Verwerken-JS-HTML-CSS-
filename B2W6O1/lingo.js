var guess = document.getElementById("guessname");
var check = document.getElementById("checkbtn");
var result = document.getElementById("result-container");

var random = Math.floor(Math.random() * words.length);
var shuffle = words[random];

var wordsplit = shuffle.split("");

var row = 0;




for(i=0; i<=4; i++){
	for(a=0; a<=4; a++){
		var letterbutton = document.createElement("button");
		result.appendChild(letterbutton);
		letterbutton.id = "row" + i + "btn" + a;

	}
}

document.getElementById("row0btn0").innerHTML = wordsplit[0];

check.onclick = function(){
	var word = random.split("");
	var guessing = guess.value.split("");


		for(i=0; i<=4; i++){
			var btn = document.getElementById("row" + row + "btn" + i);
			btn.innerHTML = guessing[i];
			btn.style.backgroundColor = "red";
			if(word[i] == guessing[i]){
				btn.style.backgroundColor = "green";
				word[i] = null;
			}
		}
		for(i=0; i<=4; i++){
			if(word.includes(guessing[i])){
				document.getElementById("row" + row + "btn" + i).style.backgroundColor = "yellow";
				var index = woord.indexOf(guessing[i]);
				word[index] = null;
			}
		}
row++;
}