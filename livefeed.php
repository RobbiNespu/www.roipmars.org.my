<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>RoIPMARS Network | Live Feed</title>
  </head>

  <body>
    <?php require_once 'ntsheader.php' ?>
    <main class='container text-center my-3'>
      <div class='row'>
        <h1>Suapan Langsung Rangkaian RoIPMARS</h1>
        <p>Dengarkan suapan langsung terus dari konti kami yang dikuasakan oleh MHR TECHNOLOGY</p>
        <div class='col-lg-6'>
          <div id='hamlive'><div class='spinner-border my-3' role='status'><span class='visually-hidden'>Memuatkan...</span></div></div>
          <div id='hamlive-audio'></div>
        </div>
        <div class='col-lg-6'>
          <div id='cblive'><div class='spinner-border my-3' role='status'><span class='visually-hidden'>Memuatkan...</span></div></div>
          <div id='cblive-audio'></div>
        </div>
      </div>
    </main>
    <?php require_once 'footermin.php' ?>
    <script src='/assets/js/bcfy-stat.js'></script>
  </body>

</html>