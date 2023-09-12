const docBcfy = document.getElementById('bcfy')
const bcfyOwnHook = 'https://api.mhrtech.my/webhook/bcfy-stat'

setInterval(function () {
  $.getJSON(bcfyOwnHook, function (data) {
    const status = data.Feed[0].status
    const listeners = data.Feed[0].listeners
    const descr = data.Feed[0].descr
    if (status == 1) { var stats = 'Status Suapan: <i class="fa-solid fa-volume-high fa-beat-fade" style="color: green;"></i> Online' }
    else { var stats = 'Status Suapan: <i class="fa-solid fa-volume-xmark fa-fade" style="color: red;"></i> Offline' }
    docBcfy.innerHTML = '<div class="col-12"><span>' + descr + '</span></div><div class="row"><div class="col-6"><span>' + stats + '</span></div><div class="col-6"><span>Pendengar: ' + listeners + '</span></div></div>'
  })
}, 10000)