<!doctype html>
<html data-bs-theme='dark'>

  <head>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.css' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css' crossorigin='anonymous'>
    <script src='https://kit.fontawesome.com/221737b641.js' crossorigin='anonymous'></script>
    <script src='https://roipmarsnetwork.statuspage.io/embed/script.js' crossorigin='anonymous'></script>
  </head>

  <body>
    <footer class='footer page-footer font-small bg-body-tertiary text-center'>
      <div class='container'>
        <div class='row d-flex align-items-center'>
          <div class='col-md-9 mb-0 mt-3'>
            <p class='text-md-start font-monospace user-select-none'><a href='../../policies' class='text-reset text-decoration-none pe-auto'>Polisi Perkhidmatan</a><span class='text-body-tertiary'> &#124; <i class='fa-solid fa-code'></i> <i class='fa-brands fa-github'></i> <i class='fa-brands fa-php'></i> <i class='fa-brands fa-html5'></i> <i class='fa-brands fa-bootstrap'></i> <i class='fa-brands fa-css3'></i> <i class='fa-brands fa-font-awesome'></i> <i class='fa-brands fa-cloudflare'></i><br><?php date_default_timezone_get(); $fileindir = filemtime(scandir(__DIR__)[0]); function getVisitorIp() { if (!empty($_SERVER['HTTP_CLIENT_IP'])) { $ipAdress = $_SERVER['HTTP_CLIENT_IP']; } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) { $ipAdress = $_SERVER['HTTP_X_FORWARDED_FOR']; } else { $ipAdress = $_SERVER['https://api64.ipify.org']; } return $ipAdress; } echo 'Kemaskini: ' . date('d/m/Y, h:i A', $fileindir) . ' &#124; IP Anda: ' . getVisitorIp(); ?><br><i class='bi-c-circle'></i> 2014&ndash;<script>document.write(new Date().getFullYear())</script> Hak Cipta Terpelihara. &#124; PERSATUAN PEMINAT RADIO KOMUNIKASI &#40;ROIP&#91;RADIO OVER INTERNET PROTOCOL&#93;&#41; PPM-006-10-01062020</span></p>
          </div>
          <div class='col-md-3 ml-lg-0 mt-0 mb-3'>
            <div class='text-md-end'>
              <a class='text-reset text-decoration-none' href='https://fb.com/roipmars.org.my'><i class='bi-facebook h1 mx-1' style='color: #4267B2'></i></a>
              <a class='text-reset text-decoration-none' href='https://t.me/marsts3servercyberjaya'><i class='bi-telegram h1 mx-1' style='color: #0088cc'></i></a>
              <a class='text-reset text-decoration-none' href='https://wa.me/c/60333960874'><i class='bi-whatsapp h1 mx-1' style='color: #25D366'></i></a>
              <a class='text-reset text-decoration-none' href='#' onClick='TSLoginWindow=window.open("https://www.roipmars.org.my/applogin", "Login RoIPMARS Comm Apps", "width=800,height=600"); return false;'><i class='bi-headset h1 mx-1'></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.js' crossorigin='anonymous'></script>
    <script src='https://roipmarsnetwork.statuspage.io/embed/script.js' crossorigin='anonymous'></script>
  </body>

</html>