emailjs.init('Y-k6sR3khzGXldJfJ')

const sendMsg = document.getElementById('sendMsg');
const result = document.getElementById('success')

document.getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    result.textContent = 'Sending...';
    const serviceID = 'default_service';
    const templateID = 'roipmarsweb_temp';
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        result.textContent = 'Message Sent!';
      }, (err) => {
        result.textContent = 'Message not sent due to ' + JSON.stringify(err);
      });
  });

fetch('https://api64.ipify.org?format=json')
  .then(x => x.json())
  .then(y => document.getElementById('from_ip').innerHTML = y.ip);

// fetch('https://api.ip2location.io/?key=1515B3F48E9A800A0BEC13ABE0226F0F&format=json')
//   .then(x => x.json())
//   .then(y => document.getElementById('from_geo').innerHTML = y.city_name + ', ' + y.region_name + ', ' + y.country_name);