<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>RoIPMARS™ Network | App Login</title>
    <meta charset='utf-8'>
    <meta http-equiv='Content-Type' content='text/html'>
    <meta http-equiv='content-language' content='ms-MY'>
    <meta name='language' content='Malay'>
    <meta name='author' content='HafiziRuslan'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=yes'>
    <meta name='title' content='RoIPMARS Network | App Login'>
    <meta name='description' content='Persatuan Peminat Radio Komunikasi (RoIP) Log Masuk Aplikasi'>
    <meta name='keywords' content='roipmars, malaysiats3, ts3servermalaysia, teamspeak3malaysia, persatuanpeminatradiokomunikasi, roipmalaysia, cbroipmalaysia, amaturroipmalaysia'>
    <meta name='robots' content='index, follow'>
    <meta property='og:site_name' content='RoIPMARS'>
    <meta property='og:title' content='RoIPMARS Network | App Login'>
    <meta property='og:description' content='Persatuan Peminat Radio Komunikasi (RoIP) Log Masuk Aplikasi'>
    <meta property='og:url' content='https://www.roipmars.org.my/applogin'>
    <meta property='og:image' content='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/brands/roipmars/brand_sq.png'>
    <meta property='og:type' content='website'>
    <meta property='og:locale' content='ms-MY'>
    <meta name='twitter:title' content='RoIPMARS Network | App Login'>
    <meta name='twitter:description' content='Persatuan Peminat Radio Komunikasi (RoIP) Log Masuk Aplikasi'>
    <meta name='twitter:url' content='https://www.roipmars.org.my/applogin'>
    <meta name='twitter:image' content='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/brands/roipmars/brand_sq.png'>
    <meta name='twitter:creator' content='@HafiziRuslan'>
  </head>

  <body>
    <?php require_once 'ntsheader.php' ?>
    <main class='container'>
      <div class='row'>
        <div class='col-12'>
          <form class='my-3 align-middle text-center' id='applogin'>
            <div class='col-lg my-1'>
              <label for='callsign' class='form-label'>Callsign | Isyarat Panggilan</label>
              <input type='text' class='form-control form-control-lg text-center rounded-3 w-75 mx-auto' pattern='[A-Z0-9]{5-8}' minlength='5' maxlength='8' aria-label='callsign' id='callsign' placeholder='9W3HHH' required>
            </div>
            <div class='col-lg my-1'>
              <label for='name' class='form-label'>Name | Nama</label>
              <input type='text' class='form-control form-control-lg text-center rounded-3 w-75 mx-auto' pattern='[A-Z]{3-15}' minlength='3' maxlength='15' aria-label='name' id='name' placeholder='MAMAT' required>
            </div>
            <div class='col-lg my-1'>
              <label for='location' class='form-label'>QTH | Lokasi</label>
              <input type='text' class='form-control form-control-lg text-center rounded-3 w-75 mx-auto' pattern='[\w]{3-19}' minlength='3' maxlength='19' aria-label='location' id='location' placeholder='BERA' required>
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
    <?php require_once 'footer.min.php' ?>
    <script src='/assets/js/applogin.js'></script>
    </body>

</html>