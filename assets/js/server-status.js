const button = document.getElementById('checkserverstatus')
const modal = document.getElementById('serverstats')
const modalTitle = document.getElementById('serverstatus')
const modalBody = modal.querySelector('.modal-body')
const now = new Intl.DateTimeFormat('ms-MY', {
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
	timeZone: 'Asia/Kuala_Lumpur',
}).format(new Date())
const statBadge = 'https://status.mhrtech.my/api/badge'
const statPage = 'https://status.mhrtech.my/api/status-page/roipmars/badge'

modal.addEventListener('show.bs.modal', (event) => {
	const modalShow = event.relatedTarget
	modalTitle.textContent = `Status Jaringan RoIPMARS setakat ${now}`
	modalBody.innerHTML = `<img class='w-75 mb-3' src='${statPage}?label=${encodeURI('RoIPMARS Network Services')}' alt='roipmars-server overall status'>
		<table class='table teble-bordered table-sm text-center align-middle'>
		<tbody>
		<tr>
		<th>TeamSpeak</th>
		<td><img src='${statBadge}/21/status' alt='roipmars-teamspeak-server status'></td>
		<td><img src='${statBadge}/21/response' alt='roipmars-teamspeak-server response time'></td>
		<td><img src='${statBadge}/21/uptime' alt='roipmars-teamspeak-server uptime'></td>
		<td><img src='${statBadge}/21/ping' alt='roipmars-teamspeak-server average ping'></td>
		<td><img src='${statBadge}/21/avg-response' alt='roipmars-teamspeak-server average response time'></td>
		</tr>
		<tr>
		<th>Mumble</th>
		<td><img src='${statBadge}/35/status' alt='roipmars-mumble-server status'></td>
		<td><img src='${statBadge}/35/response' alt='roipmars-mumble-server response time'></td>
		<td><img src='${statBadge}/35/uptime' alt='roipmars-mumble-server uptime'></td>
		<td><img src='${statBadge}/35/ping' alt='roipmars-mumble-server average ping'></td>
		<td><img src='${statBadge}/35/avg-response' alt='roipmars-mumble-server average response time'></td>
		</tr>
		<tr>
		<th>Free Radio Network</th>
		<td><img src='${statBadge}/36/status' alt='roipmars-freeradionetwork-server status'></td>
		<td><img src='${statBadge}/36/response' alt='roipmars-freeradionetwork-server response time'></td>
		<td><img src='${statBadge}/36/uptime' alt='roipmars-freeradionetwork-server uptime'></td>
		<td><img src='${statBadge}/36/ping' alt='roipmars-freeradionetwork-server average ping'></td>
		<td><img src='${statBadge}/36/avg-response' alt='roipmars-freeradionetwork-server average response time'></td>
		</tr>
		<tr>
		<th>Team Talk</th>
		<td><img src='${statBadge}/64/status' alt='roipmars-teamtalk-server status'></td>
		<td><img src='${statBadge}/64/response' alt='roipmars-teamtalk-server response time'></td>
		<td><img src='${statBadge}/64/uptime' alt='roipmars-teamtalk-server uptime'></td>
		<td><img src='${statBadge}/64/ping' alt='roipmars-teamtalk-server average ping'></td>
		<td><img src='${statBadge}/64/avg-response' alt='roipmars-teamtalk-server average response time'></td>
		</tr>
		<tr>
		<th>APRS</th>
		<td><img src='${statBadge}/57/status' alt='aprs status'></td>
		<td><img src='${statBadge}/57/response' alt='aprs response time'></td>
		<td><img src='${statBadge}/57/uptime' alt='aprs uptime'></td>
		<td><img src='${statBadge}/57/ping' alt='aprs average ping'></td>
		<td><img src='${statBadge}/57/avg-response' alt='aprs average response time'></td>
		</tr>
		<tr>
		<th>HAM Stream</th>
		<td><img src='${statBadge}/61/status' alt='roipmars-ham-stream status'></td>
		<td><img src='${statBadge}/61/response' alt='roipmars-ham-stream response time'></td>
		<td><img src='${statBadge}/61/uptime' alt='roipmars-ham-stream uptime'></td>
		<td><img src='${statBadge}/61/ping' alt='roipmars-ham-stream average ping'></td>
		<td><img src='${statBadge}/61/avg-response' alt='roipmars-ham-stream average response time'></td>
		</tr>
		<tr>
		<th>CB Stream</th>
		<td><img src='${statBadge}/63/status' alt='roipmars-cb-stream status'></td>
		<td><img src='${statBadge}/63/response' alt='roipmars-cb-stream response time'></td>
		<td><img src='${statBadge}/63/uptime' alt='roipmars-cb-stream uptime'></td>
		<td><img src='${statBadge}/63/ping' alt='roipmars-cb-stream average ping'></td>
		<td><img src='${statBadge}/63/avg-response' alt='roipmars-cb-stream average response time'></td>
		</tr>
		</tbody>
		</table>`
})

modal.addEventListener('hide.bs.modal', (event) => {
	const modalHide = event.relatedTarget
	modalTitle.textContent = ''
	modalBody.textContent = ''
})
