emailjs.init('Y-k6sR3khzGXldJfJ')

const sendMsg = document.getElementById('sendMsg');
const result = document.getElementById('success')

document.getElementById('contactForm').addEventListener('submit', function (event) {
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