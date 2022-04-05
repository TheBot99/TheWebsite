function retrieveURL() {
  var url = document.getElementById("urlT").value;
  document.getElementById("url").href = url;

    if (!url.startsWith("https://")){
    alert("invalid url");
  }
}


function EBtnURL() {
  windows.open(url);
}

function close() {
  var close = true;
  var btn = document.getElementById("closeTab");
  if (close=true) {
    btn.innerHTML = "Close Tab for button onclick(off)";
  }
  else {
    btn.innerHTML = "Close Tab for button onclick(on)";
  }
}



//Mogus
function swapCookie(){
  document.getElementById("game").src = "https://cookie.taigeli.repl.co/";
  document.getElementById("game").height = "640px";
  document.getElementById("game").width = "1000px";
  
document.getElementById("gametitle").innerHTML = "Cookie Clicker";
  
}

//Slope
function swapSlope() {
  document.getElementById("game").src = "https://slope.taigeli.repl.co/";
  document.getElementById("game").height = "600px";
  document.getElementById("game").width = "800px";
  
document.getElementById("gametitle").innerHTML = "Slope";
}

//Vulcanist(fps)
function swapVulcanist(){
  document.getElementById("game").src = "https://Vulcanist-1.taigeli.repl.co";
  document.getElementById("game").height = "600px";
  document.getElementById("game").width = "1000px";
document.getElementById("gametitle").innerHTML = "Vulcanist(fps)";
}
//Rolling Forests
function swapRF(){
  document.getElementById("game").src = "https://rollingforests.taigeli.repl.co/";
  document.getElementById("game").height = "500px";
  document.getElementById("game").width = "800px";
document.getElementById("gametitle").innerHTML = "Rolling Forests";
}

//Geometry Dash (Platon)
function swapGD(){
  document.getElementById("game").src = "https://propertyjs-p5js-ver.theangryepicbanana.repl.co/";
  document.getElementById("game").height = "500px";
  document.getElementById("game").width = "800px";
document.getElementById("gametitle").innerHTML = "Geometry";
}

//Minecraft JS
function swapMinecraft(){
  document.getElementById("game").src = "https://Minecraft-JS-version.thenewone123.repl.co";
  document.getElementById("game").height = "500px";
  document.getElementById("game").width = "800px";
document.getElementById("gametitle").innerHTML = "Minecraft JS";
}

function swapSnowball() {
  document.getElementById("game").src = "https://snowball.taigeli.repl.co";
  document.getElementById("game").height = "700px";
  document.getElementById("game").width = "900px";
document.getElementById("gametitle").innerHTML = "Snowball";
}

//police pursuit 2
function swapPolice() {
  document.getElementById("game").src = "https://pp.taigeli.repl.co";
  document.getElementById("game").height = "700px";
  document.getElementById("game").width = "850px";
document.getElementById("gametitle").innerHTML = "Police Pursuit 2";
}