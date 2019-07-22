console.log("Can I take Your order")
window.onload = function(){


var shake = document.querySelector(".shakes");
var fries = document.querySelector(".fries");
var submit = document.querySelector(".submit");

submit.addEventListener ("click", function(addorder){

    // shake.value="";
    // fries.value="";
    var yourOrder = fries.value + shake.value; 
    console.log("You ordered " + fries.value+ " fries");
    console.log("You ordered " + shake.value+ " shake");

    var eatmore = document.createElement("p");
});
}
