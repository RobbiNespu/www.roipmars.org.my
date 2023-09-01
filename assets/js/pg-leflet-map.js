let getStoredTheme = localStorage.getItem('theme')
let YrNow = new Date().getFullYear()
let JMAT = 'Yfk7oslxn7AhBWNOPFQwyxp8J48VAbifha47L9S0TrRSI5K8WrBYvO4ByWkeEqpQ'
let mapOptions = {
  center: [0,0],
  zoom: 3,
  minZoom: 1,
  maxZoom: 15,
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
L.control.worldMiniMap({
  position: 'bottomright',
  width: 140,
  height: 60,
  view: 'square',
  style: { opacity: 0.4, border: '0px transparent', borderRadius: '30px' }
}).addTo(map)

