//section 1-animal

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

var max = new Animal("Dog","Old","Golden","Sweet","Medium");
var lacey = new Animal("Dog","Young","Brown","Playful","Small");
var miko = new Animal("Dog","Baby","Black","Active","Tiny");
var lola = new Animal("Dog", "Young","White","Sleepy","Medium")

var animals = [max, lacey, miko, lola];
var animalsOriginal = [];

for (var i = 0; i < animals.length; i++) {
  animalsOriginal.push(animals[i]);
}

var currentQuesiton = 1;

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
      if (animals[i].type != answer && answer!="random"){
        delete(animals[i]);
      }
    }
  }
  if (currentQuestion===2){
    for (var i = 0; i < animals.length; i++) {
      if (animals[i]!=null && animals[i].color != answer && answer!="random"){
        delete(animals[i]);
      }
    }
  }
  if (currentQuestion===3){
    for (var i = 0; i < animals.length; i++) {
      if (animals[i]!=null && animals[i].age != answer && answer!="random"){
        delete(animals[i]);
      }
    }
  }
  if (currentQuestion===4){
    for (var i = 0; i < animals.length; i++) {
      if (animals[i]!=null && animals[i].size != answer && answer!="random"){
        delete(animals[i]);
      }
    }
  }
  if (currentQuestion===5){
    for (var i = 0; i < animals.length; i++) {
      if (animals[i]!=null && animals[i].personality != answer && answer!="random"){
        delete(animals[i]);
      }
    }
    var hasMatch = false;

    for (var i = 0; i < animals.length; i++) {
      if (animals[i]!=null){
        //final animals
        hasMatch=true;
        alert('Your match is: ' + animals[i].name);

      }
    }
    if (hasMatch===false) {
      //choose random animals
      alert("Your random match: " + animalsOriginal[Math.floor((Math.random() * animalsOriginal.length))].name);
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
