$(document).ready(function () {
  var cbmarsreg = $('#cbcslist').DataTable({
    ajax: '/assets/json/cbmars.json',
    processing: true,
    ordering: false,
    pagingType: 'full_numbers',
    pageLength: 15,
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
//   let CBCert = document.getElementById('cbCert-progress')
//   $('#cbcslist').delegate('tbody tr td', 'click', async function () {
// 		const cbcsdata = cbmarsreg.row(this).data()
// 		const cbcsID = cbcsdata[0]
// 		const cbcsCall = cbcsdata[1]
// 		const cbcsName = cbcsdata[2]
// 		const cbcsLocal = cbcsdata[3]
// 		const cbcsRegDate = cbcsdata[4]
// 		let confirmtxt = `You are about to download Certificate for ${cbcsCall}.\nAre you sure?\nClick 'ok' to continue`
// 		if (confirm(confirmtxt) == true) {
//       try {
//         CBCert.innerText = `request confirmed. generating Certificate...`
// 				await genCert(cbcsID, cbcsCall, cbcsName, cbcsRegDate)
// 			} catch (error) {
// 				console.log(error)
// 				alert('Cert generator subprocess error. reload required.\nclick "ok" to refresh.')
// 				setTimeout(location.reload(), 5000)
// 			}
// 		}
// 		async function genCert(id, call, name, regDate) {
// 			const { jsPDF } = window.jspdf
// 			var cbcsCert = new jsPDF({
// 				orientation: 'l',
// 				unit: 'mm',
// 				format: 'a4',
// 				compress: true,
// 			})
//
// 			cbcsCert.addFont('/assets/font/HYPost-Light.ttf', 'HYPost-Light', 'normal')
// 			cbcsCert.addFont('/assets/font/KodeMono-Bold.ttf', 'KodeMono-Bold', 'normal')
// 			cbcsCert.addFont('/assets/font/KodeMono-Regular.ttf', 'KodeMono-Regular', 'normal')
// 			cbcsCert.addFont('/assets/font/KodeMono-SemiBold.ttf', 'KodeMono-SemiBold', 'normal')
// 			cbcsCert.addFont('/assets/font/OpenSansCondensed-Regular.ttf', 'OpenSansCondensed-Regular', 'normal')
// 			cbcsCert.addFont('/assets/font/Orbitron-Black.ttf', 'Orbitron-Black', 'normal')
// 			cbcsCert.addFont('/assets/font/SourceSansPro-Regular.ttf', 'SourceSansPro-Regular', 'normal')
//
// 			// cbcsCert.addImage('/media/image/ecert/ecert_template_site.png', 'PNG', 0, 0, 297, 210)
// 			cbcsCert.addImage('/media/image/brands/roipmars/brand_oglow.png', 'PNG', 98, 10, 100, 20)
// 			cbcsCert.addImage('/media/image/malaysian-teamspeak.png', 'PNG', 225, 179, 65, 20)
//
// 			cbcsCert.setFont('KodeMono-SemiBold').setFontSize(25).setTextColor('#72c7ef').text(`Reg. ID\n${id}`, 49.5, 35, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
// 			cbcsCert.setFont('KodeMono-SemiBold').setFontSize(25).setTextColor('#72c7ef').text(`Reg. Date\n${regDate}`, 247.5, 35, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
// 			cbcsCert.setFont('Orbitron-Black').setFontSize(90).setTextColor('#336699').text(`${call}`, 148.5, 90, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 270, renderingMode: 'fillThenStroke' })
// 			cbcsCert.setFont('KodeMono-Bold').setFontSize(60).setTextColor('#5cce54').text(`${name}`, 148.5, 120, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 270, renderingMode: 'fillThenStroke' })
//
// 			cbcsCert.setFont('Orbitron-Black').setFontSize(10).setTextColor('black').text('ROIPMARS.ORG.MY', 148.5, 186, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 270 })
// 			cbcsCert.setFont('SourceSansPro-Regular').setFontSize(10).setTextColor('black').text('PERSATUAN PEMINAT RADIO KOMUNIKASI (ROIP) [PPM-006-10-01062020]', 148.5, 189, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 270 })
// 			cbcsCert.setFont('HYPost-Light').setFontSize(7).setTextColor('black').text('IN MEMORIES OF LATE ZULKIFLI ABU (9W2UZL) - FOUNDER OF ROIPMARS (est. 2016)', 148.5, 193, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 270 })
// 			cbcsCert.setFont('OpenSansCondensed-Regular').setFontSize(8).setTextColor('black').text('this ‘Electronic Certificate’ (eCert) is computer generated. contact member@roipmars.org.my for any discrepancy.', 148.5, 196, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 270 })
// 			cbcsCert.setFont('KodeMono-Regular').setFontSize(9).setTextColor('black').text(`© ${new Date().getFullYear()} RoIPMARS Network | developed by 9W2LGX | generated via web on ${new Date().toISOString()}`, 148.5, 200, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 270 })
// 			cbcsCert.setCreationDate(new Date())
// 			cbcsCert.setDocumentProperties({
// 				title: `Cert_RoIPMARS_CB-${call}`,
// 				subject: `${id} - ${call}`,
// 				author: '9W2LGX (Hafizi Ruslan)',
// 				creator: 'RoIPMARS CB Cert generator',
// 			})
//
// 			CBCert.innerText = `Certificate Ready!`
// 			let WaCtc = prompt('Enter your WhatsApp number (including country code without +) if you want to receive by WhatsApp;\ncancel to download via browser.', '60123456789')
// 			if (WaCtc == null || WaCtc == '') {
// 				cbcsCert.save(`Cert_RoIPMARS_CB-${call}.pdf`)
// 				CBCert.innerText = `Cert_RoIPMARS_CB-${call} saved.\ncheck your 'downloads' folder.`
// 			} else {
// 				CBCert.innerText = `sending Certificate to ${WaCtc}...`
// 				let eCertURI = cbcsCert.output('datauristring', { filename: `Cert_RoIPMARS_CB-${call}.pdf` })
// 				await fetch('https://wa-api.roipmars.org.my/api/601153440440/send-file', {
// 					method: 'POST',
// 					headers: {
// 						'Content-Type': 'application/json',
// 						authorization: 'Bearer $2b$10$xNYcfg_bwZlnET1ULGYLRuSEJQ.wiItCQ0Kj1VUNgEIFeJPpk_wUi',
// 					},
// 					body: JSON.stringify({
// 						phone: WaCtc,
// 						isGroup: false,
// 						isNewsletter: false,
// 						filename: `Cert_RoIPMARS_CB-${call}.pdf`,
// 						base64: eCertURI,
// 					}),
// 				}).then((res) => {
// 					if (res.ok) {
// 						CBCert.innerText = `Cert_RoIPMARS_CB-${call} sent to ${WaCtc}.\ncheck your message from 601153440440.`
// 					} else {
// 						CBCert.innerText = `Certificate send fail. retry again later.`
// 					}
// 				})
// 			}
// 		}
// 	})
})