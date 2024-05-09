const rndHAMtree = document.getElementById('rndHAMtree')
const rndCBtree = document.getElementById('rndCBtree')

function dtCFormat(input) {
	return new Intl.DateTimeFormat('ms-MY', {
		formatMatcher: 'basic',
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		dayPeriod: 'short',
		timeZoneName: 'short',
		hour12: false,
		timeZone: 'Asia/Kuala_Lumpur',
	}).format(new Date(input))
}

function lastMod(url) {
	try {
		var req = new XMLHttpRequest()
		req.open('HEAD', url, false)
		req.send(null)
		if (req.status == 200) {
			return 'kemaskini: ' + dtCFormat(req.getResponseHeader('Last-Modified'))
		} else return false
	} catch (er) {
		return er.message
	}
}

Chart.register(ChartDeferred)
Chart.register(ChartDataLabels)
Chart.defaults.backgroundColor = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-bg')
Chart.defaults.borderColor = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-border-color')
Chart.defaults.color = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-color')
Chart.defaults.font.family = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-font-monospace')
Chart.defaults.font.lineHeight = 1
Chart.defaults.font.size = 12
Chart.defaults.plugins.datalabels.backgroundColor = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-tertiary-bg')
Chart.defaults.plugins.datalabels.borderColor = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-border-color')
Chart.defaults.plugins.datalabels.borderRadius = 5
Chart.defaults.plugins.datalabels.borderWidth = 1
Chart.defaults.plugins.datalabels.clamp = true
Chart.defaults.plugins.datalabels.font.lineHeight = 1
Chart.defaults.plugins.datalabels.textAlign = 'center'
Chart.defaults.plugins.datalabels.padding = { top: 2, bottom: 2, left: 4, right: 4 }
Chart.defaults.plugins.deferred.delay = 1000
Chart.defaults.plugins.deferred.yOffset = '50%'
Chart.defaults.plugins.legend.display = false
Chart.defaults.plugins.title.display = true
Chart.defaults.plugins.title.font.family = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-font-family')
Chart.defaults.plugins.title.font.lineHeight = 1
Chart.defaults.plugins.title.font.size = 18
Chart.defaults.plugins.title.font.weight = 'bold'
Chart.defaults.plugins.subtitle.display = true
Chart.defaults.plugins.subtitle.align = 'end'
Chart.defaults.plugins.subtitle.padding = { top: 1, bottom: 0 }
Chart.defaults.plugins.subtitle.position = 'top'
Chart.defaults.plugins.tooltip.enabled = false
const wmOptions = {
	image: 'https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/brands/roipmars/brand_oglow_f-50.png',
	opacity: 0.25,
	width: '90%',
	height: '30%',
	alignX: 'middle',
	alignY: 'middle',
	position: 'between',
}

fetch('/assets/json/rnd-ham-tree.json')
	.then((r) => r.json())
	.then((data) => {
		new Chart(rndHAMtree, {
			data: {
				datasets: [
					{
						borderWidth: 1.5,
						data: data.map((d) => Object.assign({}, d)),
						label: data.map((d) => d.label),
						pointRadius: 5,
						pointStyle: 'rectRounded',
						tension: 0.25,
					},
				],
				labels: data.map((d) => d.label),
			},
			options: {
				layout: { padding: { bottom: 20, left: 100, right: 100, top: 5 } },
				plugins: {
					subtitle: { text: lastMod('/assets/json/rnd-ham-tree.json') },
					title: { text: 'RoIPMARS HAM Network' },
				},
				watermark: wmOptions,
			},
			type: 'forceDirectedGraph',
		})
	})

fetch('/assets/json/rnd-cb-tree.json')
	.then((r) => r.json())
	.then((data) => {
		new Chart(rndCBtree, {
			data: {
				datasets: [
					{
						borderWidth: 1,
						data: data.map((d) => Object.assign({}, d)),
						label: data.map((d) => d.label),
						pointRadius: 5,
						pointStyle: 'rectRounded',
						tension: 0.75,
					},
				],
				labels: data.map((d) => d.label),
			},
			options: {
				layout: { padding: { bottom: 20, left: 100, right: 100, top: 5 } },
				plugins: {
					subtitle: { text: lastMod('/assets/json/rnd-cb-tree.json') },
					title: { text: 'RoIPMARS CB Network' },
				},
				watermark: wmOptions,
			},
			type: 'forceDirectedGraph',
		})
	})
