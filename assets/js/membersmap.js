let getStoredTheme = localStorage.getItem('theme')
let YrNow = new Date().getFullYear()
let JMAT = 'Yfk7oslxn7AhBWNOPFQwyxp8J48VAbifha47L9S0TrRSI5K8WrBYvO4ByWkeEqpQ'
let mapOptions = {
  center: [4.10932, 109.455475],
  zoom: 5,
  minZoom: 3,
  maxZoom: 17,
  loadingControl: true,
  fullscreenControl: true,
}
var map = L.map('map', mapOptions)
const styles = ['jawg-dark', 'jawg-streets']
const baselayers = {}
styles.forEach((style) => baselayers[style] = L.tileLayer(`//{s}.tile.jawg.io/${style}/{z}/{x}/{y}.png?access-token=${JMAT}`, {
  attribution: '&copy ' + YrNow + ' <a href="//www.openstreetmap.org/copyright">OSM</a>, <a href="//www.jawg.io/en/terms">Jawg</a>'
}))
if (getStoredTheme == 'light') {
  baselayers['jawg-streets'].addTo(map)
} else {
  baselayers['jawg-dark'].addTo(map)
}
// L.control.layers(baselayers).addTo(map)
var terminator = L.terminator({
  opacity: 0.25,
  fillOpacity: 0.25,
  interactive: false
}).addTo(map)
setInterval(function () { terminator.setTime() }, 60000)
L.maidenhead({
  color: 'rgba(225, 225, 225, 0.075)',
  interactive: false
}).addTo(map)
L.control.locate({
  position: 'topleft',
  locateOptions: { enableHighAccuracy: true },
  setView: 'once',
  flyTo: true,
  strings: { title: 'Paparkan Lokasi Saya' }
}).addTo(map)
L.control.mapCenterCoord({
  position: 'bottomleft',
  icon: false,
  onMove: true,
  template: '{y}, {x}',
  latlngFormat: 'DD'
}).addTo(map)
L.control.scale({
  position: 'bottomleft',
  metric: true,
  imperial: false,
  updateWhenIdle: false
}).addTo(map)
L.control.rainviewer({
  position: 'bottomleft',
  nextButtonText: '>',
  playStopButtonText: 'Main/Henti',
  prevButtonText: '<',
  positionSliderLabelText: 'Waktu:',
  opacitySliderLabelText: 'Kegelapan:',
  animationInterval: 1000,
  opacity: 0.25
}).addTo(map)
map.addControl(new JawgPlaces.Leaflet({
  searchOnTyping: true,
  transition: { type: 'hybrid' },
  marker: { icon: L.icon({ iconUrl: 'https://img.icons8.com/plasticine/100/000000/map-pin.png', iconSize: [32, 32] }), show: true },
  position: 'topright',
  language: 'ms',
  placeholder: 'Cari Lokasi',
  inputClasses: ['form-control', 'rounded-3', 'text-end', 'fs-6'],
  L: L
}))
L.control.worldMiniMap({
  position: 'bottomright',
  width: 140,
  height: 60,
  view: 'square',
  style: { opacity: 0.4, border: '0px transparent', borderRadius: '30px' }
}).addTo(map)
var marsattr = '<a href="//www.roipmars.org.my">RoIPMARS&#8480;</a>'
var marsMemIcon = L.icon({ iconUrl: 'https://ik.imagekit.io/mhrtech/roipmars-org-my/assets/favicon/android-chrome-36x36.png', iconSize: [32, 32] })
var marsGateIcon = L.icon({ iconUrl: 'https://img.icons8.com/plasticine/100/null/radio-tower.png', iconSize: [28, 28] })
var attrPopup = { closeButton: false, attribution: marsattr }
var circOpt = { radius: 10000, stroke: false, fillOpacity: 0.175, interactive: false }
var gw9M4GLG = L.marker([4.110997, 102.236697], { title: '9M4GLG', icon: marsGateIcon }).bindPopup('<p class="text-center m-0">9M4GLG 144.8250MHz</p>', attrPopup)
var gw9W4GMS = L.marker([3.444039, 101.552856], { title: '9W4GMS', icon: marsGateIcon }).bindPopup('<p class="text-center m-0">9W4GMS 144.9800MHz<br>VHF, TeamSpeak, EchoLink</p>', attrPopup)
var gw9W4GOZ = L.marker([5.741363, 115.934101], { title: '9W4GOZ', icon: marsGateIcon }).bindPopup('<p class="text-center m-0">9W4GOZ 144.8000MHz C203 -0.6MHz<br>VHF, TeamSpeak, EchoLink</p>', attrPopup)
var gw9W4GPA = L.marker([3.23111, 101.423487], { title: '9W4GPA', icon: marsGateIcon }).bindPopup('<p class="text-center m-0">9W4GPA 144.8500MHz C100<br>TeamSpeak, EchoLink, DMR, YSF, C4FM, Free Radio Network, Mumble, Peanut, Zello, Discord, Telegram, TeamTalk</p>', attrPopup)
var gw9W4GWI = L.marker([5.9668, 102.0765], { title: '9W4GWI', icon: marsGateIcon }).bindPopup('<p class="text-center m-0">9W4GWI 145.2750MHz</p>', attrPopup)
var gw9W4GYQ = L.marker([3.77112, 103.27712], { title: '9W4GYQ', icon: marsGateIcon }).bindPopup('<p class="text-center m-0">9W4GYQ 144.8000MHz<br>VHF, TeamSpeak</p>', attrPopup)
var gw9W4GZA = L.marker([2.9956, 101.6630], { title: '9W4GZA', icon: marsGateIcon }).bindPopup('<p class="text-center m-0">9W4GZA 144.8250MHz</p>', attrPopup)

var A001 = L.marker([3.23111, 101.423487], { title: 'A001', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/001.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A001</p><p class="text-center fw-light fs-5 m-0">9W2LGX @ OJ03RF</p><p class="text-center m-0">MOHAMAD HAFIZI BIN RUSLAN</p>', attrPopup)
var A001C = L.circle([3.23111, 101.423487], circOpt)
var A002 = L.marker([3.444039, 101.5528566], { title: 'A002', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/002.png" loading="lazy" style="filter: grayscale(100%);"><p class="text-center fw-bold fs-3 m-0">A002</p><p class="text-center fw-light fs-5 m-0">9W2UZL @ OJ03SK</p><p class="text-center m-0">ZULKIFLI BIN ABU</p>', attrPopup)
var A002C = L.circle([3.444039, 101.552856], circOpt)
var A003 = L.marker([6.216034, 100.395538], { title: 'A003', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/003.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A003</p><p class="text-center fw-light fs-5 m-0">9M2RAN @ OJ06EF</p><p class="text-center m-0">NOR IMRAN BIN AZIZ</p>', attrPopup)
var A003C = L.circle([6.216034, 100.395538], circOpt)
var A004 = L.marker([3.644159, 101.589101], { title: 'A004', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/004.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A004</p><p class="text-center fw-light fs-5 m-0">9W2UBE @ OJ03TP</p><p class="text-center m-0">FAISNURNIZAM BIN MAT RASOL</p>', attrPopup)
var A004C = L.circle([3.644159, 101.589101], circOpt)
var B005 = L.marker([4.997056, 114.989282], { title: 'B005', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/005.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">B005</p><p class="text-center fw-light fs-5 m-0">V85ABK @ OJ74LX</p><p class="text-center m-0">PG. SULIMAN BIN PG. HJ. SHAMSUDDIN</p>', attrPopup)
var B005C = L.circle([4.997056, 114.989282], circOpt)
var A006 = L.marker([5.741363, 115.934101], { title: 'A006', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/006.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A006</p><p class="text-center fw-light fs-5 m-0">9W6MOZ @ OJ75XR</p><p class="text-center m-0">MUSTAFA BIN OMAR</p>', attrPopup)
var A006C = L.circle([5.741363, 115.934101], circOpt)
var A007 = L.marker([3.644242, 101.589176], { title: 'A007', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/007.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A007</p><p class="text-center fw-light fs-5 m-0">9W2ELM @ OJ03TP</p><p class="text-center m-0">MOHD SULAIMAN BIN MAZLAN</p>', attrPopup)
var A007C = L.circle([3.644242, 101.589176], circOpt)
var A008 = L.marker([4.180928, 100.657381], { title: 'A008', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/008.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A008</p><p class="text-center fw-light fs-5 m-0">9W2OGK @ OJ04HE</p><p class="text-center m-0">KAMARUDZAMAN BIN ABDUL RAHIM</p>', attrPopup)
var A008C = L.circle([4.180928, 100.657381], circOpt)
var A009 = L.marker([3.77112, 103.27712], { title: 'A009', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/009.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A009</p><p class="text-center fw-light fs-5 m-0">9W2YQN @ OJ13PS</p><p class="text-center m-0">AHMAD NURILYAQIN BIN AHMAD TAJUDDIN</p>', attrPopup)
var A009C = L.circle([3.77112, 103.27712], circOpt)
var A010 = L.marker([5.957909, 116.070744], { title: 'A010', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/010.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A010</p><p class="text-center fw-light fs-5 m-0">9M6AUA @ OJ85AW</p><p class="text-center m-0">JEOFREY BIN AVITUS @ VITUS</p>', attrPopup)
var A010C = L.circle([5.957909, 116.070744], circOpt)
var A011 = L.marker([4.599923, 100.68266], { title: 'A011', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/011.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A011</p><p class="text-center fw-light fs-5 m-0">9W2NDI @ OJ04IO</p><p class="text-center m-0">NASARUDDIN BIN ARIF</p>', attrPopup)
var A011C = L.circle([4.599923, 100.68266], circOpt)
var A012 = L.marker([6.092719, 100.369957], { title: 'A012', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/012.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A012</p><p class="text-center fw-light fs-5 m-0">9W2RNH @ OJ06EC</p><p class="text-center m-0">ROSNAH BINTI RAPAR</p>', attrPopup)
var A012C = L.circle([6.092719, 100.369957], circOpt)
var A013 = L.marker([4.320589, 113.993668], { title: 'A013', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/013.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A013</p><p class="text-center fw-light fs-5 m-0">9W8VWW @ OJ64XH</p><p class="text-center m-0">VERONICA CATHERINE ANAK NOHAN</p>', attrPopup)
var A013C = L.circle([4.320589, 113.993668], circOpt)
var A014 = L.marker([4.320633, 113.993691], { title: 'A014', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/014.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A014</p><p class="text-center fw-light fs-5 m-0">9W8DNX @ OJ64XH</p><p class="text-center m-0">STANLEY SUMPING ANAK ALBERT BEJIE</p>', attrPopup)
var A014C = L.circle([4.320633, 113.993691], circOpt)
var A015 = L.marker([2.224963, 102.222663], { title: 'A015', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/015.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A015</p><p class="text-center fw-light fs-5 m-0">9M2NUZ @ OJ12CF</p><p class="text-center m-0">SITI NUSILAH BINTI HASAN</p>', attrPopup)
var A015C = L.circle([2.224963, 102.222663], circOpt)
var A016 = L.marker([1.51425, 110.363835], { title: 'A016', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/016.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A016</p><p class="text-center fw-light fs-5 m-0">9W8ZZK @ OJ51EM</p><p class="text-center m-0">MOHAMAD ZAHEER BIN ZAKARIA</p>', attrPopup)
var A016C = L.circle([1.51425, 110.363835], circOpt)
var A017 = L.marker([5.991959, 116.092358], { title: 'A017', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/017.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A017</p><p class="text-center fw-light fs-5 m-0">9M6RDY @ OJ85BX</p><p class="text-center m-0">MATTHEUS @ RUDY BIN BENEDICT</p>', attrPopup)
var A017C = L.circle([5.991959, 116.092358], circOpt)
var A018 = L.marker([5.729897, 115.949308], { title: 'A018', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/018.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A018</p><p class="text-center fw-light fs-5 m-0">9W6GEO @ OJ75XR</p><p class="text-center m-0">GEOFFREY BIN COSMAS</p>', attrPopup)
var A018C = L.circle([5.729897, 115.949308], circOpt)
var B019 = L.marker([4.877381, 114.830574], { title: 'B019', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/019.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">B019</p><p class="text-center fw-light fs-5 m-0">V85MUH @ OJ74JV</p><p class="text-center m-0">ROZAN BIN HAJI KADERI</p>', attrPopup)
var B019C = L.circle([4.877381, 114.830574], circOpt)
var A020 = L.marker([2.261893, 102.376587], { title: 'A020', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/020.png" loading="lazy" style="filter: grayscale(100%);"><p class="text-center fw-bold fs-3 m-0">A020</p><p class="text-center fw-light fs-5 m-0">9M2SFF @ OJ12EG</p><p class="text-center m-0">ROZAIMAN SUFFIAN BIN OTHMAN</p>', attrPopup)
var A020C = L.circle([2.261893, 102.376587], circOpt)
var A021 = L.marker([2.944117, 101.832765], { title: 'A021', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/021.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A021</p><p class="text-center fw-light fs-5 m-0">9W2WZZ @ OJ02VW</p><p class="text-center m-0">ABD MUNIR MOHAMAD BIN ABD KHALIL</p>', attrPopup)
var A021C = L.circle([2.944117, 101.832765], circOpt)
var A022 = L.marker([5.960464, 102.292143], { title: 'A022', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/022.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A022</p><p class="text-center fw-light fs-5 m-0">9W2DMJ @ OJ15DX</p><p class="text-center m-0">MOHD DAUD BIN JUSOH</p>', attrPopup)
var A022C = L.circle([5.960464, 102.292143], circOpt)
var A023 = L.marker([3.266927, 102.444595], { title: 'A023', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/023.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A023</p><p class="text-center fw-light fs-5 m-0">9W2DRQ @ OJ13FG</p><p class="text-center m-0">SYED IDRUS BIN SYED AGIL</p>', attrPopup)
var A023C = L.circle([3.266927, 102.444595], circOpt)
var A024 = L.marker([3.226295, 101.659866], { title: 'A024', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/024.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A024</p><p class="text-center fw-light fs-5 m-0">9W2SRF @ OJ03TF</p><p class="text-center m-0">CHE SHARIFF BIN OTHMAN</p>', attrPopup)
var A024C = L.circle([3.226295, 101.659866], circOpt)
var A025 = L.marker([3.472367, 102.327774], { title: 'A025', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/025.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A025</p><p class="text-center fw-light fs-5 m-0">9W2AYP @ OJ13DL</p><p class="text-center m-0">MOHD SABRI BIN IBRAHIM</p>', attrPopup)
var A025C = L.circle([3.472367, 102.327774], circOpt)
var A026 = L.marker([2.557167, 102.123333], { title: 'A026', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/026.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A026</p><p class="text-center fw-light fs-5 m-0">9W2VMB @ OJ12BN</p><p class="text-center m-0">ASRULHISYAM BIN ASURA</p>', attrPopup)
var A026C = L.circle([2.557167, 102.123333], circOpt)
var A027 = L.marker([3.22834, 101.653016], { title: 'A027', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/027.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A027</p><p class="text-center fw-light fs-5 m-0">9M2EZU @ OJ03TF</p><p class="text-center m-0">MOHD IZZUDIN BIN ABD RAHIM</p>', attrPopup)
var A027C = L.circle([3.22834, 101.653016], circOpt)
var A028 = L.marker([1.54124, 103.734632], { title: 'A028', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/028.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A028</p><p class="text-center fw-light fs-5 m-0">9W2NEW @ OJ11UM</p><p class="text-center m-0">NORHISHAM BIN BAHAROM</p>', attrPopup)
var A028C = L.circle([1.54124, 103.734632], circOpt)
var A029 = L.marker([1.561548, 103.620784], { title: 'A029', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/029.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A029</p><p class="text-center fw-light fs-5 m-0">9W2JCP @ OJ11TN</p><p class="text-center m-0">MOHAMAD ROSLI BIN AWANG</p>', attrPopup)
var A029C = L.circle([1.561548, 103.620784], circOpt)
var A030 = L.marker([5.176567, 100.474308], { title: 'A030', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/030.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A030</p><p class="text-center fw-light fs-5 m-0">9W2HLM @ OJ05FE</p><p class="text-center m-0">ABDUL HALIM BIN HJ HASHIM</p>', attrPopup)
var A030C = L.circle([5.176567, 100.474308], circOpt)
var A031 = L.marker([3.222652, 101.533664], { title: 'A031', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/031.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A031</p><p class="text-center fw-light fs-5 m-0">9W2EZK @ OJ03SF</p><p class="text-center m-0">MOHD IFFIQ ZIKRY BIN JAMAL</p>', attrPopup)
var A031C = L.circle([3.222652, 101.533664], circOpt)
var B032 = L.marker([5.015883, 115.009728], { title: 'B032', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/032.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">B032</p><p class="text-center fw-light fs-5 m-0">V85AFF @ OJ75MA</p><p class="text-center m-0">MAHATHIR BIN ARIFFIN</p>', attrPopup)
var B032C = L.circle([5.015883, 115.009728], circOpt)
var A033 = L.marker([6.1127269, 102.277425], { title: 'A033', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/033.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A033</p><p class="text-center fw-light fs-5 m-0">9W2AKK @ OJ75MA</p><p class="text-center m-0">MUHAMMAD KHAIRUL AMILIN BIN ISMAIL</p>', attrPopup)
var A033C = L.circle([6.1127269, 102.277425], circOpt)
var A034 = L.marker([2.465392, 101.856669], { title: 'A034', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/034.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A034</p><p class="text-center fw-light fs-5 m-0">9W2IKA @ OJ02WL</p><p class="text-center m-0">IDHAM KHALIL BIN ABDULL WAHAB</p>', attrPopup)
var A034C = L.circle([2.465392, 101.856669], circOpt)
var A035 = L.marker([5.663925, 100.507457], { title: 'A035', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/035.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A035</p><p class="text-center fw-light fs-5 m-0">113MSRAO @ OJ05GP</p><p class="text-center m-0">GOWTAMROA A/L MANICKAROW</p>', attrPopup)
var A035C = L.circle([5.663925, 100.507457], circOpt)
var A036 = L.marker([1.653044, 103.261128], { title: 'A036', icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" src="../media/image/member/036.png" loading="lazy"><p class="text-center fw-bold fs-3 m-0">A036</p><p class="text-center fw-light fs-5 m-0">9W2NSP @ OJ11PP</p><p class="text-center m-0">ROBBI NESPU BIN MOHAMAD</p>', attrPopup)
var A036C = L.circle([1.653044, 103.261128], circOpt)

L.layerGroup([/* gw9M4GLG, gw9W4GMS, */ gw9W4GOZ, gw9W4GPA, /*gw9W4GWI , */gw9W4GYQ, /* gw9W4GZA, */A001, A001C, /* A002, A002C, */ A003, A003C, A004, A004C, B005, B005C, A006, A006C, A007, A007C, A008, A008C, A009, A009C, A010, A010C, A011, A011C, A012, A012C, /*A013, A013C, A014, A014C, A015, A015C,*/ A016, A016C, A017, A017C, /*A018, A018C, B019, B019C, A020, A020C, A021, A021C,*/ A022, A022C, A023, A023C, /*A024, A024C,*/ A025, A025C, A026, A026C, A027, A027C, A028, A028C, A029, A029C, A030, A030C, A031, A031C, B032, B032C, A033, A033C, A034, A034C, A035, A035C, A036, A036C]).addTo(map)