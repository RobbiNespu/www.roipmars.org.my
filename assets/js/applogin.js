function ts3marslogin() {
  var cs = document.getElementById('callsign').value.toUpperCase;
  var name = document.getElementById('name').value.toUpperCase;
  var location = document.getElementById('location').value.toUpperCase;
  if ((cs == '') || (name == '') || (location == '')) {
    return blank;
  } else {
    window.location.href = 'ts3server://roipmars.org.my?nickname=' + cs + '%20' + name + '%20' + location + '&cid=23&addbookmark=RoIPMARS.org.MY';
  }
}

function ts3dalogin() {
  var cs = document.getElementById('callsign').value.toUpperCase;
  var name = document.getElementById('name').value.toUpperCase;
  var location = document.getElementById('location').value.toUpperCase;
  if ((cs == '') || (name == '') || (location == '')) {
    return blank;
  } else {
    window.location.href = 'ts3server://roipdarulaman.com?nickname=' + cs + '%20' + name + '%20' + location + '&cid=24&addbookmark=RoIPDarulAman.com';
  }
}

function mumblelogin() {
  var cs = document.getElementById('callsign').value.toUpperCase;
  var name = document.getElementById('name').value.toUpperCase;
  var location = document.getElementById('location').value.toUpperCase;
  if ((cs == '') || (name == '') || (location == '')) {
    return blank;
  } else {
    window.location.href = 'mumble://' + cs + '%20' + name + '%20' + location + '@roipmars.org.my/root?title=RoIPMARS.org.MY&url=roipmars.org.my';
  }
}