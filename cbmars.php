<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>RoIPMARS Network | Citizen Band CallSign</title>
		<link rel='stylesheet' href='https://cdn.datatables.net/v/bs5/jszip-3.10.1/dt-1.13.7/af-2.6.0/b-2.4.2/b-colvis-2.4.2/b-html5-2.4.2/b-print-2.4.2/cr-1.7.0/date-1.5.1/fc-4.3.0/fh-3.4.0/kt-2.11.0/r-2.5.0/rg-1.4.1/rr-1.4.1/sc-2.3.0/sb-1.6.0/sp-2.2.0/sl-1.7.0/sr-1.3.0/datatables.min.css' crossorigin='anonymous'>
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
          <p class='fs-6 fw-light'>Sumbangan bernilai RM 10.00 &#40;minimum&#41; digalakkan untuk setiap permohonan isyarat panggilan individu.</p>
        </div>
        <!--
        <hr class='h-100'>
        <div class='col-6 p-2 text-end' id='regate'>
          <h3>Permohonan CS Gateway CB MARS Group</h3>
          <p class='fs-6 fw-light'>Yuran permohonan berupa sumbangan RM 10.00 &#40;minimum&#41; diperlukan untuk permohonan isyarat panggilan Radio Gateway.</p>
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
                <td><a type='button' class='btn btn-lg btn-outline-success rounded-5 fs-5' href='https://wa.me/601110795693' target='_blank' rel='noopener'><i class='bi-whatsapp'></i> 113MSUZL</a></td>
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
            $dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, 'Asia/Kuala_Lumpur', IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
            $file_last_modified = filemtime(__DIR__ . '/assets/json/cbmars.json');
            echo ' setakat ' . datefmt_format($dtfmt, $file_last_modified);
          ?></p>
          <p class='fw-bold'>Penafian: Sekiranya anda telah berdaftar sebagai Ahli CB, anda hanyalah sebagai Ahli CB kami bukanlah Ahli Persatuan. Ahli CB dan Ahli Persatuan adalah dua identiti yang berbeza.</p>
          <p>Nota: Untuk semakan lebih lanjut atau penukaran maklumat, sila emel maklumat lengkap anda ke <a href='mailto:member@roipmars.org.my?subject=Inkuiri%20Callsign%20CB'>member@roipmars.org.my</a></p>
        </div>
        <div class='col-12 my-3'>
          <table class='table align-middle text-uppercase text-wrap user-select-none' id='cbcslist'>
            <thead><tr><th class='dt-head-center'>ID</th><th class='dt-head-center'>CALLSIGN</th><th class='dt-head-center'>NAMA</th><th class='dt-head-center'>LOKALAN</th><th class='dt-head-center'>DAFTAR</th></tr></thead>
            <!-- <tbody> -->
              <!--<tr><td>I466</td><td>113MSJMI</td><td>MUHAMAD JAMIL BIN MUHAMAD SAHA ROZI</td><td>GURUN</td><td>20 Oct 2022</td></tr>-->
              <!--<tr><td>I497</td><td>113MSZNL</td><td>ZAINAL BIN YAACOB</td><td>FELDA KEMELAH, SEGAMAT, JOHOR</td><td>15 Feb 2020</td></tr>-->
              <!--<tr><td>I003</td><td>113MSKAC</td><td>ABDUL KARIM BIN SAAD</td><td>SIK, KEDAH</td><td>06 Feb 2020</td></tr>-->
              <!--<tr><td>I001</td><td>113MSYKV</td><td>ABD HAMID BIN JAAFAR</td><td>PENDANG, KEDAH</td><td>06 Feb 2020</td></tr>-->
            <!-- </tbody> -->
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
		<script src='https://cdn.jsdelivr.net/npm/pdfmake@0.3.0-beta.5/build/pdfmake.min.js' integrity='sha256-tUkM6Eux54YcZfZT+Y4fYFaP/Qrp9slOUDMaNEvSMhk=' crossorigin='anonymous'></script>
		<script src='https://cdn.jsdelivr.net/npm/pdfmake@0.3.0-beta.5/build/vfs_fonts.js' integrity='sha256-4IreCWwcWQ5hWSbNRGQnYsFl9Oddywhe04LdPfNSsDg=' crossorigin='anonymous'></script>
		<script src='https://cdn.datatables.net/v/bs5/jszip-3.10.1/dt-1.13.7/af-2.6.0/b-2.4.2/b-colvis-2.4.2/b-html5-2.4.2/b-print-2.4.2/cr-1.7.0/date-1.5.1/fc-4.3.0/fh-3.4.0/kt-2.11.0/r-2.5.0/rg-1.4.1/rr-1.4.1/sc-2.3.0/sb-1.6.0/sp-2.2.0/sl-1.7.0/sr-1.3.0/datatables.min.js' crossorigin='anonymous'></script>
    <script src='/assets/js/cbcs.js'></script>
  </body>

</html>