
const byCountry = document.getElementById('byCountry')

fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((r) => r.json()).then((data) => {
  const countries = ChartGeo.topojson.feature(data, data.objects.countries).features

  new Chart(byCountry.getContext('2d'), {
    type: 'choropleth',
    data: {
      labels: countries.map((d) => d.properties.name),
      datasets: [{
        label: 'Countries',
        data: countries.map((d) => ({feature: d, value: Math.random()})),
      }]
    },
    options: {
      showOutline: true,
      showGraticule: true,
      plugins: {
        legend: {
          display: false
        },
      },
      scales: {
        projection: {
          axis: 'x',
          projection: 'equalEarth'
        }
      }
    }
  })
})