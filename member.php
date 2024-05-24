<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>Keahlian</title>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/combine/npm/datatables.net-bs5@latest/css/dataTables.bootstrap5.min.css,npm/datatables.net-autofill-bs5@latest/css/autoFill.bootstrap5.min.css,npm/datatables.net-buttons-bs5@latest/css/buttons.bootstrap5.min.css,npm/datatables.net-colreorder-bs5@latest/css/colReorder.bootstrap5.min.css,npm/datatables.net-fixedcolumns-bs5@latest/css/fixedColumns.bootstrap5.min.css,npm/datatables.net-fixedheader-bs5@latest/css/fixedHeader.bootstrap5.min.css,npm/datatables.net-keytable-bs5@latest/css/keyTable.bootstrap5.min.css,npm/datatables.net-responsive-bs5@latest/css/responsive.bootstrap5.min.css,npm/datatables.net-rowgroup-bs5@latest/css/rowGroup.bootstrap5.min.css,npm/datatables.net-rowreorder-bs5@latest/css/rowReorder.bootstrap5.min.css,npm/datatables.net-scroller-bs5@latest/css/scroller.bootstrap5.min.css,npm/datatables.net-searchbuilder-bs5@latest/css/searchBuilder.bootstrap5.min.css,npm/datatables.net-searchpanes-bs5@latest/css/searchPanes.bootstrap5.min.css,npm/datatables.net-select-bs5@latest/css/select.bootstrap5.min.css,npm/datatables.net-staterestore-bs5@latest/css/stateRestore.bootstrap5.min.css' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/leaflet@latest/dist/leaflet.min.css' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@latest/dist/L.Control.Locate.min.css' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/leaflet-loading@latest/src/Control.Loading.min.css' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/leaflet-fullscreen@latest/dist/leaflet.fullscreen.min.css' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/mwasil/Leaflet.Rainviewer@latest/leaflet.rainviewer.min.css' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/xguaita/Leaflet.MapCenterCoord@latest/src/L.Control.MapCenterCoord.min.css' crossorigin='anonymous'>
  </head>

  <body>
    <?php require_once 'header.php' ?>
    <div class='container-fluid'>
      <div class='row text-center'>
        <div class='col my-2 jumbotron-fluid'>
          <h1 class='h1-responsive'>Ahli Kumpulan RoIPMARS</h1>
        </div>
      </div>
    </div>
    <div class='container'>
      <div class='row'>
        <p class='text-center font-weight-bold h3 fs-2'>PERSATUAN PEMINAT RADIO KOMUNIKASI &lpar;ROIP&lpar;RADIO OVER INTERNET PROTOCOL&rpar;&rpar;<br><sup>PPM-006-10-01062020</sup></p>
        <div class='col-lg-7 mb-3'>
          <h4 class='h4 text-center'>Kelebihan Keahlian RoIPMARS</h4>
          <ul class='list-group list-group-numbered align-middle'>
            <li class='list-group-item'>Memiliki hak bersama dalam semua perkhidmatan yang disediakan persatuan</li>
            <li class='list-group-item'>Menjadi fasilitator perkhidmatan melalui kursus secara lantikan dari jawatankuasa</li>
            <li class='list-group-item'>Berhak mendapat surat sokongan daripada persatuan &lpar;sekiranya diperlukan&rpar;</li>
            <li class='list-group-item'>Boleh mewakili / diwakili persatuan pada perkara / acara tertentu &lpar;setelah mendapat kelulusan jawatankuasa&rpar;</li>
            <li class='list-group-item'>Memilih &amp; mengundi Jawatankuasa di Pemilihan Jawatankuasa pada Mesyuarat Agung Dwi-Tahunan / Biennial General Meeting &lpar;BGM&rpar;</li>
          </ul>
        </div>
        <div class='col-lg-5'>
          <div class='hstack gap-1 mb-2 justify-content-center'>
            <a type='button' class='btn btn-primary rounded-pill' data-bs-toggle='modal' data-bs-target='#roscertModalLong'>Sijil Kelulusan Pertubuhan</a>
            <a type='button' class='btn btn-info rounded-pill' data-bs-toggle='modal' data-bs-target='#rosconstModalLong'>Perlembagaan Pertubuhan</a>
            <a type='button' class='btn btn-success rounded-pill' data-bs-toggle='modal' data-bs-target='#rosappletModalLong'>Surat Kelulusan Pertubuhan</a>
          </div>
          <div class='vstack gap-1 justify-content-center'>
            <a type='button' class='btn btn-lg btn-primary rounded-3' href='https://bit.ly/daftarmars' target='_blank'>Permohonan Keahlian &lpar;Google Form&rpar; <i class='bi-google'></i></a>
            <a type='button' class='btn btn-secondary rounded-3 opacity-50' href='https://dl.roipmars.org.my/files/members/pprk_manualregform.pdf' download>Permohonan Keahlian &lpar;Fail PDF&rpar; <i class='bi-file-earmark-pdf'></i></a>
          </div>
          <div class='modal fade' id='roscertModalLong' tabindex='-1' role='dialog' aria-labelledby='roscertModalTitle' aria-hidden='true'>
            <div class='modal-dialog modal-dialog-centered' role='document'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='roscertModalTitle'>Sijil Pendaftaran Pertubuhan</h5>
                </div>
                <div class='modal-body'><img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/ros-sijil.png'></div>
              </div>
            </div>
          </div>
          <div class='modal fade' id='rosconstModalLong' tabindex='-1' role='dialog' aria-labelledby='rosconstModalTitle' aria-hidden='true'>
            <div class='modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl' role='document'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='rosconstModalTitle'>Perlembagaan Pertubuhan</h5>
                </div>
                <div class='modal-body'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p01.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p02.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p03.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p04.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p05.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p06.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p07.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p08.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p09.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p10.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p11.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p12.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p13.png'>
                  <img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/perlembagaan/p14.png'>
                </div>
                <div class='modal-footer'><a type='button' class='btn btn-sm btn-success' href='https://dl.roipmars.org.my/files/members/mars-perlembagaan.pdf' download>Muat Turun</a></div>
              </div>
            </div>
          </div>
          <div class='modal fade' id='rosappletModalLong' tabindex='-1' role='dialog' aria-labelledby='rosappletModalTitle' aria-hidden='true'>
            <div class='modal-dialog modal-dialog-centered' role='document'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='rosappletModalTitle'>Surat Kelulusan Pendaftaran Pertubuhan</h5>
                </div>
                <div class='modal-body'><img class='img-fluid' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/ros-surat.png'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='col-12 my-2 text-center'>
          <h3 class='h3 text-center'>Jawatankuasa</h3>
          <p class='fw-bold'>Organisasi Pusat Sesi 2024/2025</p>
          <div class='row justify-content-between'>
            <div class='col-4 col-lg-2 my-1 mx-0 text-center'>
              <div class='card-group justify-content-center'>
                <div class='card-header fw-bold'>
                  <p class='lh-1 mb-0'>PRESIDEN</p>
                </div>
                <div class='card-img'>
                  <img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/008.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-primary-subtle bg-gradient w-75'>
                </div>
                <div class='card-footer'>
                  <p class='fw-bolder m-0'>KAMARUDZAMAN</p>
                  <p class='fw-semibold m-0'>9W2OGK</p>
                </div>
              </div>
            </div>
            <div class='col-4 col-lg-2 my-1 mx-0 text-center'>
              <div class='card-group justify-content-center'>
                <div class='card-header fw-bold'>
                  <p class='lh-1 mb-0'>TIMBALAN PRESIDEN</p>
                </div>
                <div class='card-img'>
                  <img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/025.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-info-subtle bg-gradient w-75'>
                </div>
                <div class='card-footer'>
                  <p class='fw-bolder m-0'>SABRI IBRAHIM</p>
                  <p class='fw-semibold m-0'>9W2AYP</p>
                </div>
              </div>
            </div>
            <div class='col-4 col-lg-2 my-1 mx-0 text-center'>
              <div class='card-group justify-content-center'>
                <div class='card-header fw-bold'>
                  <p class='lh-1 mb-0'>SETIAUSAHA AGUNG</p>
                </div>
                <div class='card-img'>
                  <img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/001.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-primary-subtle bg-gradient w-75'>
                </div>
                <div class='card-footer'>
                  <p class='fw-bolder m-0'>HAFIZI RUSLAN</p>
                  <p class='fw-semibold m-0'>9W2LGX</p>
                </div>
              </div>
            </div>
            <div class='col-4 col-lg-2 my-1 mx-0 text-center'>
              <div class='card-group justify-content-center'>
                <div class='card-header fw-bold'>
                  <p class='lh-1 mb-0'>PENOLONG SETIAUSAHA AGUNG</p>
                </div>
                <div class='card-img'>
                  <img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/023.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-info-subtle bg-gradient w-75'>
                </div>
                <div class='card-footer'>
                  <p class='fw-bolder m-0'>SYED IDRUS</p>
                  <p class='fw-semibold m-0'>9W2DRQ</p>
                </div>
              </div>
            </div>
            <div class='col-4 col-lg-2 my-1 mx-0 text-center'>
              <div class='card-group justify-content-center'>
                <div class='card-header fw-bold'>
                  <p class='lh-1 mb-0'>BENDAHARI AGUNG</p>
                </div>
                <div class='card-img'>
                  <img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/007.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-primary-subtle bg-gradient w-75'>
                </div>
                <div class='card-footer'>
                  <p class='fw-bolder m-0'>SULAIMAN MAZLAN</p>
                  <p class='fw-semibold m-0'>9W2ELM</p>
                </div>
              </div>
            </div>
          </div>
          <div class='row border-top justify-content-between'>
            <div class='col-6 col-lg-2 my-1 mx-0 text-center'>
              <div class='card-group justify-content-center'>
                <div class='card-header fw-bold'>
                  <p class='lh-1 mb-0'>BAHAGIAN<br>KEBAJIKAN</p>
                </div>
                <div class='card-img'>
                  <div class='d-lg-none'><img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/011.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-info-subtle bg-gradient w-50'></div>
                  <div class='d-none d-lg-block'><img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/011.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-info-subtle bg-gradient w-75'></div>
                </div>
                <div class='card-footer'>
                  <p class='fw-bolder m-0'>NASARUDDIN ARIF</p>
                  <p class='fw-semibold m-0'>9W2NDI</p>
                </div>
              </div>
            </div>
            <div class='col-6 col-lg-2 my-1 mx-0 text-center'>
              <div class='card-group justify-content-center'>
                <div class='card-header fw-bold'>
                  <p class='lh-1 mb-0'>BAHAGIAN<br>EKONOMI</p>
                </div>
                <div class='card-img'>
                  <div class='d-lg-none'><img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/022.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-info-subtle bg-gradient w-50'></div>
                  <div class='d-none d-lg-block'><img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/022.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-info-subtle bg-gradient w-75'></div>
                </div>
                <div class='card-footer'>
                  <p class='fw-bolder m-0'>DAUD JUSOH</p>
                  <p class='fw-semibold m-0'>9W2DMJ</p>
                </div>
              </div>
            </div>
            <div class='col-6 col-lg-2 my-1 mx-0 text-center'>
              <div class='card-group justify-content-center'>
                <div class='card-header fw-bold'>
                  <p class='lh-1 mb-0'>BAHAGIAN<br>TEKNIKAL</p>
                </div>
                <div class='card-img'>
                  <div class='d-lg-none'><img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/036.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-info-subtle bg-gradient w-50'></div>
                  <div class='d-none d-lg-block'><img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/036.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-info-subtle bg-gradient w-75'></div>
                </div>
                <div class='card-footer'>
                  <p class='fw-bolder m-0'>ROBBI NESPU</p>
                  <p class='fw-semibold m-0'>9W2NSP</p>
                </div>
              </div>
            </div>
            <div class='col-6 col-lg-2 my-1 mx-0 text-center'>
              <div class='card-group justify-content-center'>
                <div class='card-header fw-bold'>
                  <p class='lh-1 mb-0'>BAHAGIAN<br>AKTIVITI</p>
                </div>
                <div class='card-img'>
                  <div class='d-lg-none'><img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/032.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-info-subtle bg-gradient w-50'></div>
                  <div class='d-none d-lg-block'><img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/032.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-info-subtle bg-gradient w-75'></div>
                </div>
                <div class='card-footer'>
                  <p class='fw-bolder m-0'>MAHATHIR ARIFFIN</p>
                  <p class='fw-semibold m-0'>V85AFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='col-12 my-1 text-center'>
          <h4 class='h4'>Peta RoIPMARS</h4>
          <div class='ratio ratio-16x9 my-3'>
            <div class='position-absolute w-100 h-100' id='map'></div>
          </div>
        </div>
        <div class='col-12 my-3 text-center'>
          <h4 class='h4'>Ahli RoIPMARS</h4>
          <p class='mb-0'><span class='membercount badge rounded-3 text-bg-success'></span><?php
          $dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
          $file_last_modified = filemtime(__DIR__ . '/assets/json/member.json');
          echo ' yang disahkan setakat ' . datefmt_format($dtfmt, $file_last_modified);
          ?></p>
          <table class='table table-striped align-middle text-uppercase text-nowrap user-select-none caption-top' id='memberlist'>
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
    <script src='https://cdn.jsdelivr.net/combine/npm/jszip@latest,npm/pdfmake@latest,npm/pdfmake@latest/build/vfs_fonts.min.js,npm/datatables.net@latest,npm/datatables.net-bs5@latest,npm/datatables.net-autofill-bs5@latest,npm/datatables.net-buttons-bs5@latest,npm/datatables.net-colreorder-bs5@latest,npm/datatables.net-fixedcolumns-bs5@latest,npm/datatables.net-fixedheader-bs5@latest,npm/datatables.net-keytable-bs5@latest,npm/datatables.net-responsive-bs5@latest,npm/datatables.net-rowgroup-bs5@latest,npm/datatables.net-rowreorder-bs5@latest,npm/datatables.net-scroller-bs5@latest,npm/datatables.net-searchbuilder-bs5@latest,npm/datatables.net-searchpanes-bs5@latest,npm/datatables.net-select-bs5@latest,npm/datatables.net-staterestore-bs5@latest' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/jspdf@latest/dist/jspdf.umd.min.js' crossorigin='anonymous'></script>
    <script src='/assets/js/member.js'></script>
    <script src='https://cdn.jsdelivr.net/npm/leaflet@latest/dist/leaflet.min.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@latest/dist/L.Control.Locate.min.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/leaflet-loading@latest/src/Control.Loading.min.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/leaflet-fullscreen@latest/dist/Leaflet.fullscreen.min.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/@joergdietrich/leaflet.terminator@latest/L.Terminator.min.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/leaflet.smooth_marker_bouncing@latest/dist/bundle.min.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/gh/ha8tks/Leaflet.Maidenhead@latest/src/L.Maidenhead.min.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/gh/maneoverland/leaflet.WorldMiniMap@latest/dist/Control.WorldMiniMap.min.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/gh/mwasil/Leaflet.Rainviewer@latest/leaflet.rainviewer.min.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/gh/xguaita/Leaflet.MapCenterCoord@latest/src/L.Control.MapCenterCoord.min.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/gh/leaflet-extras/leaflet-providers@latest/leaflet-providers.min.js' crossorigin='anonymous'></script>
    <script src='https://api.jawg.io/libraries/jawg-places@latest/jawg-places.js?access-token=Yfk7oslxn7AhBWNOPFQwyxp8J48VAbifha47L9S0TrRSI5K8WrBYvO4ByWkeEqpQ' crossorigin='anonymous'></script>
    <script src='/assets/js/membersmap.js'></script>
  </body>

</html>