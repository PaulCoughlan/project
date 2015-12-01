function myFunction(){
    var randomNumber = Math.floor(Math.random() * 12) + 1;
    var imgName = "image" + randomNumber + ".jpg";
    document.getElementById("imageid").src= "/pics" + "/" + imgName ;
}