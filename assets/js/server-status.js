const button = document.getElementById('checkserverstatus')
const modal = document.getElementById('serverstats')
const modalTitle = document.getElementById('serverstatus')
const modalBody = modal.querySelector('.modal-body')
const statBadge = 'https://status.mhrtech.my/api/badge'
const statPage = 'https://status.mhrtech.my/api/status-page/roipmars/badge'
const statBadgeStyle = 'flat'
const timeLoad = new Date()
const UserTZ = Intl.DateTimeFormat().resolvedOptions().timeZone
const now = new Intl.DateTimeFormat('en-MY', {
	formatMatcher: 'basic',
	weekday: 'long',
	day: 'numeric',
	month: 'long',
	year: 'numeric',
	hour: 'numeric',
	minute: '2-digit',
	second: '2-digit',
	fractionalSecondDigits: 3,
	timeZoneName: 'longGeneric',
	hourCycle: 'h24',
	timeZone: UserTZ,
}).format(timeLoad)

modal.addEventListener('show.bs.modal', (event) => {
	const modalShow = event.relatedTarget
	modalTitle.innerText = `RoIPMARS Network Status as of\n${now}`
	modalBody.innerHTML = `<img class='w-50' src='${statPage}?style=${statBadgeStyle}&label=${encodeURI('RoIPMARS Network')}' loading='lazy' alt='roipmars-server overall status'>
	<table class='table teble-bordered table-sm text-center align-middle my-3 caption-top'>
		<caption class='text-center'>
			updated at ${timeLoad.toISOString()} ; full stats page <a href='https://status.mhrtech.my/status/roipmars' target='_blank' rel='external'>here</a>
		</caption>
		<tbody>
			<tr>
				<th>TeamSpeak<br>&lpar;roipmars.org.my&rpar;</th>
				<td>
					<img src='${statBadge}/21/status?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-teamspeak-server status'> <img src='${statBadge}/21/response?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-teamspeak-server response time'>
					<br>
					<img src='${statBadge}/21/uptime?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-teamspeak-server uptime'>
					<br>
					<img src='${statBadge}/21/ping?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-teamspeak-server average ping'>
					<img src='${statBadge}/21/avg-response?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-teamspeak-server average response time'>
				</td>
			</tr>
			<tr>
				<th>Mumble<br>&lpar;roipmars.org.my&rpar;</th>
				<td>
					<img src='${statBadge}/35/status?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-mumble-server status'> <img src='${statBadge}/35/response?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-mumble-server response time'>
					<br>
					<img src='${statBadge}/35/uptime?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-mumble-server uptime'>
					<br>
					<img src='${statBadge}/35/ping?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-mumble-server average ping'>
					<img src='${statBadge}/35/avg-response?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-mumble-server average response time'>
				</td>
			</tr>
			<tr>
				<th>Free Radio Network<br>&lpar;roipmars.org.my&rpar;</th>
				<td>
					<img src='${statBadge}/36/status?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-freeradionetwork-server status'>
					<img src='${statBadge}/36/response?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-freeradionetwork-server response time'>
					<br>
					<img src='${statBadge}/36/uptime?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-freeradionetwork-server uptime'>
					<br>
					<img src='${statBadge}/36/ping?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-freeradionetwork-server average ping'>
					<img src='${statBadge}/36/avg-response?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-freeradionetwork-server average response time'>
				</td>
			</tr>
			<tr>
				<th>Team Talk<br>&lpar;roipmars.org.my&rpar;</th>
				<td>
					<img src='${statBadge}/64/status?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-teamtalk-server status'> <img src='${statBadge}/64/response?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-teamtalk-server response time'>
					<br>
					<img src='${statBadge}/64/uptime?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-teamtalk-server uptime'>
					<br>
					<img src='${statBadge}/64/ping?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-teamtalk-server average ping'>
					<img src='${statBadge}/64/avg-response?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-teamtalk-server average response time'>
				</td>
			</tr>
			<tr>
				<th>APRS<br>&lpar;roipmars.org.my&rpar;</th>
				<td>
					<img src='${statBadge}/57/status?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-aprs status'> <img src='${statBadge}/57/response?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-aprs response time'>
					<br>
					<img src='${statBadge}/57/uptime?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-aprs uptime'>
					<br>
					<img src='${statBadge}/57/ping?styleStyle}' loading='lazy' alt='roipmarsorgmy-aprs average ping'> <img src='${statBadge}/57/avg-response?style=${statBadgeStyle}' loading='lazy' alt='roipmarsorgmy-aprs average response time'>
				</td>
			</tr>
			<tr>
				<th>HAM Stream<br>&lpar;hamlive.mhrtech.my&rpar;</th>
				<td>
					<img src='${statBadge}/61/status?style=${statBadgeStyle}' loading='lazy' alt='mhrtechmy-ham-stream status'> <img src='${statBadge}/61/response?style=${statBadgeStyle}' loading='lazy' alt='mhrtechmy-ham-stream response time'>
					<br>
					<img src='${statBadge}/61/uptime?style=${statBadgeStyle}' loading='lazy' alt='mhrtechmy-ham-stream uptime'>
					<br>
					<img src='${statBadge}/61/ping?style=${statBadgeStyle}' loading='lazy' alt='mhrtechmy-ham-stream average ping'> <img src='${statBadge}/61/avg-response?style=${statBadgeStyle}' loading='lazy' alt='mhrtechmy-ham-stream average response time'>
				</td>
			</tr>
			<tr>
				<th>CB Stream<br>&lpar;cblive.mhrtech.my&rpar;</th>
				<td>
					<img src='${statBadge}/63/status?style=${statBadgeStyle}' loading='lazy' alt='mhrtechmy-cb-stream status'> <img src='${statBadge}/63/response?style=${statBadgeStyle}' loading='lazy' alt='mhrtechmy-cb-stream response time'>
					<br>
					<img src='${statBadge}/63/uptime?style=${statBadgeStyle}' loading='lazy' alt='mhrtechmy-cb-stream uptime'>
					<br>
					<img src='${statBadge}/63/ping?style=${statBadgeStyle}' loading='lazy' alt='mhrtechmy-cb-stream average ping'> <img src='${statBadge}/63/avg-response?style=${statBadgeStyle}' loading='lazy' alt='mhrtechmy-cb-stream average response time'>
				</td>
			</tr>
		</tbody>
	</table>`
	function imgReload() {
		let getAllImg = modal.getElementsByTagName('img')
		let tableCaption = modal.querySelector('caption')
		let rand = (Math.random() * 100000).toFixed()
		for (let i = 0; i < getAllImg.length; i++) {
			var imgsrc = getAllImg[i].src
			if (imgsrc.indexOf('&rand') >= 0) {
				var imgwithrand = imgsrc.replace(/&rand=[0-9]+/, '&rand=' + rand)
			} else {
				var imgwithrand = imgsrc + '&rand=' + rand
			}
			getAllImg[i].src = imgwithrand
		}
		tableCaption.innerHTML = `updated at ${new Date().toISOString()} ; full stats page <a href='https://status.mhrtech.my/status/roipmars' target='_blank' rel='external'>here</a>`
	}
	setInterval(imgReload, 3 * 60 * 1000)
})

modal.addEventListener('hide.bs.modal', (event) => {
	const modalHide = event.relatedTarget
	modalTitle.textContent = ''
	modalBody.textContent = ''
})
