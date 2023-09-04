<!DOCTYPE html>
<html data-bs-theme='auto'>

  <head>
		<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css'  integrity='sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9' crossorigin='anonymous'>
		<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.min.css' integrity='sha256-BicZsQAhkGHIoR//IB2amPN5SrRb3fHB8tFsnqRAwnk=' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://use.typekit.net/kew7gwq.css'>
    <script src='https://kit.fontawesome.com/221737b641.js' crossorigin='anonymous'></script>
    <script async src='https://www.googletagmanager.com/gtag/js?id=G-DJYTZHZXFN'></script>
    <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1205248207690495' crossorigin='anonymous'></script>
    <script async src='https://fundingchoicesmessages.google.com/i/pub-1205248207690495?ers=1' nonce='nLBiTr-Hd6zWbl5ZT9wqvA'></script>
    <script src='/assets/js/gtm.js'></script>
    <script src='/assets/js/gtag.js'></script>
    <script src='/assets/js/gfc.js' nonce='nLBiTr-Hd6zWbl5ZT9wqvA'></script>
    <script src='/assets/js/clarity.js'></script>
  </head>

  <body>	
    <noscript><iframe src='https://www.googletagmanager.com/ns.html?id=GTM-PHLPNS8' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript>
    <div id='fb-root'></div>
    <div id='fb-customer-chat' class='fb-customerchat'></div>
    <script src='/assets/js/fbchat.js'></script>
    <footer class='footer page-footer font-small bg-body-tertiary text-center'>
      <div class='container'>
        <div class='row p-3 d-flex align-items-center'>
          <div class='col-md-3 py-2'>
            <div class='d-flex justify-content-evenly'>
              <a class='text-reset text-decoration-none' href='https://fb.me/roipmarsnetwork' aria-label='Facebook RoIPMARS'><i class='bi-facebook h1 mx-1' style='color: #0165E1'></i></a>
              <a class='text-reset text-decoration-none' href='https://bit.ly/448EkGn' aria-label='YouTube RoIPMARS'><i class='bi-youtube h1 mx-1' style='color: #FF0000'></i></a>
              <a class='text-reset text-decoration-none' href='#' onClick='TSLoginWindow=window.open("applogin", "Login RoIPMARS Comm Apps", "width=800,height=600"); return false;' aria-label='Log Masuk RoIPMARS'><i class='bi-headset h1 mx-1' style='color: #336699'></i></a>
              <a class='text-reset text-decoration-none' href='https://discord.gg/ExEEGhgaWx' aria-label='Discord RoIPMARS'><i class='bi-discord h1 mx-1' style='color: #5865F2'></i></a>
              <a class='text-reset text-decoration-none' href='https://zello.me/k/eqiml' aria-label='Zello RoIPMARS'><img class='bi h1 mx-1 pt-1' loading='lazy' src='/media/image/brands/zello/orange.png' width='30' style='color: #e95d2f' alt='zello'></a>
              <a class='text-reset text-decoration-none' href='https://t.me/roipmarsnetwork' aria-label='Telegram RoIPMARS'><i class='bi-telegram h1 mx-1' style='color: #27A7E7'></i></a>
              <a class='text-reset text-decoration-none' href='https://wa.me/60333960874' aria-label='WhatsApp RoIPMARS'><i class='bi-whatsapp h1 mx-1' style='color: #25D366'></i></a>
            </div>
          </div>
          <div class='col-md-9'>
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
                $ipAdress = $_SERVER['HTTP_X_FORWARDED_FOR'] . ' dari ' . $_SERVER['HTTP_CF_IPCITY'] . ', ' . $_SERVER['HTTP_CF_IPCOUNTRY'];
              } else {
                $ipAdress = file_get_contents('https://api64.ipify.org');
              }
              return $ipAdress;
            }
            echo 'Kemaskini: ' . date('D, j/n/Y, H:i T', $fileindir) . ' &#124; IP Anda: ' . getVisitorIp();
            ?>
            <br><i class='bi-c-circle'></i> 2020&ndash;<script>document.write(new Date().getFullYear())</script> Hak Cipta Terpelihara. RoIPMARS&trade;<br>PERSATUAN PEMINAT RADIO KOMUNIKASI &#40;RoIP&#41; PPM-006-10-01062020</span></p>
          </div>
        </div>
      </div>
    </footer>
    <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js' integrity='sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js' integrity='sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=' crossorigin='anonymous'></script>
    <script src='https://roipmarsnetwork.statuspage.io/embed/script.js' crossorigin='anonymous'></script>    
    <script src='/assets/js/theme.js'></script>
  </body>

</html>