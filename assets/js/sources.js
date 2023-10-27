let currentURL = window.location.href
let docTitle = document.querySelector('title').textContent
let docDesc = document.querySelector('h1').textContent + '\n' + document.querySelector('p').textContent
const meta = '<meta charset="utf-8">\
<meta http-equiv="Content-Type" content="text/html">\
<meta http-equiv="content-language" content="ms-MY">\
<meta http-equiv="Accept-CH" content="Sec-CH-DPR, Sec-CH-Width">\
<meta name="language" content="Malay">\
<meta name="author" content="HafiziRuslan">\
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">\
<meta name="robots" content="all">\
<meta name="title" content="'+ docTitle + '">\
<meta name="description" content="'+ docDesc + '">\
<meta name="keywords" content="roipmars, malaysia, ts3, teamspeak3, peminat, radio, over, internet, protocol, komunikasi, roip, amatur, teamspeak, hosting, amateur, jalur, rakyat, citizen, band">\
<meta property="og:site_name" content="RoIPMARS Network">\
<meta property="og:title" content="'+ docTitle + '">\
<meta property="og:description" content="'+ docDesc + '">\
<meta property="og:url" content="'+ currentURL + '">\
<meta property="og:image" content="/assets/favicon/favicon-194x194.png">\
<meta property="og:type" content="website">\
<meta property="og:locale" content="ms-MY">\
<meta name="twitter:title" content="'+ docTitle + '">\
<meta name="twitter:description" content="'+ docDesc + '">\
<meta name="twitter:url" content="'+ currentURL + '">\
<meta name="twitter:image" content="/assets/favicon/favicon-194x194.png">\
<meta name="twitter:creator" content="@HafiziRuslan">\
<meta name="color-scheme" content="auto">'
const favIcons = '<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">\
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">\
<link rel="icon" type="image/png" sizes="194x194" href="/assets/favicon/favicon-194x194.png">\
<link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon/android-chrome-192x192.png">\
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">\
<link rel="manifest" href="/assets/favicon/site.webmanifest">\
<link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#336699">\
<link rel="shortcut icon" href="/assets/favicon/favicon.ico">\
<meta name="apple-mobile-web-app-title" content="RoIPMARS">\
<meta name="application-name" content="RoIPMARS">\
<meta name="msapplication-TileColor" content="#2d89ef">\
<meta name="msapplication-TileImage" content="/assets/favicon/mstile-144x144.png">\
<meta name="msapplication-config" content="/assets/favicon/browserconfig.xml">\
<meta name="theme-color" content="#ffffff">'
document.querySelector('head').insertAdjacentHTML('beforeend', meta + favIcons + headEndLinks)

const bodyStartLinks = '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHLPNS8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\
<div id="fb-root"></div>\
<div id="fb-customer-chat" class="fb-customerchat"></div>\
<script>var chatbox = document.getElementById("fb-customer-chat"); chatbox.setAttribute("page_id", "100870702762488"); chatbox.setAttribute("attribution", "biz_inbox");</script>\
<script>window.fbAsyncInit = function() {FB.init({xfbml: true,version: "v18.0"}); }; (function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id;js.src = "https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js"; fjs.parentNode.insertBefore(js, fjs); }(document, "script", "facebook-jssdk"));</script>'
document.querySelector('body').insertAdjacentHTML('afterbegin', bodyStartLinks)