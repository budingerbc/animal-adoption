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

/* Possible values for Animal.age
"sweet"
"cold"
"active"
"sleepy"
"playful"
*/
var fluffy = new Animal("cat","Fluffy","White","5","Large","playful","These are the notes for fluffy");


var currentQuesiton = 1;
function nextQuestion(){
  for (var i = 0; i < 5; i++) {
    $('#question' + i).hide();
  }
  currentQuesiton++;
  $('#question'+ currentQuesiton).show();
  if(currentQuesiton===5){
    $('#next').text('Find my match!');
  }
}
//end section 2


$(document).ready(function() {
  //section 1-animal

  //end section 1

  //section2- matchmaker
  $("#next").click(function() {
    var answer = $('input:radio[name=question' + currentQuesiton +']:checked').val();
    if (answer){
        nextQuestion(); // display the next quesiton
    }else{
      alert('Please choose an answer');
    }


  });
  //end section 2
});
