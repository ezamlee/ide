$("#droppable").droppable({
  accept: ".draggable",
  drop: function (event, ui){
    parser(button);
    ui.helper.clone().addClass("draggable").appendTo('#droppable');
  }
});

$(".draggable").draggable({
  cancel: false,
  appendTo: '#droppable',
  containment: "window",
  cursor: 'move',
  revertDuration: 100,
  revert: 'invalid',
  helper: 'clone'
});
