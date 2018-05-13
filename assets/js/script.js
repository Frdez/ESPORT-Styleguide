function reveal() {
    var x = document.getElementById("DIVREVEAL");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function typografi() {
  var scroll = document.querySelector("#Typografi");
  scroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}
