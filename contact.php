<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

  <head>
    <title>Hubungi Kami</title>
  </head>

  <body>
    <?php require_once 'header.php' ?>
    <main class='container'>
      <div class='row text-center'>
        <div class='col mt-2 mb-2 jumbotron-fluid'>
          <h1 class='h1-responsive'>Hubungi Kami</h1>
        </div>
      </div>
      <div class='row'>
        <div class='col-md'>
          <div id='submitForm' class='d-flex justify-content-center mb-3'></div>
        </div>
      </div>
    </main>
    <?php require_once 'footer.php' ?>
    <script defer src='https://challenges.cloudflare.com/turnstile/v0/api.js?onload=loadTurnstile'></script>
    <script>
      window.loadTurnstile = function () {
        turnstile.render('#submitForm', {
          sitekey: '0x4AAAAAAABo4nJ8nQ9QZgbE',
          callback: function (token) {
            console.log(`Challenge Success ${token}`)
            window.open('https://api.roipmars.org.my/hook/roipmars-ctc/n8n-form')
          }
        })
      }
    </script>
  </body>

</html>