$(document).ready(function () {
	let memmarsreg = $('#memberlist').DataTable({
		ajax: {
			url: '/assets/json/member.json',
			dataSrc: 'activeMembers',
		},
		columns: [
			{ data: 'MemberNo', name: 'MemberNo', title: 'NO AHLI' },
			{ data: 'CallSign', name: 'CallSign', title: 'CALLSIGN' },
			{ data: 'Name', name: 'Name', title: 'NAMA AHLI' },
			{ data: 'Locale', name: 'Locale', title: 'LOKALITI' },
			{ data: 'Expiry', name: 'Expiry', title: 'SAH SEHINGGA' },
		],
		columnDefs: [
			{ className: 'text-center align-middle', targets: '_all' },
			{ searchable: false, targets: [0, 4] },
		],
		deferRender: true,
		processing: true,
		lengthChange: false,
		ordering: false,
		pagingType: 'first_last_numbers',
		pageLength: 25,
		searchDelay: 500,
		responsive: true,
		keys: { blurable: true, keys: ['\n'.charCodeAt(0)], columns: [1, 2, 3] },
		language: {
			lengthMenu: 'Paparan _MENU_ rekod',
			search: 'Cari Callsign/Nama/Lokal:',
			processing: 'Rekod sedang disusun semula',
			emptyTable: 'Rekod Tidak Ditemui',
			infoEmpty: 'Rekod Tidak Ditemui',
			zeroRecords: 'Rekod Tidak Ditemui',
			paginate: { first: '<<', previous: '<', next: '>', last: '>>' },
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ' | Rekod diperoleh daripada maklumat sebenar.',
		},
		initComplete: function () {
			let tds = $('#memberlist').DataTable().page.info().recordsTotal
			$('.membercount').html(tds + ' ahli')
		},
	})
	$('#memberlist').delegate('tbody tr td:nth-child(2)', 'click', async function () {
		const toastSuccess = document.getElementById('prog-success')
		const msgSuccess = bootstrap.Toast.getOrCreateInstance(toastSuccess, { delay: 7000 })
		const toastInfo = document.getElementById('prog-info')
		const msgInfo = bootstrap.Toast.getOrCreateInstance(toastInfo)
		const toastDanger = document.getElementById('prog-danger')
		const msgDanger = bootstrap.Toast.getOrCreateInstance(toastDanger, { delay: 10000 })
		const memberdata = memmarsreg.row(this).data()
		const memID = memberdata.MemberNo
		const memCall = memberdata.CallSign
		const memName = memberdata.Name
		const memValidDate = memberdata.Expiry
		let confirmtxt = `You are requesting Certificate for ${memID}. Are you sure?`
		if (confirm(confirmtxt) == true) {
			toastSuccess.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> request confirmed. generating Certificate...</div>`
			msgSuccess.show()
			try {
				await genCert(memID, memCall, memName, memValidDate)
			} catch (error) {
				await fetch('https://api.roipmars.org.my/hook/certerr', {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({ call: memCall, id: memID, source: location.pathname.replaceAll('/', ''), errorcause: error.cause, errormsg: error.name + ': ' + error.message }),
				})
				toastDanger.innerHTML = `<div class='toast-body'>generator script error.<br>${error.name}: ${error.message}<br>reported to developer</div>`
				msgDanger.show()
				console.log(error)
				// setTimeout(function () {
				// 	location.reload()
				// }, 10000)
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
			}
			var memCert = new jsPDF({
				orientation: 'l',
				unit: 'px',
				format: [1056, 816],
				putOnlyUsedFonts: true,
				compress: true,
			})
			memCert.__private__.setPdfVersion('1.7')

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
				memCert.addImage('/assets/image/certs/stamp-su.png', 'PNG', 125, 590, 100, 100)
				memCert.addImage('/assets/image/certs/lgx_sign.png', 'PNG', 110, 575, 150, 150)
				memCert.setFont('AgencyFB').setFontSize(32).setTextColor('black').text('HAFIZI RUSLAN, SETIAUSAHA', 172, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })
			} else {
				memCert.addImage('/assets/image/certs/stamp-pres.png', 'PNG', 125, 590, 100, 100)
				memCert.addImage('/assets/image/certs/ogk_sign.png', 'PNG', 135, 580, 87.2, 136.4)
				memCert.setFont('AgencyFB').setFontSize(32).setTextColor('black').text('KAMARUDZAMAN, PRESIDEN', 172, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })
			}

			memCert.setFont('AgencyFB').setFontSize(48).setTextColor('#3d3d3d').text(validDate.toUpperCase(), 460, 660, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 200, renderingMode: 'fillThenStroke' })
			memCert.setFont('AgencyFB').setFontSize(32).setTextColor('black').text('SAH SEHINGGA', 460, 700, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })

			memCert.addImage('/media/image/brands/roipmars/brand_oglow.png', 'PNG', 20, 725, 320, 65)
			memCert.setFont('Orbitron-Black').setFontSize(10).setTextColor('#f7fcfe').text('ROIPMARS.ORG.MY', 528, 760, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
			memCert.setFont('HYPost-Light').setFontSize(10).setTextColor('#f7fcfe').text('IN MEMORIES OF LATE ZULKIFLI ABU (9W2UZL) - FOUNDER OF ROIPMARS (est. 2016)', 528, 770, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
			memCert
				.setFont('OpenSansCondensed-Regular')
				.setFontSize(10)
				.setTextColor('#f7fcfe')
				.text('this ‘Electronic Certificate’ (eCert) is computer generated. contact member@roipmars.org.my for any discrepancy.', 528, 780, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 800 })
			memCert
				.setFont('KodeMono-Regular')
				.setFontSize(10)
				.setTextColor('#f7fcfe')
				.text(`(C) ${new Date().getFullYear()} RoIPMARS™ Network | developed by mdpizi | generated via ${location.hostname + location.pathname} on ${new Date().toISOString()}`, 528, 790, {
					align: 'center',
					baseline: 'middle',
					lineHeightFactor: 1,
					maxWidth: 800,
				})
			memCert.addImage('/media/image/malaysian-teamspeak.png', 'PNG', 825, 730, 207, 65)

			let fileName = `RoIPMARS_${call}`
			memCert
				.setFileId(crypto.randomUUID())
				.setLanguage('ms-MY')
				.setCreationDate(new Date())
				.setDocumentProperties({
					title: `${fileName}`,
					subject: `${id} - ${call}`,
					author: document.querySelector('meta[name="author"]').content,
					keywords: document.querySelector('meta[name="keywords"]').content,
					creator: `RoIPMARS Member Certificate Generator`,
				})
			// memCert.addMetadata(`<rdf:Description xmlns:pdfaid="http://www.aiim.org/pdfa/ns/id/" rdf:about=""><pdfaid:part>3</pdfaid:part><pdfaid:conformance>B</pdfaid:conformance></rdf:Description>`, 'http://www.w3.org/1999/02/22-rdf-syntax-ns#')
			// memCert.addMetadata(
			// 	`<xmpRights:Certificate>${location}</xmpRights:Certificate><xmpRights:Marked>true</xmpRights:Marked><xmpRights:Owner>${
			// 		document.querySelector('meta[name="author"]').content
			// 	}</xmpRights:Owner><xmpRights:UsageTerms>https://www.roipmars.org.my/policies</xmpRights:UsageTerms><xmpRights:WebStatement>https://www.roipmars.org.my/policies</xmpRights:WebStatement>`,
			// 	'http://ns.adobe.com/xap/1.0/rights/'
			// )
			// memCert.addMetadata(`<xmp:MetadataDate>${new Date()}</xmp:MetadataDate><xmp:ModifyDate>${new Date()}</xmp:ModifyDate><xmp:BaseURL>${location.origin}</xmp:BaseURL>`, 'http://ns.adobe.com/xap/1.0/')

			if (location.hostname != 'localhost') {
				await fetch('https://api.roipmars.org.my/hook/certgen', {
					method: 'PUT',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({ call: memCall, id: memID, source: location.pathname.replaceAll('/', '') }),
				})
			}
			let eCertURI = memCert.output('datauristring', { filename: `${fileName}.pdf` })
			toastInfo.innerHTML = `<div class='toast-body'>Member-Certificate Ready!</div>`
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
					toastSuccess.innerHTML = `<div class='toast-body'>Member-Certificate ${fileName} saved.\ncheck your 'downloads' folder.</div>`
					msgSuccess.show()
					memCert.save(`${fileName}.pdf`)
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
						toastInfo.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> sending Member-Certificate via eMail to ${MailCtc}...</div>`
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
								subject: `[${id}] Member-Certificate_RoIPMARS-${call}`,
								htmlContent: `<html><body><p>Hi, thank you for using our services. Here is your requested certificate;</p><table><tr><td>CallSign</td><td>${call}</td></tr><tr><td>Name</td><td>${name}</td></tr><tr><td>ID</td><td>${id}</td></tr><tr><td>Valid thru</td><td>${validDate}</td></tr></table><p>You have requested a certificate from our records via ${location} on ${new Date().toString()} using ${navigator.userAgent}.</p><p>Please keep it in a safe place. If you have any questions, do not hesitate to contact us.<br><br>Sincerely,<br>Records Division, RoIPMARS</p></body></html>`,
								textContent: `You have requested a certificate from our records`,
								attachment: [{ content: eCertURI.split(',')[1], name: `${fileName}.pdf` }],
								tags: ['Cert'],
							}),
						})
							.then((res) => res.json())
							.then(async (data) => {
								if (data.messageId) {
									toastSuccess.innerHTML = `<div class='toast-body'>Member-Certificate ${fileName} sent to ${MailCtc}.\ncheck eMail message from noreply@roipmars.org.my</div>`
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
									toastDanger.innerHTML = `<div class='toast-body'>Member-Certificate send failed. retry again later.</div>`
									msgDanger.show()
								}
							})
					} else {
						toastDanger.innerHTML = `<div class='toast-body'>eMail unavailable. downloading to your browser...</div>`
						msgDanger.show()
						toastSuccess.innerHTML = `<div class='toast-body'>${fileName} saved.\ncheck your 'downloads' folder.</div>`
						msgSuccess.show()
						memCert.save(`${fileName}.pdf`)
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
					.then(async (res) => res.json())
					.then(async (data) => {
						for (let r = 0; r < data.response.length; r++) {
							let communityUsers = data.response[r].user
							if (communityUsers == `${WaCtc}`) {
								return true
							}
						}
					})
				toastInfo.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> sending Member-Certificate to ${WaCtc}...</div>`
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
						caption: `Hai ${call},\nTerima kasih telah menggunakan perkhidmatan kami. Inilah sijil yang anda minta;\n- CallSign: ${call}\n- Nama: ${name}\n- ID: ${id}\n- Sah sehingga: ${validDate}\n\nAnda telah meminta sijil dari rekod kami melalui ${location} pada ${new Intl.DateTimeFormat(
							'ms-MY',
							{ dateStyle: 'medium', timeStyle: 'long', hourCycle: 'h24' }
						).format(new Date())}.\nSila simpan di tempat yang selamat.\nJika anda mempunyai sebarang pertanyaan, jangan teragak-agak untuk menghubungi salah satu pentadbir kami.\n\nIkhlas,\nBahagian Rekod, RoIPMARS`,
					}),
				}).then(async (res) => {
					if (res.ok) {
						toastSuccess.innerHTML = `<div class='toast-body'>Member-Certificate ${fileName} sent to ${WaCtc}.\ncheck WhatsApp message from 601153440440.</div>`
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
								.then((res) => res.json())
								.then((data) => {
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
						toastDanger.innerHTML = `<div class='toast-body'>Member-Certificate send failed. retry again later.</div>`
						msgDanger.show()
					}
				})
			}
		}
	})
})
