const colorScheme = 
'<meta name="theme-color" media="(prefers-color-scheme: light)" content="#336699">\
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#56C3E7">\
<meta name="color-scheme" content="auto">'
const favIcons = 
'<meta name="msapplication-TileColor" content="#56C3E7">\
<meta name="msapplication-TileImage" content="/media/image/ms-icon-144x144.png">\
<meta name="google-adsense-account" content="ca-pub-1205248207690495">\
<link rel="shortcut icon" type="image/x-icon" href="/media/image/brands/favicon/favicon.ico">\
<link rel="icon" type="image/x-icon" href="/media/image/brands/favicon/favicon.ico">\
<link rel="icon" type="image/png" sizes="16x16" href="/media/image/brands/favicon/favicon-16x16.png">\
<link rel="icon" type="image/png" sizes="32x32" href="/media/image/brands/favicon/favicon-32x32.png">\
<link rel="icon" type="image/png" sizes="96x96" href="/media/image/brands/favicon/favicon-96x96.png">\
<link rel="icon" type="image/png" sizes="192x192" href="/media/image/brands/favicon/android-icon-192x192.png">\
<link rel="apple-touch-icon" sizes="57x57" href="/media/image/brands/favicon/apple-icon-57x57.png">\
<link rel="apple-touch-icon" sizes="60x60" href="/media/image/brands/favicon/apple-icon-60x60.png">\
<link rel="apple-touch-icon" sizes="72x72" href="/media/image/brands/favicon/apple-icon-72x72.png">\
<link rel="apple-touch-icon" sizes="76x76" href="/media/image/brands/favicon/apple-icon-76x76.png">\
<link rel="apple-touch-icon" sizes="114x114" href="/media/image/brands/favicon/apple-icon-114x114.png">\
<link rel="apple-touch-icon" sizes="120x120" href="/media/image/brands/favicon/apple-icon-120x120.png">\
<link rel="apple-touch-icon" sizes="144x144" href="/media/image/brands/favicon/apple-icon-144x144.png">\
<link rel="apple-touch-icon" sizes="152x152" href="/media/image/brands/favicon/apple-icon-152x152.png">\
<link rel="apple-touch-icon" sizes="180x180" href="/media/image/brands/favicon/apple-icon-180x180.png">\
<link rel="manifest" href="/assets/json/manifest.json">'
const headEndLinks = 
'<script async src="https://www.googletagmanager.com/gtag/js?id=G-DJYTZHZXFN"></script>\
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1205248207690495" crossorigin="anonymous"></script>\
<script async src="https://fundingchoicesmessages.google.com/i/pub-1205248207690495?ers=1" nonce="nLBiTr-Hd6zWbl5ZT9wqvA"></script>\
<script src="/assets/js/gtm.js"></script>\
<script src="/assets/js/gtag.js"></script>\
<script src="/assets/js/gfc.js" nonce="nLBiTr-Hd6zWbl5ZT9wqvA"></script>\
<script src="/assets/js/clarity.js"></script>'
document.querySelector('head').insertAdjacentHTML('beforeend', colorScheme + favIcons + headEndLinks)

const bodyStartLinks = 
'<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHLPNS8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\
<div id="fb-root"></div>\
<div id="fb-customer-chat" class="fb-customerchat"></div>\
<script src="/assets/js/fbchat.js"></script>'
document.querySelector('body').insertAdjacentHTML('afterbegin', bodyStartLinks)