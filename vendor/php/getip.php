<?php function getIP()
{
  if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
    $ipAdress = $_SERVER['HTTP_CF_CONNECTING_IP'];
  } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ipAdress = $_SERVER['HTTP_X_FORWARDED_FOR'];
  } else {
    $ipAdress = $_SERVER['https://api64.ipify.org'];
  }
  return $ipAdress;
}
echo getIP(); ?>