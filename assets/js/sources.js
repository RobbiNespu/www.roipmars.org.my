let currentPage = location.pathname.replace('/', '')
if (document.querySelector('.nav') && currentPage) {
	document.querySelector('a#' + currentPage).classList.add('active')
	let dropPage = document.querySelector('a#' + currentPage).parentElement.parentElement.parentElement.children[0]
	if (dropPage) {
		dropPage.classList.add('btn-outline-primary', 'active')
	}
}
if (location.port) {
	var currentPort = ':' + location.port
} else {
	var currentPort = ''
}
let currentHost = location.protocol + '//' + location.hostname + currentPort
let currentDomain = location.hostname
let currentURL = document.URL
if (currentPage != '') {
	document.querySelector('title').innerText = `RoIPMARS Network | ${document.title}`
}
let docTitle = document.title
let docPar = document.querySelectorAll('p')
let list = [].slice.call(docPar)
let innertext = list
	.map(function (e) {
		return e.innerText
	})
	.join(' ')
let docDesc = (document.querySelector('h1').textContent + ' | ' + innertext).slice(0, 155)
const meta = `<base href="${currentHost}">\
<meta charset="utf-8">\
<meta http-equiv="Content-Type" content="text/html">\
<meta http-equiv="content-language" content="ms-MY">\
<meta http-equiv="Accept-CH" content="Sec-CH-DPR, Sec-CH-Width">\
<!-- Primary Meta Tags -->\
<meta name="title" content="${docTitle}">\
<meta name="description" content="${docDesc}">\
<meta name="keywords" content="roipmars,teamspeak3 malaysia,teamspeak,radio amatur,amateur radio over internet,radio over internet protocol,voice over internet protocol,roip,viop,cb band malaysia,citizen band,jalur rakyat">\
<meta name="author" content="HafiziRuslan">\
<meta name="language" content="Malay">\
<meta name="color-scheme" content="auto">\
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">\
<meta name="robots" content="all">\
<!-- Open Graph / Facebook -->\
<meta property="og:site_name" content="RoIPMARS Network">\
<meta property="og:title" content="${docTitle}">\
<meta property="og:description" content="${docDesc}">\
<meta property="og:url" content="${currentURL}">\
<meta property="og:image" content="${currentHost}/assets/image/icon/favicon-194x194.png">\
<meta property="og:type" content="website">\
<meta property="og:locale" content="ms-MY">\
<!-- Twitter -->\
<meta name="twitter:title" content="${docTitle}">\
<meta name="twitter:description" content="${docDesc}">\
<meta name="twitter:domain" content="${currentDomain}">\
<meta name="twitter:url" content="${currentURL}">\
<meta name="twitter:image" content="${currentHost}/assets/image/icon/favicon-194x194.png">\
<meta name="twitter:creator" content="@HafiziRuslan">`
const favIcons = `<link rel="apple-touch-icon" sizes="180x180" href="${currentHost}/assets/image/icon/apple-touch-icon.png">\
<link rel="icon" type="image/png" sizes="32x32" href="${currentHost}/assets/image/icon/favicon-32x32.png">\
<link rel="icon" type="image/png" sizes="194x194" href="${currentHost}/assets/image/icon/favicon-194x194.png">\
<link rel="icon" type="image/png" sizes="192x192" href="${currentHost}/assets/image/icon/android-chrome-192x192.png">\
<link rel="icon" type="image/png" sizes="16x16" href="${currentHost}/assets/image/icon/favicon-16x16.png">\
<link rel="manifest" href="${currentHost}/assets/image/icon/site.webmanifest">\
<link rel="mask-icon" href="${currentHost}/assets/image/icon/safari-pinned-tab.svg" color="#336699">\
<link rel="shortcut icon" href="${currentHost}/assets/image/icon/favicon.ico">\
<meta name="apple-mobile-web-app-title" content="RoIPMARS Network">\
<meta name="application-name" content="RoIPMARS Network">\
<meta name="msapplication-TileColor" content="#2d89ef">\
<meta name="msapplication-TileImage" content="${currentHost}/assets/image/icon/mstile-144x144.png">\
<meta name="msapplication-config" content="${currentHost}/assets/image/icon/browserconfig.xml">\
<meta name="theme-color" content="#ffffff">`
document.head.insertAdjacentHTML('beforeend', meta + favIcons)

const bodyStartLinks = `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHLPNS8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\
<div id="fb-root"></div>\
<div id="fb-customer-chat" class="fb-customerchat"></div>\
<script>var chatbox = document.getElementById("fb-customer-chat"); chatbox.setAttribute("page_id", "100870702762488"); chatbox.setAttribute("attribution", "biz_inbox");</script>\
<script>window.fbAsyncInit = function() {FB.init({xfbml: true,version: "v18.0"}); }; (function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id;js.src = "https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js"; fjs.parentNode.insertBefore(js, fjs); }(document, "script", "facebook-jssdk"));</script>`
document.body.insertAdjacentHTML('afterbegin', bodyStartLinks)

function dtCFormat(input) {
	return new Intl.DateTimeFormat('ms-MY', {
		formatMatcher: 'basic',
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		timeZoneName: 'short',
		hour12: false,
	}).format(new Date(input))
}

function lastMod(url) {
	try {
		var req = new XMLHttpRequest()
		req.open('HEAD', url, false)
		req.send(null)
		if (req.status == 200) {
			return dtCFormat(req.getResponseHeader('Last-Modified'))
		} else return false
	} catch (er) {
		return er.message
	}
}

let waAPI = {
	BaseURL: 'https://wa-api.roipmars.org.my/api/601153440440',
	Token: '$2b$10$xNYcfg_bwZlnET1ULGYLRuSEJQ.wiItCQ0Kj1VUNgEIFeJPpk_wUi',
}
