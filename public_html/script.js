  
$( function() {
    $( "#sortable1, #sortable2" ).sortable({
        update: function( event, ui ) { //change update? uppdaterar vid både recieve och update?
            calc();
        },
      connectWith: ".connectedSortable"
    });
    
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

        // Count elements
        var total = 0; 
        $.each($('#sortable1 li'), function(index, item) {
            total += 1; 
        }); 

        // Calculate fraction
        var fraction = 0; 
        for (var i = 0; i < total; i++) { 
            fraction += 100 / Math.pow(1.5,i); 
        }

        $.each($('#sortable1 li'), function(index, item) {
            console.log(index);//debug

            var type = $(this).data("type").split(" "); 
            var size = type.length; 

            for (var i = 0; i < type.length; i ++) { 
                var val = 100 * (((100 / type.length) / Math.pow(1.5, index)) / fraction); 
                switch(type[i]) { 
                    case 'enviornment': 
                        values.env += val;  
                        break; 
                    case 'price': 
                        values.price += val;
                        break; 
                    case 'quality': 
                        values.quality += val; 
                        break; 
                    case 'justice': 
                        values.just += val; 
                        break; 
                    case 'health': 
                        values.health += val; 
                        break; 
                }
            }
            print(); 
            makePie();
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



function makePie(){
    
    var options = { 
    responsive: true,
    maintainAspectRatio: true
    };

    var data = {
    labels: [
        "Environment",
        "Health",
        "Justice",
        "Price",
        "Quality"
    ],
    datasets: [
        {
            data: [values.env, values.health, values.just, values.price, values.quality],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ]
        }]
    };
    
    // For a pie chart
    var ctx = document.getElementById("pieChart");
    //ctx.canvas.width = 300;
    //ctx.canvas.height = 300;
    
    var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: options
    });

}

