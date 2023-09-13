const docBcfy = document.getElementById('bcfy')
const bcfyOwnHook = 'https://api.mhrtech.my/webhook/bcfy-stat'

setInterval(function () {
  $.getJSON(bcfyOwnHook, function (data) {
    const status = data.Feed[0].status
    const listeners = data.Feed[0].listeners
    const descr = data.Feed[0].descr
    if (status == 1) {
      var stats = 'Status Suapan: <span class="text-success-emphasis"><i class="fa-solid fa-volume-high fa-beat-fade"></i> Online</span>'
    }
    else {
      var stats = 'Status Suapan: <span class="text-danger-emphasis"><i class="fa-solid fa-volume-xmark fa-fade"></i> Offline</span>'
    }
    docBcfy.innerHTML = '<div class="col-12"><span>' + descr + '</span></div><div class="row"><div class="col-6">' + stats + '</div><div class="col-6">Pendengar: <span class="text-primary-emphasis">' + listeners + '</span></div></div>'
  })
}, 10000)