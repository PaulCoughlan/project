var images = ['squirtle.jpg', 'bulbasaur.jpg', 'pikachu.jpg'];
$('#header').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});