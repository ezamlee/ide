var parser = function(obj){
  // $("#droppable").append(obj.ui.skeleton(obj))
  console.log(obj.ui.css.button.class[0]);
  $("#droppable button.draggable").addClass(obj.ui.css.button.class[0])
}
var elements = function(obj){
  $(".sidebar-nav").append(obj.ui.skeleton(obj));
  $(".sidebar-nav button").addClass('draggable');
}
elements(button);

$("#droppable").droppable({
  accept: ".draggable",
  drop: function (event, ui)
  {
    parser(button);
    ui.helper.clone().addClass("draggable").appendTo('#droppable');
  }
});

$(".draggable").draggable({
  cancel:false,
  appendTo: '#droppable',
  containment: "window",
  cursor: 'move',
  revertDuration: 100,
  revert: 'invalid',
  helper: 'clone'
});
