$(document).ready(function () {
  let memmarsreg = $('#memberlist').DataTable({
    ajax: {
      url: '/assets/json/member.json',
      dataSrc: 'activeMembers'
    },
    columns: [
      { className: 'text-center align-middle', data: 'MemberNo', name: 'MemberNo', searchable: false, title: 'NO AHLI' },
      { className: 'text-center align-middle', data: 'CallSign', name: 'CallSign', searchable: true, title: 'CALLSIGN' },
      { className: 'text-center align-middle', data: 'Name', name: 'Name', searchable: true, title: 'NAMA AHLI' },
      { className: 'text-center align-middle', data: 'Locale', name: 'Locale', searchable: true, title: 'LOKALITI' },
      { className: 'text-center align-middle', data: 'Expiry', name: 'Expiry', searchable: false, title: 'SAH SEHINGGA' },
    ],
    deferRender: true,
    processing: true,
    lengthChange: false,
    ordering: false,
    pagingType: 'first_last_numbers',
    pageLength: 25,
    searchDelay: 500,
    keys: { blurable: true, keys: ['\n'.charCodeAt(0)], columns: [1, 2, 3] },
    language: {
      lengthMenu: 'Paparan _MENU_ rekod',
      search: 'Cari Callsign/Nama/Lokal:',
      processing: 'Rekod sedang disusun semula',
      emptyTable: 'Rekod Tidak Ditemui',
      infoEmpty: 'Rekod Tidak Ditemui',
      zeroRecords: 'Rekod Tidak Ditemui',
      paginate: { first: '<<', previous: '<', next: '>', last: '>>' },
      info: 'Menunjukkan _START_ - _END_ dari _TOTAL_ rekod',
      infoFiltered: ' - tapisan dari _MAX_ rekod',
      infoPostFix: ' | Rekod diperoleh daripada maklumat sebenar.'
    },
    initComplete: function () {
      let tds = $('#memberlist').DataTable().page.info().recordsTotal
      $('.membercount').html(tds + ' ahli aktif')
    }
  })
  let roipmarsCert = document.getElementById('memCert-progress')
  $('#memberlist').delegate('tbody tr td', 'click', async function () {
		const memberdata = memmarsreg.row(this).data()
		const memID = memberdata.MemberNo
		const memCall = memberdata.CallSign
		const memName = memberdata.Name
		const memValidDate = memberdata.Expiry
		let confirmtxt = `You are about to download Certificate for ${memCall}.\nAre you sure?\nClick 'ok' to continue`
		if (confirm(confirmtxt) == true) {
      try {
        roipmarsCert.innerText = `request confirmed. generating Certificate...`
				await genCert(memID, memCall, memName, memValidDate)
			} catch (error) {
				console.log(error)
				alert('Cert generator subprocess error. reload required.\nclick "ok" to refresh.')
				setTimeout(location.reload(), 5000)
			}
		}
		async function genCert(id, call, name, validDate) {
			const { jsPDF } = window.jspdf
      switch (id[0]) {
				case 'A':
					var idStat = 'Ahli Biasa'
					break
				case 'B':
					var idStat = 'Ahli Bersekutu'
					break
				case 'D':
					var idStat = 'Ahli Seumur Hidup'
					break
				case 'E':
					var idStat = 'Ahli Remaja'
					break
				case 'X':
					var idStat = 'Ahli Luput'
					break
				default:
					var idStat = 'Ahli Tidak Berdaftar'
					break
			}
			var memCert = new jsPDF({
				orientation: 'l',
				unit: 'px',
				format: [1056, 816],
				compress: true,
			})

			memCert.addFont('/assets/font/HYPost-Light.ttf', 'HYPost-Light', 'normal')
			memCert.addFont('/assets/font/KodeMono-Regular.ttf', 'KodeMono-Regular', 'normal')
			memCert.addFont('/assets/font/OpenSansCondensed-Regular.ttf', 'OpenSansCondensed-Regular', 'normal')
			memCert.addFont('/assets/font/Orbitron-Black.ttf', 'Orbitron-Black', 'normal')
			memCert.addFont('/assets/font/AgencyFB.ttf', 'AgencyFB', 'normal')

			memCert.addImage('/assets/image/certs/member.png', 'PNG', 0, 0, 1056, 816)

			memCert.setFont('AgencyFB').setFontSize(76).setTextColor('#336699').text(`${name}\n(${call})`, 315, 230, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 385, renderingMode: 'fillThenStroke' })
			memCert.setFont('AgencyFB').setFontSize(64).setTextColor('#336699').text(`${idStat}`, 315, 475, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 385, renderingMode: 'fillThenStroke' })
      memCert.setFont('AgencyFB').setFontSize(52).setTextColor('#5cce54').text(`${id}`, 315, 545, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 385, renderingMode: 'fillThenStroke' })

      if (id == 'A008') {
				memCert.setFont('AgencyFB').setFontSize(32).setTextColor('black').text('HAFIZI RUSLAN, SETIAUSAHA', 172, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })
				memCert.addImage('/assets/image/certs/lgx_sign.png', 'PNG', 110, 575, 150, 150)
			} else {
				memCert.setFont('AgencyFB').setFontSize(32).setTextColor('black').text('KAMARUDZAMAN, PRESIDEN', 172, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })
				memCert.addImage('/assets/image/certs/ogk_sign.png', 'PNG', 120, 580, 87.2, 136.4)
			}

			memCert.setFont('AgencyFB').setFontSize(48).setTextColor('#72c7ef').text(validDate.toUpperCase(), 460, 660, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 200, renderingMode: 'fillThenStroke' })
			memCert.setFont('AgencyFB').setFontSize(32).setTextColor('black').text('SAH SEHINGGA', 460, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })

			memCert.addImage('/media/image/brands/roipmars/brand_oglow.png', 'PNG', 20, 725, 320, 65)
			memCert.setFont('Orbitron-Black').setFontSize(10).setTextColor('f3e5ab').text('ROIPMARS.ORG.MY', 528, 760, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
			memCert.setFont('HYPost-Light').setFontSize(10).setTextColor('f3e5ab').text('IN MEMORIES OF LATE ZULKIFLI ABU (9W2UZL) - FOUNDER OF ROIPMARS (est. 2016)', 528, 770, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
			memCert.setFont('OpenSansCondensed-Regular').setFontSize(10).setTextColor('f3e5ab').text('this ‘Electronic Certificate’ (eCert) is computer generated. contact member@roipmars.org.my for any discrepancy.', 528, 780, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
			memCert.setFont('KodeMono-Regular').setFontSize(10).setTextColor('f3e5ab').text(`© ${new Date().getFullYear()} RoIPMARS Network | developed by 9W2LGX | generated via web on ${new Date().toISOString()}`, 528, 790, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
      memCert.addImage('/media/image/malaysian-teamspeak.png', 'PNG', 740, 725, 275, 65)

			memCert.setCreationDate(new Date())
			memCert.setDocumentProperties({
				title: `Cert_RoIPMARS-${call}`,
				subject: `${id} - ${call}`,
				author: '9W2LGX (Hafizi Ruslan)',
				creator: 'RoIPMARS Member Cert generator',
			})

      roipmarsCert.innerText = `Certificate Ready!`
			let WaCtc = prompt('Enter your WhatsApp number (including country code without +) if you want to receive by WhatsApp;\ncancel to download via browser.', '60123456789')
			if (WaCtc == null || WaCtc == '') {
				memCert.save(`Cert_RoIPMARS-${call}.pdf`)
				roipmarsCert.innerText = `Cert_RoIPMARS-${call} saved.\ncheck your 'downloads' folder.`
			} else {
				roipmarsCert.innerText = `sending Certificate to ${WaCtc}...`
				let eCertURI = memCert.output('datauristring', { filename: `Cert_RoIPMARS-${call}.pdf` })
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
						filename: `Cert_RoIPMARS-${call}.pdf`,
						base64: eCertURI,
					}),
				}).then((res) => {
					if (res.ok) {
						roipmarsCert.innerText = `Cert_RoIPMARS-${call} sent to ${WaCtc}.\ncheck your message from 601153440440.`
					} else {
						roipmarsCert.innerText = `Certificate send fail. retry again later.`
					}
				})
			}
		}
	})
})