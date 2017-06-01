
$(".draggable").draggable({
  cancel:false,
  appendTo: '#droppable',
  containment: "window",
  cursor: 'move',
  revertDuration: 100,
  revert: 'invalid',
  helper: 'clone'
});

$("#droppable").droppable({
  accept: ".draggable",
  drop: function (event, ui)
  {
    ui.helper.clone().appendTo('#droppable');
  }
});

var parser = function(obj){
  $("#droppable").append(obj.ui.skeleton(obj))
}
parser(button);
