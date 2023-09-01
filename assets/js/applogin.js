let input = document.getElementsByTagName('input')
let button = document.getElementsByTagName('button')
var qrz = input.getElementById('callsign').value.toUpperCase()
var qra = input.getElementById('name').value.toUpperCase()
var qth = input.getElementById('location').value.toUpperCase()

var tshamLoginButton = button.getElementById('ts3hamlogin')
tshamLoginButton.onclick = function() {
  if((qrz == null) || (qra == null) || (qth == null)) {
    return new error('Sila isi semua ruangan')
  } else {
    ts3hamlogin()
  }
}
var mumbleLoginButton = button.getElementById('mumblelogin')
mumbleLoginButton.onclick = function() {
  if((qrz == null) || (qra == null) || (qth == null)) {
    return new error('Sila isi semua ruangan')
  } else {
    mumblelogin()
  }
}
var teamtalkLoginButton = button.getElementById('teamtalklogin')
teamtalkLoginButton.onclick = function() {
  if((qrz == null) || (qra == null) || (qth == null)) {
    return new error('Sila isi semua ruangan')
  } else {
    teamtalklogin()
  }
}
var tscbLoginButton = button.getElementById('ts3cblogin')
tscbLoginButton.onclick = function() {
  if((qrz == null) || (qra == null) || (qth == null)) {
    return new error('Sila isi semua ruangan')
  } else {
    ts3cblogin()
  }
}

function ts3hamlogin() { window.Location.href = 'ts3server://roipmars.org.my?nickname=' + qrz + '%20' + qra + '%20' + qth + '&cid=4&addbookmark=RoIPMARS%20HAM' }
function ts3cblogin() { window.Location.href = 'ts3server://roipmars.org.my?nickname=' + qrz + '%20' + qra + '%20' + qth + '&cid=15&addbookmark=RoIPMARS%20CB' }
function mumblelogin() { window.Location.href = 'mumble://' + qrz + '%20' + qra + '%20' + qth + '@roipmars.org.my/root?title=RoIPMARS.org.MY&url=roipmars.org.my' }
function teamtalklogin() { window.Location.href = 'tt://roipmars.org.my?encrypted=0&username=guest&password=guest&channel=%2FLobby%2F&nickname=' + qrz + '%20' + qra + '%20' + qth }