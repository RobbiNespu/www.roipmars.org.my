$(document).ready(function () {
  var cbmarsreg = $('#cbcslist').DataTable({
    ajax: '/assets/json/cbmars.json',
    processing: true,
    ordering: false,
    pagingType: 'full_numbers',
    pageLength: 25,
    searchDelay: 350,
    responsive: true,
    order: [
      [0, 'desc'],
      [4, 'desc']
    ],
    keys: {
      blurable: true,
      keys: ['\n'.charCodeAt(0)],
      columns: [2, 3, 4]
    },
    columnDefs: [
      { className: 'text-center', targets: '_all' },
      { searchable: false, targets: [0, 4] }
    ],
    language: {
      lengthMenu: 'Paparkan _MENU_ rekod',
      search: 'Cari Callsign/Nama/Lokal:',
      processing: '<div class="spinner-border" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
      emptyTable: 'Rekod Tidak Ditemui',
      infoEmpty: 'Rekod Tidak Ditemui',
      zeroRecords: 'Rekod Tidak Ditemui',
      paginate: {
        first: '<<',
        previous: '<',
        next: '>',
        last: '>>'
      },
      info: 'Menunjukkan _START_ - _END_ dari _TOTAL_ rekod',
      infoFiltered: ' - tapisan dari _MAX_ rekod',
      infoPostFix: ' | Rekod diperoleh daripada maklumat sebenar.'
    },
    initComplete: function () {
      let tds = $('#cbcslist').DataTable().page.info().recordsTotal
      $('.cscount').html(tds + ' isyarat panggilan berdaftar')
    }
  })
  let CBCert = document.getElementById('cbCert-progress')
  $('#cbcslist').delegate('tbody tr td', 'click', function () {
		const cbcsdata = cbmarsreg.row(this).data()
		const cbcsID = cbcsdata[0]
		const cbcsCall = cbcsdata[1]
		const cbcsName = cbcsdata[2]
		const cbcsRegDate = cbcsdata[4]
		let confirmtxt = `You are requesting Certificate for ${cbcsCall}. Are you sure?\nClick 'ok' to continue`
		if (confirm(confirmtxt) == true) {
      try {
				genCert(cbcsID, cbcsCall, cbcsName, cbcsRegDate)
			} catch (error) {
				console.log(error)
				alert('Cert generator subprocess error. reload required.\nclick "ok" to refresh.')
				setTimeout(location.reload(), 5000)
			}
		}
		async function genCert(id, call, name, regDate) {
			const { jsPDF } = window.jspdf
			var cbcsCert = new jsPDF({
				orientation: 'l',
				unit: 'px',
				format: [1056, 816],
				compress: true,
			})

			cbcsCert.addFont('/assets/font/HYPost-Light.ttf', 'HYPost-Light', 'normal')
			cbcsCert.addFont('/assets/font/KodeMono-Regular.ttf', 'KodeMono-Regular', 'normal')
			cbcsCert.addFont('/assets/font/OpenSansCondensed-Regular.ttf', 'OpenSansCondensed-Regular', 'normal')
			cbcsCert.addFont('/assets/font/Orbitron-Black.ttf', 'Orbitron-Black', 'normal')
			cbcsCert.addFont('/assets/font/AgencyFB.ttf', 'AgencyFB', 'normal')

			cbcsCert.addImage('/assets/image/certs/cb.png', 'PNG', 0, 0, 1056, 816)

			cbcsCert.setFont('AgencyFB').setFontSize(72).setTextColor('#336699').text(name, 775, 225, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 350, renderingMode: 'fillThenStroke' })
      cbcsCert.setFont('AgencyFB').setFontSize(52).setTextColor('#5cce54').text(`${call} - [${id}]`, 775, 520, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 350, renderingMode: 'fillThenStroke' })

      if (call == '113MSOGK') {
				cbcsCert.setFont('AgencyFB').setFontSize(32).setTextColor('black').text('HAFIZI RUSLAN, SETIAUSAHA', 650, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })
				cbcsCert.addImage('/assets/image/certs/lgx_sign.png', 'PNG', 580, 575, 150, 150)
			} else {
				cbcsCert.setFont('AgencyFB').setFontSize(32).setTextColor('black').text('KAMARUDZAMAN, PRESIDEN', 650, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })
				cbcsCert.addImage('/assets/image/certs/ogk_sign.png', 'PNG', 615, 585, 87.2, 136.4)
			}

			cbcsCert.setFont('AgencyFB').setFontSize(48).setTextColor('#72c7ef').text(regDate.toUpperCase(), 915, 660, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 200, renderingMode: 'fillThenStroke' })
			cbcsCert.setFont('AgencyFB').setFontSize(32).setTextColor('black').text('TARIKH DAFTAR', 915, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })

			cbcsCert.addImage('/media/image/brands/roipmars/brand_oglow.png', 'PNG', 20, 725, 320, 65)
			cbcsCert.setFont('Orbitron-Black').setFontSize(10).setTextColor('black').text('ROIPMARS.ORG.MY', 528, 760, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
			cbcsCert.setFont('HYPost-Light').setFontSize(10).setTextColor('black').text('IN MEMORIES OF LATE ZULKIFLI ABU (9W2UZL) - FOUNDER OF ROIPMARS (est. 2016)', 528, 770, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
			cbcsCert.setFont('OpenSansCondensed-Regular').setFontSize(10).setTextColor('black').text('this ‘Electronic Certificate’ (eCert) is computer generated. contact member@roipmars.org.my for any discrepancy.', 528, 780, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
			cbcsCert.setFont('KodeMono-Regular').setFontSize(10).setTextColor('black').text(`© ${new Date().getFullYear()} RoIPMARS Network | developed by 9W2LGX | generated via web on ${new Date().toISOString()}`, 528, 790, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
      cbcsCert.addImage('/media/image/malaysian-teamspeak.png', 'PNG', 740, 725, 275, 65)

			cbcsCert.setCreationDate(new Date()).setLanguage('ms-MY').setDocumentProperties({
				title: `Cert_RoIPMARS_CB-${call}`,
				subject: `${id} - ${call}`,
				author: '9W2LGX (Hafizi Ruslan)',
				keywords: 'roipmars,teamspeak,teamspeakmalaysia,teamspeak3malaysia,ts3malaysia,network,komunikasi,radio,roip,voip,technology',
				creator: 'RoIPMARS CB Cert generator',
			})

      CBCert.innerText = `Certificate Ready!`
			try {
				let respCtc = await fetch(`https://api.roipmars.org.my/hook/getcontact?callsign=${call}`)
				if (respCtc) {
					let callContact = await respCtc.json()
					callCtc = callContact.contact
				}
			} catch (err) {
				callctc = '601234567890'
			}
			let WaCtc = prompt('Enter your WhatsApp number (including country code without +) if you want to receive by WhatsApp;\ncancel to download via browser.', callctc)
			if (WaCtc == null || WaCtc == '') {
				cbcsCert.save(`Cert_RoIPMARS_CB-${call}.pdf`)
				CBCert.innerText = `Cert_RoIPMARS_CB-${call} saved.\ncheck your 'downloads' folder.`
			} else {
				CBCert.innerText = `sending Certificate to ${WaCtc}...`
				await fetch(`https://api.roipmars.org.my/hook/setcontact`, {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({
						callsign: `${call}`,
						contact: `${WaCtc}`,
					}),
				})
				let eCertURI = cbcsCert.output('datauristring', { filename: `Cert_RoIPMARS_CB-${call}.pdf` })
				await fetch('https://wa-api.roipmars.org.my/api/601153440440/send-file', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						authorization: 'Bearer $2b$10$xNYcfg_bwZlnET1ULGYLRuSEJQ.wiItCQ0Kj1VUNgEIFeJPpk_wUi',
					},
					body: JSON.stringify({
						phone: WaCtc,
						isGroup: false,
						isNewsletter: false,
						filename: `Cert_RoIPMARS_CB-${call}.pdf`,
						base64: eCertURI,
					}),
				}).then((res) => {
					if (res.ok) {
						CBCert.innerText = `Cert_RoIPMARS_CB-${call} sent to ${WaCtc}.\ncheck your message from 601153440440.`
					} else {
						CBCert.innerText = `Certificate send fail. retry again later.`
					}
				})
			}
		}
	})
})