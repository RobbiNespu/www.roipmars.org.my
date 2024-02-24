const docBcfy = document.getElementById('bcfy')
const docBcfyAud = document.getElementById('bcfy-audio')
const bcfyOwnHook = 'https://api.mhrtech.my/webhook/bcfy-stat'

setInterval(function () {
  $.getJSON(bcfyOwnHook, function (data) {
    let status = data.status
    let listeners = data.listeners
    let descr = data.descr
    let bitrate = data.bitrate
    let meta = data.meta
    if (status) {
      var stats = '<div class="col-auto">Status: <span class="text-success-emphasis"><i class="fa-solid fa-volume-high fa-beat-fade"></i> Dalam Talian</span></div>'
    } else {
      var stats = '<div class="col-auto">Status: <span class="text-danger-emphasis"><i class="fa-solid fa-volume-xmark fa-fade"></i> Luar Talian</span></div>'
    }
    if (listeners) {
      var lists = '<div class="col-auto">Pendengar: <span class="text-success-emphasis">' + listeners + '</span></div>'
    } else {
      var lists = ''
    }
    if (bitrate) {
      var rate = '<div class="col-auto">Siaran: <span class="text-success-emphasis">Sedang berlansung</span></div>'
    } else {
      var rate = '<div class="col-auto">Siaran: <span class="text-warning-emphasis">Tidak bersiaran</span></div>'
    }
    if (meta) {
      var metas = '<br><div class="col-auto">EchoLink Metadata: <span class="text-success-emphasis">' + meta + '</span></div>'
    } else {
      var metas = ''
    }
    docBcfy.innerHTML = '<div class="col-12"><span>' + descr + '</span></div><div class="row d-flex justify-content-center">' + stats + lists + rate + metas + '</div>'
  })
}, 30000)

$.getJSON(bcfyOwnHook, function (data) {
  let status = data.status
  if (status) {
    docBcfyAud.innerHTML = '<div class="col-12 mt-2"><audio class="rounded-5 w-75 mx-auto" controls autoplay preload="metadata" src="https://broadcastify.cdnstream1.com/41368" type="audio/mp3" crossorigin="anonymous"></audio></div>\
    <span>Siaran mungkin tertunda sehingga 10 minit bergantung kepada kelajuan dan kependaman rangkaian.<br>Sebagai alternatif, anda boleh mendengar di: <a href="https://mhrtech.my:5000" target="_blank">stream.mhrtech.my</a>; periksa kelajuan jaringan: <a href="https://speed.mhrtech.my" target="_blank">speed.mhrtech.my</a>; </span>'
  } else {
    docBcfyAud.innerHTML = ''
  }
})