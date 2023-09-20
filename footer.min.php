<!DOCTYPE html>
<html data-bs-theme='auto'>

  <head>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1/font/bootstrap-icons.min.css' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://use.typekit.net/kew7gwq.css'>
    <script src='https://kit.fontawesome.com/221737b641.js' crossorigin='anonymous'></script>
  </head>

  <body>
    <footer class='footer page-footer font-small bg-body-tertiary text-center'>
      <div class='container'>
        <div class='row p-3 d-flex align-items-center'>
          <div class='col-md-4 py-2'>
            <a class='text-reset text-decoration-none' href='https://fb.me/roipmarsnetwork' aria-label='Facebook RoIPMARS'><i class='bi-facebook h1 mx-1' style='color: #0165E1'></i></a>
            <a class='text-reset text-decoration-none' href='https://bit.ly/448EkGn' aria-label='YouTube RoIPMARS'><i class='bi-youtube h1 mx-1' style='color: #FF0000'></i></a>
            <a class='text-reset text-decoration-none' href='#' onClick='TSLoginWindow=window.open("applogin", "Login RoIPMARS Comm Apps", "width=720,height=640"); return false;' aria-label='Log Masuk RoIPMARS'><i class='bi-headset h1 mx-1' style='color: #336699'></i></a>
            <a class='text-reset text-decoration-none' href='#' onClick='AudioFeed=window.open("livefeed", "RoIPMARS Network Live Audio Feed", "width=720,height=480,scrollbars=no"); return false;' aria-label='RoIPMARS Network Live Audio Feed'><i class='bi-broadcast h1 mx-1' style='color: #336699'></i></a>
            <a class='text-reset text-decoration-none' href='https://discord.gg/ExEEGhgaWx' aria-label='Discord RoIPMARS'><i class='bi-discord h1 mx-1' style='color: #5865F2'></i></a>
            <a class='text-reset text-decoration-none' href='https://zello.me/k/eqiml' aria-label='Zello RoIPMARS'><img class='bi h1 mx-1 pb-2' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/brands/zello/orange.png' width='32' style='color: #e95d2f' alt='zello'></a>
            <a class='text-reset text-decoration-none' href='https://t.me/roipmarsnetwork' aria-label='Telegram RoIPMARS'><i class='bi-telegram h1 mx-1' style='color: #27A7E7'></i></a>
            <a class='text-reset text-decoration-none' href='https://whatsapp.com/channel/0029Va6r6C70wak02IxJtT0r' aria-label='WhatsApp RoIPMARS'><i class='bi-whatsapp h1 mx-1' style='color: #25D366'></i></a>
          </div>
          <div class='col-md-8'>
            <p class='text-md-end font-monospace user-select-none text-break m-0'><a href='/policies' class='text-reset text-decoration-none pe-auto'>Polisi Perkhidmatan</a><span class='text-body-tertiary'> &#124; <i class='fa-solid fa-code'></i> <i class='fa-brands fa-github'></i> <i class='fa-brands fa-php'></i> <i class='fa-brands fa-html5'></i> <i class='fa-brands fa-css3'></i> <i class='fa-brands fa-square-js'></i> <i class='fa-brands fa-bootstrap'></i> <i class='fa-brands fa-font-awesome'></i><br>
            <?php
            function scan_dir($dir) {
              $files = array();
              foreach (scandir($dir) as $file) {
                $filemtime = filemtime($dir . '/' . $file);
                $files[$file] = $filemtime;
              }
              arsort($files);
              $files = array_keys($files);
              return ($files) ? $files : false;
            }
            $src_folder = __DIR__;
            $files = scan_dir($src_folder);
            $fileindir = filemtime($src_folder.'/'.$files[0]);
            function getVisitorIp() {
              if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                $ipAdress = $_SERVER['HTTP_X_FORWARDED_FOR'] . ' dari ' . $_SERVER['HTTP_CF_IPCITY'] . ', ' . $_SERVER['HTTP_CF_REGION'] . ', ' . $_SERVER['HTTP_CF_IPCOUNTRY'];
              } else {
                $ipAdress = file_get_contents('https://api64.ipify.org');
              }
              return $ipAdress;
            }
            echo 'Kemaskini: ' . date('D, j/n/Y, H:i T', $fileindir) . '<br>IP Anda: ' . getVisitorIp();
            ?></span></p>
          </div>
          <div class='col-md-12 my-0'>
            <p class='text-center font-monospace text-body-tertiary lh-1'><i class='bi-c-circle'></i>2020&ndash;<script>document.write(new Date().getFullYear())</script> Hak Cipta Terpelihara. RoIPMARS&trade; &#124; PERSATUAN PEMINAT RADIO KOMUNIKASI &#40;RoIP&#41; PPM-006-10-01062020</p>
          </div>
        </div>
      </div>
    </footer>
    <script src='https://cdn.jsdelivr.net/npm/bootstrap@5/dist/js/bootstrap.bundle.min.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js' crossorigin='anonymous'></script>
    <script src='/assets/js/sources.js'></script>
    <script src='https://roipmarsnetwork.statuspage.io/embed/script.js' crossorigin='anonymous'></script>    
    <script src='/assets/js/theme.js'></script>
  </body>

</html>