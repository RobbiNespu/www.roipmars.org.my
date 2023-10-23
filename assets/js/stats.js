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
const byCountry = document.getElementById('byCountry')

function dtCFormat(input) {
  return new Intl.DateTimeFormat('ms-MY', {
    formatMatcher: 'basic',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    dayPeriod: 'long',
    timeZoneName: 'longGeneric',
    hour12: true,
    hourCycle: 'h12',
    timeZone: 'Asia/Kuala_Lumpur'
  }).format(new Date(input))
}

function lastMod(url) {
  try {
    var req = new XMLHttpRequest()
    req.open('HEAD', url, false)
    req.send(null)
    if (req.status == 200) {
      return 'kemaskini: ' + dtCFormat(req.getResponseHeader('Last-Modified'))
    }
    else return false
  } catch (er) {
    return er.message
  }
}

Chart.register(ChartDeferred)
Chart.register(ChartjsPluginStacked100.default)
Chart.defaults.font.family = 'Source Sans Pro'
Chart.defaults.font.lineHeight = 1
Chart.defaults.font.size = 10
Chart.defaults.plugins.deferred.delay = 1000
Chart.defaults.plugins.deferred.yOffset = '80%'
Chart.defaults.plugins.legend.position = 'top'
Chart.defaults.plugins.subtitle.align = 'right'
Chart.defaults.plugins.subtitle.display = true
Chart.defaults.plugins.subtitle.padding = { bottom: 1, top: 1.5 }
Chart.defaults.plugins.subtitle.position = 'top'
Chart.defaults.plugins.title.display = true
Chart.defaults.plugins.title.font = { size: 16, weight: 'bold' }
Chart.defaults.plugins.title.padding = { bottom: 1.5, top: 1 }
Chart.defaults.plugins.title.position = 'top'
const wmOptions = {
  image: 'https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/brands/roipmars/brand.png',
  opacity: 0.15,
  width: '80%',
  height: '25%',
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
      plugins: {
        subtitle: { text: lastMod('/assets/json/s-time.json') },
        title: { text: 'UTC' }
      },
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
              font: { size: 9 },
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
              font: { size: 9 },
              padding: 1.5,
              position: 'start',
              type: 'label',
              xValue: 0,
              yValue: daysData.avg_dsHAMEN.toFixed(),
            }
          }
        },
        subtitle: { text: lastMod('/assets/json/s-days.json') },
        title: { text: 'Harian' }
      },
      showLine: true,
      spanGaps: true,
      scales: {
        x: { grid: { display: false } },
        y: { grid: { display: false }, min: 10, type: 'logarithmic' }
      },
      tension: 0.5,
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
      categoryPercentage: 0.98,
      plugins: {
        subtitle: { text: lastMod('/assets/json/s-day.json') },
        stacked100: { enable: true, precision: 0 },
        title: { text: 'Hari' }
      },
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
      plugins: {
        annotation: {
          annotations: {
            avgHAMMSval: {
              borderColor: 'rgb(54, 162, 235)',
              borderDash: [15, 3, 3, 3],
              borderWidth: 1,
              type: 'line',
              yMax: weekData.avg_wHAMMS.toFixed(),
              yMin: weekData.avg_wHAMMS.toFixed(),
            },
            avgHAMMSlab: {
              backgroundColor: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-bg'),
              color: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-light-text-emphasis'),
              content: 'MS: ' + weekData.avg_wHAMMS.toFixed(),
              font: { size: 9 },
              padding: 1.5,
              position: 'start',
              type: 'label',
              xValue: 0,
              yValue: weekData.avg_wHAMMS.toFixed(),
            },
            avgHAMENval: {
              borderColor: 'rgb(255, 99, 132)',
              borderDash: [15, 3, 3, 3],
              borderWidth: 1,
              type: 'line',
              yMax: weekData.avg_wHAMEN.toFixed(),
              yMin: weekData.avg_wHAMEN.toFixed(),
            },
            avgHAMENlab: {
              backgroundColor: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-bg'),
              color: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-light-text-emphasis'),
              content: 'EN: ' + weekData.avg_wHAMEN.toFixed(),
              font: { size: 9 },
              padding: 1.5,
              position: 'start',
              type: 'label',
              xValue: 0,
              yValue: weekData.avg_wHAMEN.toFixed(),
            }
          }
        },
        subtitle: { text: lastMod('/assets/json/s-week.json') },
        title: { text: 'Minggu' },
      },
      pointBorderWidth: 1,
      pointStyle: 'cross',
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
      barPercentage: 1,
      categoryPercentage: 0.98,
      plugins: {
        subtitle: { text: lastMod('/assets/json/s-month.json') },
        stacked100: { enable: true, precision: 0 },
        title: { text: 'Bulan' }
      },
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
      barPercentage: 1,
      categoryPercentage: 0.98,
      plugins: {
        subtitle: { text: lastMod('/assets/json/s-quarter.json') },
        stacked100: { enable: true, precision: 0 },
        title: { text: 'Suku Tahun' }
      },
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
      plugins: {
        subtitle: { text: lastMod('/assets/json/s-mode.json') },
        title: { text: 'Mod Penyertaan' }
      },
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
      plugins: {
        subtitle: { text: lastMod('/assets/json/s-days.json') },
        title: { text: 'Panggilan' }
      },
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
        annotation: {
          annotations: {
            avgLOCval: {
              borderColor: 'rgb(54, 162, 235)',
              borderDash: [15, 3, 3, 3],
              borderWidth: 1,
              type: 'line',
              yMax: localeWeekData.avg_wLOC.toFixed(),
              yMin: localeWeekData.avg_wLOC.toFixed(),
            },
            avgLOClab: {
              backgroundColor: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-bg'),
              color: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-light-text-emphasis'),
              content: 'Domestik: ' + localeWeekData.avg_wLOC.toFixed(),
              font: { size: 9 },
              padding: 1.5,
              position: 'start',
              type: 'label',
              xValue: 0,
              yValue: localeWeekData.avg_wLOC.toFixed(),
            },
            avgINTLval: {
              borderColor: 'rgb(255, 99, 132)',
              borderDash: [15, 3, 3, 3],
              borderWidth: 1,
              type: 'line',
              yMax: localeWeekData.avg_wINTL.toFixed(),
              yMin: localeWeekData.avg_wINTL.toFixed(),
            },
            avgINTLlab: {
              backgroundColor: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-body-bg'),
              color: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-light-text-emphasis'),
              content: 'Antarabangsa: ' + localeWeekData.avg_wINTL.toFixed(),
              font: { size: 9 },
              padding: 1.5,
              position: 'start',
              type: 'label',
              xValue: 0,
              yValue: localeWeekData.avg_wINTL.toFixed(),
            }
          }
        },
        subtitle: { text: lastMod('/assets/json/s-week.json') },
        title: { text: 'Panggilan Mingguan' }
      },
      pointBorderWidth: 1,
      pointStyle: 'cross',
      scales: {
        x: { grid: { display: false } },
        y: { grid: { display: false }, type: 'logarithmic' }
      },
      showLine: true,
      tension: 0.5,
      watermark: wmOptions,
    },
    type: 'line',
  })
})

$.getJSON('/assets/json/s-country.json', function (countryData) {
  fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((r) => r.json()).then((data) => {
    const countries = ChartGeo.topojson.feature(data, data.objects.countries).features
    const countryNames = countryData.Country
    const countryValues = countryData.Count

    const features = []
    for (let c = 0; c < countryNames.length; c++) { features[c] = countries.find((d) => d.properties.name === countryNames[c]) }
    for (let v = 0; v < countryValues.length; v++) { features[v].value = countryValues[v] }

    new Chart(byCountry, {
      data: {
        datasets: [{
          data: features.map((d) => ({
            feature: d,
            value: d.value
          }))
        }],
        labels: countryNames,
      },
      options: {
        plugins: {
          legend: { display: false },
          subtitle: { text: lastMod('/assets/json/s-country.json') },
          title: { text: 'Penyertaan' }
        },
        scales: {
          color: {
            axis: 'x',
            interpolate: 'gnBu',
            missing: window.getComputedStyle(document.querySelector('body')).getPropertyValue('--bs-dark-bg-subtle'),
            quantize: 5,
          },
          projection: {
            axis: 'x',
            projection: 'equirectangular'
          }
        },
        watermark: wmOptions,
      },
      type: 'choropleth',
    })
  })
})