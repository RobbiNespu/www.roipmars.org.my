let getStoredTheme = localStorage.getItem('theme')
let YrNow = new Date().getFullYear()
let JMAT = 'Yfk7oslxn7AhBWNOPFQwyxp8J48VAbifha47L9S0TrRSI5K8WrBYvO4ByWkeEqpQ'
let mapOptions = {
  center: [4.10932, 109.455475],
  zoom: 1,
  minZoom: 3,
  maxZoom: 17,
  loadingControl: true,
  fullscreenControl: true,
}
var map = L.map('map',mapOptions)
const styles = ['jawg-dark', 'jawg-streets']
const baselayers = {}
styles.forEach((style) => baselayers[style] = L.tileLayer(
  `//{s}.tile.jawg.io/${style}/{z}/{x}/{y}.png?access-token=${JMAT}`, {
    attribution: '&copy ' + YrNow + ' <a href="//www.openstreetmap.org/copyright">OSM</a>, <a href="//www.jawg.io/en/terms">Jawg</a>'
  }
))
if (getStoredTheme == 'light') {
  baselayers['jawg-streets'].addTo(map)
} else {
  baselayers['jawg-dark'].addTo(map)
}
// L.control.layers(baselayers).addTo(map)
var terminator = L.terminator({
  opacity: 0.25,fillOpacity: 0.25,
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
var marsattr = '<a href="//www.roipmars.org.my">RoIPMARS&trade;</a>'
var marsMemIcon = L.icon({ iconUrl: '../media/image/brands/favicon/favicon-96x96.png', iconSize: [24, 24] })
var marsGateIcon = L.icon({ iconUrl: 'https://img.icons8.com/plasticine/100/null/radio-tower.png', iconSize: [32, 32] })

// L.layerGroup([GMS, GYQ, GOZ, GPA, A001, A001C, A002, A002C, A003, A003C, A004, A004C, B005, B005C, A006, A006C, A007, A007C, A008, A008C, A009, A009C, A010, A010C, A011, A011C, A012, A012C, /*A013, A013C, A014, A014C, A015, A015C,*/ A016, A016C, A017, A017C, /*A018, A018C, B019, B019C, A020, A020C, A021, A021C,*/ A022, A022C, A023, A023C, /*A024, A024C,*/ A025, A025C, A026, A026C, A027, A027C, A028, A028C, A029, A029C, A030, A030C, A031, A031C, B032, B032C, A033, A033C, A034, A034C, A035, A035C]).addTo(map)