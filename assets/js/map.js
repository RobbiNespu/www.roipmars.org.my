var YrNow = new Date().getFullYear();
var JMAT = "Yfk7oslxn7AhBWNOPFQwyxp8J48VAbifha47L9S0TrRSI5K8WrBYvO4ByWkeEqpQ";
var mapOptions = {
  center: [4.174977, 109.467492],
  zoom: 5,
  minZoom: 3,
  maxZoom: 17,
  loadingControl: true,
  fullscreenControl: true,
};
var map = L.map("map", mapOptions);
L.tileLayer("//{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=" + JMAT, {
  attribution: "&copy; " + YrNow + ' <a href="//www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="//www.jawg.io">JawgMaps</a>',
}
).addTo(map);
var terminator = L.terminator({
  opacity: 0.25,
  fillOpacity: 0.25,
  interactive: false,
}).addTo(map);
L.maidenhead({
  color: "rgba(225, 225, 225, 0.075)",
  interactive: false,
}).addTo(map);
setInterval(function () {
  terminator.setTime();
}, 60000);
L.control
  .scale({
    position: "bottomleft",
    metric: true,
    imperial: false,
    updateWhenIdle: true,
  })
  .addTo(map);
L.control
  .locate({
    position: "topleft",
    locateOptions: {
      enableHighAccuracy: true,
    },
    setView: "once",
    flyTo: true,
    strings: {
      title: "Paparkan Lokasi Saya",
    },
  })
  .addTo(map);
L.control
  .rainviewer({
    position: "bottomleft",
    nextButtonText: ">",
    playStopButtonText: "Main/Henti",
    prevButtonText: "<",
    positionSliderLabelText: "Waktu:",
    opacitySliderLabelText: "Kegelapan:",
    animationInterval: 1000,
    opacity: 0.25,
  })
  .addTo(map);
L.control
  .worldMiniMap({
    position: "bottomright",
    width: 160,
    height: 70,
    view: "square",
    style: {
      opacity: 0.4,
      border: "0px transparent",
      borderRadius: "30px",
    },
  })
  .addTo(map);
map.addControl(
  new JawgPlaces.Leaflet({
    searchOnTyping: true,
    transition: {
      type: "hybrid",
    },
    marker: {
      icon: L.icon({
        iconUrl: "//img.icons8.com/plasticine/100/000000/map-pin.png",
        iconSize: [48, 48],
      }),
      show: true,
    },
    position: "topright",
    language: "ms",
    placeholder: "Cari Lokasi",
    inputClasses: ["form-control", "rounded-3", "text-end"],
    L: L,
  })
);
var marsattr = '<a href="//www.roipmars.org.my">RoIPMARS&trade;</a>';
var marsMemIcon = L.icon({
  iconUrl: "../media/image/favicon-96x96.png",
  iconSize: [24, 24],
});
var marsGateIcon = L.icon({
  iconUrl: "//img.icons8.com/plasticine/100/null/radio-tower.png",
  iconSize: [32, 32],
});
var GMS = L.marker([3.444039, 101.5528566], {
  title: "9W4GMS",
  icon: marsGateIcon,
}).bindPopup(
  '<p class="text-center m-0">9W4GMS 147.400MHz -3.2MHz<br>VHF, TeamSpeak, EchoLink</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var GYQ = L.marker([3.77112, 103.27712], {
  title: "9W4GYQ",
  icon: marsGateIcon,
}).bindPopup(
  '<p class="text-center m-0">9W4GYQ 144.800MHz<br>VHF, TeamSpeak</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var GOZ = L.marker([5.741363, 115.934101], {
  title: "9W4GOZ",
  icon: marsGateIcon,
}).bindPopup(
  '<p class="text-center m-0">9W4GOZ 144.800MHz -0.6MHz C203<br>VHF, TeamSpeak, EchoLink</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var GPA = L.marker([3.23111, 101.423487], {
  title: "9W4GPA",
  icon: marsGateIcon,
}).bindPopup(
  '<p class="text-center m-0">9W4GPA<br>TeamSpeak, EchoLink, Free Radio Network, Mumble, Peanut, Zello</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);

var A001 = L.marker([3.23111, 101.423487], {
  title: "A001",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/001.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A001</p><p class="text-center fw-light fs-5 m-0">9W2LGX @ OJ03RF</p><p class="text-center m-0">MOHAMAD HAFIZI BIN RUSLAN</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A001C = L.circle([3.23111, 101.423487], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A002 = L.marker([3.444039, 101.5528566], {
  title: "A002",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/002.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A002</p><p class="text-center fw-light fs-5 m-0">9W2UZL @ OJ03SK</p><p class="text-center m-0">ZULKIFLI BIN ABU</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A002C = L.circle([3.444039, 101.552856], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A003 = L.marker([6.216034, 100.395538], {
  title: "A003",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/003.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A003</p><p class="text-center fw-light fs-5 m-0">9M2RAN @ OJ06EF</p><p class="text-center m-0">NOR IMRAN BIN AZIZ</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A003C = L.circle([6.216034, 100.395538], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A004 = L.marker([3.644159, 101.589101], {
  title: "A004",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/004.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A004</p><p class="text-center fw-light fs-5 m-0">9W2UBE @ OJ03TP</p><p class="text-center m-0">FAISNURNIZAM BIN MAT RASOL</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A004C = L.circle([3.644159, 101.589101], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var B005 = L.marker([4.997056, 114.989282], {
  title: "B005",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/005.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">B005</p><p class="text-center fw-light fs-5 m-0">V85ABK @ OJ74LX</p><p class="text-center m-0">PG. SULIMAN BIN PG. HJ. SHAMSUDDIN</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var B005C = L.circle([4.997056, 114.989282], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A006 = L.marker([5.741363, 115.934101], {
  title: "A006",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/006.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A006</p><p class="text-center fw-light fs-5 m-0">9W6MOZ @ OJ75XR</p><p class="text-center m-0">MUSTAFA BIN OMAR</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A006C = L.circle([5.741363, 115.934101], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A007 = L.marker([3.644242, 101.589176], {
  title: "A007",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/007.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A007</p><p class="text-center fw-light fs-5 m-0">9W2ELM @ OJ03TP</p><p class="text-center m-0">MOHD SULAIMAN BIN MAZLAN</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A007C = L.circle([3.644242, 101.589176], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A008 = L.marker([4.180928, 100.657381], {
  title: "A008",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/008.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A008</p><p class="text-center fw-light fs-5 m-0">9W2OGK @ OJ04HE</p><p class="text-center m-0">KAMARUDZAMAN BIN ABDUL RAHIM</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A008C = L.circle([4.180928, 100.657381], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A009 = L.marker([3.77112, 103.27712], {
  title: "A009",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/009.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A009</p><p class="text-center fw-light fs-5 m-0">9W2YQN @ OJ13PS</p><p class="text-center m-0">AHMAD NURILYAQIN BIN AHMAD TAJUDDIN</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A009C = L.circle([3.77112, 103.27712], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A010 = L.marker([5.957909, 116.070744], {
  title: "A010",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/010.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A010</p><p class="text-center fw-light fs-5 m-0">9M6AUA @ OJ85AW</p><p class="text-center m-0">JEOFREY BIN AVITUS @ VITUS</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A010C = L.circle([5.957909, 116.070744], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A011 = L.marker([4.599923, 100.68266], {
  title: "A011",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/011.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A011</p><p class="text-center fw-light fs-5 m-0">9W2NDI @ OJ04IO</p><p class="text-center m-0">NASARUDDIN BIN ARIF</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A011C = L.circle([4.599923, 100.68266], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A012 = L.marker([6.092719, 100.369957], {
  title: "A012",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/012.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A012</p><p class="text-center fw-light fs-5 m-0">9W2RNH @ OJ06EC</p><p class="text-center m-0">ROSNAH BINTI RAPAR</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A012C = L.circle([6.092719, 100.369957], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A013 = L.marker([4.320589, 113.993668], {
  title: "A013",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/013.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A013</p><p class="text-center fw-light fs-5 m-0">9W8VWW @ OJ64XH</p><p class="text-center m-0">VERONICA CATHERINE ANAK NOHAN</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A013C = L.circle([4.320589, 113.993668], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A014 = L.marker([4.320633, 113.993691], {
  title: "A014",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/014.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A014</p><p class="text-center fw-light fs-5 m-0">9W8DNX @ OJ64XH</p><p class="text-center m-0">STANLEY SUMPING ANAK ALBERT BEJIE</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A014C = L.circle([4.320633, 113.993691], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A015 = L.marker([2.224963, 102.222663], {
  title: "A015",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/015.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A015</p><p class="text-center fw-light fs-5 m-0">9M2NUZ @ OJ12CF</p><p class="text-center m-0">SITI NUSILAH BINTI HASAN</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A015C = L.circle([2.224963, 102.222663], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A016 = L.marker([1.51425, 110.363835], {
  title: "A016",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/016.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A016</p><p class="text-center fw-light fs-5 m-0">9W8ZZK @ OJ51EM</p><p class="text-center m-0">MOHAMAD ZAHEER BIN ZAKARIA</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A016C = L.circle([1.51425, 110.363835], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A017 = L.marker([5.991959, 116.092358], {
  title: "A017",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/017.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A017</p><p class="text-center fw-light fs-5 m-0">9M6RDY @ OJ85BX</p><p class="text-center m-0">MATTHEUS @ RUDY BIN BENEDICT</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A017C = L.circle([5.991959, 116.092358], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A018 = L.marker([5.729897, 115.949308], {
  title: "A018",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/018.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A018</p><p class="text-center fw-light fs-5 m-0">9W6GEO @ OJ75XR</p><p class="text-center m-0">GEOFFREY BIN COSMAS</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A018C = L.circle([5.729897, 115.949308], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var B019 = L.marker([4.877381, 114.830574], {
  title: "B019",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/019.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">B019</p><p class="text-center fw-light fs-5 m-0">V85MUH @ OJ74JV</p><p class="text-center m-0">ROZAN BIN HAJI KADERI</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var B019C = L.circle([4.877381, 114.830574], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A020 = L.marker([2.261893, 102.376587], {
  title: "A020",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/020.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A020</p><p class="text-center fw-light fs-5 m-0">9M2SFF @ OJ12EG</p><p class="text-center m-0">ROZAIMAN SUFFIAN BIN OTHMAN</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A020C = L.circle([2.261893, 102.376587], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A021 = L.marker([2.944117, 101.832765], {
  title: "A021",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/021.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A021</p><p class="text-center fw-light fs-5 m-0">9W2WZZ @ OJ02VW</p><p class="text-center m-0">ABD MUNIR MOHAMAD BIN ABD KHALIL</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A021C = L.circle([2.944117, 101.832765], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A022 = L.marker([5.960464, 102.292143], {
  title: "A022",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/022.png" loading="lazy" onerror=""><p class="text-center fw-bold fs-3 m-0">A022</p><p class="text-center fw-light fs-5 m-0">9W2DMJ @ OJ15DX</p><p class="text-center m-0">MOHD DAUD BIN JUSOH</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A022C = L.circle([5.960464, 102.292143], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A023 = L.marker([3.266927, 102.444595], {
  title: "A023",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/023.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A023</p><p class="text-center fw-light fs-5 m-0">9W2DRQ @ OJ13FG</p><p class="text-center m-0">SYED IDRUS BIN SYED AGIL</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A023C = L.circle([3.266927, 102.444595], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A024 = L.marker([3.226295, 101.659866], {
  title: "A024",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/024.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A024</p><p class="text-center fw-light fs-5 m-0">9W2SRF @ OJ03TF</p><p class="text-center m-0">CHE SHARIFF BIN OTHMAN</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A024C = L.circle([3.226295, 101.659866], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A025 = L.marker([3.472367, 102.327774], {
  title: "A025",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/025.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A025</p><p class="text-center fw-light fs-5 m-0">9W2AYP @ OJ13DL</p><p class="text-center m-0">MOHD SABRI BIN IBRAHIM</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A025C = L.circle([3.472367, 102.327774], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A026 = L.marker([2.557167, 102.123333], {
  title: "A026",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/026.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A026</p><p class="text-center fw-light fs-5 m-0">9W2VMB @ OJ12BN</p><p class="text-center m-0">ASRULHISYAM BIN ASURA</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A026C = L.circle([2.557167, 102.123333], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A027 = L.marker([3.22834, 101.653016], {
  title: "A027",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/027.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A027</p><p class="text-center fw-light fs-5 m-0">9M2EZU @ OJ03TF</p><p class="text-center m-0">MOHD IZZUDIN BIN ABD RAHIM</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A027C = L.circle([3.22834, 101.653016], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A028 = L.marker([1.54124, 103.734632], {
  title: "A028",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/028.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A028</p><p class="text-center fw-light fs-5 m-0">9W2NEW @ OJ11UM</p><p class="text-center m-0">NORHISHAM BIN BAHAROM</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A028C = L.circle([1.54124, 103.734632], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A029 = L.marker([1.561548, 103.620784], {
  title: "A029",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/029.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A029</p><p class="text-center fw-light fs-5 m-0">9W2JCP @ OJ11TN</p><p class="text-center m-0">MOHAMAD ROSLI BIN AWANG</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A029C = L.circle([1.561548, 103.620784], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A030 = L.marker([5.176567, 100.474308], {
  title: "A030",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/030.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A030</p><p class="text-center fw-light fs-5 m-0">9W2HLM @ OJ05FE</p><p class="text-center m-0">ABDUL HALIM BIN HJ HASHIM</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A030C = L.circle([5.176567, 100.474308], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A031 = L.marker([3.222652, 101.533664], {
  title: "A031",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/031.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A031</p><p class="text-center fw-light fs-5 m-0">9W2EZK @ OJ03SF</p><p class="text-center m-0">MOHD IFFIQ ZIKRY BIN JAMAL</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A031C = L.circle([3.222652, 101.533664], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var B032 = L.marker([5.015883, 115.009728], {
  title: "B032",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/032.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">B032</p><p class="text-center fw-light fs-5 m-0">V85AFF @ OJ75MA</p><p class="text-center m-0">MAHATHIR BIN ARIFFIN</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var B032C = L.circle([5.015883, 115.009728], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A033 = L.marker([6.1127269, 102.277425], {
  title: "A033",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/033.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A033</p><p class="text-center fw-light fs-5 m-0">9W2AKK @ OJ75MA</p><p class="text-center m-0">MUHAMMAD KHAIRUL AMILIN BIN ISMAIL</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A033C = L.circle([6.1127269, 102.277425], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
var A034 = L.marker([2.465392, 101.856669], {
  title: "A034",
  icon: marsMemIcon,
}).bindPopup(
  '<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1 bg-dark-subtle bg-gradient" src="../media/image/member/034.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A034</p><p class="text-center fw-light fs-5 m-0">9W2IKA @ OJ02WL</p><p class="text-center m-0">IDHAM KHALIL BIN ABDULL WAHAB</p>',
  {
    closeButton: false,
    attribution: marsattr,
  }
);
var A034C = L.circle([2.465392, 101.856669], {
  radius: 10000,
  stroke: false,
  fillOpacity: 0.175,
  interactive: false,
});
L.layerGroup([GMS, GYQ, GOZ, GPA, A001, A001C, A002, A002C, A003, A003C, A004, A004C, B005, B005C, A006, A006C, A007, A007C, A008, A008C, A009, A009C, A010, A010C, A011, A011C, A012, A012C, /*A013, A013C, A014, A014C, A015, A015C,*/ A016, A016C, A017, A017C, /*A018, A018C, B019, B019C,*/ A020, A020C, /*A021, A021C,*/ A022, A022C, A023, A023C, /*A024, A024C,*/ A025, A025C, A026, A026C, A027, A027C, A028, A028C, A029, A029C, A030, A030C, A031, A031C, B032, B032C, A033, A033C,]).addTo(map);