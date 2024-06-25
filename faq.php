<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>Soalan Lazim</title>
  </head>

  <body>
    <?php require_once 'header.php' ?>
    <div class='container'>
      <h1 class='h1 text-center'>Soalan Lazim</h1>
      <div class='row'>
        <div class='col-8'>
          <div class='col-auto mb-3'>
            <h3 class='text-capitalize text-center text-primary-emphasis'>Rangkaian RoIPMARS</h3>
            <div class='accordion' id='rmsfaq'>
              <div class='accordion-item'>
                <div class='accordion-header' id='rms1'>
                  <button type='button' class='accordion-button collapsed bg-primary-subtle text-primary-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapserms1' aria-expanded='false' aria-controls='collapserms1'><i class='bi-1-circle-fill text-primary-emphasis fs-5 pe-3'></i>Bagaimana cara untuk menjadi ahli RoIPMARS?</button>
                </div>
                <div id='collapserms1' class='accordion-collapse collapse' aria-labelledby='rms1' data-bs-parent='#rmsfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Anda boleh layari laman <a class='text-muted' href='member'>Ahli</a> dan dapatkan borang keahlian disana. Terdapat 2 kaedah pengisian borang iaitu melalui Google Form, dan fail PDF. Anda dikehendaki kembalikan borang tersebut dengan lengkap kepada Setiausaha Agung, Persatuan Peminat Radio Komunikasi &lpar;ROIP&rpar; bersama dengan bukti yuran pendaftaran, salinan pengenalan diri, dan sekeping gambar berukuran pasport.</p>
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <div class='accordion-header' id='rms2'>
                  <button type='button' class='accordion-button collapsed bg-primary-subtle text-primary-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapserms2' aria-expanded='false' aria-controls='collapserms2'><i class='bi-2-circle-fill text-primary-emphasis fs-5 pe-3'></i>Saya telah berdaftar sebagai Ahli CB RoIPMARS, adakah saya secara sah menjadi Ahli Persatuan?</button>
                </div>
                <div id='collapserms2' class='accordion-collapse collapse' aria-labelledby='rms2' data-bs-parent='#rmsfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Tidak sama sekali. Identiti ahli CB dan ahli RoIPMARS adalah berbeza. Anda mendaftar sebagai ahli CB rangkaian kami hanya sebagai rekod bagi mengelakkan pertindihan isyarat panggilan jalur rakyat yang digunakan.</p>
                    <p class='m-0'>Antara awalan isyarat panggilan yang digunakan oleh CB Rangkaian RoIPMARS adalah:</p>
                    <table class='table table-sm table-bordered text-center align-middle m-0'>
                      <tbody>
                        <tr class='fw-bold text-primary-emphasis'>
                          <td>&lbrack;🇲🇾&rbrack; 113MSA₁A₂A₃</td>
                          <td>&lbrack;🇲🇾&rbrack; 58MSA₁A₂A₃</td>
                          <td>&lbrack;🇮🇩&rbrack; 91MSA₁A₂A₃</td>
                          <td>&lbrack;🇹🇭&rbrack; 153MSA₁A₂A₃</td>
                          <td>&lbrack;🇧🇳&rbrack; 225MSA₁A₂A₃</td>
                        </tr>
                      </tbody>
                      <caption class='fw-bold text-center'>A₁A₂A₃ hendaklah mewakili sebarang abjad A hingga Z</caption>
                    </table>
                    <p class='m-0'>Anda digalakkan untuk berdaftar sebagai Ahli Persatuan yang mempunyai pelbagai kelebihan berbanding Ahli CB kami.</p>
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <div class='accordion-header' id='rms3'>
                  <button type='button' class='accordion-button collapsed bg-primary-subtle text-primary-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapserms3' aria-expanded='false' aria-controls='collapserms3'><i class='bi-3-circle-fill text-primary-emphasis fs-5 pe-3'></i>Mengapa sambungan ke pelayan TeamSpeak3 selain RoIPMARS gagal pada peranti saya?</button>
                </div>
                <div id='collapserms3' class='accordion-collapse collapse' aria-labelledby='rms3' data-bs-parent='#rmsfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Pelayan TeamSpeak3 milik <abbr title='roipmars.org.my'>Rangkaian RoIPMARS</abbr> merupakan sebuah penyedia perkhidmatan berlesen yang dibiaya oleh ahli-ahli Persatuan Peminat Radio Komunikasi &lpar;ROIP&rpar;. Tambahan lagi, pelayan milik Rangkaian RoIPMARS menyokong sambungan dari semua versi pengguna.</p>
                    <p class='m-0'>Terdapat beberapa faktor yang tidak membenarkan anda masuk ke pelayan selain Rangkaian RoIPMARS, antaranya:</p>
                    <table class='table table-sm table-bordered text-center align-middle m-0'>
                      <thead>
                        <tr>
                          <th>Ralat</th>
                          <th>Penerangan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class='fw-bold fst-italic'>server outdated</td>
                          <td>pelayan tidak menyokong sambungan melalui perisian yang anda gunakan &lpar;pengguna&rpar;</td>
                        </tr>
                        <tr>
                          <td class='fw-bold fst-italic'>client outdated</td>
                          <td>perisian yang anda gunakan tidak disokong oleh pelayan &lpar;pengguna&rpar;</td>
                        </tr>
                        <tr>
                          <td class='fw-bold fst-italic'>TSDNS error</td>
                          <td>i. kesilapan alamat pelayan &lpar;pengguna&rpar;<br>ii. ralat tetapan DNS &lpar;penyedia perkhidmatan&rpar;</td>
                        </tr>
                        <tr>
                          <td class='fw-bold fst-italic'>flood prevention</td>
                          <td>ralat tetapan pelayan &lpar;penyedia perkhidmatan&rpar;</td>
                        </tr>
                        <tr>
                          <td class='fw-bold fst-italic'>server blacklisted</td>
                          <td>pelayan disenarai hitam &lpar;TeamSpeak Systems, Inc.&rpar;</td>
                        </tr>
                        <tr>
                          <td class='fw-bold fst-italic'>connection error</td>
                          <td>i. kesilapan alamat/ip pelayan &lpar;pengguna&rpar;<br>ii. pelayan tidak beroperasi &lpar;penyedia perkhidmatan&rpar;</td>
                        </tr>
                      </tbody>
                    </table>
                    <p class='m-0'>Sekiranya anda tidak berjaya log masuk ke pelayan Rangkaian RoIPMARS &lbrack;<a href='ts3server://roipmars.org.my'>roipmars.org.my</a>&rbrack;, berkemungkinan sumber perisian yang digunakan tidak menyokong fungsi &apos;DNS <span class='fw-light fst-italic'>&lpar;Domain Name System&rpar;</span>&apos;.</p>
                    <p class='m-0'>Disarankan untuk memasang aplikasi dari <a href='https://sl.roipmars.org.my/zlee24' target='_blank'>Google Play Store</a> / <a href='https://sl.roipmars.org.my/0e3qul' target='_blank'>Apple App Store</a> / <a href='https://sl.roipmars.org.my/qudkou' target='_blank'>Microsoft Store</a>.</p>
                    <p class='m-0'>Bagi pengguna Android, anda boleh mencuba perisian fungsi terhad dengan memuat turun disini: <a href='https://sl.roipmars.org.my/qinlu6' download>ts-3.0.3.1.apk</a></p>
                    <p class='m-0'>Pihak Pentadbir Rangkaian RoIPMARS komited menyediakan perkhidmatan terbaik kepada semua pengguna.</p>
                    <hr>
                    <p class='m-0'>Senarai pelayan TeamSpeak lain;</p>
                    <table class='table table-sm table-responsive table-striped table-hover align-middle text-center caption-top'>
                      <caption class='text-center'><i class='bi-exclamation-triangle-fill text-danger-emphasis'></i> &mdash; Pelayan telah disenarai hitam oleh TeamSpeak Systems, Inc.<br><i class='bi-exclamation-diamond-fill text-warning-emphasis'></i> &mdash; Pemilik IKRAP RAPI &lpar;JZ&rpar; sahaja.</caption>
                      <thead>
                        <tr>
                          <th>Pelayan</th>
                          <th>Alamat</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class='table-primary'>
                          <td>RoIPMARS Network</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://roipmars.org.my' target='_blank' rel='noopener noreferrer'>roipmars.org.my</a></td>
                        </tr>
                        <tr>
                          <td>Sabah RoIP Community &lpar;SRC&rpar;</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://sabah.roipmars.org.my' target='_blank' rel='noopener noreferrer'>sabah.roipmars.org.my</a></td>
                        </tr>
                        <tr>
                          <td>ANDALAS</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://103.189.235.112:2112' target='_blank' rel='noopener noreferrer'>103.189.235.112:2112</a></td>
                        </tr>
                        <tr>
                          <td>ARIZONA</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://128.199.196.14:882' target='_blank' rel='noopener noreferrer'>128.199.196.14:882</a></td>
                        </tr>
                        <tr>
                          <td>BORNEO AMATIR</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://103.63.25.56' target='_blank' rel='noopener noreferrer'>103.63.25.56</a></td>
                        </tr>
                        <tr>
                          <td>CAKRAWALA <sup><i class='bi-exclamation-triangle-fill text-danger-emphasis'></i></sup></td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://202.4.186.132:9965' target='_blank' rel='noopener noreferrer'>202.4.186.132:9965</a></td>
                        </tr>
                        <tr>
                          <td>DELI SERDANG</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://38.47.176.16' target='_blank' rel='noopener noreferrer'>38.47.176.16</a></td>
                        </tr>
                        <tr>
                          <td>eQSO DEWA <sup><i class='bi-exclamation-triangle-fill text-danger-emphasis'></i></sup></td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://101.255.4.194:9983' target='_blank' rel='noopener noreferrer'>101.255.4.194:9983</a></td>
                        </tr>
                        <tr>
                          <td>eQSO NASIONAL <sup><i class='bi-exclamation-triangle-fill text-danger-emphasis'></i></sup></td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://ts3.nasional.net.id' target='_blank' rel='noopener noreferrer'>ts3.nasional.net.id</a></td>
                        </tr>
                        <tr>
                          <td>HAM RADIO INDONESIA</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://hamradio.id' target='_blank' rel='noopener noreferrer'>hamradio.id</a></td>
                        </tr>
                        <tr>
                          <td>IJEN JENGGIRAT <sup><i class='bi-exclamation-triangle-fill text-danger-emphasis'></i></sup></td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://128.199.196.14' target='_blank' rel='noopener noreferrer'>128.199.196.14</a></td>
                        </tr>
                        <tr>
                          <td>LATIMOJONG</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://latimojong.com' target='_blank' rel='noopener noreferrer'>latimojong.com</a></td>
                        </tr>
                        <tr>
                          <td>LINTAS NUSANTARA</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://ts3linus.my.id' target='_blank' rel='noopener noreferrer'>ts3linus.my.id</a></td>
                        </tr>
                        <tr>
                          <td>PELANGI AMATIR</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://101.255.4.194:9981' target='_blank' rel='noopener noreferrer'>101.255.4.194:9981</a></td>
                        </tr>
                        <tr>
                          <td>PHINISI</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://phinisi.my.id' target='_blank' rel='noopener noreferrer'>phinisi.my.id</a></td>
                        </tr>
                        <tr>
                          <td>RAJAWALI</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://103.13.207.133:333' target='_blank' rel='noopener noreferrer'>103.13.207.133:333</a></td>
                        </tr>
                        <tr>
                          <td>RINJANI</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://91.192.81.104:3726' target='_blank' rel='noopener noreferrer'>91.192.81.104:3726</a></td>
                        </tr>
                        <tr>
                          <td>SAMERNET <sup><i class='bi-exclamation-triangle-fill text-danger-emphasis'></i></sup></td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://202.4.186.132:9956' target='_blank' rel='noopener noreferrer'>202.4.186.132:9956</a></td>
                        </tr>
                        <tr>
                          <td>SARUMA BACAN</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://sarumabacan.my.id' target='_blank' rel='noopener noreferrer'>sarumabacan.my.id</a></td>
                        </tr>
                        <tr>
                          <td>TAKALAR</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://103.226.138.143:333' target='_blank' rel='noopener noreferrer'>103.226.138.143:333</a></td>
                        </tr>
                        <tr>
                          <td>TANAH RENCONG</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://206.237.98.143' target='_blank' rel='noopener noreferrer'>206.237.98.143</a></td>
                        </tr>
                        <tr>
                          <td>TUDUNG SAJI</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://203.55.176.240' target='_blank' rel='noopener noreferrer'>203.55.176.240</a></td>
                        </tr>
                      </tbody>
                      <tbody class='table-group-divider'>
                        <tr>
                          <td>KOPDARMOBILE</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://kopdarmobile.id' target='_blank' rel='noopener noreferrer'>kopdarmobile.id</a></td>
                        </tr>
                        <tr>
                          <td>Ts3 RoIP KRAP <sup><i class='bi-exclamation-diamond-fill text-warning-emphasis'></i></sup></td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://ts3.krap.or.id' target='_blank' rel='noopener noreferrer'>ts3.krap.or.id</a></td>
                        </tr>
                        <tr>
                          <td>ROIP MERDEKA <sup><i class='bi-exclamation-diamond-fill text-warning-emphasis'></i></sup></td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://ts.roipmerdeka.id' target='_blank' rel='noopener noreferrer'>ts.roipmerdeka.id</a></td>
                        </tr>
                        <tr>
                          <td>RADIO DIGITAL 272</td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://103.49.228.211:9988' target='_blank' rel='noopener noreferrer'>103.49.228.211:9988</a></td>
                        </tr>
                        <tr>
                          <td>EMERGENCY RESPONSE TEAMS <sup><i class='bi-exclamation-triangle-fill text-danger-emphasis'></i></sup></td>
                          <td><a class='text-reset text-decoration-none font-monospace' href='ts3server://103.130.166.160:9988' target='_blank' rel='noopener noreferrer'>103.130.166.160:9988</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <div class='accordion-header' id='rms4'>
                  <button type='button' class='accordion-button collapsed bg-primary-subtle text-primary-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapserms4' aria-expanded='false' aria-controls='collapserms4'><i class='bi-4-circle-fill text-primary-emphasis fs-5 pe-3'></i>Mengapa saya gagal memasang &apos;apk&apos; TeamSpeak3 yang diberikan rakan pada peranti iOS saya?</button>
                </div>
                <div id='collapserms4' class='accordion-collapse collapse' aria-labelledby='rms4' data-bs-parent='#rmsfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Sistem operasi dan perisian yang digunakan pada kedua dua peranti iOS dan Android adalah berbeza. iOS menggunakan kod sumber tertutup yang dibangunkan sendiri oleh Apple Inc., manakala Android pula menggunakan kod sumber terbuka yang dimiliki oleh Google LLC.</p>
                    <p>Tahap keselamatan perisian dari pihak Apple tidak membenarkan pemasangan mana-mana aplikasi selain daripada Apple App Store.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-auto mb-3'>
            <h3 class='text-capitalize text-center text-secondary-emphasis'>Gerbang Audio / Radio</h3>
            <div class='accordion' id='gwfaq' aria-multiselectable='true'>
              <div class='accordion-item'>
                <div class='accordion-header' id='gw1'>
                  <button type='button' class='accordion-button collapsed bg-secondary-subtle text-secondary-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapsegw1' aria-expanded='false' aria-controls='collapsegw1'><i class='bi-1-circle-fill text-secondary-emphasis fs-5 pe-3'></i>Mengapa kualiti audio mempunyai kelewatan dan tidak jernih?</button>
                </div>
                <div id='collapsegw1' class='accordion-collapse collapse' aria-labelledby='gw1' data-bs-parent='#gwfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Segala gerbang yang disediakan adalah kepunyaan INDIVIDU sepenuhnya. Pelbagai faktor perlu diambil kira untuk menyediakan gerbang tersebut, antaranya:</p>
                    <ol class='m-0' type='i'>
                      <li>spesifikasi &amp; kestabilan peranti</li>
                      <li>kelajuan, kependaman &amp; kestabilan sambungan</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <div class='accordion-header' id='gw2'>
                  <button type='button' class='accordion-button collapsed bg-secondary-subtle text-secondary-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapsegw2' aria-expanded='false' aria-controls='collapsegw2'><i class='bi-2-circle-fill text-secondary-emphasis fs-5 pe-3'></i>Bolehkah saya membuat sambungan ke RoIPMARS?</button>
                </div>
                <div id='collapsegw2' class='accordion-collapse collapse' aria-labelledby='gw2' data-bs-parent='#gwfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Segala sambungan dari/ke komuniti/kumpulan lain adalah dialu-alukan. Namun yang demikian, pemilik gerbang wajib menetapkan &apos;nickname&apos; berpandukan pada format ini;</p>
                    <p class='m-0 text-center fw-bold font-monospace user-select-none'>CALLSIGN&lt;jarak&gt;FREKUENSI/ALAMAT&lt;jarak&gt;LOKAL</p>
                    <p class='m-0 text-center'>contoh: <span class='fst-italic font-monospace user-select-none'>9W4GPA 144.8250MHz KUALA SELANGOR</span></p>
                    <p class='m-0'>Pihak RoIPMARS tidak akan bertanggungjawab keatas segala kejadian yang tidak diingini semasa sambungan berlansung. Ianya adalah tanggungjawab sepenuhnya pemilik sambugan itu sendiri.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-auto mb-3'>
            <h3 class='text-capitalize text-center text-success-emphasis'>Jalur Amatur</h3>
            <div class='accordion' id='hamfaq' aria-multiselectable='true'>
              <div class='accordion-item'>
                <div class='accordion-header' id='ham1'>
                  <button type='button' class='accordion-button collapsed bg-success-subtle text-success-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapseham1' aria-expanded='false' aria-controls='collapseham1'><i class='bi-1-circle-fill text-success-emphasis fs-5 pe-3'></i>Bagaimana cara untuk menyertai aktiviti net yang dijalankan?</button>
                </div>
                <div id='collapseham1' class='accordion-collapse collapse' aria-labelledby='ham1' data-bs-parent='#hamfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Anda boleh dapatkan maklumat pemasangan aplikasi di <a class='text-muted' href='howto'>Tutorial</a> dan sertai aktiviti dalam talian kami disana.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-auto mb-3'>
            <h3 class='text-capitalize text-center text-danger-emphasis'>Jalur Rakyat</h3>
            <div class='accordion' id='cbfaq' aria-multiselectable='true'>
              <div class='accordion-item'>
                <div class='accordion-header' id='cb1'>
                  <button type='button' class='accordion-button collapsed bg-danger-subtle text-danger-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapsecb1' aria-expanded='false' aria-controls='collapsecb1'><i class='bi-1-circle-fill text-danger-emphasis fs-5 pe-3'></i>Adakah lesen dari MCMC (SKMM) diperlukan untuk penggunaan CB RADIO?</button>
                </div>
                <div id='collapsecb1' class='accordion-collapse collapse' aria-labelledby='cb1' data-bs-parent='#cbfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Anda tidak perlu memohon sebarang lesen seperti RADIO AMATUR atau Komersial yang lain asalkan ianya mengunakan jalur CB atau jalur PRS kerana anda dibenarkan menggunakan jalur tersebut tanpa lesen.</p>
                    <div class='alert alert-light' role='alert'>
                      <p class='h5'>Jalur frekuensi</p>
                      <p>Peranti perkhidmatan radio peribadi hanya boleh menggunakan mana-mana jalur frekuensi berikut yang ditetapkan untuk tugasan kelas ini, antara kegunaan lain, atas dasar bukan eksklusif yang dikongsi:</p>
                      <ol type='i'>
                        <li>26.965 MHz ke 27.405 MHz</li>
                        <li>446.00625 MHz ke 446.196875 MHz</li>
                        <li class='text-decoration-line-through opacity-25'>>477.0125 MHz ke 477.4875 MHz</li>
                        <li class='text-decoration-line-through opacity-25'>>477.5250 MHz ke 477.9875 MHz</li>
                      </ol>
                      <hr>
                      <p class='h5'>Tugasan kelas</p>
                      <p>Tugasan kelas ini memberikan hak kepada mana-mana orang untuk mengendalikan peranti PRS tertakluk kepada:</p>
                      <ol type='a'>
                        <li>syarat-syarat seperti yang dinyatakan dalam perenggan 4 jadual ini; dan</li>
                        <li>peranti yang beroperasi dalam jalur frekuensi seperti yang dinyatakan dalam lajur kedua Jadual 4-1, 4-2, dan 4-3.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <div class='accordion-header' id='cb2'>
                  <button type='button' class='accordion-button collapsed bg-danger-subtle text-danger-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapsecb2' aria-expanded='false' aria-controls='collapsecb2'><i class='bi-2-circle-fill text-danger-emphasis fs-5 pe-3'></i>Adakah perlu pendaftaran dengan mana-mana kelab atau SKMM untuk mendapatkan Isyarat Panggilan?</button>
                </div>
                <div id='collapsecb2' class='accordion-collapse collapse' aria-labelledby='cb2' data-bs-parent='#cbfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Anda tidak perlu memohon, mendaftar atau membayar apa-apa bayaran untuk isyarat panggilan kerana pengguna CB RADIO tidak memerlukan sebarang isyarat panggilan yang khusus seperti Radio Amatur. Anda boleh cipta sendiri isyarat panggilan yang diperlukan sebagai pengenalan kepada rakan-rakan kumpulan anda atau ahli keluarga anda bagi memudahkan perhubungan melalui radio dua hala atau CB RADIO.</p>
                    <p class='alert alert-danger m-0'>Namun begitu, permohonan diwajibkan sekiranya kelab atau organisasi tersebut memerlukannya bagi mengelakkan pertindihan sesama ahli.</p>
                    <p class='m-0'>Antara sebutan fonetik yang digunakan oleh stesen seluruh dunia adalah seperti diatas</p>
                    <p class='h5 m-0'>Penggunaan Isyarat Panggilan</p>
                    <p class='m-0'>Tiada isyarat panggilan digunakan selain dalam bidang operasi di mana isyarat panggilan tersebut diperlukan.</p>
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <div class='accordion-header' id='cb3'>
                  <button type='button' class='accordion-button collapsed bg-danger-subtle text-danger-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapsecb3' aria-expanded='false' aria-controls='collapsecb3'><i class='bi-3-circle-fill text-danger-emphasis fs-5 pe-3'></i>Dimana saya boleh membeli peralatan CB RADIO?</button>
                </div>
                <div id='collapsecb3' class='accordion-collapse collapse' aria-labelledby='cb3' data-bs-parent='#cbfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Anda boleh membeli melalui e-dagang di Malaysia, melalui rakan-rakan CB atau kedai Radio Amatur samada di Jalan Pasar, Plaza Low Yatt, atau Plaza Digital Mall. Yang penting ianya adalah CB RADIO yang jalurnya telah diaturkan seperti diatas. Kami mencadangkan anda tidak membeli melalui e-dagang luar negara kerana nanti anda akan kerugian masa, wang dan sebagainya di atas kerenah birokrasi yang bermacam-macam samada dari pihak kastam ataupun pihak SIRIM mengenai peralatan radio.</p>
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <div class='accordion-header' id='cb4'>
                  <button type='button' class='accordion-button collapsed bg-danger-subtle text-danger-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapsecb4' aria-expanded='false' aria-controls='collapsecb4'><i class='bi-4-circle-fill text-danger-emphasis fs-5 pe-3'></i>Berapa harga sebuah CB RADIO jenis Handy atau jenis Rig?</a>
                </div>
                <div id='collapsecb4' class='accordion-collapse collapse' aria-labelledby='cb4' data-bs-parent='#cbfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Harga purata kebanyakan CB Radio adalah mengikut jenis samada Handy atau Rig dan multimode atau hanya mode AM dan FM sahaja. Untuk jenis Handy mode AM dan FM purata harganya adalah sekitar RM 50.00 ke RM 400.00 manakala untuk jenis Rig mode AM dan FM harganya sekitar RM 200.00 ke RM 1,000.00. Untuk CB RADIO jenis mobile multimode agak mahal sedikit kerana kebanyakan jenis multimode mempunyai berbagai kelebihan seperti frequency counter, echo, scanning dan sebagainya seperti peralatan HAM RADIO. Harganya boleh mencapai sehingga RM 3,000.00. Tujuan radio dua hala adalah untuk perhubungan maka asas CB Radio pun sudah memadai tidak perlu membeli peralatan yang canggih dengan berbagai fungsi sedangkan kita tidak menggunakan fungsi tersebut semasa berbual atau berhubung dengan rakan-rakan CB.</p>
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <div class='accordion-header' id='cb5'>
                  <button type='button' class='accordion-button collapsed bg-danger-subtle text-danger-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapsecb5' aria-expanded='false' aria-controls='collapsecb5'><i class='bi-5-circle-fill text-danger-emphasis fs-5 pe-3'></i>Masih adakah pengguna CB RADIO di Malaysia?</button>
                </div>
                <div id='collapsecb5' class='accordion-collapse collapse' aria-labelledby='cb5' data-bs-parent='#cbfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Tidak ramai yang tahu mengenai CB RADIO kerana tidak ada usaha promosi dibuat untuk penggemar CB Radio. Orang ramai lebih suka mempromosikan Radio Amatur kerana merasakan CB RADIO ini untuk golongan yang kurang berkemampuan dan hanya menggunakan radio dua hala sebagai hobi sahaja tidak seperti Radio Amatur yang mempunyai kelebihan seperti perlu mengambil peperiksaan, membayar lesen, mempunyai isyarat panggilan khusus yang diberikan oleh pihak SKMM dan sebagainya. Jika ada hobi menggunakan radio dua hala secara murah untuk permulaan, kenapa kita tidak gunakan, yang penting boleh digunakan untuk berhubung di antara satu sama lain sama juga dengan fungsi Radio Amatur. Namun demikian, akan ada kelab atau komuniti yang mempromosi atau memperkenalkan CB RADIO kepada orang ramai sebagai alat perhubungan alternatif atau pilihan kedua selain telefon pintar atau radio amatur. CB RADIO juga bagus untuk kegunaan pemandu lori kontena yang berkonvoi semasa perjalanan malam, pemandu bas ekspres untuk mengelak dari mengantuk atau boleh dijadikan sebagai peralatan pemberi amaran awal sekiranya rakan pemandu melihat atau ternampak sesuatu yang mencurigakan di jalan raya. Semasa acara sukan, camping, atau kenapa tidak anda memulakan penggunaan CB RADIO sebagai alat perhubungan anda dan keluarga anda semasa konvoi dan sebagainya selagi pengunaanya selari dengan peraturan yang tertera di dalam peruntukan kelas (Class Assignment).</p>
                    <div class='alert alert-light' role='alert'>
                      <h4 class='text-center'>COMMUNICATIONS AND MULTIMEDIA ACT 1998</h4>
                      <h5 class='text-center'>CLASS ASSIGNMENT NO. 2 OF 2022</h5>
                      <p>IN exercise of the powers conferred by section 169 of the Communications and Multimedia Act 1998 [Act 588] ("Act"), the Commission issues class assignments which confers rights on any person to use the frequency bands for the following devices:</p>
                      <p>(4) personal radio service ("PRS") device as specified in the Fourth Schedule;</p>
                      <a href='https://www.mcmc.gov.my/skmmgovmy/media/General/registers/cma/Class-Assignment-No-2-of-2022.pdf#page=5' target='_blank'>Baca Lanjut...</a>
                      <hr>
                      <h4 class='text-center'>FOURTH SCHEDULE</h4>
                      <h5 class='text-center'>Class Assignment for Personal Radio Service Device</h5>
                      <p>1. Definition</p>
                      <p>(1) In this class assignment, "PRS device" means a two-way radiocommunications device operating in the designated frequency bands.</p>
                      <p>(2) Subject to subparagraph 1(1) of this schedule, all terminologies of an absolute technical nature shall have the same meaning as provided in the International Telecommunication Convention.</p>
                      <a href='https://www.mcmc.gov.my/skmmgovmy/media/General/registers/cma/Class-Assignment-No-2-of-2022.pdf#page=23' target='_blank'>Baca Lanjut...</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <div class='accordion-header' id='cb6'>
                  <button type='button' class='accordion-button collapsed bg-danger-subtle text-danger-emphasis fs-5' data-bs-toggle='collapse' data-bs-target='#collapsecb6' aria-expanded='false' aria-controls='collapsecb6'><i class='bi-6-circle-fill text-danger-emphasis fs-5 pe-3'></i>Berapa jarak perhubungan yang boleh di capai menggunakan CB RADIO atau PRS RADIO?</button>
                </div>
                <div id='collapsecb6' class='accordion-collapse collapse' aria-labelledby='cb6' data-bs-parent='#cbfaq'>
                  <div class='accordion-body'>
                    <p class='m-0'>Jarak purata komunikasi CB RADIO 27MHz adalah sekitar 5 ke 200 KM manakala untuk PMR RADIO 446MHz adalah sekitar 5 ke 20 KM bergantung kepada banyak faktor antaranya bentuk permukaan bumi, halangan seperti bangunan tinggi, hutan yang tebal, atau keadaan cuaca, dan sebagainya. Namun demikian sekiranya keadaan propagasi membuka dengan menggunakan CB RADIO 27Mhz USB anda akan terkejut apabila operator dari Indonesia atau Australia menjawab panggilan anda, bayangkan perasaan anda ketika itu. Oleh itu, CB Radio 27MHz LSB juga boleh mencapai ribuan kilometer sekiranya propagasi cuaca membuka atau sebagainya.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='col-4 text-center'>
          <table class='table table-sm table-bordered table-striped text-center align-middle mb-3 mx-auto w-auto text-wrap' style='white-space: nowrap'>
            <thead class='align-middle'>
              <th>Abjad</th>
              <th>Fonetik</th>
              <th>International Morse</th>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>Alfa<br>Agas</td>
                <td>&bull;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/f/f3/A_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>B</td>
                <td>Bravo<br>Bola</td>
                <td>&ndash;&bull;&bull;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/b/b1/B_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>C</td>
                <td>Charlie<br>Ciku</td>
                <td>&ndash;&bull;&ndash;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/2/25/C_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>D</td>
                <td>Delta<br>Duku</td>
                <td>&ndash;&bull;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/9/92/D_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>E</td>
                <td>Echo<br>Elok</td>
                <td>&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/e/e7/E_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>F</td>
                <td>Foxtrot<br>Fajar</td>
                <td>&bull;&bull;&ndash;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/6/63/F_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>G</td>
                <td>Golf<br>Gagak</td>
                <td>&ndash;&ndash;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/7/72/G_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>H</td>
                <td>Hotel<br>Handal</td>
                <td>&bull;&bull;&bull;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/9/93/H_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>I</td>
                <td>India<br>Intan</td>
                <td>&bull;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/d/d9/I_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>J</td>
                <td>Juliett<br>Jala</td>
                <td>&bull;&ndash;&ndash;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/9/9e/J_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>K</td>
                <td>Kilo<br>Kota</td>
                <td>&ndash;&bull;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/K_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>L</td>
                <td>Lima<br>Laju</td>
                <td>&bull;&ndash;&bull;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/a/a8/L_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>M</td>
                <td>Mike<br>Merah</td>
                <td>&ndash;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/9/97/M_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>N</td>
                <td>November<br>Nuri</td>
                <td>&ndash;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/5/5a/N_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>O</td>
                <td>Oscar<br>Ombak</td>
                <td>&ndash;&ndash;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/4/41/O_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>P</td>
                <td>Papa<br>Palang</td>
                <td>&bull;&ndash;&ndash;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/c/c6/P_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>Q</td>
                <td>Quebec<br>Quen</td>
                <td>&ndash;&ndash;&bull;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/f/f0/Q_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>R</td>
                <td>Romeo<br>Rakit</td>
                <td>&bull;&ndash;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/e/ea/R_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>S</td>
                <td>Sierra<br>Singa</td>
                <td>&bull;&bull;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/d/d8/S_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>T</td>
                <td>Tango<br>Tari</td>
                <td>&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/b/ba/T_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>U</td>
                <td>Uniform<br>Udang</td>
                <td>&bull;&bull;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/3/34/U_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>V</td>
                <td>Victor<br>Victor</td>
                <td>&bull;&bull;&bull;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/3/37/V_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>W</td>
                <td>Whiskey<br>Wayang</td>
                <td>&bull;&ndash;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/6/68/W_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>X</td>
                <td>X-ray<br>X-ray</td>
                <td>&ndash;&bull;&bull;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/b/be/X_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>Y</td>
                <td>Yankee<br>Yakin</td>
                <td>&ndash;&bull;&ndash;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/5/5d/Y_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>Z</td>
                <td>Zulu<br>Zaman</td>
                <td>&ndash;&ndash;&bull;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Z_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>0</td>
                <td>Zero<br>Kosong</td>
                <td>&ndash;&ndash;&ndash;&ndash;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/5/5d/0_number_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>1</td>
                <td>One<br>Satu</td>
                <td>&bull;&ndash;&ndash;&ndash;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/9/9b/1_number_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Two<br>Dua</td>
                <td>&bull;&bull;&ndash;&ndash;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/e/ee/2_number_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Three<br>Tiga</td>
                <td>&bull;&bull;&bull;&ndash;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/f/fd/3_number_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Four<br>Empat</td>
                <td>&bull;&bull;&bull;&bull;&ndash;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/5/5c/4_number_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Five<br>Lima</td>
                <td>&bull;&bull;&bull;&bull;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/5/52/5_number_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Six<br>Enam</td>
                <td>&ndash;&bull;&bull;&bull;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/4/4d/6_number_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Seven<br>Tujuh</td>
                <td>&ndash;&ndash;&bull;&bull;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/1/14/7_number_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Eight<br>Lapan</td>
                <td>&ndash;&ndash;&ndash;&bull;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/3/3a/8_number_morse_code.ogg'></audio></td>
              </tr>
              <tr>
                <td>9</td>
                <td>Nine<br>Sembilan</td>
                <td>&ndash;&ndash;&ndash;&ndash;&bull;<br><audio class='rounded-pill w-75' controls preload='metadata' src='https://upload.wikimedia.org/wikipedia/commons/4/44/9_number_morse_code.ogg'></audio></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <?php require_once 'footer.php' ?>
  </body>

</html>