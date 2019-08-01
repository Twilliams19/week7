console.log("These are my games on my wishlist")
window.onload=function(){
   var xbox = document.querySelector("#xbox");
   var mysubmit = document.querySelector("#sub");
   // var go = document.querySelector("#con");
   // var button = document.querySelector("#sub");
   mysubmit.addEventListener("click", function(){
   const games = {
       Overwatch: "25.00",
       Halo: "50.00",
       Madden: "30.00",
       GearsofWar: "40.00",
       Fortnight: "50.00"
       };
       var mygame = xbox.value;
       var mygame = mygame.split(" , ");
       // console.log(mygame[0]);
       for(var gametitle in games) {
           mygame = games[gametitle];
               console.log(games);
               for(var i = 0 )
       }
       for (var i = 0; i < mygame.length; i++){
           var games = mygames
       }
   }
)};
        function checkgame(){
            alert("This game is checked off the list");
        }
     function notgame(){
         alert("this game is not on the list");
     }
            
                
    // });
    //         ro.open("GET", "https://localhost:8080");
    //         ro.send();
    //         console.log(ro);
    //     };
        
    
    //     go.innerHTML = games;
    //     console.log(Object.values(games));
    //     xbox.value="";
         
    
