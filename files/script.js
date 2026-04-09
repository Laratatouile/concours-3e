
// l'arriere plan
function bg_color(){
    var color1 = "rgb(75, 75, 75)";
    var color2 = "rgb(221, 221, 221)";
    if (document.body.style.background == color1){
        document.body.style.backgroundColor = color2;
    }else{
        document.body.style.background = color1;
    }
}


// ouvrir et fermer les parties
function rap_ouv(number){
    alert("sommaire_"+number+"_1");
    if (document.getElementById("sommaire_"+number+"_1").style.display == "none") {
        let els = document.querySelectorAll('[id^="sommaire_'+number+'"]');
        els.forEach(el => el.style.display = "block");
        document.getElementById("ouv_img_"+number).style.transform = 'rotate(90deg)';
    } else {
        document.getElementById("sommaire_"+number).style.display = "none";
        document.getElementById("ouv_img_"+number).style.transform = 'rotate(0deg)';
    }
}


// asombrir a la navigation rapide
const box = document.getElementById("panneau_droite");

box.addEventListener("mouseenter", () => {
    var color1 = "rgb(75, 75, 75)";
    var color3 = "rgb(0, 0, 1)";
    var color4 = "rgb(0, 0, 0)";
    if (document.body.style.background == color1){
        document.body.style.background = color3;
    }else{
        document.body.style.background = color4;
    }
    document.getElementById("la_page").style.opacity = "0.1";
});

box.addEventListener("mouseleave", () => {
    var color1 = "rgb(75, 75, 75)";
    var color2 = "rgb(221, 221, 221)";
    var color3 = "rgb(0, 0, 1)";
    if (document.body.style.background == color3){
        document.body.style.background = color1;
    }else{
        document.body.style.background = color2;
    }
    document.getElementById("la_page").style.opacity = "1";
});
