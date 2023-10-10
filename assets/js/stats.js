const byTime = document.getElementById('byTime')
const byDate = document.getElementById('byDate')
const byDay = document.getElementById('byDay')
const byWeek = document.getElementById('byWeek')
const byMonth = document.getElementById('byMonth')
const byQuarter = document.getElementById('byQuarter')
const byCategory = document.getElementById('byCategory')
const byMode = document.getElementById('byMode')
const byCSLocaleWeek = document.getElementById('byCSLocaleWeek')
const byCSLocaleDays = document.getElementById('byCSLocaleDays')

Chart.register(ChartDeferred)
// Chart.register(annotationPlugin)
Chart.defaults.font.family = 'Open Sans'
Chart.defaults.font.lineHeight = 1
Chart.defaults.font.size = 10
Chart.defaults.plugins.deferred.daley = 1000
Chart.defaults.plugins.deferred.yOffset = '50%'
Chart.defaults.plugins.legend.position = 'top'
Chart.defaults.plugins.title.display = true
Chart.defaults.plugins.title.font = {weight: 'bold', size: 16}
Chart.defaults.plugins.title.padding = {top: 1, bottom: 1}
Chart.defaults.plugins.title.position = 'top'
const wmOptions = {
  image: 'https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/brands/roipmars/brand.png',
  opacity: 0.15,
  width: '85%',
  height: '28%',
  alignX: 'middle',
  alignY: 'middle',
  position: 'between'
}

$.getJSON('/assets/json/stat-time.json', function(timeData) {
  new Chart(byTime,{
    data: {
      datasets: [
        {data: timeData.HAMMS, label: 'HAM-MS'},
        {data: timeData.HAMEN, label: 'HAM-EN'},
        {data: timeData.CBMS, label: 'CB'},
        {data: timeData.VOIMS, label: 'VOI'},
      ],
      labels: timeData.TIME,
    },
    options: {
      borderJoinStyle: 'round',
      borderWidth: 1,
      pointBorderWidth: 1,
      pointStyle: 'rectRounded',
      plugins: {title: {text: 'UTC'}},
      scales: {
        x: {grid: {display: false}},
        y: {grid: {display: false}, min: 10, type: 'logarithmic'}
      },
      showLine: true,
      tension: 0.5,
      watermark: wmOptions,
    },
    type: 'line',
  })
})

$.getJSON('/assets/json/stat-days.json', function (daysData) {
  $.getJSON('/assets/json/stat-band.json', function (avgData) {
    new Chart(byDate, {
      data: {
        datasets: [
          {data: daysData.HAMMS, label: 'HAM-MS'},
          {data: daysData.HAMEN, label: 'HAM-EN'},
          {data: daysData.CB, label: 'CB'},
          {data: daysData.VOI, label: 'VOI'},
        ],
        labels: daysData.Days,
      },
      options: {
        borderJoinStyle: 'round',
        borderWidth: 1,
        pointBorderWidth: 1,
        pointStyle: 'crossRot',
        plugins: {
          title: {text: 'Harian'},
          annotation: {
            annotations: {
              avgHAMMSval: {
                borderColor: 'rgb(54, 162, 235)',
                borderDash: [15, 3, 3, 3],
                borderWidth: 1,
                type: 'line',
                yMax: avgData.average_HAMMS.toFixed(),
                yMin: avgData.average_HAMMS.toFixed(),
              },
              avgHAMMSlab: {
                backgroundColor: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-bg'),
                color: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-light-text-emphasis'),
                content: 'MS: ' + avgData.average_HAMMS.toFixed(),
                font: {size: 10},
                padding: 1.5,
                position: 'start',
                type: 'label',
                xValue: 0,
                yValue: avgData.average_HAMMS.toFixed(),
              },
              avgHAMENval: {
                borderColor: 'rgb(255, 99, 132)',
                borderDash: [15, 3, 3, 3],
                borderWidth: 1,
                type: 'line',
                yMax: avgData.average_HAMEN.toFixed(),
                yMin: avgData.average_HAMEN.toFixed(),
              },
              avgHAMENlab: {
                backgroundColor: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-bg'),
                color: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-light-text-emphasis'),
                content: 'EN: ' + avgData.average_HAMEN.toFixed(),
                font: {size: 10},
                padding: 1.5,
                position: 'start',
                type: 'label',
                xValue: 0,
                yValue: avgData.average_HAMEN.toFixed(),
              }
            }
          }
        },
        showLine: true,
        spanGaps: true,
        scales: {
          x: {grid: {display: false}} ,
          y: {grid: {display: false}, min: 10, type: 'logarithmic'}
        },
        tension: 0.25,
        watermark: wmOptions,
      },
      type: 'line',
    })
  })
})

$.getJSON('/assets/json/stat-day.json', function(dayData) {
  new Chart(byDay,{
    data: {
      datasets: [
        {data: dayData.HAMMS, label: 'HAM-MS'},
        {data: dayData.HAMEN, label: 'HAM-EN'},
        {data: dayData.CB, label: 'CB'},
        {data: dayData.VOI, label: 'VOI'},
      ],
      labels: dayData.Day,
    },
    options: {
      barPercentage: 1,
      borderRadius: 10,
      categoryPercentage: 0.95,
      plugins: {title: {text: 'Hari'}},
      scales: {
        x: {grid: {display: false}, stacked: true},
        y: {grid: {display: false}, stacked: true}
      },
      watermark: wmOptions,
    },
    type: 'bar',
  })
})

$.getJSON('/assets/json/stat-week.json', function(weekData) {
  new Chart(byWeek,{
    data: {
      datasets: [
        {data: weekData.HAMMS, label: 'HAM-MS'},
        {data: weekData.HAMEN, label: 'HAM-EN'},
        {data: weekData.CB, label: 'CB'},
        {data: weekData.VOI, label: 'VOI'},
      ],
      labels: weekData.Week,
    },
    options: {
      borderJoinStyle: 'round',
      borderWidth: 1,
      plugins: {title: {text: 'Minggu'}},
      pointBorderWidth: 1,
      pointStyle: 'cross',
      scales: {
        x: {grid: {display: false}},
        y: {grid: {display: false}, min: 10, type: 'logarithmic'}
      },
      showLine: true,
      tension: 0.25,
      watermark: wmOptions,
    },
    type: 'line',
  })
})

$.getJSON('/assets/json/stat-month.json', function(monthData) {
  new Chart(byMonth, {
    data: {
      datasets: [
        {data: monthData.HAMMS, label: 'HAM-MS'},
        {data: monthData.HAMEN, label: 'HAM-EN'},
        {data: monthData.CB, label: 'CB'},
        {data: monthData.VOI, label: 'VOI'}
      ],
      labels: monthData.Month,
    },
    options: {
      barPercentage: 0.99,
      borderRadius: 10,
      categoryPercentage: 0.99,
      plugins: {title: {text: 'Bulan'}},
      scales: {
        x: {grid: {display: false}, stacked: true},
        y: {grid: {display: false}, stacked: true}
      },
      watermark: wmOptions,
    },
    type: 'bar',
  })
})

$.getJSON('/assets/json/stat-quarter.json', function(quarterData) {
  new Chart(byQuarter,{
    data: {
      datasets: [
        {data: quarterData.HAMMS, label: 'HAM-MS'},
        {data: quarterData.HAMEN, label: 'HAM-EN'},
        {data: quarterData.CB, label: 'CB'},
        {data: quarterData.VOI, label: 'VOI'},
      ],
      labels: quarterData.Quarter,
    },
    options: {
      barPercentage: 0.99,
      borderRadius: 10,
      categoryPercentage: 0.99,
      plugins: {title: {text: 'Suku Tahun'}},
      scales: {
        x: {grid: {display: false}, stacked: true},
        y: {grid: {display: false}, stacked: true}
      },
      watermark: wmOptions,
    },
    type: 'bar',
  })
})

$.getJSON('/assets/json/stat-mode.json', function(modeData) {
  new Chart(byMode,{
    data: {
      datasets: [{data: modeData.Count}],
      labels: modeData.Mode,
    },
    options: {
      aspectRatio: 2,
      borderWidth: 0,
      plugins: {title: {text: 'Mod Penyertaan'}},
      watermark: wmOptions,
    },
    type: 'doughnut',
  })
})

/* $.getJSON('/assets/json/stat-days.json', function(localeDaysData) {
  new Chart(byCSLocaleDays,{
    data: {
      datasets: [
        {data: localeDaysData.LOC, label: 'Domestik'},
        {data: localeDaysData.INTL, label: 'Antarabangsa'},
      ],
      labels: localeDaysData.Days,
    },
    options: {
      borderJoinStyle: 'round',
      borderWidth: 1,
      plugins: {title: {text: 'Panggilan'}},
      pointBorderWidth: 1,
      pointStyle: 'crossRot',
      scales: {
        x: {grid: {display: false}},
        y: {grid: {display: false}, type: 'logarithmic'}
      },
      showLine: true,
      tension: 0.25,
      watermark: wmOptions,
    },
    type: 'line',
  })
}) */

$.getJSON('/assets/json/stat-week.json', function(localeWeekData) {
  new Chart(byCSLocaleWeek,{
    data: {
      datasets: [
        {data: localeWeekData.LOC, label: 'Domestik'},
        {data: localeWeekData.INTL, label: 'Antarabangsa'},
      ],
      labels: localeWeekData.Week,
    },
    options: {
      borderJoinStyle: 'round',
      borderWidth: 1,
      plugins: {title: {text: 'Panggilan'}},
      pointBorderWidth: 1,
      pointStyle: 'cross',
      scales: {
        x: {grid: {display: false}},
        y: {grid: {display: false}, type: 'logarithmic'}
      },
      showLine: true,
      tension: 0.25,
      watermark: wmOptions,
    },
    type: 'line',
  })
})