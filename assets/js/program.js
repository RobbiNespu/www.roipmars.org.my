const UsrT = document.getElementById('UserTime')
function UsrLive() {
	UsrT.textContent = new Intl.DateTimeFormat('ms-MY', {
		formatMatcher: 'basic',
		weekday: 'long',
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit',
		fractionalSecondDigits: 3,
		dayPeriod: 'narrow',
		timeZoneName: 'shortGeneric',
		hour12: false,
		timeZone: UserTZ,
	}).format(new Date())
}
setInterval(UsrLive, 1)
const UTC = document.getElementById('ZuluTime')
function utcLive() {
	UTC.textContent = new Intl.DateTimeFormat('en-MY', {
		formatMatcher: 'basic',
		weekday: 'long',
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit',
		fractionalSecondDigits: 3,
		timeZoneName: 'short',
		hour12: false,
		timeZone: 'UTC',
	}).format(new Date())
}
setInterval(utcLive, 1)

// 'use strict';
$(document).ready(function () {
	var takwimtable = $('#takwim').DataTable({
		ajax: {
			url: '/assets/json/sch.json',
			dataSrc: 'scheduled',
		},
		columns: [
			{ data: 'Hari', name: 'day', title: 'Waktu' },
			{ data: 'Acara', name: 'act', title: 'Aktiviti' },
			{ data: 'NCS', name: 'ctrl', title: 'Pengawal' },
			{ data: 'Laporan', name: 'rep', title: 'Laporan' },
		],
		columnDefs: [
			{ className: 'text-center align-middle', targets: '_all' },
			{ searchable: false, targets: -1 },
		],
		deferRender: true,
		displayStart: 450,
		ordering: false,
		lengthChange: false,
		pageLength: 25,
		pagingTag: 'button',
		pagingType: 'full_numbers',
		processing: true,
		responsive: true,
		searchDelay: 350,
		select: {
			blurable: true,
			items: 'row',
			style: 'single',
			toggleable: true,
		},
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/sch.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Tarikh/Acara/Pengawal:',
			select: { rows: { 1: '' } },
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#uniq-ham-origin').DataTable({
		ajax: {
			url: '/assets/json/s-origin.json',
			dataSrc: 'origin',
		},
		autoWidth: false,
		columns: [
			{ title: 'Panggilan Asal', className: 'text-center align-middle', data: 'Origin' },
			{ title: 'Unik', className: 'text-center align-middle', data: 'Unique' },
		],
		deferRender: true,
		lengthChange: false,
		ordering: false,
		pageLength: 10,
		paging: true,
		pagingTag: 'button',
		pagingType: 'numbers',
		responsive: true,
		searching: false,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/s-origin.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#all-ncs-rank').DataTable({
		ajax: {
			url: '/assets/json/r-ncs-a.json',
			dataSrc: 'NCS-A',
		},
		columns: [
			{ title: 'Stesen', className: 'text-center align-middle', data: 'NCS', searchable: true },
			{ title: 'Operator', className: 'text-center align-middle', data: 'Nickname' },
			{ title: 'KPI', className: 'text-center align-middle', data: 'KPI' },
		],
		deferRender: true,
		lengthChange: false,
		ordering: false,
		paging: true,
		pageLength: 10,
		pagingTag: 'button',
		pagingType: 'simple',
		responsive: true,
		searching: true,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/r-ncs-a.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#en-ncs-rank').DataTable({
		ajax: {
			url: '/assets/json/r-ncs-en.json',
			dataSrc: 'NCS-EN',
		},
		columns: [
			{ title: 'Stesen', className: 'text-center align-middle', data: 'NCS' },
			{ title: 'Operator', className: 'text-center align-middle', data: 'Nickname' },
			{ title: 'KPI', className: 'text-center align-middle', data: 'KPI' },
		],
		deferRender: true,
		lengthChange: false,
		ordering: false,
		paging: true,
		pageLength: 5,
		pagingTag: 'button',
		pagingType: 'simple',
		responsive: true,
		searching: false,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/r-ncs-en.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#ms-ncs-rank').DataTable({
		ajax: {
			url: '/assets/json/r-ncs-ms.json',
			dataSrc: 'NCS-MS',
		},
		columns: [
			{ title: 'Stesen', className: 'text-center align-middle', data: 'NCS' },
			{ title: 'Operator', className: 'text-center align-middle', data: 'Nickname' },
			{ title: 'KPI', className: 'text-center align-middle', data: 'KPI' },
		],
		deferRender: true,
		lengthChange: false,
		ordering: false,
		paging: true,
		pageLength: 5,
		pagingTag: 'button',
		pagingType: 'simple',
		responsive: true,
		searching: false,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/r-ncs-ms.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#id-ncs-rank').DataTable({
		ajax: {
			url: '/assets/json/r-ncs-id.json',
			dataSrc: 'NCS-ID',
		},
		columns: [
			{ title: 'Stesen', className: 'text-center align-middle', data: 'NCS' },
			{ title: 'Operator', className: 'text-center align-middle', data: 'Nickname' },
			{ title: 'KPI', className: 'text-center align-middle', data: 'KPI' },
		],
		deferRender: true,
		lengthChange: false,
		ordering: false,
		paging: true,
		pageLength: 5,
		pagingTag: 'button',
		pagingType: 'simple',
		responsive: true,
		searching: false,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/r-ncs-id.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#cb-ncs-rank').DataTable({
		ajax: {
			url: '/assets/json/r-ncs-cb.json',
			dataSrc: 'NCS-CB',
		},
		columns: [
			{ title: 'Stesen', className: 'text-center align-middle', data: 'NCS' },
			{ title: 'Operator', className: 'text-center align-middle', data: 'Nickname' },
			{ title: 'KPI', className: 'text-center align-middle', data: 'KPI' },
		],
		deferRender: true,
		ordering: false,
		paging: false,
		responsive: true,
		searching: false,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/r-ncs-cb.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#voi-ncs-rank').DataTable({
		ajax: {
			url: '/assets/json/r-ncs-voi.json',
			dataSrc: 'NCS-VOI',
		},
		columns: [
			{ title: 'Stesen', className: 'text-center align-middle', data: 'NCS' },
			{ title: 'Operator', className: 'text-center align-middle', data: 'Nickname' },
			{ title: 'KPI', className: 'text-center align-middle', data: 'KPI' },
		],
		deferRender: true,
		ordering: false,
		paging: false,
		responsive: true,
		searching: false,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/r-ncs-voi.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#all-stn-rank').DataTable({
		ajax: {
			url: '/assets/json/r-stn-a.json',
			dataSrc: 'STN-A',
		},
		columns: [
			{ title: 'Stesen', className: 'text-center align-middle', data: 'AM', searchable: true },
			{ title: 'Kekerapan', className: 'text-center align-middle', data: 'am%' },
		],
		deferRender: true,
		lengthChange: false,
		ordering: false,
		paging: true,
		pageLength: 10,
		pagingTag: 'button',
		pagingType: 'full',
		responsive: true,
		searching: true,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/r-stn-a.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#en-stn-rank').DataTable({
		ajax: {
			url: '/assets/json/r-stn-en.json',
			dataSrc: 'STN-EN',
		},
		columns: [
			{ title: 'Stesen', className: 'text-center align-middle', data: 'AM-EN', searchable: true },
			{ title: 'Kekerapan', className: 'text-center align-middle', data: 'amen%' },
		],
		deferRender: true,
		lengthChange: false,
		ordering: false,
		paging: true,
		pageLength: 10,
		pagingTag: 'button',
		pagingType: 'full',
		responsive: true,
		searching: false,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/r-stn-en.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#ms-stn-rank').DataTable({
		ajax: {
			url: '/assets/json/r-stn-ms.json',
			dataSrc: 'STN-MS',
		},
		columns: [
			{ title: 'Stesen', className: 'text-center align-middle', data: 'AM-MS', searchable: true },
			{ title: 'Kekerapan', className: 'text-center align-middle', data: 'amms%' },
		],
		deferRender: true,
		lengthChange: false,
		ordering: false,
		paging: true,
		pageLength: 10,
		pagingTag: 'button',
		pagingType: 'full',
		responsive: true,
		searching: false,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/r-stn-ms.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#id-stn-rank').DataTable({
		ajax: {
			url: '/assets/json/r-stn-id.json',
			dataSrc: 'STN-ID',
		},
		columns: [
			{ title: 'Stesen', className: 'text-center align-middle', data: 'AM-ID', searchable: true },
			{ title: 'Kekerapan', className: 'text-center align-middle', data: 'amid%' },
		],
		deferRender: true,
		lengthChange: false,
		ordering: false,
		paging: true,
		pageLength: 10,
		pagingTag: 'button',
		pagingType: 'full',
		responsive: true,
		searching: false,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/r-stn-id.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#cb-stn-rank').DataTable({
		ajax: {
			url: '/assets/json/r-stn-cb.json',
			dataSrc: 'STN-CB',
		},
		columns: [
			{ title: 'Stesen', className: 'text-center align-middle', data: 'CB', searchable: true },
			{ title: 'Kekerapan', className: 'text-center align-middle', data: 'cb%' },
		],
		deferRender: true,
		lengthChange: false,
		ordering: false,
		paging: true,
		pageLength: 10,
		pagingTag: 'button',
		pagingType: 'full',
		responsive: true,
		searching: false,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/r-stn-cb.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	$('#voi-stn-rank').DataTable({
		ajax: {
			url: '/assets/json/r-stn-voi.json',
			dataSrc: 'STN-VOI',
		},
		columns: [
			{ title: 'Stesen', className: 'text-center align-middle', data: 'VOI', searchable: true },
			{ title: 'Kekerapan', className: 'text-center align-middle', data: 'voi%' },
		],
		deferRender: true,
		lengthChange: false,
		ordering: false,
		paging: true,
		pageLength: 10,
		pagingTag: 'button',
		pagingType: 'full',
		responsive: true,
		searching: false,
		language: {
			emptyTable: 'Rekod Tidak Ditemui',
			info: '_START_ - _END_ dari _TOTAL_ rekod',
			infoEmpty: 'Rekod Tidak Ditemui',
			infoFiltered: ' - tapisan dari _MAX_ rekod',
			infoPostFix: ` | ${lastMod('/assets/json/r-stn-voi.json')}`,
			lengthMenu: 'Paparan _MENU_ rekod',
			paginate: {
				first: '<<',
				last: '>>',
				next: '>',
				previous: '<',
			},
			processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
			search: 'Cari Stesen:',
			zeroRecords: 'Rekod Tidak Ditemui',
		},
	})

	const netRep = document.getElementById('netrep')
	const netReport = document.getElementById('netRep')
	netRep.addEventListener('show.bs.modal', (event) => {
		const button = event.relatedTarget
		const source = button.getAttribute('data-bs-source')
		$('#takwim').delegate('tbody tr td:last-child', 'click', function () {
			const modalTitle = netRep.querySelector('.modal-title')
			const takwimrowdata = takwimtable.row(this).data()
			const takwimday = takwimrowdata.Hari.split('<br>')[0]
			const takwimdate = takwimrowdata.Hari.split('<br>')[1]
			const takwimtime = takwimrowdata.Hari.split('<br>')[2]
			const takwimact = takwimrowdata.Acara.replace(/\[(KHAS|SPECIAL|KHUSUS)\]/g, '')
				.trim()
				.replaceAll(/¹|²/g, '')
			const takwimncs = takwimrowdata.NCS.split('|')[0].trim()
			const reportTitle = `Laporan ${takwimact} pada ${takwimday}, ${takwimdate} ${takwimtime} bersama ${takwimncs}`
			modalTitle.innerText = reportTitle
			const reportID = `net-${source}`
			netReport.id = reportID
			var netReportTable = $('#' + reportID).DataTable({
				ajax: {
					url: '/assets/json/netrep.json',
					dataSrc: `${source}`,
				},
				columns: [
					{ title: 'Call', name: 'cs' },
					{ title: 'Mod', name: 'mod' },
					{ title: 'UTC', name: 'time' },
				],
				columnDefs: [
					{ className: 'text-center align-middle', targets: '_all' },
					{ searchable: true, targets: 0 },
				],
				autoWidth: false,
				destroy: true,
				deferRender: true,
				fixedHeader: true,
				ordering: false,
				pageLength: 10,
				paging: false,
				pagingTag: 'button',
				pagingType: 'simple_numbers',
				processing: true,
				responsive: true,
				searching: true,
				select: {
					blurable: true,
					style: 'single',
				},
				dom: 'Bfrtip',
				buttons: [
					{
						extend: 'pdfHtml5',
						download: 'download',
						className: 'btn-success rounded-3',
						text: `Laporan Penuh ${takwimact}, ${takwimdate}`,
						filename: `RoIPMARS-Net_${source}`,
						title: `${reportTitle}`,
						messageBottom: [
							{
								text: 'RF->Radio Transceiver | EL->EchoLink | TS->TeamSpeak | MBL->Mumble | FRN->Free Radio Network\nPNT->Peanut for HAM | DC->Discord | TG->Telegram | TT->Team Talk | WA->WhatsApp | ZL->Zello',
								alignment: 'center',
								fontSize: 8,
							},
						],
						customize: function (doc) {
							doc.content.splice(0, 0, {
								alignment: 'center',
								width: 400,
								image:
									'data:image/png;base64,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Uk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAALiMAAC4jAXilP3YAAAVVaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA5LjAtYzAwMSA3OS5jMDIwNGIyLCAyMDIzLzAyLzA5LTA2OjI2OjE0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IlRydWUiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LnJvaXBtYXJzLm9yZy5teS9wb2xpY2llcyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmNkNjFhYzAyLTZkYzktYjQ0MC05ODUxLWViNGM3ZDUyNDYxMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQjA3M0RGMDE5RUI0NTQ1QTQ4QTRCNzNDMjBGNTg1QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OTRBNUE0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',
							}),
								(doc['footer'] = function (currentPage, pageCount) {
									return [
										{
											text: `(C) ${new Date().getFullYear()} RoIPMARS Network | developed by 9W2LGX | generated via ${location.hostname + location.pathname} on ${new Date().toISOString()} | ${currentPage.toString()} of ${pageCount}`,
											alignment: 'center',
											fontSize: 7,
										},
									]
								}),
								doc.content.splice(2, 1),
								(doc.content[2].table.widths = Array(doc.content[2].table.body[0].length + 1)
									.join('*')
									.split('')),
								(doc.defaultStyle = {
									alignment: 'center',
									fontSize: 11,
									margin: 0,
								}),
								(doc.info = {
									title: `${reportTitle}`,
									subject: `Laporan Penuh Aktiviti ${takwimdate}, ${takwimtime}`,
									author: document.querySelector('meta[name="author"]').content,
									keywords: document.querySelector('meta[name="keywords"]').content,
									creator: 'RoIPMARS Report generator',
									modDate: new Date(),
								}),
								(doc.version = '1.7')
						},
					},
				],
				language: {
					emptyTable: 'Laporan Tidak Ditemui',
					info: '_START_ - _END_ dari _TOTAL_ rekod',
					infoEmpty: 'Laporan Tidak Ditemui',
					infoFiltered: ' - tapisan dari _MAX_ rekod',
					infoPostFix: ` | ${lastMod('/assets/json/netrep.json')}`,
					lengthMenu: 'Paparan _MENU_ rekod',
					paginate: {
						first: '<<',
						last: '>>',
						next: '>',
						previous: '<',
					},
					processing: '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
					search: 'Cari Pemanggil:',
					select: { rows: { 1: '' } },
					zeroRecords: 'Laporan Tidak Ditemui',
				},
			})

			// netReportTable.ajax.reload(null, false)
			// const netRepMod = document.getElementById('netRepMod')
			// const modReportID = `net-${source}-mod`
			// netRepMod.id = modReportID
			// const netRepModData = netReportTable.column(2).data()
			// $('#' + reportID + '-mod').DataTable({
			//   ajax: {
			//     url: '/assets/json/netrep.json',
			//     dataSrc: `${source}-mod`
			//   },
			//   columns: [
			//     {title: 'Mod', className: 'text-center align-middle', name: 'mod'},
			//     {title: 'Kaedah', className: 'text-center align-middle', name: 'method'},
			//     {title: '', className: 'text-center align-middle', name: 'count'},
			//   ],
			//   autoWidth: false,
			//   destroy: true,
			//   deferRender: true,
			//   lengthChange: false,
			//   ordering: false,
			//   paging: false,
			//   responsive: true,
			//   searching: false,
			// })

			$('#' + reportID).delegate('tbody tr td:nth-child(1)', 'click', async function () {
				let selected = {
					call: netReportTable.row(this).data()[0],
					mode: netReportTable.row(this).data()[1],
					utc: netReportTable.row(this).data()[2],
				}
				const toastSuccess = document.getElementById('prog-success')
				const msgSuccess = bootstrap.Toast.getOrCreateInstance(toastSuccess, { delay: 7000 })
				const toastInfo = document.getElementById('prog-info')
				const msgInfo = bootstrap.Toast.getOrCreateInstance(toastInfo)
				const toastDanger = document.getElementById('prog-danger')
				const msgDanger = bootstrap.Toast.getOrCreateInstance(toastDanger, { delay: 10000 })
				let confirmtxt = `You have selected eCert dated ${new Intl.DateTimeFormat('en-MY', { dateStyle: 'full' }).format(new Date(takwimdate.split('/')[2], takwimdate.split('/')[1] - 1, takwimdate.split('/')[0]))} for ${selected.call}. Are you sure?`
				if (confirm(confirmtxt) == true) {
					toastSuccess.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> request confirmed. generating eCert...</div>`
					msgSuccess.show()
					try {
						await generateCert(takwimdate, takwimact, takwimncs, selected.call, selected.mode, selected.utc)
					} catch (error) {
						await fetch('https://api.roipmars.org.my/hook/certerr', {
							method: 'POST',
							headers: { 'content-type': 'application/json' },
							body: JSON.stringify({ call: selected.call, id: takwimdate, source: location.pathname.replaceAll('/', ''), errorcause: error.cause, errormsg: error.name + ': ' + error.message }),
						})
						toastDanger.innerHTML = `<div class='toast-body'>generator script error.<br>${error.name}: ${error.message}<br>reported to developer</div>`
						msgDanger.show()
						console.log(error)
						// setTimeout(function () {
						// 	location.reload()
						// }, 10000)
					}
				}
				async function generateCert(date, activity, ncs, caller, modes, utctime) {
					const { jsPDF } = window.jspdf
					switch (modes) {
						case 'RF':
							var mode = 'FM (144.8MHz)'
							break
						case 'DC':
							var mode = 'VOI-Discord'
							break
						case 'EL':
							var mode = 'VOI-EchoLink'
							break
						case 'FRN':
							var mode = 'VOI-Free Radio Network'
							break
						case 'MBL':
							var mode = 'VOI-Mumble'
							break
						case 'PNT':
							var mode = 'VOI-Peanut'
							break
						case 'TG':
							var mode = 'VOI-Telegram'
							break
						case 'TS':
							var mode = 'VOI-TeamSpeak'
							break
						case 'TT':
							var mode = 'VOI-Team Talk'
							break
						case 'WA':
							var mode = 'VOI-WhatsApp'
							break
						case 'ZL':
							var mode = 'VOI-Zello'
							break
						default:
							var mode = 'unknown'
					}
					var eCert = new jsPDF({
						orientation: 'l',
						unit: 'mm',
						format: 'a4',
						putOnlyUsedFonts: true,
						compress: true,
					})
					eCert.__private__.setPdfVersion('1.7')
					eCert.setCreationDate(new Date())

					eCert.addFont('/assets/font/HYPost-Light.ttf', 'HYPost-Light', 'normal')
					eCert.addFont('/assets/font/KodeMono-Bold.ttf', 'KodeMono-Bold', 'normal')
					eCert.addFont('/assets/font/KodeMono-Medium.ttf', 'KodeMono-Medium', 'normal')
					eCert.addFont('/assets/font/KodeMono-Regular.ttf', 'KodeMono-Regular', 'normal')
					eCert.addFont('/assets/font/KodeMono-SemiBold.ttf', 'KodeMono-SemiBold', 'normal')
					eCert.addFont('/assets/font/OpenSansCondensed-Regular.ttf', 'OpenSansCondensed-Regular', 'normal')
					eCert.addFont('/assets/font/Orbitron-Black.ttf', 'Orbitron-Black', 'normal')
					eCert.addFont('/assets/font/SairaExtraCondensed-Thin.ttf', 'SairaExtraCondensed-Thin', 'normal')
					eCert.addFont('/assets/font/SourceSansPro-Regular.ttf', 'SourceSansPro-Regular', 'normal')

					toastInfo.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> gathering contact informations...</div>`
					msgInfo.show()
					// eCert.addImage('/assets/image/certs/program/ecert_template_site.png', 'PNG', 0, 0, 297, 210)
					await fetch(`/assets/image/certs/program/${source}.jpg`).then((response) => {
						if (response.ok) {
							eCert.addImage(`/assets/image/certs/program/${source}.jpg`, 'JPEG', 0, 0, 297, 210)
						} else {
							if (activity.toLowerCase().search('sahur') > 0) {
								eCert.addImage(`/assets/image/certs/program/sahur.jpg`, 'JPEG', 0, 0, 297, 210)
							} else {
								eCert.addImage('/assets/image/certs/program/bg_090324.jpg', 'JPEG', 0, 0, 297, 210)
							}
						}
					})
					if (activity.toLowerCase().search('sahur') > 0) {
						eCert.addImage('/media/image/brands/roipmars/brand_oglow.png', 'PNG', 85, 10, 100, 20)
						eCert.addImage('/media/image/brands/kopdarmobile.png', 'PNG', 190, 10, 30, 20)
					} else {
						eCert.addImage('/media/image/brands/roipmars/brand_oglow.png', 'PNG', 98, 10, 100, 20)
					}
					eCert.addImage('/media/image/roip-concept.png', 'PNG', 8, 179, 62, 20)
					eCert.addImage('/media/image/malaysian-teamspeak.png', 'PNG', 225, 179, 65, 20)

					toastInfo.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> lookup caller detail...</div>`
					msgInfo.show()
					try {
						let respCALL = await fetch(`https://api.roipmars.org.my/hook/csnames?callsign=${caller}`)
						if (respCALL) {
							let NetCaller = await respCALL.json()
							eCert.setFont('KodeMono-Bold').setFontSize(90).setTextColor('#5cce54').text(NetCaller.call, 148.5, 100, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 280, renderingMode: 'fillThenStroke' })
							eCert.setFont('KodeMono-Regular').setFontSize(25).setTextColor('#5a5a5a').text(`(${NetCaller.name})`, 148.5, 120, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 280, renderingMode: 'fillThenStroke' })
						}
					} catch (error) {
						eCert.setFont('KodeMono-Bold').setFontSize(90).setTextColor('#5cce54').text(caller, 148.5, 100, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 280, renderingMode: 'fillThenStroke' })
					}

					if (ncs != caller) {
						toastInfo.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> lookup controller detail...</div>`
						msgInfo.show()
						eCert.setFont('SairaExtraCondensed-Thin').setFontSize(25).setTextColor('black').text('NCS', 148.5, 155, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
						try {
							let respNCS = await fetch(`https://api.roipmars.org.my/hook/csnames?callsign=${ncs}`)
							if (respNCS) {
								let NetNCS = await respNCS.json()
								eCert.setFont('KodeMono-Medium').setFontSize(30).setTextColor('black').text(NetNCS.call, 148.5, 163, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
								eCert.setFont('KodeMono-Regular').setFontSize(12).setTextColor('#5a5a5a').text(`(${NetNCS.name})`, 148.5, 170, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
							}
						} catch (error) {
							eCert.setFont('KodeMono-Medium').setFontSize(30).setTextColor('black').text(ncs, 148.5, 155, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
						}
					} else {
						eCert
							.setFont('SairaExtraCondensed-Thin')
							.setFontSize(25)
							.setTextColor('black')
							.text('Congrats and thanks for duty as NCS', 148.5, 155, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
					}

					eCert.setFont('Orbitron-Black').setFontSize(35).setTextColor('#336699').text(activity.toUpperCase(), 148.5, 45, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250, renderingMode: 'fillThenStroke' })
					eCert.setFont('SairaExtraCondensed-Thin').setFontSize(25).setTextColor('black').text('MoT', 49.5, 155, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
					eCert.setFont('KodeMono-SemiBold').setFontSize(25).setTextColor('black').text(mode, 49.5, 163, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
					eCert.setFont('SairaExtraCondensed-Thin').setFontSize(25).setTextColor('black').text('TIME', 247.5, 155, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
					if (utctime.split(':')[0] >= 16) {
						var dtl = new Date(date.split('/')[2], parseInt(date.split('/')[1]) - 1, date.split('/')[0], utctime.split(':')[0] - 16, utctime.split(':')[1])
					} else {
						var dtl = new Date(date.split('/')[2], parseInt(date.split('/')[1]) - 1, parseInt(date.split('/')[0]) + 1, utctime.split(':')[0] - 16, utctime.split(':')[1])
					}
					eCert
						.setFont('Orbitron-Black')
						.setFontSize(30)
						.setTextColor('#72c7ef')
						.text(new Intl.DateTimeFormat('en-MY', { dateStyle: 'long' }).format(dtl).toUpperCase(), 148.5, 35, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 280, renderingMode: 'fillThenStroke' })
					eCert
						.setFont('KodeMono-SemiBold')
						.setFontSize(16)
						.setTextColor('black')
						.text(
							`${dtl.getFullYear()}-${(dtl.getMonth() + 1).toString().padStart(2, '0')}-${dtl.getDate().toString().padStart(2, '0')}T${dtl.getHours().toString().padStart(2, '0')}:${dtl.getMinutes().toString().padStart(2, '0')}MY\n${dtl
								.toISOString()
								.substring(0, 16)}Z`,
							247.5,
							163,
							{ align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' }
						)

					eCert.setFont('Orbitron-Black').setFontSize(10).setTextColor('black').text('ROIPMARS.ORG.MY', 148.5, 186, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 280 })
					eCert.setFont('SourceSansPro-Regular').setFontSize(10).setTextColor('black').text('PERSATUAN PEMINAT RADIO KOMUNIKASI (ROIP) [PPM-006-10-01062020]', 148.5, 189, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 280 })
					eCert.setFont('HYPost-Light').setFontSize(7).setTextColor('black').text('IN MEMORIES OF LATE ZULKIFLI ABU (9W2UZL) - FOUNDER OF ROIPMARS (est. 2016)', 148.5, 193, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 280 })
					eCert
						.setFont('OpenSansCondensed-Regular')
						.setFontSize(8)
						.setTextColor('black')
						.text('this ‘Electronic Certificate’ (eCert) is computer generated. contact member@roipmars.org.my for any discrepancy.', 148.5, 196, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 280 })
					eCert
						.setFont('KodeMono-Regular')
						.setFontSize(9)
						.setTextColor('black')
						.text(`(C) ${new Date().getFullYear()} RoIPMARS™ Network | developed by mdpizi | generated via ${location.hostname + location.pathname} on ${new Date().toISOString()}`, 148.5, 200, {
							align: 'center',
							baseline: 'middle',
							lineHeightFactor: 1,
							maxWidth: 280,
						})

					let fileName = `${parseInt(Math.floor(dtl.getTime() / 1000)).toFixed(0)}-${caller}`
					eCert
						.setFileId(crypto.randomUUID())
						.setLanguage('en-MY')
						.setCreationDate(dtl)
						.setDocumentProperties({
							title: `eCert_RoIPMARS-${caller}-${dtl.toISOString()}`,
							subject: `${caller} | ${dtl.toISOString()}`,
							author: document.querySelector('meta[name="author"]').content,
							keywords: document.querySelector('meta[name="keywords"]').content,
							creator: 'RoIPMARS Activity Certificate Generator',
						})

					if (location.hostname != 'localhost') {
						await fetch('https://api.roipmars.org.my/hook/certgen', {
							method: 'PUT',
							headers: { 'content-type': 'application/json' },
							body: JSON.stringify({ call: caller, id: date, source: location.pathname.replaceAll('/', '') }),
						})
					}
					let eCertURI = eCert.output('datauristring', { filename: `${fileName}.pdf` })
					toastInfo.innerHTML = `<div class='toast-body'>eCert Ready!</div>`
					msgInfo.show()
					try {
						let respCtc = await fetch(`https://api.roipmars.org.my/hook/callctc?callsign=${caller}`, {
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
							toastSuccess.innerHTML = `<div class='toast-body'>eCert ${fileName} saved.\ncheck your 'downloads' folder.</div>`
							msgSuccess.show()
							eCert.save(`${fileName}.pdf`)
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
								toastInfo.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> sending eCert via eMail to ${MailCtc}...</div>`
								msgInfo.show()
								await fetch(`${mailAPI.BaseURL}/smtp/email`, {
									method: 'POST',
									headers: {
										'content-type': 'application/json',
										'api-key': mailAPI.Token,
									},
									body: JSON.stringify({
										sender: { name: 'eQSL RoIPMARS', email: 'noreply@roipmars.org.my' },
										to: [{ email: MailCtc, name: caller }],
										replyTo: { name: 'Member RoIPMARS', email: 'member@roipmars.org.my' },
										subject: `eCert_RoIPMARS-${caller}`,
										htmlContent: `<html><body><p>Hi, thank you for using our services. Here is your requested certificate;</p><table><tr><td>CallSign</td><td>${caller}</td></tr><tr><td>Time</td><td>${dtl.toUTCString()}</td></tr></table><p>You have requested a certificate from our records via ${
											location.hostname + location.pathname
										} on ${new Date().toString()} using ${navigator.userAgent}.</p><p>Please keep it in a safe place. If you have any questions, do not hesitate to contact us.<br><br>Sincerely,<br>Records Division, RoIPMARS</p></body></html>`,
										textContent: `You have requested a certificate from our records`,
										attachment: [{ content: eCertURI.split(',')[1], name: `${fileName}.pdf` }],
										tags: ['eQSL'],
									}),
								})
									.then((res) => res.json())
									.then(async (data) => {
										if (data.messageId) {
											toastSuccess.innerHTML = `<div class='toast-body'>eCert ${fileName} sent to ${MailCtc}.\ncheck eMail message from noreply@roipmars.org.my</div>`
											msgSuccess.show()
											if (callMail != MailCtc) {
												await fetch('https://api.roipmars.org.my/hook/callctc', {
													method: 'POST',
													headers: { 'content-type': 'application/json' },
													body: JSON.stringify({
														callsign: caller,
														contact: callCtc,
														email: MailCtc,
													}),
												})
											}
										} else {
											toastDanger.innerHTML = `<div class='toast-body'>eCert send failed. retry again later.</div>`
											msgDanger.show()
										}
									})
							} else {
								toastDanger.innerHTML = `<div class='toast-body'>eMail unavailable. downloading to your browser...</div>`
								msgDanger.show()
								toastSuccess.innerHTML = `<div class='toast-body'>eCert ${fileName} saved.\ncheck your 'downloads' folder.</div>`
								msgSuccess.show()
								eCert.save(`${fileName}.pdf`)
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
						toastInfo.innerHTML = `<div class='toast-body'><div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div> sending eCert via WhatsApp to ${WaCtc}...</div>`
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
								filename: `eCert_${fileName}.pdf`,
								base64: eCertURI,
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
											callsign: caller,
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
											message: `Hai ${caller},\n\nAnda dijemput menyertai Komuniti WhatsApp RoIPMARS melalui pautan ini: ${communityInviteLink}`,
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
								toastDanger.innerHTML = `<div class='toast-body'>eCert send failed. retry again later.</div>`
								msgDanger.show()
							}
						})
					}
				}
			})
		})
	})
	netRep.addEventListener('hidden.bs.modal', (event) => {
		const modal = event.relatedTarget
		const modalTitle = netRep.querySelector('.modal-title')
		modalTitle.textContent = `Laporan Aktiviti`
		netReport.id = 'netRep'
		// netRepMod.id = 'netRepMod'
	})
})
