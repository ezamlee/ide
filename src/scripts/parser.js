$(document).ready(function(){
  var parser = function(obj){
    $("#canvas").append(obj.ui.skeleton(obj))
  }
  parser(button);

  function() {
    $( "#draggable" ).draggable();
  }
})
