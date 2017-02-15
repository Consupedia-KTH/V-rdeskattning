  
$( function() {
    $( "#sortable1, #sortable2" ).sortable({
        update: function( event, ui ) { //change update? uppdaterar vid både recieve och update?
            calc();
        },
      connectWith: ".connectedSortable"
    }).disableSelection();
    
});

var values = {env : 0, health : 0, just : 0, price : 0, quality : 0} ;


function reset(){ 
    values.env = 0; 
    values.health =0; 
    values.just = 0; 
    values.price = 0; 
    values.quality = 0; 
}

function calc(){
        console.log("in calc"); //debug
        
        // Reset counter
        reset(); 

        $.each($('#sortable1 li'), function(index, item) {
            console.log("in each");//debug

            var type = $(this).data("type").split(" "); 
            var size = type.length; 

            for (var i = 0; i < type.length; i ++) { 
                switch(type[i]) { 
                    case 'enviornment': 
                        values.env += 100 / type.length; 
                        break; 
                    case 'price': 
                        values.price += 100 / type.length; 
                        break; 
                    case 'quality': 
                        values.quality += 100 / type.length; 
                        break; 
                    case 'justice': 
                        values.just += 100 / type.length; 
                        break; 
                    case 'health': 
                        values.health += 100 / type.length; 
                        break; 
                }
            }
            print(); 
            //2 exempel
            
           // if ($(this).hasClass('environment')) //alla li:s som har environment i sig hamnar här
           // {
           //     console.log("in if");
           //     values.env += 100;
           //     print();
           // }
           // if($(this).hasClass('environment' && 'price')) //kommer inte hit.. fastnar på tidigare if-sats
           // {
           //     
           //     values.env += 50;
           //     values.price += 50;
           //     print();
           //     
           // }
            //Moar if:s!
            //Implement formula!
            
        });

            
}
function print(){
    document.getElementById('output').innerHTML =
            "Environment: "+ values.env + 
            " Health: " + values.health + 
            " Justice: " + values.just +
            " Price: " + values.price +
            " Quality: " + values.quality;
    
}

