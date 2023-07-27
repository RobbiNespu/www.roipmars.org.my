<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>RoIPMARS Network | AppLogin</title>
    <meta charset='utf-8'>
    <meta http-equiv='Content-Type' content='text/html'>
    <meta http-equiv='content-language' content='ms-MY'>
    <meta name='language' content='Malay'>
    <meta name='author' content='HafiziRuslan'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=yes'>
    <meta name='title' content='RoIPMARS Network | AppLogin'>
    <meta name='description' content='Persatuan Peminat Radio Komunikasi (RoIP) Log Masuk Aplikasi'>
    <meta name='keywords' content='roipmars, malaysiats3, ts3servermalaysia, teamspeak3malaysia, persatuanpeminatradiokomunikasi, roipmalaysia, cbroipmalaysia, amaturroipmalaysia'>
    <meta name='robots' content='index, follow'>
    <meta property='og:site_name' content='RoIPMARS'>
    <meta property='og:title' content='RoIPMARS Network | AppLogin'>
    <meta property='og:description' content='Persatuan Peminat Radio Komunikasi (RoIP) Log Masuk Aplikasi'>
    <meta property='og:url' content='https://www.roipmars.org.my/applogin'>
    <meta property='og:image' content='/media/image/brands/roipmars/brand_sq.png'>
    <meta property='og:type' content='website'>
    <meta property='og:locale' content='ms-MY'>
    <meta name='twitter:title' content='RoIPMARS Network | AppLogin'>
    <meta name='twitter:description' content='Persatuan Peminat Radio Komunikasi (RoIP) Log Masuk Aplikasi'>
    <meta name='twitter:url' content='https://www.roipmars.org.my/applogin'>
    <meta name='twitter:image' content='/media/image/brands/roipmars/brand_sq.png'>
    <meta name='twitter:creator' content='@HafiziRuslan'>
    <meta name='msapplication-TileColor' content='#56C3E7'>
    <meta name='msapplication-TileImage' content='/media/image/ms-icon-144x144.png'>
    <meta name='theme-color' media='(prefers-color-scheme: light)' content='#336699'>
    <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#56C3E7'>
    <meta name='color-scheme' content='auto'>
    <link rel='shortcut icon' type='image/x-icon' href='/media/image/brands/favicon/favicon.ico'>
    <link rel='icon' type='image/x-icon' href='/media/image/brands/favicon/favicon.ico'>
    <link rel='icon' type='image/png' sizes='16x16' href='/media/image/brands/favicon/favicon-16x16.png'>
    <link rel='icon' type='image/png' sizes='32x32' href='/media/image/brands/favicon/favicon-32x32.png'>
    <link rel='icon' type='image/png' sizes='96x96' href='/media/image/brands/favicon/favicon-96x96.png'>
    <link rel='icon' type='image/png' sizes='192x192' href='/media/image/brands/favicon/android-icon-192x192.png'>
    <link rel='apple-touch-icon' sizes='57x57' href='/media/image/brands/favicon/apple-icon-57x57.png'>
    <link rel='apple-touch-icon' sizes='60x60' href='/media/image/brands/favicon/apple-icon-60x60.png'>
    <link rel='apple-touch-icon' sizes='72x72' href='/media/image/brands/favicon/apple-icon-72x72.png'>
    <link rel='apple-touch-icon' sizes='76x76' href='/media/image/brands/favicon/apple-icon-76x76.png'>
    <link rel='apple-touch-icon' sizes='114x114' href='/media/image/brands/favicon/apple-icon-114x114.png'>
    <link rel='apple-touch-icon' sizes='120x120' href='/media/image/brands/favicon/apple-icon-120x120.png'>
    <link rel='apple-touch-icon' sizes='144x144' href='/media/image/brands/favicon/apple-icon-144x144.png'>
    <link rel='apple-touch-icon' sizes='152x152' href='/media/image/brands/favicon/apple-icon-152x152.png'>
    <link rel='apple-touch-icon' sizes='180x180' href='/media/image/brands/favicon/apple-icon-180x180.png'>
    <link rel='manifest' href='/assets/manifest.json'>
		<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' integrity='sha256-fx038NkLY4U1TCrBDiu5FWPEa9eiZu01EiLryshJbCo=' crossorigin='anonymous' referrerpolicy='no-referrer'>
		<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.min.css' integrity='sha256-BicZsQAhkGHIoR//IB2amPN5SrRb3fHB8tFsnqRAwnk=' crossorigin='anonymous' referrerpolicy='no-referrer'>
    <link rel='stylesheet' href='https://use.typekit.net/kew7gwq.css'>
    <script src='https://kit.fontawesome.com/221737b641.js' crossorigin='anonymous' referrerpolicy='no-referrer'></script>
  </head>

  <body>
    <?php require_once 'ntsheader.php' ?>
    <main class='container'>
      <div class='row'>
        <div class='col-12'>
          <form class='my-3 align-middle text-center' id='applogin'>
            <div class='col-lg my-1'>
              <label for='callsign' class='form-label'>Callsign | Isyarat Panggilan</label>
              <input type='text' class='form-control form-control-lg text-center rounded-3 w-75 mx-auto' pattern='[A-Z0-9]{5-8}' minlength='6' maxlength='8' aria-label='callsign' id='callsign' placeholder='9M2XXX' required>
            </div>
            <div class='col-lg my-1'>
              <label for='name' class='form-label'>Name | Nama</label>
              <input type='text' class='form-control form-control-lg text-center rounded-3 w-75 mx-auto' pattern='[A-Z]{3-15}' minlength='3' maxlength='15' aria-label='name' id='name' placeholder='ALBAB' required>
            </div>
            <div class='col-lg my-1'>
              <label for='location' class='form-label'>QTH | Lokasi</label>
              <input type='text' class='form-control form-control-lg text-center rounded-3 w-75 mx-auto' pattern='[\w]{3-19}' minlength='3' maxlength='19' aria-label='location' id='location' placeholder='KUALA LUMPUR' required>
            </div>
            <div class='vstack gap-1 mt-3 text-center'>
              <button class='btn btn-outline-primary btn-lg rounded-pill w-75 mx-auto' type='submit' onClick='ts3hamlogin()'>Log Masuk HAM <img class='img-fluid d-inline-block align-middle' src='https://cdn.cdnlogo.com/logos/t/29/teamspeak.svg' width='80'> <img class='img-fluid d-inline-block align-middle' src='/media/image/brands/roipmars/brand.png' width='150'></button>
              <button class='btn btn-outline-secondary btn-lg rounded-pill w-75 mx-auto' type='submit' onClick='mumblelogin()'>Log Masuk <img class='img-fluid d-inline-block align-middle' src='https://www.mumble.info/css/mumble.svg' width='20'> Mumble <img class='img-fluid d-inline-block align-middle' src='/media/image/brands/roipmars/brand.png' width='150'></button>
              <button class='btn btn-outline-primary btn-lg rounded-pill w-75 mx-auto' type='submit' onClick='ts3cblogin()'>Log Masuk CB <img class='img-fluid d-inline-block align-middle' src='https://cdn.cdnlogo.com/logos/t/29/teamspeak.svg' width='80'> <img class='img-fluid d-inline-block align-middle' src='/media/image/brands/roipmars/brand.png' width='150'></button>
            </div>
          </form>
        </div>
      </div>
    </main>
    <?php require_once 'footer.min.php' ?>
    <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js' integrity='sha256-qlPVgvl+tZTCpcxYJFdHB/m6mDe84wRr+l81VoYPTgQ=' crossorigin='anonymous' referrerpolicy='no-referrer'></script>
    <script src='https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js' integrity='sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=' crossorigin='anonymous' referrerpolicy='no-referrer'></script>
    <script src='/assets/js/applogin.js'></script>
    </body>

</html>