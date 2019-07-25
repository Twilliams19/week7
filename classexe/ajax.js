function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        } else{
            console.log(this.status);
        }
      
        
    };
    xhttp.open("GET", "http://localhost:8080");
    xhttp.send();
    console.log(xhttp);
};
// loadDoc();