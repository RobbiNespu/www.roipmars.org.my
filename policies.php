<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>RoIPMARS™ Network | Polisi Perkhidmatan</title>
    <meta charset='utf-8'>
    <meta http-equiv='Content-Type' content='text/html'>
    <meta http-equiv='content-language' content='ms-MY'>
    <meta name='language' content='Malay'>
    <meta name='author' content='HafiziRuslan'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=yes'>
    <meta name='title' content='RoIPMARS Network | Polisi Perkhidmatan'>
    <meta name='description' content='Persatuan Peminat Radio Komunikasi (RoIP) Polisi Perkhidmatan'>
    <meta name='keywords' content='roipmars, malaysiats3, ts3servermalaysia, teamspeak3malaysia, persatuanpeminatradiokomunikasi, roipmalaysia, cbroipmalaysia, amaturroipmalaysia'>
    <meta name='robots' content='index, follow'>
    <meta property='og:site_name' content='RoIPMARS'>
    <meta property='og:title' content='RoIPMARS Network | Polisi Perkhidmatan'>
    <meta property='og:description' content='Persatuan Peminat Radio Komunikasi (RoIP) Polisi Perkhidmatan'>
    <meta property='og:url' content='https://www.roipmars.org.my/policies'>
    <meta property='og:image' content='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/brands/roipmars/brand_sq.png'>
    <meta property='og:type' content='website'>
    <meta property='og:locale' content='ms-MY'>
    <meta name='twitter:title' content='RoIPMARS Network | Polisi Perkhidmatan'>
    <meta name='twitter:description' content='Persatuan Peminat Radio Komunikasi (RoIP) Polisi Perkhidmatan'>
    <meta name='twitter:url' content='https://www.roipmars.org.my/policies'>
    <meta name='twitter:image' content='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/brands/roipmars/brand_sq.png'>
    <meta name='twitter:creator' content='@HafiziRuslan'>
  </head>

  <body>
    <?php require_once 'header.php' ?>
    <div class='container'>
      <div class='row text-center my-3'>
        <h1 class='h1-responsive'>Polisi Perkhidmatan RoIPMARS</h1>
        <p><?php
          $dtfmt = datefmt_create(
            'ms_MY',
            IntlDateFormatter::FULL,
            IntlDateFormatter::FULL,
            'Asia/Kuala_Lumpur',
            IntlDateFormatter::GREGORIAN,
            'EEEE, dd MMMM yyyy, HH:mm zzzz'
          );
          $file_last_mod = filemtime(__FILE__);
          echo 'Pindaan: ' . datefmt_format($dtfmt, $file_last_mod);
        ?></p>
      </div>
      <div class='row my-3'>
        <div class='col-4'>
          <nav id='navbar-policy' class='h-100 flex-column align-items-stretch px-3 border-end' tabindex='0'>
            <nav class='nav nav-pills flex-column pt-5 sticky-top overflow-y-auto fs-6 fw-light text-wrap z-0'>
              <a class='nav-link mt-5' href='#tos'>Terma &amp; Syarat</a>
              <nav class='nav nav-pills flex-column'>
                <a class='nav-link ms-3 my-1' href='#license'>Lesen</a>
                <a class='nav-link ms-3 my-1' href='#link'>Pautan</a>
                <a class='nav-link ms-3 my-1' href='#iframe'>Bingkai</a>
                <a class='nav-link ms-3 my-1' href='#content'>Kandungan</a>
                <a class='nav-link ms-3 my-1' href='#rights'>Hak</a>
                <a class='nav-link ms-3 my-1' href='#disclaimer'>Penafian</a>
              </nav>
              <a class='nav-link' href='#privacy'>Dasar Privasi</a>
              <nav class='nav nav-pills flex-column'>
                <a class='nav-link ms-3 my-1' href='#agreement'>Persetujuan</a>
                <a class='nav-link ms-3 my-1' href='#collected-info'>Maklumat</a>
                <a class='nav-link ms-3 my-1' href='#logging'>Fail Log</a>
                <a class='nav-link ms-3 my-1' href='#cookies2'>Kuki</a>
                <a class='nav-link ms-3 my-1' href='#advertisement'>Pengiklanan</a>
                <a class='nav-link ms-3 my-1' href='#third-party'>Privasi Pihak Ketiga</a>
                <a class='nav-link ms-3 my-1' href='#kids-info'>Malumat Kanak-Kanak</a>
              </nav>
              <a class='nav-link' href='#return'>Dasar Pemulangan dan Bayaran Balik</a>
              <nav class='nav nav-pills flex-column'>
                <a class='nav-link ms-3 my-1' href='#interpretation'>Tafsiran</a>
                <a class='nav-link ms-3 my-1' href='#cancellation'>Pembatalan Pesanan</a>
                <a class='nav-link ms-3 my-1' href='#retuning'>Syarat Pemulangan</a>
              </nav>
            </nav>
          </nav>
        </div>
        <div class='col-8'>
          <div data-bs-spy='scroll' data-bs-target='#navbar-policy' data-bs-offset='0' data-bs-smooth-scroll='true' class='scrollspy-policy' tabindex='0'>
            <div id='tos'>
              <h4>Terma &amp; Syarat</h4>
              <p>Terma dan syarat ini menggariskan peraturan-peraturan untuk penggunaan laman sesawang PERSATUAN PEMINAT RADIO KOMUNIKASI [ROIP (RADIO OVER INTERNET PROTOCOL)], terletak di roipmars.org.my.</p>
              <p>Dengan mengakses laman sesawang ini, kami menganggap anda menerima dan bersetuju dengan terma dan syarat ini. Jangan terus menggunakan Perkhidmatan RoIPMARS jika anda tidak bersetuju untuk menerima semua terma dan syarat yang dinyatakan di halaman ini.</p>
              <p>Istilah berikut digunakan untuk Terma dan Syarat ini, Pernyataan Privasi dan Notis Penafian dan semua Perjanjian:</p>
              <ul>
                <li>&quot;Pengguna&quot;, &quot;Anda&quot;, merujuk kepada anda, orang yang log masuk ke laman sesawang ini dan mematuhi terma dan syarat.</li>
                <li>&quot;Organisasi&quot;, &quot;Kami Sendiri&quot;, &quot;Kami&quot;, merujuk kepada Organisasi kami.</li>
                <li>&quot;Parti&quot;, &quot;Pihak&quot;, atau &quot;Kami&quot;, merujuk kepada kedua-dua pengguna dan diri kita sendiri.</li>
              </ul>
              <p>Semua terma merujuk kepada tawaran, penerimaan dan pertimbangan pembayaran yang diperlukan untuk menjalankan proses bantuan kami kepada pengguna dengan cara yang paling sesuai untuk tujuan nyata memenuhi keperluan pengguna berkenaan dengan penyediaan perkhidmatan yang dinyatakan oleh Organisasi, selaras dengan dan tertakluk kepada, undang-undang semasa Malaysia. Sebarang penggunaan istilah di atas atau perkataan lain dalam bentuk tunggal, jamak, huruf besar dan/atau dia atau mereka, dianggap sebagai boleh ditukar ganti dan oleh itu merujuk kepada yang sama.</p>
              <h5>Kuki</h5>
              <p>Kami menggunakan penggunaan kuki. Dengan mengakses RoIPMARS, anda bersetuju untuk menggunakan kuki dalam persetujuan dengan Dasar Privasi Organisasi. </p>
              <p>Kebanyakan laman sesawang interaktif menggunakan kuki untuk membolehkan kami mendapatkan semula butiran pengguna untuk setiap lawatan. Kuki digunakan oleh laman sesawang kami untuk membolehkan kefungsian kawasan tertentu untuk memudahkan orang melawat laman sesawang kami. Beberapa ahli gabungan/rakan kongsi pengiklanan kami juga mungkin menggunakan kuki.</p>
            </div>
            <div id='license'>
              <h5>Lesen</h5>
              <p>Melainkan dinyatakan sebaliknya, Organisasi dan/atau pemberi lesennya memiliki hak harta intelek untuk semua bahan di RoIPMARS. Semua hak harta intelek adalah terpelihara. Anda boleh mengakses ini daripada RoIPMARS untuk kegunaan peribadi anda sendiri tertakluk pada sekatan yang ditetapkan dalam terma dan syarat ini.</p>
              <p>Anda tidak boleh:</p>
              <ul>
                <li>Terbitkan semula bahan daripada RoIPMARS</li>
                <li>Jual, sewa atau sub-lesen bahan daripada RoIPMARS</li>
                <li>Menghasilkan semula, menduplikasi atau menyalin bahan daripada RoIPMARS</li>
                <li>Agihkan semula kandungan daripada RoIPMARS</li>
              </ul>
              <p>Perjanjian ini hendaklah bermula pada tarikh ini.</p>
              <p>Sebahagian daripada laman sesawang ini menawarkan peluang kepada pengguna untuk menyiarkan dan bertukar-tukar pendapat dan maklumat dalam kawasan tertentu laman sesawang. Organisasi tidak menapis, mengubah, menerbitkan atau menyemak Komen sebelum kehadirannya di laman sesawang. Komen tidak menggambarkan pandangan dan pendapat organisasi, ejen dan/atau ahli gabungannya. Komen mencerminkan pandangan dan pendapat orang yang menyiarkan pandangan dan pendapat mereka. Setakat yang dibenarkan oleh undang-undang yang terpakai, organisasi tidak akan bertanggungjawab ke atas Komen atau untuk sebarang liabiliti, kerosakan atau perbelanjaan yang disebabkan dan/atau dialami akibat daripada sebarang penggunaan dan/atau penyiaran dan/atau penampilan Ulasan di laman sesawang ini.</p>
              <p>Organisasi berhak untuk memantau semua Komen dan mengalih keluar sebarang Komen yang boleh dianggap tidak sesuai, menyinggung perasaan atau menyebabkan pelanggaran Terma dan Syarat ini.</p>
              <p>Anda menjamin dan menyatakan bahawa:</p>
              <ul>
                <li>Anda berhak menyiarkan Komen di laman sesawang kami dan mempunyai semua lesen dan persetujuan yang diperlukan untuk berbuat demikian;</li>
                <li>Komen tersebut tidak menceroboh mana-mana hak harta intelek, termasuk tanpa had hak cipta, paten atau tanda dagangan mana-mana pihak ketiga;</li>
                <li>Komen tersebut tidak mengandungi bahan yang memfitnah, menyinggung perasaan, tidak senonoh atau sebaliknya menyalahi undang-undang yang merupakan pencerobohan privasi;</li>
                <li>Komen tidak akan digunakan untuk meminta atau mempromosikan perniagaan atau adat atau membentangkan aktiviti komersial atau aktiviti yang menyalahi undang-undang.</li>
              </ul>
              <p>Anda dengan ini memberikan organisasi lesen bukan eksklusif untuk menggunakan, mengeluarkan semula, mengubah dan memberi kebenaran kepada orang lain untuk menggunakan, mengeluarkan semula dan mengubah mana-mana Komen anda dalam sebarang dan semua bentuk, format atau media.</p>
            </div>
            <div id='link'>
              <h5>Pautan ke Kandungan kami</h5>
              <p>Organisasi berikut mungkin memaut ke Laman sesawang kami tanpa kelulusan bertulis terlebih dahulu:</p>
              <ul>
                <li>Agensi kerajaan;</li>
                <li>Enjin carian;</li>
                <li>Organisasi berita;</li>
                <li>Pengedar direktori dalam talian boleh memaut ke Laman sesawang kami dengan cara yang sama seperti mereka memaut ke Laman sesawang perniagaan tersenarai lain; dan</li>
                <li>Perniagaan Bertauliah kecuali organisasi bukan untung, pusat beli-belah amal dan kumpulan pengumpulan dana amal yang mungkin tidak memaut ke laman sesawang kami.</li>
              </ul>
              <p>Organisasi ini mungkin memaut ke halaman utama kami, ke penerbitan atau ke maklumat Laman sesawang lain selagi pautan:</p>
              <ol type='a'>
                <li>tidak dalam apa-apa cara mengelirukan;</li>
                <li>tidak secara palsu membayangkan penajaan, pengendorsan atau kelulusan pihak yang memautkan dan produk dan/atau perkhidmatannya; dan</li>
                <li>sesuai dalam konteks laman pihak yang memautkan.</li>
              </ol>
              <p>Kami mungkin mempertimbangkan dan meluluskan permintaan pautan lain daripada jenis organisasi berikut:</p>
              <ul>
                <li>sumber maklumat pengguna dan/atau perniagaan yang biasa dikenali;</li>
                <li>laman komuniti dot.com;</li>
                <li>persatuan atau kumpulan lain yang mewakili badan amal;</li>
                <li>pengedar direktori dalam talian;</li>
                <li>portal internet;</li>
                <li>firma perakaunan, undang-undang dan perunding; dan</li>
                <li>institusi pendidikan dan persatuan perdagangan.</li>
              </ul>
              <p>Kami akan meluluskan permintaan pautan daripada organisasi ini jika kami memutuskan bahawa:</p>
              <ol type='a'>
                <li>pautan itu tidak akan membuatkan kami memandang tidak baik kepada diri kami sendiri atau kepada organisasi kami yang diiktiraf;</li>
                <li>organisasi tersebut tidak mempunyai sebarang rekod negatif dengan kami;</li>
                <li>faedah kepada kami daripada keterlihatan pautan mengimbangi ketiadaan organisasi; dan</li>
                <li>pautan adalah dalam konteks maklumat sumber am.</li>
              </ol>
              <p>Jika anda adalah salah satu organisasi yang disenaraikan dalam perenggan 2 di atas dan berminat untuk memaut ke laman sesawang kami, anda mesti memaklumkan kami dengan menghantar e-mel kepada member@roipmars.org.my. Sila sertakan nama anda, nama organisasi anda, maklumat hubungan serta URL laman anda, senarai mana-mana URL yang anda ingin dipautkan ke Laman sesawang kami dan senarai URL di laman kami yang anda ingin pautkan. Tunggu 2-3 minggu untuk maklum balas.</p>
              <p>Organisasi yang diluluskan boleh membuat pautan ke Laman sesawang kami seperti berikut:</p>
              <ul>
                <li>Dengan menggunakan organisasi atau nama jenama kami; atau</li>
                <li>Dengan menggunakan pengesan sumber seragam yang dipautkan kepada; atau</li>
                <li>Dengan menggunakan mana-mana perihalan lain mengenai Laman sesawang kami yang dipautkan dengan yang masuk akal dalam konteks dan format kandungan di laman pihak yang memautkan.</li>
              </ul>
              <p>Tiada penggunaan logo organisasi atau karya seni lain akan dibenarkan untuk dipautkan tanpa perjanjian lesen tanda dagangan.</p>
            </div>
            <div id='iframe'>
              <h5>iFrames</h5>
              <p>Tanpa kelulusan dan kebenaran bertulis terlebih dahulu, anda tidak boleh membuat bingkai di sekeliling Halaman sesawang kami yang mengubah dalam apa jua cara persembahan visual atau penampilan Laman sesawang kami.</p>
            </div>
            <div id='content'>
              <h5>Liabiliti Kandungan</h5>
              <p>Kami tidak akan bertanggungjawab untuk sebarang kandungan yang muncul di Laman sesawang anda. Anda bersetuju untuk melindungi dan mempertahankan kami daripada semua tuntutan yang meningkat di Laman sesawang anda. Tiada pautan harus dipaparkan pada mana-mana Laman sesawang yang boleh ditafsirkan sebagai fitnah, lucah atau jenayah, atau yang melanggar, sebaliknya melanggar, atau menyokong pelanggaran atau pelanggaran lain, mana-mana hak pihak ketiga.</p>
            </div>
            <div id='rights'>
              <h5>Pemeliharaan Hak</h5>
              <p>Kami berhak meminta anda mengalih keluar semua pautan atau mana-mana pautan tertentu ke Laman sesawang kami. Anda meluluskan untuk segera mengalih keluar semua pautan ke Laman sesawang kami atas permintaan. Kami juga berhak untuk meminda terma dan syarat ini dan polisi pautan pada bila-bila masa. Dengan memaut secara berterusan ke Laman sesawang kami, anda bersetuju untuk terikat dan mematuhi terma dan syarat pemautan ini.</p>
              <h5>Pengalihan keluar pautan daripada laman sesawang kami</h5>
              <p>Jika anda menjumpai sebarang pautan di Laman sesawang kami yang menyinggung atas sebarang sebab, anda bebas untuk menghubungi dan memaklumkan kami pada bila-bila masa. Kami akan mempertimbangkan permintaan untuk mengalih keluar pautan tetapi kami tidak berkewajipan untuk berbuat demikian atau untuk membalas terus kepada anda.</p>
              <p>Kami tidak memastikan bahawa maklumat di laman sesawang ini adalah betul, kami tidak menjamin kesempurnaan atau ketepatannya; kami juga tidak berjanji untuk memastikan laman sesawang kekal tersedia atau bahan di laman sesawang sentiasa dikemas kini.</p>
            </div>
            <div id='disclaimer'>
              <h5>Penafian</h5>
              <p>Setakat yang dibenarkan oleh undang-undang yang terpakai, kami mengecualikan semua representasi, waranti dan syarat yang berkaitan dengan laman sesawang kami dan penggunaan laman sesawang ini. Tiada apa-apa dalam penafian ini akan:</p>
              <ul>
                <li>menghadkan atau mengecualikan liabiliti kami atau anda untuk kematian atau kecederaan peribadi;</li>
                <li>menghadkan atau mengecualikan liabiliti kami atau anda untuk penipuan atau salah nyata penipuan;</li>
                <li>menghadkan mana-mana liabiliti kami atau anda dalam apa jua cara yang tidak dibenarkan di bawah undang-undang yang terpakai; atau</li>
                <li>kecualikan mana-mana liabiliti kami atau anda yang mungkin tidak dikecualikan di bawah undang-undang yang terpakai.</li>
              </ul>
              <p>Penghadan dan larangan liabiliti yang ditetapkan dalam Seksyen ini dan di tempat lain dalam penafian ini:</p>
              <ol type='a'>
                <li>tertakluk kepada perenggan sebelumnya; dan</li>
                <li>mengawal semua liabiliti yang timbul di bawah penafian, termasuk liabiliti yang timbul dalam kontrak dan untuk pelanggaran kewajipan berkanun.</li>
              </ol>
              <p>Selagi laman sesawang dan maklumat serta perkhidmatan di laman sesawang disediakan secara percuma, kami tidak akan bertanggungjawab ke atas sebarang kehilangan atau kerosakan dalam apa jua bentuk.</p>
            </div>
            <div id='privacy'>
              <h4>Dasar Privasi</h4>
              <p>Di RoIPMARS, boleh diakses daripada roipmars.org.my dan semua sub-domainnya, salah satu keutamaan utama kami ialah privasi pelawat kami. Dokumen Dasar Privasi ini mengandungi jenis maklumat yang dikumpul dan direkodkan oleh RoIPMARS dan cara kami menggunakannya.</p>
              <p>Jika anda mempunyai soalan tambahan atau memerlukan maklumat lanjut tentang Dasar Privasi kami, jangan teragak-agak untuk menghubungi kami.</p>
              <p>Dasar Privasi ini hanya terpakai untuk aktiviti dalam talian kami dan sah untuk pelawat ke laman web kami berkenaan dengan maklumat yang mereka kongsi dan/atau kumpulkan dalam RoIPMARS. Dasar ini tidak terpakai kepada sebarang maklumat yang dikumpul di luar talian atau melalui saluran selain laman web ini.</p>
            </div>
            <div id='agreement'>
              <h5>Persetujuan</h5>
              <p>Dengan menggunakan laman web kami, anda dengan ini bersetuju dengan Dasar Privasi kami dan bersetuju dengan termanya.</p>
            </div>
            <div id='collected-info'>
              <h5>Maklumat yang kami kumpul</h5>
              <p>Maklumat peribadi yang diminta, dan sebab mengapa anda diminta memberikannya, akan dijelaskan kepada anda pada ketika kami meminta anda memberikan maklumat peribadi anda.</p>
              <p>Jika anda menghubungi kami secara terus, kami mungkin menerima maklumat tambahan tentang anda seperti nama, alamat e-mel, nombor telefon, kandungan mesej dan/atau lampiran yang mungkin anda hantar kepada kami dan sebarang maklumat lain yang anda boleh pilih untuk berikan.</p>
              <p>Apabila anda mendaftar akaun atau keahlian, kami mungkin meminta maklumat peribadi anda, termasuk seperti nama, alamat, alamat e-mel dan nombor telefon.</p>
              <h5>Cara kami menggunakan maklumat anda</h5>
              <p>Kami menggunakan maklumat yang kami kumpulkan dalam pelbagai cara, termasuk untuk:</p>
              <ul>
                <li>Menyediakan, mengendalikan dan menyelenggara laman web kami</li>
                <li>Perbaiki, peribadikan dan kembangkan laman web kami</li>
                <li>Fahami dan analisis cara anda menggunakan laman web kami</li>
                <li>Membangunkan produk, perkhidmatan, ciri dan fungsi baharu</li>
                <li>Berkomunikasi dengan anda, sama ada secara langsung atau melalui salah satu rakan kongsi kami, termasuk untuk perkhidmatan pelanggan, untuk memberikan anda kemas kini dan maklumat lain yang berkaitan dengan laman web, dan untuk tujuan pemasaran dan promosi</li>
                <li>Hantar e-mel kepada anda</li>
                <li>Cari dan cegah penipuan</li>
              </ul>
            </div>
            <div id='logging'>
              <h5>Fail Log</h5>
              <p>RoIPMARS mengikut prosedur standard menggunakan fail log. Fail ini merekodkan pelawat apabila mereka melawat laman web. Semua syarikat pengehosan melakukan ini dan sebahagian daripada analisis perkhidmatan pengehosan. Maklumat yang dikumpul oleh fail log termasuk alamat protokol Internet (IP), jenis pelayar, Pembekal Perkhidmatan Internet (ISP), tarikh dan masa, halaman rujukan/keluar, dan mungkin bilangan klik. Ini tidak dikaitkan dengan sebarang maklumat yang boleh dikenal pasti secara peribadi. Tujuan maklumat adalah untuk menganalisis arah aliran, mentadbir laman, menjejaki pergerakan pengguna di laman web, dan mengumpul maklumat demografi.</p>
            </div>
            <div id='cookies2'>
              <h5>Kuki dan Suar Web</h5>
              <p>Seperti mana-mana laman web lain, RoIPMARS menggunakan 'kuki'. Kuki ini digunakan untuk menyimpan maklumat termasuk keutamaan pelawat, dan halaman di laman web yang diakses atau dilawati oleh pelawat. Maklumat ini digunakan untuk mengoptimumkan pengalaman pengguna dengan menyesuaikan kandungan halaman web kami berdasarkan jenis pelayar pelawat dan/atau maklumat lain.</p>
              <h5>Kuki DART Google DoubleClick</h5>
              <p>Google ialah salah satu vendor pihak ketiga di laman kami. Ia juga menggunakan kuki, dikenali sebagai kuki DART, untuk menyiarkan iklan kepada pelawat laman kami berdasarkan lawatan mereka ke RoIPMARS dan laman lain di internet. Walau bagaimanapun, pelawat boleh memilih untuk menolak penggunaan kuki DART dengan melawati iklan Google dan Dasar Privasi rangkaian kandungan di URL berikut <a href='https://policies.google.com/technologies/ads?hl=ms&gl=my' target='_blank' rel='noopener' rel='noopener noreferrer'>Google</a></p>
            </div>
            <div id='advertisement'>
              <h5>Dasar Privasi Rakan Kongsi Pengiklanan</h5>
              <P>Anda boleh merujuk senarai ini untuk mencari Dasar Privasi bagi setiap rakan kongsi pengiklanan RoIPMARS.</p>
              <ul>
                <li><a href='https://policies.google.com/technologies/ads?hl=ms&gl=my' target='_blank' rel='noopener' rel='noopener noreferrer'>Google</a></li>
              </ul>
              <p>Pelayan iklan pihak ketiga atau rangkaian iklan menggunakan teknologi seperti kuki, JavaScript atau Suar Web yang digunakan dalam iklan dan pautan masing-masing yang dipaparkan di RoIPMARS, yang dihantar terus ke pelayar pengguna. Mereka secara automatik menerima alamat IP anda apabila ini berlaku. Teknologi ini digunakan untuk mengukur keberkesanan kempen pengiklanan mereka dan/atau untuk memperibadikan kandungan pengiklanan yang anda lihat di laman web yang anda lawati.</p>
              <p>Ambil perhatian bahawa RoIPMARS tidak mempunyai akses kepada atau kawalan ke atas kuki ini yang digunakan oleh pengiklan pihak ketiga.</p>
            </div>
            <div id='third-party'>
              <h5>Dasar Privasi Pihak Ketiga</h5>
              <p>Dasar Privasi RoIPMARS tidak terpakai kepada pengiklan atau laman web lain. Oleh itu, kami menasihatkan anda untuk merujuk Dasar Privasi masing-masing bagi pelayan iklan pihak ketiga ini untuk mendapatkan maklumat yang lebih terperinci. Ia mungkin termasuk amalan dan arahan mereka tentang cara memilih keluar daripada pilihan tertentu. </p>
              <p>Anda boleh memilih untuk melumpuhkan kuki melalui pilihan pelayar individu anda. Untuk mengetahui maklumat lebih terperinci tentang pengurusan kuki dengan pelayan web tertentu, ia boleh didapati di laman web pelayar masing-masing.</p>
            </div>
            <div id='kids-info'>
              <h5>Maklumat Kanak-kanak</h5>
              <p>Satu lagi bahagian keutamaan kami ialah menambah perlindungan untuk kanak-kanak semasa menggunakan internet. Kami menggalakkan ibu bapa dan penjaga untuk memerhati, mengambil bahagian dalam dan/atau memantau serta membimbing aktiviti dalam talian mereka.</p>
              <p>RoIPMARS tidak secara sengaja mengumpul sebarang Maklumat Pengenalan Peribadi daripada kanak-kanak di bawah umur 18 tahun. Jika anda berpendapat bahawa anak anda memberikan maklumat seperti ini di laman web kami, kami amat menggalakkan anda menghubungi kami dengan segera dan kami akan melakukan usaha yang terbaik untuk mengalih keluar maklumat sedemikian dengan segera daripada rekod kami.</p>
            </div>
            <div id='return'>
              <h4>Dasar Pemulangan dan Bayaran Balik</h4>
              <p>Terima kasih kerana membeli-belah di RoIPMARS. Jika, atas sebarang sebab, anda tidak berpuas hati sepenuhnya dengan pembelian / langganan, kami menjemput anda untuk menyemak dasar kami mengenai bayaran balik dan pemulangan. Terma berikut terpakai untuk sebarang produk / perkhidmatan yang anda beli / langgan dengan Kami.</p>
            </div>
            <div id='interpretation'>
              <h5>Tafsiran</h5>
              <p>Perkataan yang huruf awalnya ditulis dengan huruf besar mempunyai makna yang ditakrifkan di bawah syarat berikut. Takrifan berikut hendaklah mempunyai makna yang sama tanpa mengira sama ada ia muncul dalam bentuk tunggal atau jamak.</p>
              <h5>Takrif</h5>
              <p>Untuk tujuan Polisi Pemulangan dan Bayaran Balik ini:</p>
              <ul>
                <li><strong>Organisasi</strong> (dirujuk sama ada &quot;Organisasi&quot;, &quot;Kami&quot; dalam Perjanjian ini) merujuk kepada PERSATUAN PEMINAT RADIO KOMUNIKASI (ROIP(RADIO OVER NTERNET PROTOKOL)) [PPM-006-10-01062020]</li>
                <li><strong>Barang</strong> merujuk kepada produk / khidmat yang ditawarkan untuk dijual pada Perkhidmatan.</li>
                <li><strong>Pesanan</strong> bermaksud permintaan oleh Anda untuk membeli Barang daripada Kami.</li>
                <li><strong>Perkhidmatan</strong> merujuk kepada laman Web dan/atau khidmat.</li>
                <li><strong>laman web</strong> merujuk kepada RoIPMARS, boleh diakses daripada roipmars.org.my dan semua sub-domainnya</li>
                <li><strong>Anda</strong> bermaksud individu yang mengakses atau menggunakan Perkhidmatan, atau organisasi, atau entiti undang-undang lain bagi pihak individu tersebut mengakses atau menggunakan Perkhidmatan, mengikut mana yang berkenaan.</li>
              </ul>
            </div>
            <div id='cancellation'>
              <h5>Hak Pembatalan Pesanan Anda</h5>
              <p>Anda berhak membatalkan Pesanan Anda dalam masa 3 hari tanpa memberikan sebarang sebab untuk berbuat demikian.</p>
              <p>Tarikh akhir untuk membatalkan Pesanan ialah 3 hari dari tarikh Anda menerima Barangan atau pada mana pihak ketiga yang anda lantik, yang bukan pembawa, mengambil milik produk yang dihantar.</p>
              <p>Untuk melaksanakan hak pembatalan Anda, Anda mesti memaklumkan Kami tentang keputusan anda melalui pernyataan yang jelas. Anda boleh memaklumkan kepada kami keputusan anda dengan:</p>
              <ul>
                <li>Melalui e-mel: member@roipmars.org.my</li>
              </ul>
              <p>Kami akan membayar balik kepada Anda tidak lewat daripada 14 hari bekerja dari hari Kami menerima Barang yang dikembalikan. Kami akan menggunakan cara pembayaran yang sama seperti yang Anda gunakan untuk Pesanan dan Anda tidak akan dikenakan sebarang bayaran untuk pembayaran balik tersebut.</p>
            </div>
            <div id='retuning'>
              <h5>Syarat untuk Pemulangan</h5>
              <p>Untuk memastikan Barangan layak untuk pemulangan, sila pastikan bahawa:</p>
              <ul>
                <li>Barang telah dibeli dalam 3 hari yang lalu</li>
                <li>Barang berada dalam pembungkusan asal</li>
              </ul>
              <p>Barang berikut tidak boleh dikembalikan:</p>
              <ul>
                <li>Pembekalan Barangan yang dibuat mengikut spesifikasi Anda atau diperibadikan dengan jelas.</li>
                <li>Pembekalan Barangan yang mengikut sifatnya tidak sesuai untuk dipulangkan, merosot dengan cepat atau di mana tarikh luputnya tamat.</li>
                <li>Pembekalan Barangan yang tidak sesuai untuk dipulangkan atas sebab perlindungan kesihatan atau kebersihan dan telah dibuka selepas penghantaran.</li>
                <li>Pembekalan Barangan yang, selepas penghantaran, mengikut sifatnya, tidak dapat dipisahkan dengan barang lain.</li>
              </ul>
              <p>Kami berhak untuk menolak pemulangan mana-mana barangan yang tidak memenuhi syarat pemulangan di atas mengikut budi bicara kami sendiri.</p>
              <p>Hanya Barang berharga biasa boleh dikembalikan. Malangnya, Barangan yang dijual tidak boleh dikembalikan. Pengecualian ini mungkin tidak terpakai kepada Anda jika ia tidak dibenarkan oleh undang-undang yang berkenaan.</p>
              <h5>Pemulangan Barang</h5>
              <p>Anda bertanggungjawab ke atas kos dan risiko memulangkan Barang kepada Kami. Anda hendaklah menghantar Barangan di alamat berikut:</p>
              <p>31, LORONG NALURI SUKMA 8/13, SEKSYEN 8, BANDAR PUNCAK ALAM, 42300 KUALA SELANGOR, SELANGOR DARUL EHSAN, MALAYSIA</p>
              <p>Kami tidak akan bertanggungjawab ke atas Barangan yang rosak atau hilang semasa penghantaran pulangan. Oleh itu, Kami mengesyorkan perkhidmatan mel yang diinsuranskan dan boleh dikesan. Kami tidak akan mengeluarkan bayaran balik tanpa penerimaan sebenar Barang atau bukti penghantaran pulangan yang diterima.</p>
              <h5>Hadiah</h5>
              <p>Jika Barangan ditandakan sebagai hadiah apabila dibeli dan kemudian dihantar terus kepada anda, Anda akan menerima kredit hadiah untuk nilai pemulangan anda. Setelah produk yang dipulangkan diterima, sijil hadiah akan dihantar kepada Anda.</p>
              <p>Jika Barangan tidak ditandakan sebagai hadiah semasa dibeli, atau pemberi hadiah telah menghantar Pesanan kepada diri mereka sendiri untuk memberikannya kepada Anda kemudian, Kami akan menghantar bayaran balik kepada pemberi hadiah.</p>
              <h5>Hubungi Kami</h5>
              <p>Jika anda mempunyai sebarang soalan tentang Polisi Pemulangan dan Bayaran Balik kami, sila hubungi kami:</p>
              <ul>
                <li>Melalui e-mel: member@roipmars.org.my</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php require_once 'footer.php' ?>
  </body>

</html>