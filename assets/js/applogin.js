
function ts3hamlogin() {
  var cs = document.getElementById('callsign').value.toUpperCase;
  var name = document.getElementById('name').value.toUpperCase;
  var location = document.getElementById('location').value.toUpperCase;
  if ((cs == '') || (name == '') || (location == '')) {
    return new error('Sila isi semua ruangan');
  } else {
    window.location.href = 'ts3server://roipmars.org.my?nickname=' + cs + '%20' + name + '%20' + location + '&cid=4&addbookmark=RoIPMARS%20HAM';
  }
}

function ts3cblogin() {
  var cs = document.getElementById('callsign').value.toUpperCase;
  var name = document.getElementById('name').value.toUpperCase;
  var location = document.getElementById('location').value.toUpperCase;
  if ((cs == '') || (name == '') || (location == '')) {
    return new error('Sila isi semua ruangan');
  } else {
    window.location.href = 'ts3server://roipmars.org.my?nickname=' + cs + '%20' + name + '%20' + location + '&cid=15&addbookmark=RoIPMARS%20CB';
  }
}

function mumblelogin() {
  var cs = document.getElementById('callsign').value.toUpperCase;
  var name = document.getElementById('name').value.toUpperCase;
  var location = document.getElementById('location').value.toUpperCase;
  if ((cs == '') || (name == '') || (location == '')) {
    return new error('Sila isi semua ruangan');
  } else {
    window.location.href = 'mumble://' + cs + '%20' + name + '%20' + location + '@roipmars.org.my/root?title=RoIPMARS.org.MY&url=roipmars.org.my';
  }
}