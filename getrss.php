<<<<<<< HEAD
<?php/*
//get the q parameter from URL
=======
<?php

>>>>>>> 5126f937238a94580fb8316c74ade37b4c4a86de
$q=$_GET["q"];

if($q=="Rotten") {
  $xml=("http://www.rottentomatoes.com/syndication/rss/in_theaters.xml");
} elseif($q=="Meta") {
  $xml=("http://www.metacritic.com/rss/movies");
}

$xmlDoc = new DOMDocument();
$xmlDoc->load($xml);


$channel=$xmlDoc->getElementsByTagName('channel')->item(0);
$channel_title = $channel->getElementsByTagName('title')
->item(0)->childNodes->item(0)->nodeValue;
$channel_link = $channel->getElementsByTagName('link')
->item(0)->childNodes->item(0)->nodeValue;
$channel_desc = $channel->getElementsByTagName('description')
->item(0)->childNodes->item(0)->nodeValue;


echo("<p><a href='" . $channel_link
  . "'>" . $channel_title . "</a>");
echo("<br>");
echo($channel_desc . "</p>");


$x=$xmlDoc->getElementsByTagName('item');
for ($i=0; $i<=2; $i++) {
  $item_title=$x->item($i)->getElementsByTagName('title')
  ->item(0)->childNodes->item(0)->nodeValue;
  $item_link=$x->item($i)->getElementsByTagName('link')
  ->item(0)->childNodes->item(0)->nodeValue;
  $item_desc=$x->item($i)->getElementsByTagName('description')
  ->item(0)->childNodes->item(0)->nodeValue;
  echo ("<p><a href='" . $item_link
  . "'>" . $item_title . "</a>");
  echo ("<br>");
  echo ($item_desc . "</p>");
}
php?> 
