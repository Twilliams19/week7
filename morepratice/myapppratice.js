console.log("These are my games on my wishlist")
window.onload=function(){

    var xbox = document.querySelector("#xbox");
    var sub = document.querySelector("#sub");
    var go = document.querySelector("#con");
    // var button = document.querySelector("sub");
var x ={ "Overwatch": 25.00,
        "Halo": 50.00,
        "Madden": 30.00}; 

    sub.addEventListener("click", function(){
        
    
        var mygame = xbox.value;
       var price = mygame.split(", ");
for(var i =0; i < price.length; i++){
    var aim = price[i].split(":");
    var a = Object.keys(x)
    var z = Object.value(x)
    for(counter=0; counter < a.length; counter++){

        if(a[counter] == aim[0]){
            var remainder = z[counter] - aim[1];
            console.log(remainder);
        }
    }
      
    };
});
        // go.innerHTML = con;
        // console.log(con);
        // xbox.value="";
    };
