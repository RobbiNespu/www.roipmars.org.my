const rndHAMtree = document.getElementById('rndHAMtree')
const rndCBtree = document.getElementById('rndCBtree')

Chart.register(ChartDeferred)
Chart.register(ChartDataLabels)
Chart.defaults.font.family = 'Source Sans Pro'
Chart.defaults.font.lineHeight = 1
Chart.defaults.font.size = 10
Chart.defaults.plugins.datalabels.backgroundColor = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-tertiary-bg')
Chart.defaults.plugins.datalabels.borderColor = '#336699'
Chart.defaults.plugins.datalabels.borderRadius = 5
Chart.defaults.plugins.datalabels.borderWidth = 1
Chart.defaults.plugins.datalabels.color = '#56C3E7'
Chart.defaults.plugins.datalabels.clamp = true
Chart.defaults.plugins.datalabels.font.lineHeight = 1
Chart.defaults.plugins.datalabels.textAlign = 'center'
Chart.defaults.plugins.datalabels.padding = {top: 2, bottom: 2, left: 4, right: 4}
Chart.defaults.plugins.deferred.delay = 1000
Chart.defaults.plugins.deferred.yOffset = '50%'
Chart.defaults.plugins.legend.display = false
Chart.defaults.plugins.title.color = window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-light-text-emphasis')
Chart.defaults.plugins.title.display = true
Chart.defaults.plugins.title.font = {weight: 'bold', size: 18}
Chart.defaults.plugins.title.padding = {top: 1, bottom: 20}
Chart.defaults.plugins.title.position = 'top'
Chart.defaults.plugins.tooltip.enabled = false
const wmOptions = {
  image: 'https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/brands/roipmars/brand_oglow_f-50.png',
  opacity: 0.25,
  width: '90%',
  height: '30%',
  alignX: 'middle',
  alignY: 'middle',
  position: 'between'
}

fetch('/assets/json/rnd-ham-tree.json').then((r) => r.json()).then((data) => {
  new Chart(rndHAMtree, {
    data: {
      datasets: [{
        borderWidth: 1.5,
        data: data.map((d) => Object.assign({}, d)),
        label: data.map((d) => d.label),
        pointRadius: 5,
        pointStyle: 'rectRounded',
        tension: 0.5,
      }],
      labels: data.map((d) => d.label),
    },
    options: {
      layout: {padding: {bottom: 20, left: 50, right: 50, top: 5}},
      plugins: {title: {text: 'RoIPMARS HAM Network'}},
      watermark: wmOptions,
    },
    type: 'forceDirectedGraph',
  })
})

fetch('/assets/json/rnd-cb-tree.json').then((r) => r.json()).then((data) => {
  new Chart(rndCBtree, {
    data: {
      datasets: [{
        borderWidth: 1,
        data: data.map((d) => Object.assign({}, d)),
        label: data.map((d) => d.label),
        pointRadius: 5,
        pointStyle: 'rectRounded',
        tension: 1,
      }],
      labels: data.map((d) => d.label),
    },
    options: {
      layout: {padding: {bottom: 20, left: 50, right: 50, top: 5}},
      plugins: {title: {text: 'RoIPMARS CB Network'}},
      watermark: wmOptions,
    },
    type: 'forceDirectedGraph',
  })
})