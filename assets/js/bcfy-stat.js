const docStat = document.getElementById('bcfy-status')
const docList = document.getElementById('bcfy-listeners')
const docDesc = document.getElementById('bcfy-desc')

const bcfyOwnHook = 'https://api.mhrtech.my/webhook/bcfy-stat'

$.getJSON(bcfyOwnHook, function (data) { 
  const status = data.Feed[0].status
  const listeners = data.Feed[0].listeners
  const descr = data.Feed[0].descr
  docDesc.textContent = descr
  docList.textContent = listeners
  if (status == 1) {
    docStat.textContent = 'Online'
  } else {
    docStat.textContent = 'Offline'
  }
 })