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


function reqLib() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      getMovies(xhttp);
    }
  };
  xhttp.open("GET", "Movie-catalog.xml", true);
  xhttp.send();
}
function getMovies(xml) {
  var count;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Movie Title</th><th>Genre</th></tr>";
  var mov = xmlDoc.getElementsByTagName("Movie");
  for (count = 0; count <mov.length; count++) { 
    table += "<tr><td>" +
    mov[count].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td><td>" +
    mov[count].getElementsByTagName("GENRE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("tableLibrary").innerHTML = table;
}




$(function(){
    $("#genre").hide();
    $("#hide").hide();
    $("#libraryHide").hide();
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
       $("#libraryBtn").click(function(){
       $("#libraryList").slideDown();
        $("#libraryHide").show();
   });
   $("#libraryHide").click(function() {
        $("#libraryList").slideUp();
   });
});

function showRSS(str) {
  if (str.length==0) {
    document.getElementById("rssOutput").innerHTML="";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    var xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("rssOutput").innerHTML=xmlhttp.responseText;
    }
  };
  xmlhttp.open("GET","getrss.php?q="+str,true);
  xmlhttp.send();
}