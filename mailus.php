<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>RoIPMARS℠ Network | Contact Us</title>
  </head>

  <body>
    <?php require_once 'header.php' ?>
    <main class='container'>
      <div class='row text-center'>
        <div class='col mt-2 mb-2 jumbotron-fluid'>
          <h1 class='h1-responsive'>Contact Form</h1>
        </div>
      </div>
      <div class='row'>
        <div class='col-md'>
          <form id='contactForm'>
            <div class='form-row'>
              <div class='col-auto'>
                <div class='form-floating'>
                  <input type='text' class='form-control' name='from_name' id='from_name' placeholder='Name' aria-required='true' required data-validation-required-message='Nyatakan nama anda'>
                  <label for='from_name'>Nama</label>
                </div>
              </div>
              <div class='d-flex gap-0'>
                <div class='col-6'>
                  <div class='form-floating'>
                    <input type='email' class='form-control' name='from_email' id='from_email' placeholder='yourname@yourdomain.tld' aria-required='true' required data-validation-required-message='Sila isi alamat emel anda'>
                    <label for='from_email'>Emel</label>
                  </div>
                </div>
                <div class='col-6'>
                  <div class='form-floating'>
                    <input type='text' class='form-control' name='from_phone' id='from_phone' placeholder='+60123456789' aria-required='true' required data-validation-required-message='Sila isi no telefon yang boleh dihubungi'>
                    <label for='from_phone'>Phone</label>
                  </div>
                </div>
              </div>
              <div class='input-group'>
                <span class='input-group-text'>Pesanan</span>
                <textarea class='form-control' aria-label='Pesanan' name='message' id='message' placeholder='Pesanan' rows='6' aria-required='true' required data-validation-required-message='Nyatakan pesanan anda'></textarea>
              </div>
              <div class='d-flex gap-0'>
                <div class='col-3 form-floating'>
                  <input class='form-control user-select-none' name='from_timestamp' id='from_timestamp' readonly>
                  <label for='from_timestamp'>Waktu</label>
                </div>
                <div class='col-5 form-floating'>
                  <input class='form-control user-select-none' name='from_ip' id='from_ip' readonly>
                  <label for='from_ip'>IP</label>
                </div>
                <div class='col-4 form-floating'>
                  <input class='form-control user-select-none' name='from_geo' id='from_geo' readonly>
                  <label for='from_geo'>Lokasi</label>
                </div>
              </div>
            </div>
            <div class='row my-2'>
              <div class='d-flex justify-content-center'>
                <div class='cf-turnstile' data-sitekey='0x4AAAAAAABo4nJ8nQ9QZgbE'></div>
              </div>
              <div class='col-9'>
                <div class='text-start' id='success'></div>
              </div>
              <div class='col-3 text-end d-flex justify-content-end'>
                <button type='reset' class='btn btn-outline-secondary rounded-3 me-1'>Kosongkan</button>
                <button type='submit' class='btn btn-success rounded-3' id='sendMsg' data-action='submit'>Hantar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
    <?php require_once 'footer.php' ?>
    <script src='https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js' crossorigin='anonymous'></script>
    <script async defer src='https://challenges.cloudflare.com/turnstile/v0/api.js'></script>
    <script src='/assets/js/emailjs.js'></script>
    <!-- <script> function onSubmit (token) { document.getElementById('contactForm').submit(); } </script> -->
  </body>

</html>