
$("#droppable").droppable({
  accept: ".draggable",
  drop: function (event, ui)
  {
    parser(button);
    ui.helper.clone().addClass("draggable").appendTo('#droppable');
  }
});


var parser = function(obj){
  $("#droppable").append(obj.ui.skeleton(obj))
  $("#draggable").append(obj.ui.skeleton(obj))
  //$("#droppable button").addClass([obj.ui.css.button.class[0], obj.ui.css.button.class[1]])
}
var elements = function(obj){
  $(".sidebar-nav").append(obj.ui.skeleton(obj));
  $(".sidebar-nav button").addClass('draggable');
}
elements(button);

$(".draggable").draggable({
  cancel:false,
  appendTo: '#droppable',
  containment: "window",
  cursor: 'move',
  revertDuration: 100,
  revert: 'invalid',
  helper: 'clone'
});
