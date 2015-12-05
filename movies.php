<?php
$xml=simplexml_load_file("Movie-catalog.xml");

$Mnumber = $xml->xpath('/Movie/MovieNumber');


foreach($xml-> movie as $movie){
    
    echo $movie->TITLE,'';
    echo $movie->GENRE,'';
    echo $movie->USA,'';
    echo $movie->COMPANY,'';
    echo $movie->DIRECTOR,'';
    echo $movie->YEAR,'';
   
}
?>