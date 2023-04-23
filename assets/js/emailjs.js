emailjs.init("Y-k6sR3khzGXldJfJ");

const sendMsg = document.getElementById("sendMsg");
const result = document.getElementById("success");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    result.textContent = "Menghantar pesanan...";
    const serviceID = "default_service";
    const templateID = "roipmarsweb_temp";
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        result.textContent = "Pesanan dihantar!";
      },
      (err) => {
        result.textContent = "Terdapat ralat: " + JSON.stringify(err);
      }
    );
    document.getElementById("contactForm").reset();
  });

window.onload = function () {
  var vistime = new Date();
  document.getElementById("from_timestamp").setAttribute("value", vistime);
};

$(function () {
  $.getJSON("//api64.ipify.org?format=json", function (jsonip) {
    document.getElementById("from_ip").setAttribute("value", jsonip.ip);
    $.getJSON(
      "http://ip-api.com/json?ip=" +
        jsonip.ip +
        "&fields=regionName,country&callback=?",
      function (jsongeoip) {
        document
          .getElementById("from_geoip")
          .setAttribute("value", jsongeoip.regionName);
      }
    );
  });
});
