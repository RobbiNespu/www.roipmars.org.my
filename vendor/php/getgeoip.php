<?php function getGeoIP()
{
  if (!empty($_SERVER['HTTP_CF_IPCITY'])) {
    $geoLoc = $_SERVER['HTTP_CF_IPCITY'] . ', ' . $_SERVER['HTTP_CF_IPCOUNTRY'];
  } else {
    $geoLoc = $_SERVER['http://ip-api.com/json?ip=' . $_SERVER['HTTP_X_FORWARDED_FOR'] . '&fields=country,regionName'];
  }
  return $geoLoc;
}
echo getGeoIP(); ?>