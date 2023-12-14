<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>RoIPMARS Network | Notice Teamspeak Connection Issue</title>
  </head>

  <body>
    <?php include_once '../../ntsheader.php' ?>
    <div class='container my-2'>
      <p class='fs-1 text-center'>Notice Teamspeak DomainName:PortNumber Issue</p>
      <table class='table table-sm table-borderless fs-5 text-center d-flex justify-content-end'>
        <tbody>
          <tr><td>Rujukan Notis</td><td>NtsMARS2020/07</td></tr>
          <tr><td>Tarikh Notis</td><td>02 Apr 2020, 0900 MYT</td></tr>
        </tbody>
      </table>
      <p class='lh-sm'>Pengguna yang dihormati,</p>
      <p class='fs-2 fw-bold text-decoration-underline'>Per: Notis perubahan alamat server TS3 di bawah naungan MARS</p>
      <p>Berhubung perkara diatas, pihak pengurusan MARS ingin memaklumkan bahawa kami sedang menyelenggara sistem <span class='fst-italic'>Domain Name System (DNS)</span> kami.</p>
      <p>Namun begitu, sistem tersebut tidak dapat menghasilkan apa yang kami harapkan. Antara masalah yang telah ditemui adalah ketidakboleh kerja TSDNS bagi aplikasi Teamspeak.</p>
      <p>Terdapat beberapa server Teamspeak dibawah naungan kami terjejas dengan isu ini. Jadi, bagi mengatasi masalah ini, pengguna perlu menukar alamat server ke subdomain yang baru. Server yang tidak tersenarai di bawah alamatnya tidak terjejas, anda boleh masuk seperti biasa. Server yang terjejas dan subdomain yang baru adalah seperti jadual di bawah</p>
      <h6 class='text-center'>SERVER TEAMSPEAK 3 YANG TERJEJAS</h6>
      <table class='table table-bordered text-center table-sm table-responsive-sm'>
        <thead class='thead-light'>
          <th>Server</th>
          <th>Alamat Lama</th>
          <th>Alamat Baru</th>
        </thead>
        <tbody>
          <tr>
            <td>PRADAS</td>
            <td>roipmars.com:9991</td>
            <td>pradas.roipmars.com</td>
          </tr>
          <tr>
            <td>BRUNEI</td>
            <td>roipmars.com:9993</td>
            <td>brunei.roipmars.com</td>
          </tr>
          <tr>
            <td>SARAWAK</td>
            <td>roipmars.com:9994</td>
            <td>sarawak.roipmars.com</td>
          </tr>
        </tbody>
      </table>
      <p class='text-center'>Diharap pihak tuan dapat ambil maklum berkenaan perkara ini. Jutaan kemaafan kami mohon bagi pihak MARS kepada anda semua.</p>
      <p class='text-center'>Sekiranya anda memerlukan bantuan, sila email kepada: <a href='mailto:member@roipmars.org.my?subject=Inkuiri%20Notis2007'>member@roipmars.org.my</a></p>
      <p class='fs-4 text-end mt-2 mb-0 ft-signature'>Pentadbir Rangkaian</p>
      <p class='text-end mt-0 mb-2' style='font-family: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace; font-weight: 500;'>Pengurusan Rangkaian Kumpulan RoIPMARS</p>
    </div>
    <?php include_once '../../footermin.php' ?>
  </body>

</html>