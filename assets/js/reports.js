const byTime = document.getElementById('byTime')
const byDate = document.getElementById('byDate')
const byDay = document.getElementById('byDay')
const byWeek = document.getElementById('byWeek')
const byMonth = document.getElementById('byMonth')
const byQuarter = document.getElementById('byQuarter')
const byCategory = document.getElementById('byCategory')
const byMode = document.getElementById('byMode')
// const byCountry = document.getElementById('byCountry')

Chart.defaults.font.family = 'Open Sans'
Chart.defaults.font.size = 10
Chart.defaults.font.lineHeight = 1

Chart.defaults.plugins.title.display = true
Chart.defaults.plugins.title.position = 'bottom'
Chart.defaults.plugins.title.align = 'end'
Chart.defaults.plugins.title.font = {weight: 'bold', style: 'italic', size: 14}
Chart.defaults.plugins.title.padding = {top: 1,bottom: 1}

var brandImg = new Image()
brandImg.src = '/media/image/brands/roipmars/brand.png'
Chart.defaults.plugins.watermark.image = brandImg
Chart.defaults.plugins.watermark.opacity = 0.5
Chart.defaults.plugins.watermark.width = '100%'
Chart.defaults.plugins.watermark.height = '100%'
Chart.defaults.plugins.watermark.alignX = 'middle'
Chart.defaults.plugins.watermark.alignY = 'middle'
Chart.defaults.plugins.watermark.position = 'back'

// const rtime = await fetch('/assets/json/rank-time.json').then((t) => t.json())
new Chart(byTime, {
  type: 'line',
  data: {
    labels: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
    datasets: [{
      label: 'HAM-MS',
      data: [,103,100,,26,20,,,,,,,22,1727,1361,230,15,,,,,,,]
    },{
      label: 'HAM-EN',
      data: [,,,,,,,,,,,,,606,371,1,,,,,,,,]
    },{
      label: 'CB-MS',
      data: [,,,,,,,,,,,,,337,103,,,,,,,,,]
    },{
      label: 'VOI-MS',
      data: [,,,,,,,,,,,,,,,,,,,,717,415,,]
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
      title: {
        text: 'UTC'
      }
    }
  }
})

new Chart(byDate, {
  type: 'line',
  data: {
    labels: ['001/23','004/23','007/23','008/23','011/23','013/23','015/23','018/23','020/23','021/23','022/23','025/23','027/23','028/23','029/23','032/23','034/23','035/23','036/23','039/23','041/23','042/23','043/23','046/23','048/23','049/23','050/23','053/23','055/23','056/23','057/23','060/23','062/23','063/23','064/23','067/23','069/23','070/23','071/23','074/23','076/23','077/23','078/23','081/23','082-4/23','082-21/23','083/23','084-4/23','084-21/23','085-4/23','085-22/23','086/23','087/23','088/23','089/23','090/23','091/23','092/23','093/23','094/23','095/23','096/23','097/23','098/23','099/23','100/23','101/23','102/23','103/23','104/23','105/23','106/23','107/23','108-4/23','108-21/23','109/23','110/23','111-21/23','114/23','116/23','117/23','120/23','123/23','125/23','126/23','127/23','128/23','130/23','133/23','134/23','135/23','137/23','139/23','140/23','141/23','142/23','144/23','146/23','147-12/23','147-21/23','148/23','149/23','152/23','153/23','154/23','155/23','156/23','158/23','160/23','161/23','162/23','163/23','165/23','167/23','168/23','169/23','170/23','172/23','174/23','175/23','176/23','177/23','179/23','181/23','182/23','183/23','184/23','186/23','188/23','189/23','190/23','191/23','193/23','195/23','196/23','197/23','198/23','200/23','202/23','203/23','204/23','205/23','207/23','209/23','210/23','211/23','212/23','214/23','216/23','217/23','218/23','219/23','221/23','223/23','224/23','225/23','226/23','228/23','230/23','231/23','232/23','233/23','235/23','237/23','238/23','239/23','242/23'],
    datasets: [{
      label: 'HAM-MS',
      data: [,,37,,,23,,,37,58,,,33,34,,,22,34,,,24,29,,,32,63,,,24,28,,,38,44,,,31,34,,,42,43,,,,18,,,65,,,,,,,,,,,,,,,,,,,,,,,,,,,,,21,39,,61,,,44,35,,31,,23,,24,,38,41,,46,,31,46,57,,23,40,51,44,,57,,46,47,,55,,41,61,,41,,43,26,,35,,37,47,,43,,61,48,,46,,45,47,40,41,,61,58,31,61,,45,49,18,57,,59,43,27,40,,46,49,28,50,,56,51,26,52,,30,53,33,]
    },{
      label: 'HAM-EN',
      data: [,17,,,34,,,30,,,,28,,,,31,,,,37,,,,18,,,,26,,,,40,,,,48,,,,27,,,,33,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,47,,,,,29,,,41,,,,,23,,,,18,,,,,27,,,,,,,,,,,35,,,,,39,,,,,30,,,,,32,,,,,40,,,,,48,,,,,46,,,,,28,,,,,22,,,,,25,,,,,25,,,,,28,,,,43]
    },{
      label: 'CB-MS',
      data: [22,,,31,,,28,,,,26,,,,10,,,,23,,,,22,,,,19,,,,18,,,,17,,,,20,,,,14,,,,,,,,16,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,18,,,,20,,,,19,,,,,8,,,,,,5,,,,,14,,,,,17,,,,,19,,,,,16,,,,,20,,,,,18]
    },{
      label: 'VOI-MS',
      data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,32,,36,35,,23,,44,33,43,21,31,37,43,38,45,30,51,36,44,48,38,56,39,47,32,41,49,44,38,,36,42]
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
      title: {
        text: 'Harian'
      }
    }
  }
})

new Chart(byDay, {
  type: 'bar',
  data: {
    labels: ['Isnin','Selasa','Rabu','Khamis','Jumaat','Sabtu','Ahad'],
    datasets: [{
      label: 'HAM-MS',
      data: [740,,,119,1059,1291,203]
    },{
      label: 'HAM-EN',
      data: [,47,947,,,,]
    },{
      label: 'CB-MS',
      data: [,,,,,,439]
    },{
      label: 'VOI-MS',
      data: [164,172,148,193,134,157,163]
    }]
  },
  options: {
    barPercentage: 1,
    categoryPercentage: 0.95,
    plugins: {
      title: {
        text: 'Hari'
      }
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    }
  }
})

new Chart(byWeek, {
  type: 'line',
  data: {
    labels: ['01/23','02/23','03/23','04/23','05/23','06/23','07/23','08/23','09/23','10/23','11/23','12/23','13/23','14/23','15/23','16/23','17/23','18/23','19/23','20/23','21/23','22/23','23/23','24/23','25/23','26/23','27/23','28/23','29/23','30/23','31/23','32/23','33/23','34/23','35/23'],
    datasets: [{
      label: 'HAM-MS',
      data: [36,22,95,67,56,53,95,52,82,65,85,83,,,,20,98,78,54,103,180,158,150,157,110,119,152,178,191,173,186,163,183,168]
    },{
      label: 'HAM-EN',
      data: [17,34,30,28,31,37,18,26,40,48,27,33,,,,47,29,41,23,18,27,,35,39,30,32,40,48,46,28,22,25,25,28,43]
    },{
      label: 'CB-MS',
      data: [31,28,26,10,23,22,19,18,17,20,14,16,,,,,18,20,19,8,5,14,17,19,16,20,18]
    },{
      label: 'VOI-MS',
      data: [,,,,,,,,,,,126,252,292,302,159]
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
      title: {
        text: 'Minggu'
      }
    }
  }
})

new Chart(byMonth, {
  type: 'bar',
  data: {
    labels: ['01/23','02/23','03/23','04/23','05/23','06/23','07/23','08/23'],
    datasets: [{
      label: 'HAM-MS',
      data: [220,256,315,118,438,624,798,523]
    },{
      label: 'HAM-EN',
      data: [109,112,148,76,108,136,162,100]
    },{
      label: 'CB-MS',
      data: [117,82,67,17,52,66,38]
    },{
      label: 'VOI-MS',
      data: [,,298,866]
    }]
  },
  options: {
    barPercentage: 0.95,
    categoryPercentage: 0.95,
    plugins: {
      title: {
        text: 'Bulan'
      }
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    }
  }
})

new Chart(byQuarter, {
  type: 'bar',
  data: {
    labels: ['Q1/23','Q2/23','Q3/23','Q4/23'],
    datasets: [{
      axis: 'y',
      label: 'HAM-MS',
      data: [791,1180,1321,]
    },{
      axis: 'y',
      label: 'HAM-EN',
      data: [369,320,262,]
    },{
      axis: 'y',
      label: 'CB-MS',
      data: [266,135,38,]
    },{
      axis: 'y',
      label: 'VOI-MS',
      data: [298,833,,]
    }]
  },
  options: {
    indexAxis: 'y',
    barPercentage: 0.95,
    categoryPercentage: 0.95,
    plugins: {
      title: {
        text: 'Suku Tahun'
      }
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    }
  }
})

new Chart(byCategory, {
  type: 'polarArea',
  data: {
    labels: ['HAM-MS','HAM-EN','CB-MS','VOI-MS'],
    datasets: [{
      data: [40,30,18,38]
    }]
  },
  options: {
    borderWidth: 0,
    plugins: {
      title: {
        text: 'Purata Penyertaan'
      }
    }
  }
})

new Chart(byMode, {
  type: 'doughnut',
  data: {
    labels: ['Discord','EchoLink','Free Radio Network','Mumble','Peanut','Radio Transceiver','Telegram','TeamSpeak','TeamTalk','WhatsApp','Zello'],
    datasets: [{
      data: [3,961,11,12,8,295,9,3112,1,0,319]
    }]
  },
  options: {
    borderWidth: 0,
    plugins: {
      title: {
        text: 'Mod Penyertaan'
      }
    }
  }
})

// await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((r) => r.json()).then((data) => {
//   const countries = ChartGeo.topojson.feature(data, data.objects.countries).features
// 
//   new Chart(byCountry.getContext('2d'), {
//     type: 'choropleth',
//     data: {
//       labels: countries.map((d) => d.properties.name),
//       datasets: [{
//         label: 'Countries',
//         data: countries.map((d) => ({feature: d, value: Math.random()})),
//       }]
//     },
//     options: {
//       showOutline: true,
//       showGraticule: true,
//       plugins: {
//         legend: {
//           display: false
//         },
//       },
//       scales: {
//         projection: {
//           axis: 'x',
//           projection: 'equalEarth'
//         }
//       }
//     }
//   })
// })