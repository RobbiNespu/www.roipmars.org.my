let input = document.getElementsByTagName('input')
let button = document.getElementsByTagName('button')
var qrz = input.getElementById('callsign').value.toUpperCase()
var qra = input.getElementById('name').value.toUpperCase()
var qth = input.getElementById('location').value.toUpperCase()

var tshamLoginButton = button.getElementById('ts3hamlogin')
tshamLoginButton.onclick = function () {
	if (qrz == null || qra == null || qth == null) {
		return new error('Sila isi semua ruangan')
	} else {
		ts3hamlogin()
	}
}
var mumbleLoginButton = button.getElementById('mumblelogin')
mumbleLoginButton.onclick = function () {
	if (qrz == null || qra == null || qth == null) {
		return new error('Sila isi semua ruangan')
	} else {
		mumblelogin()
	}
}
/* var teamtalkLoginButton = button.getElementById('teamtalklogin')
teamtalkLoginButton.onclick = function () {
	if (qrz == null || qra == null || qth == null) {
		return new error('Sila isi semua ruangan')
	} else {
		teamtalklogin()
	}
} */
var tscbLoginButton = button.getElementById('ts3cblogin')
tscbLoginButton.onclick = function () {
	if (qrz == null || qra == null || qth == null) {
		return new error('Sila isi semua ruangan')
	} else {
		ts3cblogin()
	}
}
var tskopdarLoginButton = button.getElementById('ts3kopdarlogin')
tskopdarLoginButton.onclick = function () {
	if (qrz == null || qra == null || qth == null) {
		return new error('Sila isi semua ruangan')
	} else {
		ts3kopdarlogin()
	}
}

function ts3hamlogin() {
	location.href = 'ts3server://roipmars.org.my?nickname=' + qrz + '%20' + qra + '%20' + qth + '&cid=4&addbookmark=RoIPMARS%20HAM'
}
function ts3cblogin() {
	location.href = 'ts3server://roipmars.org.my?nickname=' + qrz + '%20' + qra + '%20' + qth + '&cid=15&addbookmark=RoIPMARS%20CB'
}
function ts3kopdarlogin() {
	location.href = 'ts3server://kopdarmobile.id?nickname=' + qrz + '%20' + qra + '%20' + qth + '&cid=15&addbookmark=KOPDARMOBILE'
}
function mumblelogin() {
	location.href = 'mumble://' + qrz + '%20' + qra + '%20' + qth + '@roipmars.org.my/root?title=RoIPMARS.org.MY&url=roipmars.org.my'
}
/* function teamtalklogin() {
	location.href = 'tt://roipmars.org.my?encrypted=0&username=guest&password=guest&channel=%2FLobby%2F&nickname=' + qrz + '%20' + qra + '%20' + qth
} */
