function myFunction(){
    var images = ['Avengers', 'DarkKnight',];
    $('#header').css({'background-image': 'url(pics/' + images[Math.floor(Math.random() * images.length)] + ')'});
}