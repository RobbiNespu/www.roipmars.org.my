<!doctype html>
<html data-bs-color-scheme>

<head>
  <title>RoIPMARS|Members Directory</title>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
  <meta name='author' content='HafiziRuslan'>
  <meta name='msapplication-TileColor' content='#336699'>
  <meta name='msapplication-TileImage' content='../images/ms-icon-144x144.png'>
  <meta name='theme-color' content='#336699'>
  <meta name='color-scheme' content='dark'>
  <link rel='shortcut icon' type='image/x-icon' href='../images/favicon.ico'>
  <link rel='icon' type='image/x-icon' href='../images/favicon.ico'>
  <link rel='icon' type='image/png' sizes='16x16' href='../images/favicon-16x16.png'>
  <link rel='icon' type='image/png' sizes='32x32' href='../images/favicon-32x32.png'>
  <link rel='icon' type='image/png' sizes='96x96' href='../images/favicon-96x96.png'>
  <link rel='icon' type='image/png' sizes='192x192' href='../images/android-icon-192x192.png'>
  <link rel='apple-touch-icon' sizes='57x57' href='../images/apple-icon-57x57.png'>
  <link rel='apple-touch-icon' sizes='60x60' href='../images/apple-icon-60x60.png'>
  <link rel='apple-touch-icon' sizes='72x72' href='../images/apple-icon-72x72.png'>
  <link rel='apple-touch-icon' sizes='76x76' href='../images/apple-icon-76x76.png'>
  <link rel='apple-touch-icon' sizes='114x114' href='../images/apple-icon-114x114.png'>
  <link rel='apple-touch-icon' sizes='120x120' href='../images/apple-icon-120x120.png'>
  <link rel='apple-touch-icon' sizes='144x144' href='../images/apple-icon-144x144.png'>
  <link rel='apple-touch-icon' sizes='152x152' href='../images/apple-icon-152x152.png'>
  <link rel='apple-touch-icon' sizes='180x180' href='../images/apple-icon-180x180.png'>
  <link rel='manifest' href='../vendor/manifest.json'>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.3/dist/css/bootstrap-blackbox.min.css' crossorigin='anonymous'>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.2/leaflet.min.css' crossorigin='anonymous'>
  <link rel='stylesheet' href='https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css'  crossorigin='anonymous'>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.77.0/dist/L.Control.Locate.min.css' crossorigin='anonymous'>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/mwasil/Leaflet.Rainviewer/leaflet.rainviewer.css' crossorigin='anonymous'>
  <style type='text/css'>html, body { height: 100% } #map { height: 100% }</style>
  <!-- Google Tag Manager -->
  <script>
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-PHLPNS8');
  </script>
  <!-- End Google Tag Manager -->
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src='https://www.googletagmanager.com/gtag/js?id=G-DJYTZHZXFN'></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-DJYTZHZXFN');
  </script>
  <!-- End Global site tag (gtag.js) - Google Analytics -->
  <!-- Clarity tracking code for https://www.roipmars.org.my/ -->
  <script>
    (function(c, l, a, r, i, t, y) {
      c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments)
      };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i + '?ref=bwt';
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', 'dtxpwmki8s');
  </script>
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src='https://www.googletagmanager.com/ns.html?id=GTM-PHLPNS8' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <div class='container-fluid' id='map'></div>
  <script src='https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.3/dist/js/darkmode.min.js' crossorigin='anonymous'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.2/leaflet.min.js' crossorigin='anonymous'></script>
  <script src='https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js' crossorigin='anonymous'></script>
  <script src='https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.77.0/dist/L.Control.Locate.min.js' crossorigin='anonymous'></script>
  <script src='https://cdn.jsdelivr.net/gh/mwasil/Leaflet.Rainviewer/leaflet.rainviewer.js' crossorigin='anonymous'></script>
  <script type='text/javascript'>
    var mapOptions = {
      center: [4.174977, 109.467492],
      zoom: 5,
      fullscreenControl: true
    };
    var map = L.map('map', mapOptions);
    var osmtile = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy;2022 <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a>'
    }).addTo(map);
    var scale = L.control.scale({
      maxWidth: 100,
      metric: true,
      imperial: false,
      updateWhenIdle: false
    }).addTo(map);
    var locate = L.control.locate({
      position: 'topright',
      setView: 'once',
      flyTo: true,
      strings: {
        title: 'Lokasi Saya'
      }      
    }).addTo(map);
    var rainviewer = L.control.rainviewer({ 
      position: 'topright',
      nextButtonText: '>',
      playStopButtonText: 'Play/Stop',
      prevButtonText: '<',
      positionSliderLabelText: 'Hour:',
      opacitySliderLabelText: 'Opacity:',
      animationInterval: 500,
      opacity: 0.25
    }).addTo(map);
    var myIcon = L.icon({
      iconUrl: '../images/favicon-96x96.png',
      iconSize: [24, 24],
      //      iconAnchor: [22, 94],
      //      popupAnchor: [-3, -76],
      //      shadowUrl: 'my-icon-shadow.png',
      //      shadowSize: [68, 95],
      //      shadowAnchor: [22, 94]
    });
    var A001 = L.marker([3.231110, 101.423487], {
      title: 'A001',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/001.png" loading="lazy" height="50%" width="50%"><br>A001<br>9W2LGX<br>MOHAMAD HAFIZI BIN RUSLAN</p>');
    var A001C = L.circle([3.231110, 101.423487], {
      radius: 5000,
      opacity: 0.05
    });
    var A002 = L.marker([3.444039, 101.5528566], {
      title: 'A002',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/002.png" loading="lazy" height="50%" width="50%"><br>A002<br>9W2UZL<br>ZULKIFLI BIN ABU</p>');
    var A002C = L.circle([3.444039, 101.552856], {
      radius: 5000,
      opacity: 0.05
    });
    var A003 = L.marker([6.216034, 100.395538], {
      title: 'A003',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/003.png" loading="lazy" height="50%" width="50%"><br>A003<br>9M2RAN<br>NOR IMRAN BIN AZIZ</p>');
    var A003C = L.circle([6.216034, 100.395538], {
      radius: 5000,
      opacity: 0.05
    });
    var A004 = L.marker([3.644159, 101.589101], {
      title: 'A004',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/004.png" loading="lazy" height="50%" width="50%"><br>A004<br>9W2UBE<br>FAISNURNIZAM BIN MAT RASOL</p>');
    var A004C = L.circle([3.644159, 101.589101], {
      radius: 5000,
      opacity: 0.05
    });
    var B005 = L.marker([4.997056, 114.989282], {
      title: 'B005',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/005.png" loading="lazy" height="50%" width="50%"><br>B005<br>V85ABK<br>PG. SULIMAN BIN PG. HJ. SHAMSUDDIN</p>');
    var B005C = L.circle([4.997056, 114.989282], {
      radius: 5000,
      opacity: 0.05
    });
    var A006 = L.marker([5.741363, 115.934101], {
      title: 'A006',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/006.png" loading="lazy" height="50%" width="50%"><br>A006<br>9W6MOZ<br>MUSTAFA BIN OMAR</p>');
    var A006C = L.circle([5.741363, 115.934101], {
      radius: 5000,
      opacity: 0.05
    });
    var A007 = L.marker([3.644242, 101.589176], {
      title: 'A007',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/007.png" loading="lazy" height="50%" width="50%"><br>A007<br>9W2ELM<br>MOHD SULAIMAN BIN MAZLAN</p>');
    var A007C = L.circle([3.644242, 101.589176], {
      radius: 5000,
      opacity: 0.05
    });
    var A008 = L.marker([4.180928, 100.657381], {
      title: 'A008',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/008.png" loading="lazy" height="50%" width="50%"><br>A008<br>9W2OGK<br>KAMARUDZAMAN BIN ABDUL RAHIM</p>');
    var A008C = L.circle([4.180928, 100.657381], {
      radius: 5000,
      opacity: 0.05
    });
    var A009 = L.marker([3.771120, 103.277120], {
      title: 'A009',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/009.png" loading="lazy" height="50%" width="50%"><br>A009<br>9W2YQN<br>AHMAD NURILYAQIN BIN AHMAD TAJUDDIN</p>');
    var A009C = L.circle([3.771120, 103.277120], {
      radius: 5000,
      opacity: 0.05
    });
    var A010 = L.marker([5.957909, 116.070744], {
      title: 'A010',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/010.png" loading="lazy" height="50%" width="50%"><br>A010<br>9M6AUA<br>JEOFREY BIN AVITUS @ VITUS</p>');
    var A010C = L.circle([5.957909, 116.070744], {
      radius: 5000,
      opacity: 0.05
    });
    var A011 = L.marker([4.599923, 100.682660], {
      title: 'A011',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/011.png" loading="lazy" height="50%" width="50%"><br>A011<br>9W2NDI<br>NASARUDDIN BIN ARIF</p>');
    var A011C = L.circle([4.599923, 100.682660], {
      radius: 5000,
      opacity: 0.05
    });
    var A012 = L.marker([6.092719, 100.369957], {
      title: 'A012',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/012.png" loading="lazy" height="50%" width="50%"><br>A012<br>9W2RNH<br>ROSNAH BINTI RAPAR</p>');
    var A012C = L.circle([6.092719, 100.369957], {
      radius: 5000,
      opacity: 0.05
    });
    var A013 = L.marker([4.320589, 113.993668], {
      title: 'A013',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/013.png" loading="lazy" height="50%" width="50%"><br>A013<br>9W8VWW<br>VERONICA CATHERINE ANAK NOHAN</p>');
    var A013C = L.circle([4.320589, 113.993668], {
      radius: 5000,
      opacity: 0.05
    });
    var A014 = L.marker([4.320633, 113.993691], {
      title: 'A014',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/014.png" loading="lazy" height="50%" width="50%"><br>A014<br>9W8DNX<br>STANLEY SUMPING ANAK ALBERT BEJIE</p>');
    var A014C = L.circle([4.320633, 113.993691], {
      radius: 5000,
      opacity: 0.05
    });
    var A015 = L.marker([2.224963, 102.222663], {
      title: 'A015',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/015.png" loading="lazy" height="50%" width="50%"><br>A015<br>9M2NUZ<br>SITI NUSILAH BINTI HASAN</p>');
    var A015C = L.circle([2.224963, 102.222663], {
      radius: 5000,
      opacity: 0.05
    });
    var A016 = L.marker([1.514250, 110.363835], {
      title: 'A016',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/016.png" loading="lazy" height="50%" width="50%"><br>A016<br>9W8ZZK<br>MOHAMAD ZAHEER BIN ZAKARIA</p>');
    var A016C = L.circle([1.514250, 110.363835], {
      radius: 5000,
      opacity: 0.05
    });
    var A017 = L.marker([5.991959, 116.092358], {
      title: 'A017',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/017.png" loading="lazy" height="50%" width="50%"><br>A017<br>9M6RDY<br>MATTHEUS @ RUDY BIN BENEDICT</p>');
    var A017C = L.circle([5.991959, 116.092358], {
      radius: 5000,
      opacity: 0.05
    });
    var A018 = L.marker([5.729897, 115.949308], {
      title: 'A018',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/018.png" loading="lazy" height="50%" width="50%"><br>A018<br>9W6GEO<br>GEOFFREY BIN COSMAS</p>');
    var A018C = L.circle([5.729897, 115.949308], {
      radius: 5000,
      opacity: 0.05
    });
    var B019 = L.marker([4.877381, 114.830574], {
      title: 'B019',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/019.png" loading="lazy" height="50%" width="50%"><br>B019<br>V85MUH<br>ROZAN BIN HAJI KADERI</p>');
    var B019C = L.circle([4.877381, 114.830574], {
      radius: 5000,
      opacity: 0.05
    });
    var A020 = L.marker([2.261893, 102.376587], {
      title: 'A020',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/020.png" loading="lazy" height="50%" width="50%"><br>A020<br>9M2SFF<br>ROZAIMAN SUFFIAN BIN OTHMAN</p>');
    var A020C = L.circle([2.261893, 102.376587], {
      radius: 5000,
      opacity: 0.05
    });
    var A021 = L.marker([2.944117, 101.832765], {
      title: 'A021',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/021.png" loading="lazy" height="50%" width="50%"><br>A021<br>9W2WZZ<br>ABD MUNIR MOHAMAD BIN ABD KHALIL</p>');
    var A021C = L.circle([2.944117, 101.832765], {
      radius: 5000,
      opacity: 0.05
    });
    var A022 = L.marker([5.960464, 102.292143], {
      title: 'A022',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/022.png" loading="lazy" height="50%" width="50%"><br>A022<br>9W2DMJ<br>MOHD DAUD BIN JUSOH</p>');
    var A022C = L.circle([5.960464, 102.292143], {
      radius: 5000,
      opacity: 0.05
    });
    var A023 = L.marker([3.266927, 102.444595], {
      title: 'A023',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/023.png" loading="lazy" height="50%" width="50%"><br>A023<br>9W2DRQ<br>SYED IDRUS BIN SYED AGIL</p>');
    var A023C = L.circle([3.266927, 102.444595], {
      radius: 5000,
      opacity: 0.05
    });
    var A024 = L.marker([3.226295, 101.659866], {
      title: 'A024',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/024.png" loading="lazy" height="50%" width="50%"><br>A024<br>9W2SRF<br>CHE SHARIFF BIN OTHMAN</p>');
    var A024C = L.circle([3.226295, 101.659866], {
      radius: 5000,
      opacity: 0.05
    });
    var A025 = L.marker([3.472367, 102.327774], {
      title: 'A025',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/025.png" loading="lazy" height="50%" width="50%"><br>A025<br>9W2AYP<br>MOHD SABRI BIN IBRAHIM</p>');
    var A025C = L.circle([3.472367, 102.327774], {
      radius: 5000,
      opacity: 0.05
    });
    var A026 = L.marker([2.557167, 102.123333], {
      title: 'A026',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/026.png" loading="lazy" height="50%" width="50%"><br>A026<br>9W2VMB<br>ASRULHISYAM BIN ASURA</p>');
    var A026C = L.circle([2.557167, 102.123333], {
      radius: 5000,
      opacity: 0.05
    });
    var A027 = L.marker([3.228340, 101.653016], {
      title: 'A027',
      icon: myIcon
    }).bindPopup('<p style="text-align: center"><img src="../images/member/027.png" loading="lazy" height="50%" width="50%"><br>A027<br>9M2EZU<br>MOHD IZZUDIN BIN ABD RAHIM</p>');
    var A027C = L.circle([3.228340, 101.653016], {
      radius: 5000,
      opacity: 0.05
    });
    var MarkersList = L.layerGroup([A001, A001C, A002, A002C, A003, A003C, A004, A004C, B005, B005C, A006, A006C, A007, A007C, A008, A008C, A009, A009C, A010, A010C, /*A011, A011C,*/ A012, A012C, /*A013, A013C, A014, A014C, A015, A015C,*/ A016, A016C, A017, A017C, /*A018, A018C, B019, B019C,*/ A020, A020C, /*A021, A021C, A022, A022C,*/ A023, A023C, /*A024, A024C*/ A025, A025C, A026, A026C, A027, A027C]).addTo(map);
  </script>
</body>

</html>