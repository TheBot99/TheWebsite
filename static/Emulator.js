function retrieveURL() {
  var url = document.getElementById("urlT").value;
  document.getElementById("url").href = url;

  if (!url.startsWith("https://www.")) {
    alert("Invalid url");
  }
}


function EBtnURL() {
  windows.open(url);
}
//Oregon Trail
function swapOregon() {
  document.getElementById("emulator").src = "https://jamesfriend.com.au/pce-js/mecc/oregon-trail.html";

  document.getElementById("emulator").height = "700px";
  document.getElementById("emulator").width = "800px";
  document.getElementById("emtitle").innerHTML = "";
}

//Mario 64
function swapM64() {
  document.getElementById("emulator").src = "https://sm64.jscraft.repl.co/";

  document.getElementById("emulator").height = "550px";
  document.getElementById("emulator").width = "900px"; 
 document.getElementById("emtitle").innerHTML = "Mario 64";
}

//Sonic
function swapSonic() {
  document.getElementById("emulator").src = "https://xania.org/miracle/miracle.html";

  document.getElementById("emulator").height = "550px";
  document.getElementById("emulator").width = "800px"; 
 document.getElementById("emtitle").innerHTML = "Sonic(set screen size to 175%)";  
}