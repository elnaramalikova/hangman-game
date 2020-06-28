let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let categories = ["ANIMALS", "FOOD", "SPECIALITY", "CLOTHES","HOME","NATURE", "SPORT", "COLORS", "PLACES", "PERSONAL", "SUBJECTS", "NUMBERS"];
let root = document.getElementById("root");
let root1 = document.getElementById("root1");
let animals = ["FOX","MONKEY","CAMEL", "DEER","KOALA","GORILLA","KANGAROO","ZEBRA","ELEPHANT","CAT", "DOG", "GIRAFFE", "RABBIT", "WOLF", "TIGER", "HORSE"];
let food = ["TOMATOS", "POTATOS", "CHEESE", "BUTTER", "EGGS", "BREAD","MILK", "YOGURT", "MEAT", "PIZZA","ONION", "OIL","SALT","CREAM"];
let clothes = ["SWEATER", "JEANS", "GLOVES", "SUIT", "DRESS","BOOTS","COAT","JACKET","BELT","SHOES"];
let speciality = ["ENGINEER", "TEACHER", "DOCTOR", "SWIMMER","NURSE", "FIREMAN","FISHMAN","SURGEON", "DENTIST"];
let home=["COMPUTER", "SOFA", "WINDOW","DOOR","MIRROR","PICTURE","TABLE", "CHAIR", "MAP","CORNER"];
let sport=["BASKETBALL","KARATE","DARTS","DIVING","WRESTLING", "SHOOTING","BASEBALL","SWIMMING", "GOLF", "TENNIS", "CHESS","POOL", "CRICKET"];
let personal=["TICKET", "WALLET", "MONEY","NEWSPAPER", "LAPTOP","PEN","WATCH","KEYS","BAG", "PURSE"];
let places=["GYM", "STAIRS","STORE","GARDEN","BEACH","LIBRARY","SALON","BATHROOM", "BEDROOM","OFFICE"];
let subjects=["MATHS", "MUSIC","CHEMISTRY", "BIOLOGY", "EBGLISH", "ART", "COMPUTING", "HISTORY", "PHYSICS"];
let nature =["FLOWER", "DESERT", "LIGHTNING", "TORNADO", "MOON","MOUNTAIN","HILL", "CLOUDS", "RAINBOW","VOLCANO","PLANET", "FOREST"];
let colors=["RED","YELLOW","PURPLE", "BLUE","GREEN", "GREY", "BROWN","ORANGE", "BLACK", "WHITE"];
let numbers=["ONE", "TEN","HUNDRED", "THREE", "ELEVEN", "THRITEEN"," SIXTEEN","SEVEN", "SIXTY", "SEVENTY", "EIGHTY", "NINETY","ZERO", "THREE", "FOURTEEN", "EIGHTEEN"]

let word = document.querySelector("#word");
let words = document.querySelector("#word1");
let word_2 = document.querySelector("#word2");
let btns= document.getElementById('btns-alphabet');
let final= document.getElementById('final');
let h1= document.getElementById('finalh1');
let hangman= document.querySelector('#hangman');
let restart = document.getElementById('new');
let gif= document.getElementById("gif");
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
          case "HOME":
            wanted = home[Math.floor(Math.random() * home.length)];
            break;
          case "NATURE":
            wanted = nature[Math.floor(Math.random() * nature.length)];
            break;
          case "SPORT":
            wanted = sport[Math.floor(Math.random() * sport.length)];
            break;
          case "PLACES":
            wanted = places[Math.floor(Math.random() * places.length)];
            break;
            case "PERSONAL":
              wanted = personal[Math.floor(Math.random() * personal.length)];
              break;
            case "COLORS":
              wanted = colors[Math.floor(Math.random() * colors.length)];
              break;
            case "SUBJECTS":
              wanted = subjects[Math.floor(Math.random() * subjects.length)];
              break;
            case "NUMBERS":
              wanted = numbers[Math.floor(Math.random() * numbers.length)];
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
                  gif.classList.remove("lost");
                  gif.classList.add('won')
                  h1.textContent = "If you want to start the game, Click :";
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
              h1.textContent = "If you want to start the game, Click :";
              // gif.classList.remove("won");
              gif.classList.add('lost')
              
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
  gif.classList.add("no");
});