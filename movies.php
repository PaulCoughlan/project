<?php
$xml=simplexml_load_file("Movie-catalog.xml");

$Mnumber = $xml->xpath('/Movie/MovieNumber');
$rand = $_GET['rand'];

foreach($xml-> movie as $movie){
    
    echo $movie->TITLE,'';
    echo $movie->GENRE,'';
    echo $movie->COUNTRY,'';
    echo $movie->COMPANY,'';
    echo $movie->DIRECTOR,'';
    echo $movie->YEAR,'';
   
}
?>