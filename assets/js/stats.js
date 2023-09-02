const byTime = document.getElementById('byTime')
const byDate = document.getElementById('byDate')
const byDay = document.getElementById('byDay')
const byWeek = document.getElementById('byWeek')
const byMonth = document.getElementById('byMonth')
const byQuarter = document.getElementById('byQuarter')
const byCategory = document.getElementById('byCategory')
const byMode = document.getElementById('byMode')

Chart.defaults.font.family = 'Open Sans'
Chart.defaults.font.size = 10
Chart.defaults.font.lineHeight = 1

Chart.defaults.plugins.title.display = true
Chart.defaults.plugins.title.position = 'bottom'
Chart.defaults.plugins.title.align = 'end'
Chart.defaults.plugins.title.font = {weight: 'bold', style: 'italic', size: 14}
Chart.defaults.plugins.title.padding = {top: 1,bottom: 1}

Chart.defaults.plugins.legend.position = 'bottom'

const wmOptions = {
  image: '/media/image/brands/roipmars/brand.png',
  opacity: 0.25,
  y: '30',
  width: '376',
  height: '60',
  alignX: 'middle',
  alignY: 'middle',
  position: 'between'
}

$.getJSON('/assets/json/stat-time.json',function(timeData) {
  new Chart(byTime,{
    type: 'line',
    data: {
      labels: timeData.TIME,
      datasets: [{
        label: 'HAM-MS',
        data: timeData.HAMMS
      },{
        label: 'HAM-EN',
        data: timeData.HAMEN
      },{
        label: 'CB-MS',
        data: timeData.CBMS
      },{
        label: 'VOI-MS',
        data: timeData.VOIMS
      }]
    },
    options: {
      tension: 0.5,
      showLine: true,
      borderWidth: 1,
      borderJoinStyle: 'round',
      pointBorderWidth: 1,
      pointStyle: 'rectRounded',
      plugins: {
        title: {text: 'UTC'},
      },
      watermark: wmOptions,
    }
  })
})

$.getJSON('/assets/json/stat-days.json',function(daysData) {
  new Chart(byDate,{
    type: 'line',
    data: {
      labels: daysData.Days,
      datasets: [{
        label: 'HAM-MS',
        data: daysData.HAMMS
      },{
        label: 'HAM-EN',
        data: daysData.HAMEN
      },{
        label: 'CB-MS',
        data: daysData.CB
      },{
        label: 'VOI-MS',
        data: daysData.VOI
      }]
    },
    options: {
      tension: 0.25,
      showLine: true,
      spanGaps: true,
      borderWidth: 1,
      borderJoinStyle: 'round',
      pointBorderWidth: 1,
      pointStyle: 'crossRot',
      plugins: {
        title: {text: 'Harian'}
      },
      watermark: wmOptions,
    }
  })
})

$.getJSON('/assets/json/stat-day.json',function(dayData) {
  new Chart(byDay,{
    type: 'bar',
    data: {
      labels: dayData.Day,
      datasets: [{
        label: 'HAM-MS',
        data: dayData.HAMMS
      },{
        label: 'HAM-EN',
        data: dayData.HAMEN
      },{
        label: 'CB-MS',
        data: dayData.CB
      },{
        label: 'VOI-MS',
        data: dayData.VOI
      }]
    },
    options: {
      barPercentage: 1,
      categoryPercentage: 0.95,
      plugins: {
        title: {text: 'Hari'}
      },
      scales: {
        x: {stacked: true},
        y: {stacked: true}
      },
      watermark: wmOptions,
    }
  })
})

$.getJSON('/assets/json/stat-week.json',function(weekData) {
  new Chart(byWeek,{
    type: 'line',
    data: {
      labels: weekData.Week,
      datasets: [{
        label: 'HAM-MS',
        data: weekData.HAMMS
      },{
        label: 'HAM-EN',
        data: weekData.HAMEN
      },{
        label: 'CB-MS',
        data: weekData.CB
      },{
        label: 'VOI-MS',
        data: weekData.VOI
      }]
    },
    options: {
      tension: 0.25,
      showLine: true,
      borderWidth: 1,
      borderJoinStyle: 'round',
      pointBorderWidth: 1,
      pointStyle: 'rectRot',
      plugins: {
        title: {text: 'Minggu'}
      },
      watermark: wmOptions,
    }
  })
})

$.getJSON('/assets/json/stat-month.json',function(monthData) {
  new Chart(byMonth, {
    type: 'bar',
    data: {
      labels: monthData.Month,
      datasets: [{
        label: 'HAM-MS',
        data: monthData.HAMMS
      },{
        label: 'HAM-EN',
        data: monthData.HAMEN
      },{
        label: 'CB-MS',
        data: monthData.CB
      },{
        label: 'VOI-MS',
        data: monthData.VOI
      }]
    },
    options: {
      barPercentage: 0.95,
      categoryPercentage: 0.95,
      plugins: {
        title: { text: 'Bulan' }
      },
      scales: {
        x: { stacked: true },
        y: { stacked: true }
      },
      watermark: wmOptions,
    }
  })
})

$.getJSON('/assets/json/stat-quarter.json',function(quarterData) {
  new Chart(byQuarter,{
    type: 'bar',
    data: {
      labels: quarterData.Quarter,
      datasets: [{
        axis: 'y',
        label: 'HAM-MS',
        data: quarterData.HAMMS
      },{
        axis: 'y',
        label: 'HAM-EN',
        data: quarterData.HAMEN
      },{
        axis: 'y',
        label: 'CB-MS',
        data: quarterData.CB
      },{
        axis: 'y',
        label: 'VOI-MS',
        data: quarterData.VOI
      }]
    },
    options: {
      indexAxis: 'y',
      barPercentage: 0.95,
      categoryPercentage: 0.95,
      plugins: {
        title: {text: 'Suku Tahun'}
      },
      scales: {
        x: {stacked: true},
        y: {stacked: true}
      },
      watermark: wmOptions,
    }
  })
})

$.getJSON('/assets/json/stat-band.json',function(bandData) {
  new Chart(byCategory,{
    type: 'doughnut',
    data: {
      labels: ['HAM-MS','HAM-EN','CB','VOI'],
      datasets: [{
        data: [bandData.average_HAMMS,bandData.average_HAMEN,bandData.average_CB,bandData.average_VOI]
      }]
    },
    options: {
      borderWidth: 0,
      plugins: {
        title: {text: 'Purata Penyertaan'}
      },
      watermark: wmOptions,
    }
  })
})

$.getJSON('/assets/json/stat-mode.json',function(modeData) {
  new Chart(byMode,{
    type: 'doughnut',
    data: {
      labels: modeData.Mode,
      datasets: [{
        data: modeData.Count
      }]
    },
    options: {
      borderWidth: 0,
      plugins: {
        title: {text: 'Mod Penyertaan'}
      },
      watermark: wmOptions,
    }
  })
})