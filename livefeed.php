<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>RoIPMARS Network | Live Feed</title>
  </head>

  <body>
    <?php require_once 'ntsheader.php' ?>
    <main class='container-fluid text-center my-3'>
      <div class='row'>
        <div id='hamlive'>
          <div class='spinner-border my-3' role='status'><span class='visually-hidden'>Memuatkan...</span></div>
        </div>
        <div id='hamlive-audio'></div>
      </div>
      <hr>
      <div class='row'>
        <div id='cblive'>
          <div class='spinner-border my-3' role='status'><span class='visually-hidden'>Memuatkan...</span></div>
        </div>
        <div id='cblive-audio'></div>
      </div>
    </main>
    <?php require_once 'footermin.php' ?>
    <script src='/assets/js/bcfy-stat.js'></script>
  </body>

</html>