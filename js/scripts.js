//section 1-animal
var max = new Animal("Dog", "Max", "Orange","Old", "Medium", "Sweet","");
var lacey = new Animal("Dog", "Lacey","Brown","Young", "Small","Playful", "");
var miko = new Animal("Dog", "Miko", "Black", "Baby", "Tiny", "Active", "");
var lola = new Animal("Dog", "Lola", "White", "Young", "Medium", "Sleepy", "")
var chica = new Animal("Cat", "chica", "brown","baby", "tiny","sleepy","")
var jezebel = new Animal("Cat", "jezebel","brown","baby", "medium","playful", "")
var candi = new Animal("Cat", "candi","white","adult", "medium","active", "")
var papa = new Animal("Reptile", "papa","purple","adult", "small","active", "")
var tiki = new Animal("Bird", "tiki","orange","young", "medium","lazy", "")
var felix = new Animal("Cat", "Felix", "brown", "baby", "tiny", "playful", "")
//end section 1
//section2- matchmaker
function Animal(type,name,color,age,size,personality,notes){
  this.type= type;
  this.name = name;
  this.color = color;
  this.age = age;
  this.size = size;
  this.personality = personality;
  this.notes = notes;
}


/* Possible values for Animal.type
"dog"
"cat"
"bird"
"reptile"
"fish"
*/

/* Possible values for Animal.color
"brown"
"white"
"purple"
"black"
"orange"
*/

/* Possible values for Animal.age
"baby"
"young"
"middle"
"adult"
"old"
*/

/* Possible values for Animal.size
"tiny"
"small"
"medium"
"large"
"huge"
*/

/* Possible values for Animal.personality
"sweet"
"cold"
"active"
"sleepy"
"playful"
*/

var currentQuestion = 1;

var animals = [max, lacey, miko, lola, chica, jezebel, candi, papa, tiki, felix];
var animalsOriginal = [];

for (var i = 0; i < animals.length; i++) {
  animalsOriginal.push(animals[i]);
}

var currentQuestion = 1;
function nextQuestion(){
  for (var i = 0; i < 5; i++) {
    $('#question' + i).hide();
  }
  currentQuestion++;
  $('#question'+ currentQuestion).show();
  if(currentQuestion===5){
    $('#next').text('Find my match!');
  }
}

function sortAnimal(answer) {

  if (currentQuestion===1){

    for (var i = 0; i < animals.length; i++) {
      if (animals[i].type.toLowerCase() !== answer && answer !== "random"){
        delete(animals[i]);
      }
    }
  }
  if (currentQuestion===2){
    for (var i = 0; i < animals.length; i++) {
      if (animals[i]!=null && animals[i].color.toLowerCase() != answer && answer!="random"){
        delete(animals[i]);
      }
    }
  }
  if (currentQuestion===3){
    for (var i = 0; i < animals.length; i++) {
      if (animals[i]!=null && animals[i].age.toLowerCase() != answer && answer!="random"){
        delete(animals[i]);
      }
    }
  }
  if (currentQuestion===4){
    for (var i = 0; i < animals.length; i++) {
      if (animals[i]!=null && animals[i].size.toLowerCase() != answer && answer!="random"){
        delete(animals[i]);
      }
    }
  }
  if (currentQuestion===5){
    for (var i = 0; i < animals.length; i++) {
      if (animals[i]!=null && animals[i].personality.toLowerCase() != answer && answer!="random"){
        delete(animals[i]);
      }
    }
    var hasMatch = false;

    for (var i = 0; i < animals.length; i++) {
      if (animals[i]!=null){
        //final animals
        hasMatch=true;
      }
    }

    if (hasMatch) {
      var matchingAnimals = [];
      for (var i = 0; i <= animals.length; i++) {
        if (animals[i] != null) {
          matchingAnimals.push(animals[i]);
        }
      }
      var animalResult = matchingAnimals[Math.floor((Math.random() * matchingAnimals.length))].name.toLowerCase();
      $("#animalResult").append($("<h2>You've been matched with " + animalResult + "</h2>"));
    }

    if (!hasMatch) {
      //choose random animals
      var randomResult = animalsOriginal[Math.floor((Math.random() * animalsOriginal.length))].name.toLowerCase();
      $("#animalResult").append($("<h2>Your random match is " + randomResult + "</h2>"));
    }
  }
}
//end section 2


$(document).ready(function() {
  //section 1-animal

  //end section 1

  //section2- matchmaker
  $("#next").click(function() {
    var answer = $('input:radio[name=question' + currentQuestion +']:checked').val();
    if (answer){
        sortAnimal(answer);
        nextQuestion(); // display the next quesiton

    }else{
      alert('Please choose an answer');
    }


  });
  //end section 2
});
