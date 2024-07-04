$(document).ready(function () {
	var cbmarsreg = $('#cbcslist').DataTable({
		ajax: {
			url: '/assets/json/cbmars.json',
			dataSrc: 'activeCBMembers',
		},
		columns: [
			{ name: 'MemberNo', title: 'No Ahli' },
			{ name: 'CallSign', title: 'Tanda Panggilan' },
			{ name: 'Name', title: 'Nama' },
			{ name: 'Locale', title: 'Lokaliti' },
			{ name: 'Register', title: 'Daftar' },
		],
		columnDefs: [
			{ className: 'text-center align-middle', targets: '_all' },
			{ searchable: false, targets: [0, 4] },
			{ render: DataTable.render.intlDateTime('en-MY', { day: '2-digit', month: 'short', year: 'numeric' }), targets: 4 },
		],
		processing: true,
		ordering: false,
		pagingType: 'full_numbers',
		pageLength: 25,
		searchDelay: 350,
		responsive: true,
		order: [
			[0, 'desc'],
			[4, 'desc'],
		],
		keys: {
			blurable: true,
			keys: ['\n'.charCodeAt(0)],
			columns: [2, 3, 4],
		},
		language: {
			lengthMenu: 'Paparkan _MENU_ rekod',
			search: 'Cari Callsign/Nama/Lokal:',
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			emptyTable: 'Rekod Tidak Ditemui',
			infoEmpty: 'Rekod Tidak Ditemui',
			zeroRecords: 'Rekod Tidak Ditemui',
			paginate: {
				first: '<<',
				previous: '<',
				next: '>',
				last: '>>',
			},
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ' | Rekod diperoleh daripada maklumat sebenar.',
		},
		initComplete: function () {
			let tds = $('#cbcslist').DataTable().page.info().recordsTotal
			$('.cscount').html(tds + ' isyarat panggilan sah')
		},
	})
	$('#cbcslist').delegate('tbody tr td:nth-child(2)', 'click', async function () {
		const toastSuccess = document.getElementById('prog-success')
		const msgSuccess = bootstrap.Toast.getOrCreateInstance(toastSuccess, { delay: 7000 })
		const toastInfo = document.getElementById('prog-info')
		const msgInfo = bootstrap.Toast.getOrCreateInstance(toastInfo)
		const toastDanger = document.getElementById('prog-danger')
		const msgDanger = bootstrap.Toast.getOrCreateInstance(toastDanger, { delay: 10000 })
		const cbcsdata = cbmarsreg.row(this).data()
		const cbcsID = cbcsdata[0]
		const cbcsCall = cbcsdata[1]
		const cbcsName = cbcsdata[2]
		const cbcsRegDate = cbcsdata[4]
		let confirmtxt = `You are requesting Certificate for ${cbcsCall} registered on ${cbcsRegDate}. Are you sure?`
		if (confirm(confirmtxt) == true) {
			toastSuccess.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> request confirmed. generating Certificate...</div>`
			msgSuccess.show()
			try {
				await genCert(cbcsID, cbcsCall, cbcsName, cbcsRegDate)
			} catch (error) {
				await fetch('https://api.roipmars.org.my/hook/certerr', {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({ call: cbcsCall, id: cbcsID, source: location.pathname.replaceAll('/', ''), errorcause: error.cause, errormsg: error.name + ': ' + error.message }),
				})
				toastDanger.innerHTML = `<div class='toast-body'>generator script error.<br>${error.name}: ${error.message}<br>reported to developer</div>`
				msgDanger.show()
				console.log(error)
				// setTimeout(function () {
				// 	location.reload()
				// }, 10000)
			}
		}
		async function genCert(id, call, name, regDate) {
			let regDateF = new Intl.DateTimeFormat('en-MY', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(regDate))
			const { jsPDF } = window.jspdf
			var cbcsCert = new jsPDF({
				orientation: 'l',
				unit: 'px',
				format: [1056, 816],
				putOnlyUsedFonts: true,
				compress: true,
			})
			cbcsCert.__private__.setPdfVersion('1.7')

			cbcsCert.addFont('/assets/font/HYPost-Light.ttf', 'HYPost-Light', 'normal')
			cbcsCert.addFont('/assets/font/KodeMono-Regular.ttf', 'KodeMono-Regular', 'normal')
			cbcsCert.addFont('/assets/font/OpenSansCondensed-Regular.ttf', 'OpenSansCondensed-Regular', 'normal')
			cbcsCert.addFont('/assets/font/Orbitron-Black.ttf', 'Orbitron-Black', 'normal')
			cbcsCert.addFont('/assets/font/AgencyFB.ttf', 'AgencyFB', 'normal')

			cbcsCert.addImage('/assets/image/certs/cb.png', 'PNG', 0, 0, 1056, 816)
			cbcsCert.addImage('/assets/image/certs/countryflags/my.png', 'PNG', 20, 20, 150, 100)
			cbcsCert.addImage('/assets/image/certs/countryflags/id.png', 'PNG', 150, 30, 150, 75)
			cbcsCert.addImage('/assets/image/certs/countryflags/bn.png', 'PNG', 20, 90, 150, 100)
			cbcsCert.addImage('/assets/image/certs/countryflags/th.png', 'PNG', 150, 100, 150, 75)
			cbcsCert.addImage('/media/image/brands/kopdarmobile.png', 'PNG', 20, 615, 145.6, 100)
			cbcsCert.addImage('/media/image/brands/roipmars/brand_oglow.png', 'PNG', 20, 725, 320, 65)

			cbcsCert.setFont('AgencyFB').setFontSize(80).setTextColor('#336699').text(name, 775, 225, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 350, renderingMode: 'fillThenStroke' })
			cbcsCert.setFont('AgencyFB').setFontSize(52).setTextColor('#5cce54').text(`${call} - [${id}]`, 775, 520, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 350, renderingMode: 'fillThenStroke' })
			cbcsCert.setFont('AgencyFB').setFontSize(48).setTextColor('#72c7ef').text(regDateF, 915, 660, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 200, renderingMode: 'fillThenStroke' })
			cbcsCert.setFont('AgencyFB').setFontSize(32).setTextColor('black').text('TARIKH DAFTAR', 915, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })

			if (call.match(/113MSOGK|91KMEGG/g)) {
				cbcsCert.addImage('/assets/image/certs/stamp-su.png', 'PNG', 600, 590, 100, 100)
				cbcsCert.addImage('/assets/image/certs/lgx_sign.png', 'PNG', 580, 575, 150, 150)
				cbcsCert.setFont('AgencyFB').setFontSize(30).setTextColor('black').text('HAFIZI RUSLAN\nSETIAUSAHA RoIPMARS', 650, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })
			} else if (call.match(/\d{1,3}KM.{1,}/g)) {
				cbcsCert.addImage('/assets/image/certs/egg_sign.png', 'PNG', 480, 600, 170, 80)
				cbcsCert.setFont('AgencyFB').setFontSize(28).setTextColor('black').text('GILANG GUMILAR\nPENGASAS KOPDARMOBILE', 560, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })
				cbcsCert.addImage('/assets/image/certs/stamp-pres.png', 'PNG', 685, 590, 100, 100)
				cbcsCert.addImage('/assets/image/certs/ogk_sign.png', 'PNG', 700, 585, 87.2, 136.4)
				cbcsCert.setFont('AgencyFB').setFontSize(28).setTextColor('black').text('KAMARUDZAMAN\nPRESIDEN RoIPMARS', 740, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })
			} else {
				cbcsCert.addImage('/assets/image/certs/stamp-pres.png', 'PNG', 600, 590, 100, 100)
				cbcsCert.addImage('/assets/image/certs/ogk_sign.png', 'PNG', 615, 585, 87.2, 136.4)
				cbcsCert.setFont('AgencyFB').setFontSize(30).setTextColor('black').text('KAMARUDZAMAN\nPRESIDEN RoIPMARS', 650, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })
			}

			cbcsCert.setFont('Orbitron-Black').setFontSize(10).setTextColor('black').text('ROIPMARS.ORG.MY | KOPDARMOBILE.ID', 528, 760, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
			cbcsCert.setFont('HYPost-Light').setFontSize(10).setTextColor('black').text('IN MEMORIES OF LATE ZULKIFLI ABU (113MSUZL) - FOUNDER OF ROIPMARS (est. 2016)', 528, 770, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
			cbcsCert
				.setFont('OpenSansCondensed-Regular')
				.setFontSize(10)
				.setTextColor('black')
				.text('this ‘Electronic Certificate’ (eCert) is computer generated. contact member@roipmars.org.my for any discrepancy.', 528, 780, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
			cbcsCert
				.setFont('KodeMono-Regular')
				.setFontSize(10)
				.setTextColor('black')
				.text(`(C) ${new Date().getFullYear()} RoIPMARS™ Network | developed by mdpizi | generated via ${location.hostname + location.pathname} on ${new Date().toISOString()}`, 528, 790, {
					align: 'center',
					baseline: 'middle',
					lineHeightFactor: 1,
					maxWidth: 800,
				})
			cbcsCert.addImage('/media/image/malaysian-teamspeak.png', 'PNG', 825, 730, 207, 65)

			let fileName = `RoIPMARS-CB_${call}`
			cbcsCert
				.setFileId(crypto.randomUUID())
				.setLanguage('ms-MY')
				.setCreationDate(new Date(regDate))
				.setDocumentProperties({
					title: `${fileName}`,
					subject: `${id} - ${call}`,
					author: document.querySelector('meta[name="author"]').content,
					keywords: document.querySelector('meta[name="keywords"]').content,
					creator: 'RoIPMARS CB Certificate Generator',
				})

			if (location.hostname != 'localhost') {
				await fetch('https://api.roipmars.org.my/hook/certgen', {
					method: 'PUT',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({ call: cbcsCall, id: cbcsID, source: location.pathname.replaceAll('/', '') }),
				})
			}
			let eCertURI = cbcsCert.output('datauristring', { filename: `${fileName}.pdf` })
			toastInfo.innerHTML = `<div class='toast-body'>CB-Certificate Ready!</div>`
			msgInfo.show()
			try {
				let respCtc = await fetch(`https://api.roipmars.org.my/hook/callctc?callsign=${call}`, {
					method: 'GET',
					headers: { 'content-type': 'application/json' },
				})
				if (respCtc) {
					let callContact = await respCtc.json()
					callCtc = callContact.contact || ''
					callMail = callContact.email || ''
				}
			} catch (err) {
				callCtc = ''
				callMail = ''
			}
			let WaCtc = prompt(`fill your contact number (INCLUDING country code WITHOUT plus sign; example: 601234567890) if you want to receive by WhatsApp;\nchoose "cancel" to download`, callCtc)
			if (WaCtc == null || WaCtc == '') {
				let MailCtc = prompt(`fill your email if you want to receive by eMail; choose "cancel" to download`, callMail)
				if (MailCtc == null || MailCtc == '') {
					toastSuccess.innerHTML = `<div class='toast-body'>CB-Certificate ${fileName} saved.\ncheck your 'downloads' folder.</div>`
					msgSuccess.show()
					cbcsCert.save(`${fileName}.pdf`)
				} else {
					toastInfo.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> checking eMail availability...</div>`
					msgInfo.show()
					let checkMail = await fetch(`${mailAPI.BaseURL}/account`, {
						method: 'GET',
						headers: {
							'content-type': 'application/json',
							'api-key': mailAPI.Token,
						},
					})
						.then((res) => res.json())
						.then((data) => {
							for (let p = 0; p < data.plan.length; p++) {
								let type = data.plan[p].type
								let credit = data.plan[p].credits
								if (type == 'free') {
									return credit
								}
							}
						})
					if (checkMail > 0) {
						toastInfo.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> sending CB-Certificate via eMail to ${MailCtc}...</div>`
						msgInfo.show()
						await fetch(`${mailAPI.BaseURL}/smtp/email`, {
							method: 'POST',
							headers: {
								'content-type': 'application/json',
								'api-key': mailAPI.Token,
							},
							body: JSON.stringify({
								sender: { name: 'Cert RoIPMARS', email: 'noreply@roipmars.org.my' },
								to: [{ email: MailCtc, name: call }],
								replyTo: { name: 'Member RoIPMARS', email: 'member@roipmars.org.my' },
								subject: `[${id}] CB-Certificate_RoIPMARS-${call}`,
								htmlContent: `<html><body><p>Hi, thank you for using our services. Here is your requested certificate;</p><table><tr><td>CallSign</td><td>${call}</td></tr><tr><td>Name</td><td>${name}</td></tr><tr><td>ID</td><td>${id}</td></tr><tr><td>Registration Date</td><td>${regDateF}</td></tr></table><p>You have requested a certificate from our records via ${location.hostname + location.pathname} on ${new Date().toString()} using ${navigator.userAgent}.</p><p>Please keep it in a safe place. If you have any questions, do not hesitate to contact us.<br><br>Sincerely,<br>Records Division, RoIPMARS</p></body></html>`,
								textContent: `You have requested a certificate from our records`,
								attachment: [{ content: eCertURI.split(',')[1], name: `${fileName}.pdf` }],
								tags: ['Cert'],
							}),
						})
							.then((res) => res.json())
							.then(async (data) => {
								if (data.messageId) {
									toastSuccess.innerHTML = `<div class='toast-body'>CB-Certificate ${fileName} sent to ${MailCtc}.\ncheck eMail message from noreply@roipmars.org.my</div>`
									msgSuccess.show()
									if (callMail != MailCtc) {
										await fetch('https://api.roipmars.org.my/hook/callctc', {
											method: 'POST',
											headers: { 'content-type': 'application/json' },
											body: JSON.stringify({
												callsign: call,
												contact: callCtc,
												email: MailCtc,
											}),
										})
									}
								} else {
									toastDanger.innerHTML = `<div class='toast-body'>CB-Certificate send failed. retry again later.</div>`
									msgDanger.show()
								}
							})
					} else {
						toastDanger.innerHTML = `<div class='toast-body'>eMail unavailable. downloading to your browser...</div>`
						msgDanger.show()
						toastSuccess.innerHTML = `<div class='toast-body'>${fileName} saved.\ncheck your 'downloads' folder.</div>`
						msgSuccess.show()
						cbcsCert.save(`${fileName}.pdf`)
					}
				}
			} else {
				let isUserinCommunity = await fetch(`${waAPI.BaseURL}/group-members-ids/120363237967506395`, {
					method: 'GET',
					headers: {
						'content-type': 'application/json',
						authorization: waAPI.Token,
					},
				})
					.then((res) => res.json())
					.then((data) => {
						for (let r = 0; r < data.response.length; r++) {
							let communityUsers = data.response[r].user
							if (communityUsers == `${WaCtc}`) {
								return true
							}
						}
					})
				toastInfo.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> sending CB-Certificate to ${WaCtc}...</div>`
				msgInfo.show()
				await fetch(`${waAPI.BaseURL}/send-file`, {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
						authorization: waAPI.Token,
					},
					body: JSON.stringify({
						phone: WaCtc,
						isGroup: false,
						isCommunity: false,
						isNewsletter: false,
						filename: `${fileName}.pdf`,
						base64: eCertURI,
						caption: `Hai ${call},\nTerima kasih telah menggunakan perkhidmatan kami. Inilah sijil yang anda minta;\n- CallSign: ${call}\n- Nama: ${name}\n- ID: ${id}\n- Daftar: ${regDateF}\n\nAnda telah meminta sijil dari rekod kami melalui ${location} pada ${new Intl.DateTimeFormat(
							'ms-MY',
							{
								dateStyle: 'medium',
								timeStyle: 'long',
								hourCycle: 'h24',
							}
						).format(new Date())}.\nSila simpan di tempat yang selamat.\nJika anda mempunyai sebarang pertanyaan, jangan teragak-agak untuk menghubungi salah satu pentadbir kami.\n\nIkhlas,\nBahagian Rekod, RoIPMARS`,
					}),
				}).then(async (res) => {
					if (res.ok) {
						toastSuccess.innerHTML = `<div class='toast-body'>eCert ${fileName} sent to ${WaCtc}.\ncheck WhatsApp message from 601153440440.</div>`
						msgSuccess.show()
						if (callCtc != WaCtc) {
							await fetch('https://api.roipmars.org.my/hook/callctc', {
								method: 'POST',
								headers: { 'content-type': 'application/json' },
								body: JSON.stringify({
									callsign: call,
									contact: WaCtc,
									email: callMail,
								}),
							})
						}
						if (isUserinCommunity != true) {
							let communityInviteLink = await fetch(`${waAPI.BaseURL}/group-invite-link/120363237967506395`, {
								method: 'GET',
								headers: {
									'content-type': 'application/json',
									authorization: waAPI.Token,
								},
							})
								.then(async (res) => res.json())
								.then(async (data) => {
									return data.response
								})
							await fetch(`${waAPI.BaseURL}/send-message`, {
								method: 'POST',
								headers: {
									'content-type': 'application/json',
									authorization: waAPI.Token,
								},
								body: JSON.stringify({
									phone: WaCtc,
									isGroup: false,
									isCommunity: false,
									isNewsletter: false,
									message: `Hai ${call},\n\nAnda dijemput menyertai Komuniti WhatsApp RoIPMARS melalui pautan ini: ${communityInviteLink}`,
								}),
							})
						}
						await fetch(`${waAPI.BaseURL}/archive-chat`, {
							method: 'POST',
							headers: {
								'content-type': 'application/json',
								authorization: waAPI.Token,
							},
							body: JSON.stringify({
								phone: WaCtc,
								isGroup: false,
								isCommunity: false,
								isNewsletter: false,
								value: true,
							}),
						})
					} else {
						toastDanger.innerHTML = `<div class='toast-body'>CB-Certificate send failed. retry again later.</div>`
						msgDanger.show()
					}
				})
			}
		}
	})
})
