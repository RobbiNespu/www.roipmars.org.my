const docBcfy = document.getElementById('bcfy')
const docBcfyAud = document.getElementById('bcfy-audio')
const bcfyOwnHook = 'https://api.mhrtech.my/webhook/bcfy-stat'

setInterval(function () {
  $.getJSON(bcfyOwnHook, function (data) {
    let status = data.Feed[0].status
    let listeners = data.Feed[0].listeners
    let descr = data.Feed[0].descr
    if (status == 1) {
      var stats = 'Status: <span class="text-success-emphasis"><i class="fa-solid fa-volume-high fa-beat-fade"></i> Online</span>'
    }
    else {
      var stats = 'Status: <span class="text-danger-emphasis"><i class="fa-solid fa-volume-xmark fa-fade"></i> Offline</span>'
    }
    docBcfy.innerHTML = '<div class="col-12"><span>' + descr + '</span></div><div class="row"><div class="col-6">' + stats + '</div><div class="col-6">Pendengar: <span class="text-primary-emphasis">' + listeners + '</span></div></div>'
  })
}, 10000)

$.getJSON(bcfyOwnHook, function (data) {
  let status = data.Feed[0].status
  if (status == 1) {
    docBcfyAud.innerHTML = '<div class="col-12 mt-2"><audio class="rounded-5 w-75 mx-auto" controls preload="none" src="https://broadcastify.cdnstream1.com/41368" type="audio/mp3" crossorigin="anonymous"></audio></div><span>Suapan mungkin tertunda 1 ke 10 minit.</span>'
  }
  else {
    docBcfyAud.innerHTML = ''
  }
})