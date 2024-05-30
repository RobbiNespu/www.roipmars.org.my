<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>App Login</title>
  </head>

  <body>
    <?php require_once 'ntsheader.php' ?>
    <main class='container-fluid'>
      <div class='row'>
        <div class='col-12'>
          <form class='my-3 align-middle text-center' id='applogin'>
            <div class='col-lg my-1'>
              <label for='callsign' class='form-label'>Callsign | Isyarat Panggilan</label>
              <input type='text' class='form-control form-control-lg text-center rounded-3 w-75 mx-auto' pattern='[A-Z0-9]{4-10}' minlength='4' maxlength='8' aria-label='callsign' id='callsign' placeholder='9W3ROI' required>
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
              <button class='btn btn-lg rounded-pill w-50 mx-auto' type='submit' id='ts3hamlogin' style='background-color: #0165E1'>Log Masuk TeamSpeak HAM RoIPMARS</button>
              <button class='btn btn-lg rounded-pill w-50 mx-auto' type='submit' id='ts3cblogin' style='background-color: #0165E1'>Log Masuk TeamSpeak CB RoIPMARS</button>
              <button class='btn btn-lg rounded-pill w-50 mx-auto' type='submit' id='ts3kopdarlogin' style='background-color: #0165E1'>Log Masuk TeamSpeak KOPDARMOBILE</button>
              <!-- <button class='btn btn-lg rounded-pill w-50 mx-auto' type='submit' id='mumblelogin' style='background-color: grey'>Log Masuk Mumble RoIPMARS</button> -->
              <!-- <button class='btn btn-lg rounded-pill w-50 mx-auto' type='submit' id='teamtalklogin' style='background-color: #abb8c3'>Log Masuk Team Talk RoIPMARS</button> -->
            </div>
          </form>
        </div>
      </div>
    </main>
    <?php require_once 'footermin.php' ?>
    <script src='/assets/js/applogin.js'></script>
  </body>

</html>