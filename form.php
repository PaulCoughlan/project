<?php/*
//once insert is clicked
if(isset($_REQUEST['insert']))
{
    $xml = new DOMDocument("1.0","UTF-8");
    $ml->load('Movie-catalog.xml')

    //create root tag
    $rootTag = $xml->getElementByTagName("library")->item(0);
    
    $dataTag = $xml->createElement("Movie");
  
     $titleTag = $xml->createElement("title", $_REQUEST['title']);
       $genreTag = $xml->createElement("genre", $_REQUEST['genre']);
       
       //genre name assigned o infotag
       $dataTag->appendChild($titleTag);
       $dataTag->appendChild($genreTag);
       
       $rootTag->appendChild($dataTag);
       $xml->save('Movie-catalog.xml');
    
    
}

*/
php?>

<html>
<body>
<from method = "post" action = "form.php">
    <p>Enter a movie and a genre o add to the library</p><br>
    Title: <input type = "text" name = "n_title"><br>
    Genre: <input type = "text" name = "n_genre"><br>
    <input type="submit" name="insert" value="add"/>
</from>
    
    
</body>
</html>