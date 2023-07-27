<!DOCTYPE html>
<html data-bs-theme='auto'>

  <head>
    <title>RoIPMARS Network | Members Directory</title>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=yes'>
    <meta name='author' content='HafiziRuslan'>
    <meta name='msapplication-TileColor' content='#56C3E7'>
    <meta name='msapplication-TileImage' content='/media/image/ms-icon-144x144.png'>
    <meta name='theme-color' media='(prefers-color-scheme: light)' content='#336699'>
    <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#56C3E7'>
    <meta name='color-scheme' content='auto'>
    <link rel='shortcut icon' type='image/x-icon' href='/media/image/brands/favicon/favicon.ico'>
    <link rel='icon' type='image/x-icon' href='/media/image/brands/favicon/favicon.ico'>
    <link rel='icon' type='image/png' sizes='16x16' href='/media/image/brands/favicon/favicon-16x16.png'>
    <link rel='icon' type='image/png' sizes='32x32' href='/media/image/brands/favicon/favicon-32x32.png'>
    <link rel='icon' type='image/png' sizes='96x96' href='/media/image/brands/favicon/favicon-96x96.png'>
    <link rel='icon' type='image/png' sizes='192x192' href='/media/image/brands/favicon/android-icon-192x192.png'>
    <link rel='apple-touch-icon' sizes='57x57' href='/media/image/brands/favicon/apple-icon-57x57.png'>
    <link rel='apple-touch-icon' sizes='60x60' href='/media/image/brands/favicon/apple-icon-60x60.png'>
    <link rel='apple-touch-icon' sizes='72x72' href='/media/image/brands/favicon/apple-icon-72x72.png'>
    <link rel='apple-touch-icon' sizes='76x76' href='/media/image/brands/favicon/apple-icon-76x76.png'>
    <link rel='apple-touch-icon' sizes='114x114' href='/media/image/brands/favicon/apple-icon-114x114.png'>
    <link rel='apple-touch-icon' sizes='120x120' href='/media/image/brands/favicon/apple-icon-120x120.png'>
    <link rel='apple-touch-icon' sizes='144x144' href='/media/image/brands/favicon/apple-icon-144x144.png'>
    <link rel='apple-touch-icon' sizes='152x152' href='/media/image/brands/favicon/apple-icon-152x152.png'>
    <link rel='apple-touch-icon' sizes='180x180' href='/media/image/brands/favicon/apple-icon-180x180.png'>
    <link rel='manifest' href='/assets/manifest.json'>
		<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css'  integrity='sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9' crossorigin='anonymous'>
		<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.min.css' integrity='sha256-BicZsQAhkGHIoR//IB2amPN5SrRb3fHB8tFsnqRAwnk=' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css' integrity='sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/leaflet-fullscreen@1.0.2/dist/leaflet.fullscreen.css' integrity='sha256-YTbhDGEH5amI/JfotPMN7IByFpsN9e4tCBnv5oNdvHU=' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/leaflet-loading@0.1.24/src/Control.Loading.css' integrity='sha256-oDy5SfMp/Ew1KH2J2avMIJezbcAYL/yzrIAoFL5TV0k=' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.79.0/dist/L.Control.Locate.css' integrity='sha256-bJbfQtCIfJ80fagO5M7t1Fbgs5vCU7dI8xyLSAgV54E=' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/mwasil/Leaflet.Rainviewer@bcc7b7f035ab082e7ddcffe1b7621aa7ccd6d214/leaflet.rainviewer.css' integrity='sha256-lJV/PJHnhg+8bs825uHp32MU4QXYUk880U25KbKCiQE=' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/xguaita/Leaflet.MapCenterCoord@0.7/src/L.Control.MapCenterCoord.css' integrity='sha256-jrnd4YuShtIiQvxd2Lb137RLzhzSaZUQCsOjuQp816Y=' crossorigin='anonymous'>
    <link rel='stylesheet' href='/assets/css/map.css'>
  </head>

  <body>
    <div class='container-fluid' id='map'></div>
    <script src='https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet-src.js' integrity='sha256-tPonvXioSHRQt1+4ztWR5mz/1KG1X3yHNzVXprP2gLo=' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/leaflet-fullscreen@1.0.2/dist/Leaflet.fullscreen.js' integrity='sha256-/VGiFGzaidNadoKY4/8zFXP/OqGdajjpB+0vNHRz33o=' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/leaflet-loading@0.1.24/src/Control.Loading.js' integrity='sha256-FquvQIblVRto7kZlJ5hTS0rpr9fzTyNmCCmQzsy5EnU=' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.79.0/dist/L.Control.Locate.min.js' integrity='sha256-jVdNHjjOOJMoykxLOdGxOUzGJDlmr8MM6sFF++b1/sI=' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/@joergdietrich/leaflet.terminator@1.1.0/L.Terminator.js' integrity='sha256-hfZoLKHov8w/oA11Uc0Grg6lRTOuyTGY7geKPnYnang=' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/gh/ha8tks/Leaflet.Maidenhead@6cff9ca9e7950a8d60cde86e6e4f900b602d32b4/src/L.Maidenhead.js' integrity='sha256-3eUDZHZ3hoAXMHz5GxZ7wDpyK/eUUkZk1QXiTxorBW0=' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/gh/maneoverland/leaflet.WorldMiniMap@1.0.0/dist/Control.WorldMiniMap.js' integrity='sha512-PFw8St3qenU1/dmwCfiYYN/bRcqY1p3+sBATR+rZ6622eyXOk/8izVtlmm/k8qW7KbRIJsku838WCV5LMs6FCg==' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/gh/mwasil/Leaflet.Rainviewer@bcc7b7f035ab082e7ddcffe1b7621aa7ccd6d214/leaflet.rainviewer.js' integrity='sha256-Tz6IOIMhdWJso70T0rbWS1DkxzvVQ1/kCdPqM6IWQdo=' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/gh/xguaita/Leaflet.MapCenterCoord@0.7/src/L.Control.MapCenterCoord.js' integrity='sha256-iwIPxUTYPTIJ7zMm2RDXhxUDuFBnzBZkwa5L+ChijGg=' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/gh/leaflet-extras/leaflet-providers@1.13.0/leaflet-providers.js' integrity='sha256-CX9R50bNZCPMIADWDXkdQWc8lbmtTzIY9KftJiiDfl0=' crossorigin='anonymous'></script>
    <script src='https://api.jawg.io/libraries/jawg-places@latest/jawg-places.js?access-token=Yfk7oslxn7AhBWNOPFQwyxp8J48VAbifha47L9S0TrRSI5K8WrBYvO4ByWkeEqpQ' crossorigin='anonymous'></script>
    <script src='/assets/js/map.js'></script>
  </body>

</html>