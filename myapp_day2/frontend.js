console.log("These are my games on my wishlist")
window.onload=function(){

    var xbox = document.querySelector("#xbox");
    var sub = document.querySelector("#sub");
    var go = document.querySelector("#con");
    // var button = document.querySelector("sub");
var x ={ 'Overwatch': 25.00,
        Halo: 50.00,
        Madden: 30.00}; 

    sub.addEventListener("click", function(ga){
        
        

        var con = xbox.value;
        con = con.split(",");
for(var i =0; i < con.length; i++){
    var price = con[i].split(",")
    console.log(price[1]);
    price[1]= price[1];

    for(var Overwatch in x){
        console.log(price[1],x);
        console.log('got it');
    };
};
        // go.innerHTML = con;
        // console.log(con);
        // xbox.value="";
    });
}