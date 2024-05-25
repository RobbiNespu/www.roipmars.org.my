<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>Citizen Band CallSign</title>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/combine/npm/datatables.net-bs5@latest/css/dataTables.bootstrap5.min.css,npm/datatables.net-buttons-bs5@latest/css/buttons.bootstrap5.min.css,npm/datatables.net-responsive-bs5@latest/css/responsive.bootstrap5.min.css,npm/datatables.net-searchpanes-bs5@latest/css/searchPanes.bootstrap5.min.css,npm/datatables.net-select-bs5@latest/css/select.bootstrap5.min.css' crossorigin='anonymous'>
  </head>

  <body>
    <?php require_once 'header.php' ?>
    <div class='container-fluid'>
      <div class='row text-center'>
        <div class='col mt-2 mb-1 jumbotron-fluid'>
          <h1 class='h1-responsive'>Citizen Band RoIPMARS Group</h1>
          <p class='font-smaller'>Pengkalan Data Isyarat Panggilan Jalur Rakyat RoIPMARS Group</p>
        </div>
      </div>
    </div>
    <div class='container'>
      <div class='row'>
        <div class='col-lg-5 p-2 text-center align-self-center' id='regind'>
          <h4>Permohonan CS Individu CB RoIPMARS Group</h4>
          <a type='button' class='btn btn-block btn-outline-primary rounded-3 fw-bold' href='https://forms.gle/hxFgHW3S5S3hqGg49' target='_blank'>Borang permohonan Isyarat Panggilan Jalur Rakyat Individu<br>Kumpulan Rangkaian RoIPMARS</a>
          <p class='fw-light'>Sumbangan bernilai RM 10.00 &lpar;minimum&rpar; digalakkan untuk setiap permohonan isyarat panggilan individu.</p>
        </div>
        <!--
        <hr class='h-100'>
        <div class='col-5 p-2 text-end' id='regate'>
          <h4>Permohonan CS Gateway CB MARS Group</h4>
          <p class='fw-light'>Yuran permohonan berupa sumbangan RM 10.00 &lpar;minimum&rpar; diperlukan untuk permohonan isyarat panggilan Radio Gateway.</p>
          <a type='button' class='btn btn-secondary disabled' aria-disabled='true' href='https://forms.gle/3oX7RdKMF79oSiBo7' target='_blank'>Borang permohonan Isyarat Panggilan Jalur Rakyat Radio Gateway<br>Kumpulan Rangkaian RoIPMARS</a>
        </div>
      -->
        <div class='col-lg-7 mt-1'>
          <table class='table table-bordered align-middle text-center'>
            <thead>
              <th colspan='2'>Kumpulan Rangkaian</th>
              <th>Pengurus</th>
            </thead>
            <tbody>
              <tr>
                <td><span class='badge bg-primary-subtle rounded-3'>113MSxxx</span> <span class='badge bg-primary-subtle rounded-3'>58MSxxx</span><br><span class='badge bg-primary-subtle rounded-3'>91MSxxx</span> <span class='badge bg-primary-subtle rounded-3'>225MSxxx</span> <span class='badge bg-primary-subtle rounded-3'>153MSxxx</span></td>
                <td>RoIPMARS</td>
                <td><a type='button' class='btn btn-success rounded-5' href='https://wa.me/60134009222' target='_blank'><i class='bi-whatsapp'></i> 113MSOGK</a></td>
              </tr>
              <tr>
                <td><span class='badge bg-danger-subtle rounded-3'>91KMxxx</span></td>
                <td>KOPDARMOBILE</td>
                <td><a type='button' class='btn btn-success rounded-5' href='https://wa.me/6281323111121' target='_blank'><i class='bi-whatsapp'></i> 91KMEGG</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class='col-12 text-center lh-1'>
          <p class='mb-0'><span class='cscount badge rounded-3 text-bg-success'></span><?php
          $dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
          $file_last_modified = filemtime(__DIR__ . '/assets/json/cbmars.json');
          echo ' setakat ' . datefmt_format($dtfmt, $file_last_modified);
          ?></p>
          <p class='fw-bold'>Penafian: Ahli CB RoIPMARS tidak termaktub dengan seluruh perlembagaan Persatuan. Ahli CB dan Ahli Persatuan adalah dua identiti keahlian yang berbeza.<br>Nota: Untuk semakan lanjut atau penukaran maklumat, sila emel maklumat lengkap anda ke <a href='mailto:member@roipmars.org.my?subject=Inkuiri%20Callsign%20CB'>member@roipmars.org.my</a></p>
        </div>
        <div class='col-12 mb-3 text-center'>
          <table class='table table-striped align-middle text-uppercase text-nowrap user-select-none caption-top' id='cbcslist'>
            <caption class='text-lowercase text-center text-wrap py-0'>Klik pada Tanda Panggilan anda untuk mendapatkan Sijil Pendaftaran</caption>
          </table>
          <div class='toast-container position-fixed top-50 start-50 translate-middle p-3 z-3'>
            <div id='prog-info' class='toast text-bg-info' role='status' aria-live='polite' aria-atomic='true'></div>
            <div id='prog-success' class='toast text-bg-success' role='status' aria-live='polite' aria-atomic='true'></div>
            <div id='prog-danger' class='toast text-bg-danger' role='alert' aria-live='assertive' aria-atomic='true'></div>
          </div>
        </div>
      </div>
    </div>
    <?php require_once 'footer.php' ?>
    <script src='https://cdn.jsdelivr.net/combine/npm/pdfmake@latest,npm/pdfmake@latest/build/vfs_fonts.min.js,npm/datatables.net@latest,npm/datatables.net-bs5@latest,npm/datatables.net-buttons@latest,npm/datatables.net-buttons-bs5@latest,npm/datatables.net-buttons@latest/js/buttons.html5.min.js,npm/datatables.net-responsive@latest,npm/datatables.net-responsive-bs5@latest,npm/datatables.net-searchpanes@latest,npm/datatables.net-searchpanes-bs5@latest,npm/datatables.net-select@latest,npm/datatables.net-select-bs5@latest' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/jspdf@latest/dist/jspdf.umd.min.js' crossorigin='anonymous'></script>
    <script src='/assets/js/cbcs.js'></script>
  </body>

</html>