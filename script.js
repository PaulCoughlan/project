var imagesArray = ["pics/Avengers.jpg", "pics/evilDead.jpg", "pics/matrix.jpg", "pics/bosses.jpg", "pics/dotd.jpg", "pics/kong.jpeg", "pics/mi.jpg", "pics/hatchet.jpg", "pics/polt.jpg", "pics/scream.jpg", "pics/crank.jpg", "pics/step.jpg", "pics/express.jpg", "pics/nacho.jpg", "pics/end.jpg",];
var horrorArray = ["pics/evilDead.jpg", "pics/dotd.jpg", "pics/polt.jpg", "pics/scream.jpg", "pics/hatchet.jpg"];
var actionArray = ["pics/Avengers.jpg", "pics/matrix.jpg", "pics/kong.jpeg", "pics/mi.jpg", "pics/crank.jpg",];
var comedyArray = ["pics/bosses.jpg", "pics/step.jpg", "pics/express.jpg", "pics/nacho.jpg", "pics/end.jpg",];

function imageDisplay(){
    var rand = Math.floor(Math.random() * 15);
     document.canvas.src = imagesArray[rand];
}

function horror(){
     var rand = Math.floor(Math.random() * 5);
     document.canvas.src = horrorArray[rand];
}

function action(){
     var rand = Math.floor(Math.random() * 5);
     document.canvas.src = actionArray[rand];
}

function comedy(){
     var rand = Math.floor(Math.random() * 5);
     document.canvas.src = comedyArray[rand];
}

$(function(){
    $("#genre").hide();
    $("#hide").hide();
       $("#show").click(function(){
        $("#genre").slideDown();
        $("#hide").slideDown();
    });
    $("#hide").click(function(){
        $("#genre").slideUp();
        $("#hide").slideUp();
        $("#hide").hide();
    });
});
$(function(){
     $("#firstBtn","secondBtn","thirdBtn","fourthBtn").click(function(){
          $(".col-xs-4").slideDown();
     });
     
});

