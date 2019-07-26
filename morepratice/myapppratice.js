console.log("These are my games on my wishlist")
window.onload=function(){

    var xbox = document.querySelector("#xbox");
    var sub = document.querySelector("#sub");
    var go = document.querySelector("#con");
    var button = document.querySelector("#sub");

    var games ={ Overwatch: 25.00,
        Halo: 50.00,
        Madden: 30.00,
        GearofWar: 40.00}; 

    button.addEventListener("click", function(){
        
        var mygame = xbox.value;
        var myfav = mygame.split(", ");
        
        for(var i =0; i < myfav.length; i++){
            var mydiv = myfav[i].split(":");
            
            for (var gametitle in games){
                console.log(gametitle);
            } 
            var gameskeys = Object.keys(games)
            // var z = Object.value(games)
            for(counter=0; counter < gameskeys.length; counter++){

                if(gameskeys[counter] == mydiv[0]){
                    var remainder = [counter] - mydiv[1];
                    console.log(remainder);
                }
            }
        
        };
        
        function loadDoc(){
            var ro = new XMLHttpRequest();
            ro.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200){
                    console.log(this.responseText);
                } else{
                    console.log(this.status);
                }
            
                
            };
            ro.open("GET", "https://localhost:8080");
            ro.send();
            console.log(ro);
        };
        loadDoc();
    });
        go.innerHTML = games;
        console.log(Object.values(games));
        xbox.value="";
         
    };
