$(document).ready(function () {
	let tsServer = document.getElementById('collapserms3')
	tsServer.addEventListener('show.bs.collapse', (event) => {
		let target = event.target
		target.lastElementChild.lastElementChild.innerHTML = `<hr><h4 class='m-0'>Senarai pelayan TeamSpeak lain;</h4><table class='table table-sm table-striped align-middle text-nowrap caption-top' id='tsServerList'><caption class='text-center'></caption></table>`
		$('#tsServerList').DataTable({
			ajax: {
				url: '/assets/json/server-tracking.json',
				dataSrc: 'tsServers',
			},
			columns: [
				{ title: 'Nama', name: 'server-name', data: 'nickname' },
				{ title: '', name: 'server-note', data: 'note' },
				{ title: 'Alamat', name: 'server-address', data: 'address', render: (data) => `<a class='text-reset text-decoration-none font-monospace' href='ts3server://${data}' target='_blank' rel='noopener noreferrer'>${data}</a>` },
			],
			columnDefs: [
				{ className: 'text-center align-middle', targets: '_all' },
				{
					render: function (data, type, row) {
						return data + ' ' + row.note
					},
					targets: 0,
				},
				{ visible: false, targets: 1 },
			],
			caption: `<i class='bi-exclamation-triangle-fill text-danger-emphasis'></i> &mdash; Pelayan telah disenarai hitam oleh TeamSpeak Systems, Inc.<br><i class='bi-exclamation-diamond-fill text-warning-emphasis'></i> &mdash; Pemilik sah IKRAP RAPI &lpar;JZ&rpar; sahaja.`,
			processing: true,
			searching: false,
			info: false,
			ordering: false,
			paging: false,
			processing: true,
		})
	})

	tsServer.addEventListener('hide.bs.collapse', (event) => {
		let target = event.target
		target.lastElementChild.lastElementChild.textContent = ''
	})
})
