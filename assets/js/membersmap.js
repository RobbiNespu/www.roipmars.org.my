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
var marsattr = '<a href="https://www.roipmars.org.my">RoIPMARS</a>'
var marsMemIcon = L.icon({ iconUrl: '/assets/icon/android-chrome-36x36.png', iconSize: [32, 32] })
var marsGateIcon = L.icon({ iconUrl: 'https://img.icons8.com/plasticine/100/null/radio-tower.png', iconSize: [28, 28] })
var attrPopup = { closeButton: false, attribution: marsattr }
var circOpt = { radius: 10000, stroke: false, fillOpacity: 0.175, interactive: false }

$.getJSON('/assets/json/member.json', function (memberData) {
  var gw9W4GPA = L.marker([3.23111, 101.423487], { title: '9W4GPA', icon: marsGateIcon }).bindPopup('<p class="text-center m-0">9W4GPA 144.85MHz C100<br>FM, TeamSpeak, EchoLink, DMR, YSF, C4FM, Free Radio Network, Mumble, Peanut, Zello, Discord, Telegram, TeamTalk</p>', attrPopup)
  var gw9W4GYQ = L.marker([3.77112, 103.27712], { title: '9W4GYQ', icon: marsGateIcon }).bindPopup('<p class="text-center m-0">9W4GYQ 144.8MHz<br>FM, TeamSpeak</p>', attrPopup)
  var gw9W4GOZ = L.marker([5.741363, 115.934101], { title: '9W4GOZ', icon: marsGateIcon }).bindPopup('<p class="text-center m-0">9W4GOZ 144.8MHz C203 -0.6MHz<br>FM, TeamSpeak, EchoLink</p>', attrPopup)
  var gw9M4GPR = L.marker([5.991959, 116.092358], { title: '9M4GPR', icon: marsGateIcon }).bindPopup('<p class="text-center m-0">9M4GPR<br>TeamSpeak</p>', attrPopup)
  var gw9M4GUA = L.marker([5.957909, 116.070744], { title: '9M4GUA', icon: marsGateIcon }).bindPopup('<p class="text-center m-0">9M4GUA<br>TeamSpeak</p>', attrPopup)
  for (let md = 0; md < memberData.activeMembers.length; md++) {
    var mDtLL = memberData.LatLong[md]
    var mDtMN = memberData.MemberNo[md]
    var mDtIS = memberData.ImgSrc[md]
    var mDtCS = memberData.CallSign[md]
    var mDtGS = memberData.GridSquare[md]
    var mDtNM = memberData.Name[md]

    var MemberMarkers = L.marker(mDtLL, { title: mDtMN, icon: marsMemIcon }).bindPopup('<img class="img-fluid object-fit-fill rounded-circle mx-auto my-1" loading="lazy" src="' + mDtIS + '"><p class="text-center fw-bold fs-3 m-0">' + mDtMN + '</p><p class="text-center fw-light fs-5 m-0">' + mDtCS + ' @ ' + mDtGS + '</p><p class="text-center m-0">' + mDtNM + '</p>', attrPopup)
    var MemberCircles = L.circle(mDtLL, circOpt)

    L.layerGroup([gw9W4GPA, gw9W4GYQ, gw9W4GOZ, gw9M4GPR, gw9M4GUA, MemberMarkers, MemberCircles]).addTo(map)
  }
})