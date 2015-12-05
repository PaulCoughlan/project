var imagesArray = ["pics/Avengers.jpg", "pics/evilDead.jpg", "pics/matrix.jpg", "pics/bosses.jpg", "pics/dotd.jpg", "pics/kong.jpeg", "pics/mi.jpg", "pics/hatchet.jpg", "pics/polt.jpg", "pics/scream.jpg", "pics/crank.jpg", "pics/step.jpg", "pics/express.jpg", "pics/nacho.jpg", "pics/end.jpg",];
var horrorArray = ["pics/evilDead.jpg", "pics/dotd.jpg", "pics/polt.jpg", "pics/scream.jpg", "pics/hatchet.jpg"];
var actionArray = ["pics/Avengers.jpg", "pics/matrix.jpg", "pics/kong.jpeg", "pics/mi.jpg", "pics/crank.jpg",];
var comedyArray = ["pics/bosses.jpg", "pics/step.jpg", "pics/express.jpg", "pics/nacho.jpg", "pics/end.jpg",];

function imageDisplay(){
    var rand = Math.floor(Math.random() * 15);
     document.canvas.src = imagesArray[rand];
}

function horror(){
     var hrand = Math.floor(Math.random() * 5);
     document.canvas.src = horrorArray[hrand];
}

function action(){
     var arand = Math.floor(Math.random() * 5);
     document.canvas.src = actionArray[arand];
}

function comedy(){
     var crand = Math.floor(Math.random() * 5);
     document.canvas.src = comedyArray[crand];
}

function getxml(){

    
}



$(function(){
    $("#genre").hide();
    $("#hide").hide();
       $("#show").click(function(){
        $("#genre").slideDown();
        $("#hide").slideDown();
        $('#show').hide();
    });
    $("#hide").click(function(){
        $("#genre").slideUp();
        $("#hide").slideUp();
        $("#hide").hide();
         $('#show').show();
    });
});
$(function(){
     $("#firstBtn","secondBtn","thirdBtn","fourthBtn").click(function(){
          $("#canvas").slideDown();
     });
     
});

