<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>RoIPMARS Network | Penyelidikan &amp; Pembangunan</title>
  </head>

  <body>
    <?php require_once 'header.php' ?>
    <div class='container-fluid'>
      <div class='row text-center'>
        <div class='col mt-2 mb-2 jumbotron-fluid'>
          <h1 class='h1-responsive'>Penyelidikan &amp; Pembangunan</h1>
        </div>
      </div>
    </div>
    <div class='container'>
      <div class='row'>
        <div class='col-12'>
          <h2 class='h2 text-center'>Pengurusan Kumpulan Rangkaian RoIPMARS</h2>
        </div>
        <div class='col-lg-6 my-2'>
          <div class='row g-1 text-lg-start text-center'>
            <div class='col-2 align-self-center'>
              <img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/002.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-dark-subtle bg-gradient' alt='9W2UZL'>
            </div>
            <div class='col-10 d-flex align-content-center flex-wrap'>
              <div class='card-body mx-3'>
                <p class='card-title fs-2 fw-bold'><a href='mailto:zulkifli.abu@roipmars.org.my'><i class='bi-info-circle-fill'></i></a> ZULKIFLI ABU</p>
                <p class='card-subtitle fs-5 fw-semibold'>FOUNDER, LEAD ADMINISTRATOR &amp; CHIEF RESEARCHER</p>
                <p class='card-subtitle fs-5 fw-bolder'>PENGASAS, KETUA PENTADBIR &amp; PENYELIDIK</p>
                <p class='card-subtitle fw-light'>&#91;2018&#93; Dilantik oleh MART&acute;S sebagai penyelidik &#39;SIG&#39; &#40;Special Interest Group&#41; pengkhususan &#39;ROIP&#39; &#40;Radio over Internet Protocol&#41; &amp; &#39;VoIP&#39; &#40;Voice over Internet Protocol&#41;</p>
              </div>
            </div>
          </div>
        </div>
        <div class='col-lg-6 my-2'>
          <div class='row g-1 text-end'>
            <div class='col-10 d-flex align-content-center flex-wrap'>
              <div class='card-body mx-3'>
                <p class='card-title fs-2 fw-bold'>HAFIZI RUSLAN <a href='https://bit.ly/m/hafiziruslan'><i class='bi-info-circle-fill'></i></a></p>
                <p class='card-subtitle fs-5 fw-semibold'>SOFTWARE DEVELOPER &amp; NETWORK ADMINISTRATOR</p>
                <p class='card-subtitle fs-5 fw-bolder'>PEMBANGUN PERISIAN &amp; PENTADBIR RANGKAIAN</p>
                <p class='card-subtitle fw-light'>&#91;2019&#93; Dilantik oleh RoIPMARS&#8480; sebagai pembangun perisian</p>
                <p class='card-subtitle fw-light'>&#91;2021&#93; Memulakan sambungan Rangkaian RoIPMARS&#8480; ke seluruh dunia</p>
              </div>
            </div>
            <div class='col-2 align-self-center'>
              <img src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/001.png' loading='lazy' class='img-fluid rounded-circle object-fit-fill bg-dark-subtle bg-gradient' alt='9W2LGX'>
            </div>
          </div>
        </div>
      </div>
      <div class='row'>
        <h2 class='text-center'>Peta Rangkaian Kumpulan RoIPMARS</h2>
        <div class='col-12 my-1'>
          <figure class='figure d-grid'>
            <figcaption class='figure-caption text-center fs-4'>Rangkaian Utama &#40;kegunaan Jalur Amatur&#41;</figcaption>
            <canvas id='rndHAMtree' class='rounded-5' loading='lazy' alt='ham-link-map'></canvas>
            <audio class='rounded-5 w-100' controls preload='none' src='https://broadcastify.cdnstream1.com/41368' type='audio/mp3' crossorigin='anonymous'></audio>
            <span class='text-center'>Siaran mungkin tertunda sehingga 10 minit bergantung kepada kelajuan dan kepandaman rangkaian.<br>Sebagai alternatif, anda boleh mendengar dengan kelewatan siaran yang lebih pantas di sini: <a href='https://stream.mhrtech.my' target='_blank'>stream.mhrtech.my</a></span>
          </figure>
        </div>
        <div class='col-12 my-1'>
          <figure class='figure d-grid'>
            <figcaption class='figure-caption text-center fs-4'>Rangkaian Sekunder &#40;kegunaan Jalur Rakyat&#41;</figcaption>
            <canvas id='rndCBtree' class='rounded-5' loading='lazy' alt='cb-link-map'></canvas>
          </figure>
        </div>
      </div>
      <div class='row'>
        <div class='col-12 text-center'>
          <h3 class='h3'>Penyelidikan Berterusan</h3>
        </div>
        <div class='col-md-9 mb-md-0 p-md-3 my-3'>
          <p class='text-center my-0'>Apa itu Gateway?</p>
          <div class='ratio ratio-16x9'>
            <embed class='rounded-5' loading='lazy' src='https://www.youtube.com/embed/CihK_ebySF0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></embed>
          </div>
        </div>
        <div class='col-md-3 mb-md-0 p-md-3 my-3' id='rlandroid'>
          <p class='text-center my-0'>Sistem Pengulang pada Pemancar Mudah Alih dan Telefon Pintar Android &#40;Repeater Linking ROIP&#41;</p>
          <video class='rounded-5 w-100' loading='lazy' controls preload='metadata'>
            <source src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/video/repeater-linking-roip.webm' type='video/webm'>
            <source src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/video/repeater-linking-roip.mp4' type='video/mp4'>
          </video>
        </div>
        <div class='col-md-4 mb-md-0 p-md-3 my-3' id='rpgw'>
          <p class='text-center my-0'>Sistem Pengulang &amp; Perantara pada Pemancar Mudah Alih &amp; Telefon Pintar Android &#40;Repeater Linking ROIP&#41;</p>
          <div class='ratio ratio-16x9'>
            <embed class='rounded-5' loading='lazy' src='https://www.youtube.com/embed/2oag-Flz0Ss' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></embed>
          </div>
        </div>
        <div class='col-md-4 mb-md-0 p-md-3 my-3' id='gwpc'>
          <p class='text-center my-0'>Sistem Perantara pada Pemancar Mudah Alih &amp; PC</p>
          <div class='ratio ratio-16x9'>
            <embed class='rounded-5' loading='lazy' src='https://www.youtube.com/embed/-JGQpxAyEQo' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></embed>
          </div>
        </div>
        <div class='col-md-4 mb-md-0 p-md-3 my-3' id='gwandroid'>
          <p class='text-center my-0'>Sistem Perantara pada Pemancar Mudah Alih &amp; Telefon Pintar Android</p>
          <div class='ratio ratio-16x9'>
            <embed class='rounded-5' loading='lazy' src='https://www.youtube.com/embed/dDiEqN2xC3M' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></embed>
          </div>
        </div>
      </div>
    </div>
    <?php require_once 'footer.php' ?>
		<script src='https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/chartjs-chart-graph@4/build/index.umd.min.js' crossorigin='anonymous'></script>
		<script src='https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2/dist/chartjs-plugin-datalabels.min.js' crossorigin='anonymous'></script>
		<script src='https://cdn.jsdelivr.net/npm/chartjs-plugin-deferred@2/dist/chartjs-plugin-deferred.min.js' crossorigin='anonymous'></script>
		<script src='https://cdn.jsdelivr.net/npm/chartjs-plugin-watermark@2/chartjs-plugin-watermark.min.js' crossorigin='anonymous'></script>
		<script src='/assets/js/rnd-chartjs-tree.js'></script>
  </body>

</html>