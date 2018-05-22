function typografi() {
  var scroll = document.querySelector("#typografi");
  scroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}
function global() {
  var scroll = document.querySelector("#global");
  scroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}
function farver() {
  var scroll = document.querySelector("#colors");
  scroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}
function logoer() {
  var scroll = document.querySelector("#logoer");
  scroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}
function formularer() {
  var scroll = document.querySelector("#formularer");
  scroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}
function kontainere() {
  var scroll = document.querySelector("#Kontainere");
  scroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}

var divs = ["Div1", "Div2", "Div3", "Div4"];
   var visibleDivId = null;
   function divVisibility(divId) {
     if(visibleDivId === divId) {
       visibleDivId = null;
     } else {
       visibleDivId = divId;
     }
     hideNonVisibleDivs();
   }
   function hideNonVisibleDivs() {
     var i, divId, div;
     for(i = 0; i < divs.length; i++) {
       divId = divs[i];
       div = document.getElementById(divId);
       if(visibleDivId === divId) {
         div.style.display = "block";
       } else {
         div.style.display = "none";
       }
     }
   }
