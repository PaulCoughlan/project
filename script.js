var imagesArray = ["pics/Avengers.jpg", "pics/evilDead.jpg", "pics/matrix.jpg", "pics/bosses.jpg", "pics/dotd.jpg", "pics/kong.jpeg", "pics/mi.jpg", "pics/hatchet.jpg", "pics/polt.jpg", "pics/scream.jpg" ];
var horrorArray = ["pics/evilDead.jpg", "pics/dotd.jpg", "pics/polt.jpg", "pics/scream.jpg"];

function imageDisplay(){
    var rand = Math.floor(Math.random() * 10);
     document.canvas.src = imagesArray[rand];
}

function horror(){
     var rand = Math.floor(Math.random() * 10);
     document.canvas.src = horrorArray[rand];
}