const docBcfy = document.getElementById('bcfy')
const docBcfyAud = document.getElementById('bcfy-audio')
const bcfyOwnHook = 'https://api.mhrtech.my/webhook/bcfy-stat'

setInterval(function () {
  $.getJSON(bcfyOwnHook, function (data) {
    let status = data.status
    let listeners = data.listeners
    let descr = data.descr
    let bitrate = data.bitrate
    if (status == 1) {
      var stats = '<div class="col-4">Status: <span class="text-success-emphasis"><i class="fa-solid fa-volume-high fa-beat-fade"></i> Online</span></div>'
    } else {
      var stats = '<div class="col-4">Status: <span class="text-danger-emphasis"><i class="fa-solid fa-volume-xmark fa-fade"></i> Offline</span></div>'
    }
    if (listeners == 0) {
      var lists = '<div class="col-4">Pendengar: <span class="text-danger-emphasis">' + listeners + '</span></div>'
    } else {
      var lists = '<div class="col-4">Pendengar: <span class="text-success-emphasis">' + listeners + '</span></div>'
    }
    if (bitrate == 0) {
      var rate = '<div class="col-4">Siaran: <span class="text-warning-emphasis">Tidak bersiaran</span></div>'
    } else {
      var rate = '<div class="col-4">Siaran: <span class="text-success-emphasis">Sedang bersiaran</span></div>'
    }
    docBcfy.innerHTML = '<div class="col-12"><span>' + descr + '</span></div><div class="row">' + stats + lists + rate + '</div>'
  })
}, 10000)

$.getJSON(bcfyOwnHook, function (data) {
  let status = data.status
  if (status == 1) {
    docBcfyAud.innerHTML = '<div class="col-12 mt-2"><audio class="rounded-5 w-75 mx-auto" controls preload="none" src="https://broadcastify.cdnstream1.com/41368" type="audio/mp3" crossorigin="anonymous"></audio></div>\
    <span>Siaran mungkin tertunda sehingga 10 minit bergantung kepada kelajuan dan kepandaman rangkaian.<br>Sebagai alternatif, anda boleh mendengar di sini: <a href="https://stream.mhrtech.my" target="_blank">stream.mhrtech.my</a></span>'
  } else {
    docBcfyAud.innerHTML = ''
  }
})