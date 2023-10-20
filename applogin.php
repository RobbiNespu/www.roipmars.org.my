<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>RoIPMARS℠ Network | App Login</title>
    <meta charset='utf-8'>
    <meta http-equiv='Content-Type' content='text/html'>
    <meta http-equiv='content-language' content='ms-MY'>
    <meta name='language' content='Malay'>
    <meta name='author' content='HafiziRuslan'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=yes'>
    <meta name='robots' content='index, follow'>
  </head>

  <body>
    <?php require_once 'ntsheader.php' ?>
    <main class='container-fluid'>
      <div class='row'>
        <div class='col-12'>
          <form class='my-3 align-middle text-center' id='applogin'>
            <div class='col-lg my-1'>
              <label for='callsign' class='form-label'>Callsign | Isyarat Panggilan</label>
              <input type='text' class='form-control form-control-lg text-center rounded-3 w-75 mx-auto' pattern='[A-Z0-9]{4-8}' minlength='4' maxlength='8' aria-label='callsign' id='callsign' placeholder='9W3ROI' required>
            </div>
            <div class='col-lg my-1'>
              <label for='name' class='form-label'>Name | Nama</label>
              <input type='text' class='form-control form-control-lg text-center rounded-3 w-75 mx-auto' pattern='[A-Z]{3-15}' minlength='3' maxlength='15' aria-label='name' id='name' placeholder='ANDY LAU' required>
            </div>
            <div class='col-lg my-1'>
              <label for='location' class='form-label'>QTH | Lokasi</label>
              <input type='text' class='form-control form-control-lg text-center rounded-3 w-75 mx-auto' pattern='[\w]{3-19}' minlength='3' maxlength='19' aria-label='location' id='location' placeholder='SEPANG' required>
            </div>
            <div class='vstack gap-1 mt-3 text-center'>
              <button class='btn btn-lg rounded-pill w-50 mx-auto' type='submit' id='ts3hamlogin' style='background-color: #0165E1'>Log Masuk TeamSpeak</button>
              <button class='btn btn-lg rounded-pill w-50 mx-auto' type='submit' id='mumblelogin' style='background-color: grey'>Log Masuk Mumble</button>
              <button class='btn btn-lg rounded-pill w-50 mx-auto' type='submit' id='teamtalklogin' style='background-color: #abb8c3'>Log Masuk Team Talk</button>
            </div>
          </form>
        </div>
      </div>
    </main>
    <?php require_once 'footermin.php' ?>
    <script src='/assets/js/applogin.js'></script>
    </body>

</html>