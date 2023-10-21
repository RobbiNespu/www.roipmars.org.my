$(function () {
  $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function (json) {
    document.write('My public IP address is: ', json.ip)
    $.getJSON('https://ipapi.co/' + json.ip + '/json/', function (data) {
      document.write(data.ip, ' dari ', data, city, ', ', data, region, ', ', data.country)
    })
  })
})
