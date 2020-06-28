let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let categories = ["ANIMALS", "FOOD", "SPECIALITY", "CLOTHES"];
let root = document.getElementById("root");
let root1 = document.getElementById("root1");
let animals = ["CAT", "DOG", "GIRAFFE", "RABBIT", "WOLF", "TIGER", "HORSE"];
let food = ["TOMATOS", "POTATOS", "CHEESE", "BUTTER", "EGGS", "BREAD"];
let clothes = ["SWEATER", "JEANS", "GLOVES", "SUIT"];
let speciality = ["ENGINEER", "TEACHER", "DOCTOR", "SWIMMER"];
let word = document.querySelector("#word");
let words = document.querySelector("#word1");
let word_2 = document.querySelector("#word2");
let btns= document.getElementById('btns-alphabet');
let final= document.getElementById('final');
let h1= document.getElementById('finalh1');
let hangman= document.querySelector('#hangman');
let restart = document.getElementById('new');
let wordText = [];
let sonWord = [];
let counter = 0;
let wanted = "";
let wordText1 = ''
function printBtn() {
  for (var k of categories) {
    var catBtn = document.createElement("button");
    var cattext = document.createTextNode(k);
    catBtn.append(cattext);
    root.appendChild(catBtn).addEventListener("click", function(k) {
      root1.style.display = "block";
      hangman.style.display="flex";
      switch (this.textContent) {
        case "ANIMALS":
          wanted = animals[Math.floor(Math.random() * animals.length)];
          break;
        case "FOOD":
          wanted = food[Math.floor(Math.random() * food.length)];
          break;
        case "SPECIALITY":
          wanted = speciality[Math.floor(Math.random() * speciality.length)];
          break;
        case "CLOTHES":
          wanted = clothes[Math.floor(Math.random() * clothes.length)];
          break;
      }
      root.style.display = "none";
     
      sonWord = word.textContent;
      
      for (let k = 0; k < wanted.length; k++) {
        wordText.push(" _");
        words.textContent = wordText;
        words.style.display = "none";
        word.style.display = "none";
        wordText.splice(k, 1, " _");
        word_2.textContent = wordText;
      }
      console.log(wanted);
      console.log(wordText);
      for (var i = 0; i < arr.length; i++) {
        var btn = document.createElement("button");
        btn.classList.add('alphabet');
        var alphtext = document.createTextNode(arr[i]);
        btn.appendChild(alphtext);
       
        root1.appendChild(btn).addEventListener("click", function(i) {
          if (wanted.indexOf(this.textContent) >= 0) {
            for (let k = 0; k < wanted.length; k++) {
              if (wanted[k] === this.textContent) {
                wordText.splice(k, 1, this.textContent);
                wordText1 = wordText.join("");
                if (counter < 9 && wanted == wordText1 ){
                  root1.style.display="none"
                  final.style.display="block";
                  h1.textContent = "YOU WIN";
                }
              }
            }
            word_2.textContent = wordText;
            console.log(wordText);
          } else if (wordText.indexOf(this.textContent) === -1) {
            counter = counter + 1;
            let con=document.getElementById(`hang${counter}`);
            con.style.display="block";
            if ( counter === 9 && wanted != wordText1){
              root1.style.display="none";
              final.style.display="block";
              h1.textContent = "YOU LOST";
              
            }
            console.log(counter);
          }         
        });    
      }
     
    });
  }
}
restart.addEventListener("click", function() { 
  final.style.display="none";
  root.style.display="block";
  wordText=[];
  arr=[]    
  counter=0;
  document.getElementById('hang1').style.display="none";
  document.getElementById('hang2').style.display="none";
  document.getElementById('hang3').style.display="none";
  document.getElementById('hang4').style.display="none";
  document.getElementById('hang5').style.display="none";
  document.getElementById('hang6').style.display="none";
  document.getElementById('hang7').style.display="none";
  document.getElementById('hang8').style.display="none";
  document.getElementById('hang9').style.display="none";
});