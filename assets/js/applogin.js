
let cs = document.getElementsByTagName('input').getElementById('callsign').value.toUpperCase
let name = document.getElementsByTagName('input').getElementById('name').value.toUpperCase
let location = document.getElementsByTagName('input').getElementById('location').value.toUpperCase

let tshamLoginButton = document.getElementsByTagName('button').getElementById('ts3hamlogin')
tshamLoginButton.onclick = function() {
  if((cs === '') || (name === '') || (location === '')) {
    return new error('Sila isi semua ruangan')
  } else {
    ts3hamlogin()
  }
}
let mumbleLoginButton = document.getElementsByTagName('button').getElementById('mumblelogin')
mumbleLoginButton.onclick = function() {
  if((cs === '') || (name === '') || (location === '')) {
    return new error('Sila isi semua ruangan')
  } else {
    mumblelogin()
  }
}
let tscbLoginButton = document.getElementsByTagName('button').getElementById('ts3cblogin')
tscbLoginButton.onclick = function() {
  if((cs === '') || (name === '') || (location === '')) {
    return new error('Sila isi semua ruangan')
  } else {
    ts3cblogin()
  }
}


function ts3hamlogin() { window.location.href = 'ts3server://roipmars.org.my?nickname=' + cs + '%20' + name + '%20' + location + '&cid=4&addbookmark=RoIPMARS%20HAM' }

function ts3cblogin() { window.location.href = 'ts3server://roipmars.org.my?nickname=' + cs + '%20' + name + '%20' + location + '&cid=15&addbookmark=RoIPMARS%20CB' }

function mumblelogin() { window.location.href = 'mumble://' + cs + '%20' + name + '%20' + location + '@roipmars.org.my/root?title=RoIPMARS.org.MY&url=roipmars.org.my' }