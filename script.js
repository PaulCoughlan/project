var imagesArray = ["pics/Avengers.jpg", "pics/evilDead.jpg", "pics/matrix.jpg", ];

function imageDisplay(){
    var rand = Math.floor(Math.random() * 3);
     document.canvas.src = imagesArray[rand];
}