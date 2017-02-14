$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          .html( "Dropped!" );
      }
    });
  } );
  
$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
//    $( "#sortable").droppable({drop: function(event, ui){
//            
//            $(this)
//                    .append($('<li>something</li>'));
//        }});
  } );
  
    $( function() {
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();

    
  } );
      //$( "#sortable1 li").each(function() { $(this).children('li').slice(4).hide(); });
      
//$('#sortable1 li').children('#sortable1 li').slice(5).hide();      

//var amount = 0;
//$('#sortable1 li').each(function() {
//    amount++;
//    
//    if (amount > 5) {
//        $('#sortable1 li').hide();
//    }
//});
//$('#sortable1').each(function() { $(this).children('li').slice(4).hide(); });


