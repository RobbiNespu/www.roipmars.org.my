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
Chart.defaults.font.family = 'Source Sans Pro'
Chart.defaults.font.lineHeight = 1
Chart.defaults.font.size = 10
Chart.defaults.plugins.deferred.delay = 1000
Chart.defaults.plugins.deferred.yOffset = '50%'
Chart.defaults.plugins.legend.position = 'top'
Chart.defaults.plugins.title.display = true
Chart.defaults.plugins.title.font = { weight: 'bold', size: 16 }
Chart.defaults.plugins.title.padding = { top: 1, bottom: 1 }
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

$.getJSON('/assets/json/s-time.json', function (timeData) {
  new Chart(byTime, {
    data: {
      datasets: [
        { data: timeData.hHAMMS, label: 'HAM-MS' },
        { data: timeData.hHAMEN, label: 'HAM-EN' },
        { data: timeData.hCBMS, label: 'CB' },
        { data: timeData.hVOIMS, label: 'VOI' },
      ],
      labels: timeData.TIME,
    },
    options: {
      borderJoinStyle: 'round',
      borderWidth: 1,
      pointBorderWidth: 1,
      pointStyle: 'rectRounded',
      plugins: { title: { text: 'UTC' } },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { display: false }, min: 10, type: 'logarithmic' }
      },
      showLine: true,
      tension: 0.5,
      watermark: wmOptions,
    },
    type: 'line',
  })
})

$.getJSON('/assets/json/s-days.json', function (daysData) {
  new Chart(byDate, {
    data: {
      datasets: [
        { data: daysData.dsHAMMS, label: 'HAM-MS' },
        { data: daysData.dsHAMEN, label: 'HAM-EN' },
        { data: daysData.dsCB, label: 'CB' },
        { data: daysData.dsVOI, label: 'VOI' },
      ],
      labels: daysData.Days,
    },
    options: {
      borderJoinStyle: 'round',
      borderWidth: 1,
      pointBorderWidth: 1,
      pointStyle: 'crossRot',
      plugins: {
        title: { text: 'Harian' },
        annotation: {
          annotations: {
            avgHAMMSval: {
              borderColor: 'rgb(54, 162, 235)',
              borderDash: [15, 3, 3, 3],
              borderWidth: 1,
              type: 'line',
              yMax: daysData.avg_dsHAMMS.toFixed(),
              yMin: daysData.avg_dsHAMMS.toFixed(),
            },
            avgHAMMSlab: {
              backgroundColor: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-bg'),
              color: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-light-text-emphasis'),
              content: 'MS: ' + daysData.avg_dsHAMMS.toFixed(),
              font: { size: 10 },
              padding: 1.5,
              position: 'start',
              type: 'label',
              xValue: 0,
              yValue: daysData.avg_dsHAMMS.toFixed(),
            },
            avgHAMENval: {
              borderColor: 'rgb(255, 99, 132)',
              borderDash: [15, 3, 3, 3],
              borderWidth: 1,
              type: 'line',
              yMax: daysData.avg_dsHAMEN.toFixed(),
              yMin: daysData.avg_dsHAMEN.toFixed(),
            },
            avgHAMENlab: {
              backgroundColor: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-bg'),
              color: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-light-text-emphasis'),
              content: 'EN: ' + daysData.avg_dsHAMEN.toFixed(),
              font: { size: 10 },
              padding: 1.5,
              position: 'start',
              type: 'label',
              xValue: 0,
              yValue: daysData.avg_dsHAMEN.toFixed(),
            }
          }
        }
      },
      showLine: true,
      spanGaps: true,
      scales: {
        x: { grid: { display: false } },
        y: { grid: { display: false }, min: 10, type: 'logarithmic' }
      },
      tension: 0.25,
      watermark: wmOptions,
    },
    type: 'line',
  })
})

$.getJSON('/assets/json/s-day.json', function (dayData) {
  new Chart(byDay, {
    data: {
      datasets: [
        { data: dayData.dHAMMS, label: 'HAM-MS' },
        { data: dayData.dHAMEN, label: 'HAM-EN' },
        { data: dayData.dCB, label: 'CB' },
        { data: dayData.dVOI, label: 'VOI' },
      ],
      labels: dayData.Day,
    },
    options: {
      barPercentage: 1,
      borderRadius: 10,
      categoryPercentage: 0.95,
      plugins: { title: { text: 'Hari' } },
      scales: {
        x: { grid: { display: false }, stacked: true },
        y: { grid: { display: false }, stacked: true }
      },
      watermark: wmOptions,
    },
    type: 'bar',
  })
})

$.getJSON('/assets/json/s-week.json', function (weekData) {
  new Chart(byWeek, {
    data: {
      datasets: [
        { data: weekData.wHAMMS, label: 'HAM-MS' },
        { data: weekData.wHAMEN, label: 'HAM-EN' },
        { data: weekData.wCB, label: 'CB' },
        { data: weekData.wVOI, label: 'VOI' },
      ],
      labels: weekData.Week,
    },
    options: {
      borderJoinStyle: 'round',
      borderWidth: 1,
      plugins: { title: { text: 'Minggu' } },
      pointBorderWidth: 1,
      pointStyle: 'cross',
      scales: {
        x: { grid: { display: false } },
        y: { grid: { display: false }, min: 10, type: 'logarithmic' }
      },
      showLine: true,
      tension: 0.25,
      watermark: wmOptions,
    },
    type: 'line',
  })
})

$.getJSON('/assets/json/s-month.json', function (monthData) {
  new Chart(byMonth, {
    data: {
      datasets: [
        { data: monthData.mHAMMS, label: 'HAM-MS' },
        { data: monthData.mHAMEN, label: 'HAM-EN' },
        { data: monthData.mCB, label: 'CB' },
        { data: monthData.mVOI, label: 'VOI' }
      ],
      labels: monthData.Month,
    },
    options: {
      barPercentage: 0.99,
      borderRadius: 10,
      categoryPercentage: 0.99,
      plugins: { title: { text: 'Bulan' } },
      scales: {
        x: { grid: { display: false }, stacked: true },
        y: { grid: { display: false }, stacked: true }
      },
      watermark: wmOptions,
    },
    type: 'bar',
  })
})

$.getJSON('/assets/json/s-quarter.json', function (quarterData) {
  new Chart(byQuarter, {
    data: {
      datasets: [
        { data: quarterData.qHAMMS, label: 'HAM-MS' },
        { data: quarterData.qHAMEN, label: 'HAM-EN' },
        { data: quarterData.qCB, label: 'CB' },
        { data: quarterData.qVOI, label: 'VOI' },
      ],
      labels: quarterData.Quarter,
    },
    options: {
      barPercentage: 0.99,
      borderRadius: 10,
      categoryPercentage: 0.99,
      plugins: { title: { text: 'Suku Tahun' } },
      scales: {
        x: { grid: { display: false }, stacked: true },
        y: { grid: { display: false }, stacked: true }
      },
      watermark: wmOptions,
    },
    type: 'bar',
  })
})

$.getJSON('/assets/json/s-mode.json', function (modeData) {
  new Chart(byMode, {
    data: {
      datasets: [{ data: modeData.md }],
      labels: modeData.Mode,
    },
    options: {
      aspectRatio: 2,
      borderWidth: 0,
      plugins: { title: { text: 'Mod Penyertaan' } },
      watermark: wmOptions,
    },
    type: 'doughnut',
  })
})

/* $.getJSON('/assets/json/s-days.json', function(localeDaysData) {
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

$.getJSON('/assets/json/s-week.json', function (localeWeekData) {
  new Chart(byCSLocaleWeek, {
    data: {
      datasets: [
        { data: localeWeekData.wLOC, label: 'Domestik' },
        { data: localeWeekData.wINTL, label: 'Antarabangsa' },
      ],
      labels: localeWeekData.Week,
    },
    options: {
      borderJoinStyle: 'round',
      borderWidth: 1,
      plugins: {
        title: { text: 'Panggilan' },
        // annotation: {
        //   annotations: {
        //     avgLOCval: {
        //       borderColor: 'rgb(54, 162, 235)',
        //       borderDash: [15, 3, 3, 3],
        //       borderWidth: 1,
        //       type: 'line',
        //       yMax: localeWeekData.avg_wLOC.toFixed(),
        //       yMin: localeWeekData.avg_wLOC.toFixed(),
        //     },
        //     avgLOClab: {
        //       backgroundColor: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-bg'),
        //       color: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-light-text-emphasis'),
        //       content: 'Local: ' + localeWeekData.avg_wLOC.toFixed(),
        //       font: { size: 10 },
        //       padding: 1.5,
        //       position: 'start',
        //       type: 'label',
        //       xValue: 0,
        //       yValue: localeWeekData.avg_wLOC.toFixed(),
        //     },
        //     avgINTLval: {
        //       borderColor: 'rgb(255, 99, 132)',
        //       borderDash: [15, 3, 3, 3],
        //       borderWidth: 1,
        //       type: 'line',
        //       yMax: localeWeekData.avg_wINTL.toFixed(),
        //       yMin: localeWeekData.avg_wINTL.toFixed(),
        //     },
        //     avgINTLlab: {
        //       backgroundColor: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-bg'),
        //       color: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-light-text-emphasis'),
        //       content: 'International: ' + localeWeekData.avg_wINTL.toFixed(),
        //       font: { size: 10 },
        //       padding: 1.5,
        //       position: 'start',
        //       type: 'label',
        //       xValue: 0,
        //       yValue: localeWeekData.avg_wINTL.toFixed(),
        //     }
        //   }
        // }
      },
      pointBorderWidth: 1,
      pointStyle: 'cross',
      scales: {
        x: { grid: { display: false } },
        y: { grid: { display: false }, type: 'logarithmic' }
      },
      showLine: true,
      tension: 0.25,
      watermark: wmOptions,
    },
    type: 'line',
  })
})