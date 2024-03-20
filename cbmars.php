<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>RoIPMARS Network | Citizen Band CallSign</title>
		<link rel='stylesheet' href='https://cdn.datatables.net/v/bs5/dt-2.0.2/b-3.0.1/b-html5-3.0.1/fh-4.0.1/kt-2.12.0/r-3.0.0/rg-1.5.0/rr-1.5.0/sc-2.4.1/sb-1.7.0/sp-2.3.0/sl-2.0.0/datatables.min.css' crossorigin='anonymous'>
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
        <div class='col-lg-4 p-2 text-center align-self-center' id='regind'>
          <h3>Permohonan CS Individu CB RoIPMARS Group</h3>
          <a type='button' class='btn btn-lg btn-block btn-outline-primary rounded-3 fs-4 fw-bold' href='https://forms.gle/hxFgHW3S5S3hqGg49' target='_blank' rel='noopener'>Borang permohonan Isyarat Panggilan Jalur Rakyat Individu Jaringan RoIPMARS&#8480;</a>
          <p class='fs-6 fw-light'>Sumbangan bernilai RM 10.00 &lpar;minimum&rpar; digalakkan untuk setiap permohonan isyarat panggilan individu.</p>
        </div>
        <!--
        <hr class='h-100'>
        <div class='col-6 p-2 text-end' id='regate'>
          <h3>Permohonan CS Gateway CB MARS Group</h3>
          <p class='fs-6 fw-light'>Yuran permohonan berupa sumbangan RM 10.00 &lpar;minimum&rpar; diperlukan untuk permohonan isyarat panggilan Radio Gateway.</p>
          <a type='button' class='btn btn-sm btn-secondary disabled' aria-disabled='true' href='https://forms.gle/3oX7RdKMF79oSiBo7' target='_blank' rel='noopener'>Borang permohonan Isyarat Panggilan Jalur Rakyat Radio Gateway Jaringan RoIPMARS&#8480;</a>
        </div>
      -->
        <div class='col-lg-8 mt-1'>
          <table class='table table-bordered fs-5 align-middle text-center'>
            <thead>
              <th colspan='3'>Rangkaian</th>
              <th>Pengurus</th>
            </thead>
            <tbody>
              <tr>
                <td>RoIPMARS</td>
                <td><span class='badge bg-primary-subtle rounded-3'>113MSxxx</span> <span class='badge bg-primary-subtle rounded-3'>58MSxxx</span><br><span class='badge bg-primary-subtle rounded-3'>91MSxxx</span> <span class='badge bg-primary-subtle rounded-3'>225MSxxx</span> <span class='badge bg-primary-subtle rounded-3'>153MSxxx</span></td>
                <td>Rangkaian Kumpulan RoIPMARS</td>
                <td><a type='button' class='btn btn-lg btn-outline-success rounded-5 fs-5' href='https://wa.me/60134009222' target='_blank' rel='noopener'><i class='bi-whatsapp'></i> 113MSOGK</a></td>
              </tr>
              <tr>
                <td>Indonesia</td>
                <td><span class='badge bg-danger-subtle rounded-3'>91KMxxx</span></td>
                <td>KOPDARMOBILE</td>
                <td><a type='button' class='btn btn-lg btn-outline-success rounded-5 fs-5' href='https://wa.me/6281323111121' target='_blank' rel='noopener'><i class='bi-whatsapp'></i> 91KMEGG</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class='col-12 text-center lh-1'>
          <p><span class='cscount badge rounded-3 text-bg-success'></span><?php
            $dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
            $file_last_modified = filemtime(__DIR__ . '/assets/json/cbmars.json');
            echo ' setakat ' . datefmt_format($dtfmt, $file_last_modified);
          ?></p>
          <p class='fw-bold'>Penafian: Sekiranya anda telah berdaftar sebagai Ahli CB, anda hanyalah sebagai Ahli CB kami bukanlah Ahli Persatuan. Ahli CB dan Ahli Persatuan adalah dua identiti yang berbeza.</p>
          <p>Nota: Untuk semakan lebih lanjut atau penukaran maklumat, sila emel maklumat lengkap anda ke <a href='mailto:member@roipmars.org.my?subject=Inkuiri%20Callsign%20CB'>member@roipmars.org.my</a></p>
          <span class='d-flex justify-content-center fs-6 font-monospace lh-1 mb-3 text-center' id='cbCert-progress'></span>
        </div>
        <div class='col-12 my-3'>
          <table class='table align-middle text-uppercase text-wrap user-select-none' id='cbcslist'>
            <thead><tr><th class='dt-head-center'>ID</th><th class='dt-head-center'>CALLSIGN</th><th class='dt-head-center'>NAMA</th><th class='dt-head-center'>LOKALAN</th><th class='dt-head-center'>DAFTAR</th></tr></thead>
            
          </table>
        </div>
      </div>
      <!--
    <div class='footer fixed-bottom'>
      <div class='col-sm-12 py-1 bg-dark text-white text-center text-uppercase align-middle fw-light fs-6'>
        ERROR LEGENDS: <code class='text-danger'>REGISTRATION VERIFICATION FAILED</code> / <code class='text-danger text-decoration-underline'>CALLSIGN PENDING VERIFICATION</code>
      </div>
    </div>
    -->
      </div>
    </div>
    <?php require_once 'footer.php' ?>
		<script src='https://cdn.datatables.net/v/bs5/dt-2.0.2/b-3.0.1/b-html5-3.0.1/fh-4.0.1/kt-2.12.0/r-3.0.0/rg-1.5.0/rr-1.5.0/sc-2.4.1/sb-1.7.0/sp-2.3.0/sl-2.0.0/datatables.min.js' crossorigin='anonymous'></script>
		<script src='https://cdn.jsdelivr.net/combine/npm/pdfmake@latest,npm/pdfmake@latest/build/vfs_fonts.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/jspdf@latest/dist/jspdf.umd.min.js' crossorigin='anonymous'></script>
    <script src='/assets/js/cbcs.js'></script>
  </body>

</html>