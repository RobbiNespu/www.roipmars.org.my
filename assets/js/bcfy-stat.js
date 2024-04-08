const dochamLive = document.getElementById('hamlive')
const dochamLiveAud = document.getElementById('hamlive-audio')
if (dochamLive || dochamLiveAud) {
  const hamLiveOwnHook = 'https://api.mhrtech.my/webhook/hamlive-stat'
  $.getJSON(hamLiveOwnHook, function (data) {
    let status = data.status
    let listeners = data.listeners
    let descr = data.descr
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
    if (meta) {
      var metas = '<br><div class="col-12">EchoLink Metadata: <span class="text-success-emphasis">' + meta + '</span></div>'
    } else {
      var metas = ''
    }
    dochamLive.innerHTML = '<div class="col-12"><span>' + descr + '</span></div><div class="row d-flex justify-content-center">' + stats + lists + metas + '</div>'
  })
  $.getJSON(hamLiveOwnHook, function (data) {
    let status = data.status
    if (status) {
      dochamLiveAud.innerHTML = '<div class="col-12 mt-2"><audio class="rounded-5 w-75 mx-auto" controls preload="metadata"><source src="https://mhrtech.my:5000/htmlaudioplayerfeed" type="audio/mp3"></source><source src="https://mhrtech.my:5000/feed.m3u" type="audio/mpeg"></source>Pelayar anda tidak menyokong tag audio.</audio></div><span>Siaran mungkin tertunda sehingga 10 minit bergantung pada kecekapan jaringan.<br>Sebagai alternatif, anda boleh mendengar di: <a href="https://mhrtech.my:5000" target="_blank">hamlive.mhrtech.my</a>; periksa kelajuan jaringan: <a href="https://speed.mhrtech.my" target="_blank">speed.mhrtech.my</a>; </span>'
    } else {
      dochamLiveAud.innerHTML = ''
    }
  })
}

const doccbLive = document.getElementById('cblive')
const doccbLiveAud = document.getElementById('cblive-audio')
if (doccbLive || doccbLiveAud) {
  const cbLiveOwnHook = 'https://api.mhrtech.my/webhook/cblive-stat'
  $.getJSON(cbLiveOwnHook, function (data) {
    let status = data.status
    let listeners = data.listeners
    let descr = data.descr
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
    doccbLive.innerHTML = '<div class="col-12"><span>' + descr + '</span></div><div class="row d-flex justify-content-center">' + stats + lists + '</div>'
  })
  $.getJSON(cbLiveOwnHook, function (data) {
    let status = data.status
    if (status) {
      doccbLiveAud.innerHTML = '<div class="col-12 mt-2"><audio class="rounded-5 w-75 mx-auto" controls preload="metadata"><source src="https://mhrtech.my:5001/htmlaudioplayerfeed" type="audio/mp3"></source><source src="https://mhrtech.my:5001/feed.m3u" type="audio/mpeg"></source>Pelayar anda tidak menyokong tag audio.</audio></div><span>Siaran mungkin tertunda sehingga 10 minit bergantung pada kecekapan jaringan.<br>Sebagai alternatif, anda boleh mendengar di: <a href="https://mhrtech.my:5001" target="_blank">cblive.mhrtech.my</a>; periksa kelajuan jaringan: <a href="https://speed.mhrtech.my" target="_blank">speed.mhrtech.my</a>; </span>'
    } else {
      doccbLiveAud.innerHTML = ''
    }
  })
}