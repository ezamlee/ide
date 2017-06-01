var parser = function(obj){
  //$("#droppable button.draggable").addClass(obj.ui.css.button.class[0] +" "+ obj.ui.css.button.class[1])
  for (var i = 0; i < obj.ui.css.button.class.length; i++) {
    $("#droppable button.draggable").addClass(obj.ui.css.button.class[i])
  }
}

var elements = function(obj){
  $(".sidebar-nav").append(obj.ui.skeleton(obj));
  $(".sidebar-nav button").addClass('draggable');
}

elements(button);
