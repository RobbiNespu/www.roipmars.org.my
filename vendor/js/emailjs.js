emailjs.init('Y-k6sR3khzGXldJfJ')

const sendMsg = document.getElementById('sendMsg');
const result = document.getElementById('success')

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  result.textContent = 'Menghantar pesanan...';
  const serviceID = 'default_service';
  const templateID = 'roipmarsweb_temp';
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      result.textContent = 'Pesanan dihantar!';
    }, (err) => {
      result.textContent = 'Message not sent due to ' + JSON.stringify(err);
    });
  document.getElementById('contactForm').reset();
});

window.onload = function () {
  var time = document.getElementById('from_timestamp');
  var vistime = new Date().toLocaleString();
  time.addEventListener("click", function () {
    this.setAttribute('value', vistime);
  });
  var ip = document.getElementById('from_ip');
  var visip = '';
  ip.addEventListener("click", function () {
    this.setAttribute('value', visip);
  });
  var geoip = document.getElementById('from_geoip');
  var visgeoip = '';
  geoip.addEventListener("click", function () {
    this.setAttribute('value', visgeoip);
  });
}