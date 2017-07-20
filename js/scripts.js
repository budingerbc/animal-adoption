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
