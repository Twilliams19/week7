console.log("Can I take Your order");
window.onload = function(){

var input = document.querySelector("input");
var button = document.querySelector("button");

    var menu = {
       "fries": 10,
       "shakes": 8,
       "burgers":9}

button.addEventListener ("click", function(){
   
   var yourOrder = input.value;
   var food  = yourOrder.split(", ");
       for(var i = 0; i < food.length; i++){
           var newOrder = food[i].split(":");
           var x = Object.keys(menu)
           var y = Object.values(menu)
           for(counter=0; counter < x.length; counter++){

            if(x[counter] == newOrder[0]){
                var remainder = y[counter] - newOrder[1];
                console.log(remainder);
            }
           }

            //    console.log(newOrder[1].trim());
            //    newOrder[1]= newOrder[1].trim();
            //    for (var fries in menu) {
            //        console.log(newOrder[1], fries);
            //        if (newOrder[1] == fries) {
            //         var friesCount = menu.valueOf(fries);
            //         var friesInv = yourOrder.valueOf(newOrder[1]);
            //         var remainder = friesCount - friesInv;
            //         console.log(friesCount);
            //         console.log(friesInv);
            //         console.log(remainder);
            //     };
            //    };

           };
    // var xhr = new XMLHttpRequest();        
        
});
};
