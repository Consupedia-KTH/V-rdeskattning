  
$( function() {
    $( "#sortable1, #sortable2" ).sortable({
        update: function( event, ui ) { //change update? uppdaterar vid både recieve och update?
            calc();
        },
      connectWith: ".connectedSortable"
    }).disableSelection();
    
});

var values = {env : 0, health : 0, just : 0, price : 0, quality : 0} ;

function calc(){
        console.log("in calc"); //debug
        $.each($('#sortable1 li'), function(index, item) {
            console.log("in each");//debug
            //2 exempel
            
            if ($(this).hasClass('environment')) //alla li:s som har environment i sig hamnar här
            {
                console.log("in if");
                values.env += 100;
                print();
            }
            if($(this).hasClass('environment' && 'price')) //kommer inte hit.. fastnar på tidigare if-sats
            {
                
                values.env += 50;
                values.price += 50;
                print();
                
            }
            //Moar if:s!
            //Implement formula!
            
        });

            
}
function print(){
    document.getElementById('output').innerHTML ="Environment: "+ values.env + 
                        " Health: " + values.health + 
                        " Justice: " + values.just +
                        " Price: " + values.price +
                        " Quality: " + values.quality;
    
}

