function reveal() {
    var reveal = document.querySelector("#DIVREVEAL");
    if (reveal.style.display === "none") {
        reveal.style.display = "block";
    } else {
        reveal.style.display = "none";
    }
}

function typografi() {
  var scroll = document.querySelector("#Typografi");
  scroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}
