const byCountry = document.getElementById('byCountry')

$.getJSON('/assets/json/stat-country.json', function(countryData) {
  fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((r) => r.json()).then((data) => {
    const countries = ChartGeo.topojson.feature(data,data.objects.countries).features
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
          })),
          label: 'Countries',
        }],
        labels: countryNames,
      },
      options: {
        plugins: {
          legend: { display: false },
          title: { text: 'Panggilan Penyertaan' },
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
          },
        },
        watermark: wmOptions,
      },
      type: 'choropleth',
    })
  })
})