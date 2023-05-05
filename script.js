

/* Add "https://api.ipify.org?format=json" statement
           this will communicate with the ipify servers in
           order to retrieve the IP address $.getJSON will
           load JSON-encoded data from the server using a
           GET HTTP request */

const ip = "initial";
$.getJSON("https://api.ipify.org?format=json", function (data) {
    ip = data.ip
    window.localStorage.setItem('ip', ip);
})


// select 

const getDataBtn = document.getElementById("getDetails");

getDataBtn.addEventListener("click", function() {
  window.location.href = `location.html`;  
})