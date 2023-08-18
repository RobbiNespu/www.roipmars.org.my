$(document).ready(function () {
  $('#takwim').DataTable({
    ajax: 'assets/json/schedule.json',
    columns: [
      { title: 'Hari', className: 'text-center align-middle', searchable: true, name: 'hari' },
      { title: 'Acara', className: 'text-center align-middle', searchable: true, name: 'acara' },
      { title: 'NCS | ECR', className: 'text-center align-middle', searchable: true, name: 'ncs' },
      { title: 'Laporan', className: 'text-center align-middle', searchable: true, name: 'lapor' }
    ],
    displayStart: 170,
    language: {
      emptyTable: 'Rekod Tidak Ditemui',
      info: 'Menunjukkan _START_ - _END_ dari _TOTAL_ rekod',
      infoEmpty: 'Rekod Tidak Ditemui',
      infoFiltered: ' - tapisan dari _MAX_ rekod',
      lengthMenu: 'Paparan _MENU_ rekod',
      paginate: {
        first: '<<',
        last: '>>',
        next: '>',
        previous: '<'
      },
      processing: 'Sedang memuat...',
      search: 'Cari Acara/Pengawal:',
      zeroRecords: 'Rekod Tidak Ditemui'
    },
    ordering: false,
    pageLength: 10,
    pagingTag: 'button',
    pagingType: 'full_numbers',
    processing: true,
    responsive: true,
    searchDelay: 350
  })
  
  $('#uniq-ham-origin').DataTable({
    ajax: {
      url: '/assets/json/rank.json',
      dataSrc: 'origin-all'
    },
    columns: [
      { title: 'Panggilan Asal', className: 'text-center align-middle' },
      { title: 'Unik', className: 'text-center align-middle' }
    ],
    info: false,
    lengthChange: false,
    ordering: false,
    pageLength: 15,
    paging: true,
    pagingTag: 'button',
    pagingType: 'numbers',
    responsive: true,
    searching: false
  })
  
  $('#all-ncs-rank').DataTable({
    ajax: {
      url: '/assets/json/rank.json',
      dataSrc: 'ncs-all'
    },
    columns: [
      { title: 'Stesen', className: 'text-center align-middle' },
      { title: 'Operator', className: 'text-center align-middle' },
      { title: 'KPI', className: 'text-center align-middle' }
    ],
    info: false,
    ordering: false,
    paging: false,
    responsive: true,
    searching: false
  })
  
  $('#en-ncs-rank').DataTable({
    ajax: {
      url: '/assets/json/rank.json',
      dataSrc: 'ncs-en'
    },
    columns: [
      { title: 'Stesen', className: 'text-center align-middle' },
      { title: 'Operator', className: 'text-center align-middle' },
      { title: 'KPI', className: 'text-center align-middle' }
    ],
    info: false,
    ordering: false,
    paging: false,
    responsive: true,
    searching: false
  })
  
  $('#ms-ncs-rank').DataTable({
    ajax: {
      url: '/assets/json/rank.json',
      dataSrc: 'ncs-ms'
    },
    columns: [
      { title: 'Stesen', className: 'text-center align-middle' },
      { title: 'Operator', className: 'text-center align-middle' },
      { title: 'KPI', className: 'text-center align-middle' }
    ],
    info: false,
    ordering: false,
    paging: false,
    responsive: true,
    searching: false
  })
  
  $('#cb-ncs-rank').DataTable({
    ajax: {
      url: '/assets/json/rank.json',
      dataSrc: 'ncs-cb'
    },
    columns: [
      { title: 'Stesen', className: 'text-center align-middle' },
      { title: 'Operator', className: 'text-center align-middle' },
      { title: 'KPI', className: 'text-center align-middle' }
    ],
    info: false,
    ordering: false,
    paging: false,
    responsive: true,
    searching: false
  })
  
  $('#voi-ncs-rank').DataTable({
    ajax: {
      url: '/assets/json/rank.json',
      dataSrc: 'ncs-voi'
    },
    columns: [
      { title: 'Stesen', className: 'text-center align-middle' },
      { title: 'Operator', className: 'text-center align-middle' },
      { title: 'KPI', className: 'text-center align-middle' }
    ],
    info: false,
    ordering: false,
    paging: false,
    responsive: true,
    searching: false
  })
  
  $('#all-stn-rank').DataTable({
    ajax: {
      url: '/assets/json/rank.json',
      dataSrc: 'stn-all'
    },
    columns: [
      { title: 'Stesen', className: 'text-center align-middle' },
      { title: 'Operator', className: 'text-center align-middle' }
    ],
    info: false,
    ordering: false,
    paging: false,
    responsive: true,
    searching: false
  })
  
  $('#en-stn-rank').DataTable({
    ajax: {
      url: '/assets/json/rank.json',
      dataSrc: 'stn-en'
    },
    columns: [
      { title: 'Stesen', className: 'text-center align-middle' },
      { title: 'Operator', className: 'text-center align-middle' }
    ],
    info: false,
    ordering: false,
    paging: false,
    responsive: true,
    searching: false
  })
  
  $('#ms-stn-rank').DataTable({
    ajax: {
      url: '/assets/json/rank.json',
      dataSrc: 'stn-ms'
    },
    columns: [
      { title: 'Stesen', className: 'text-center align-middle' },
      { title: 'Operator', className: 'text-center align-middle' }
    ],
    info: false,
    ordering: false,
    paging: false,
    responsive: true,
    searching: false
  })
  
  $('#cb-stn-rank').DataTable({
    ajax: {
      url: '/assets/json/rank.json',
      dataSrc: 'stn-cb'
    },
    columns: [
      { title: 'Stesen', className: 'text-center align-middle' },
      { title: 'Operator', className: 'text-center align-middle' }
    ],
    info: false,
    ordering: false,
    paging: false,
    responsive: true,
    searching: false
  })
  
  $('#voi-stn-rank').DataTable({
    ajax: {
      url: '/assets/json/rank.json',
      dataSrc: 'stn-voi'
    },
    columns: [
      { title: 'Stesen', className: 'text-center align-middle' },
      { title: 'Operator', className: 'text-center align-middle' }
    ],
    info: false,
    ordering: false,
    paging: false,
    responsive: true,
    searching: false
  })
})

const netrep = document.getElementById('netrep')
if (netrep) {  
  netrep.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const sourcedate = button.getAttribute('data-bs-source')
    const modalTitle = netrep.querySelector('.modal-title')
    const modalBodyTable = netrep.querySelector('.modal-body table')
    const tableid = `net-${sourcedate}`
    modalTitle.textContent = `Net Report ${sourcedate}`
    modalBodyTable.id = tableid
    var netreptable = $('#' + tableid).DataTable({
      ajax: {
        url: '/assets/json/netrep.json',
        dataSrc: `${sourcedate}`
      },
      dom: 'Bfrtip',
      buttons: [{
        className: 'btn btn-sm btn-success rounded-5',
        download: 'download',
        extend: 'pdfHtml5',
        filename: `${sourcedate}`,
        messageBottom: 'this data has been exported via https://www.roipmars.org.my/program.\n© 2023 RoIPMARS Network | coded by mdpizi (9W2LGX)\nID#'+new Date().getTime(),
        text: 'PDF',
        title: `RoIPMARS Net Report ${sourcedate}`
      }],
      columns: [
        { title: 'CQ#', className: 'text-center align-middle', name: 'cq' },
        { title: 'Callsign', className: 'text-center align-middle', name: 'cs' },
        { title: 'TX/RX Mode', className: 'text-center align-middle', name: 'mod' },
        { title: 'UTC', className: 'text-center align-middle', name: 'time' }
      ],
      destroy: true,
      fixedHeader: true,
      info: false,
      language: {
        emptyTable: 'Laporan Tidak Ditemui',
        info: 'Menunjukkan _START_ - _END_ dari _TOTAL_ rekod',
        infoEmpty: 'Laporan Tidak Ditemui',
        infoFiltered: ' - tapisan dari _MAX_ rekod',
        lengthMenu: 'Paparan _MENU_ rekod',
        paginate: {
          first: '<<',
          last: '>>',
          next: '>',
          previous: '<'
        },
        processing: '<span class="visually-hidden">Sedang memuat...</span>',
        search: 'Cari:',
        zeroRecords: 'Laporan Tidak Ditemui'
      },
      lengthChange: false,
      ordering: false,
      pageLength: 10,
      paging: true,
      pagingTag: 'button',
      pagingType: 'simple',
      responsive: true,
      searching: false
    })
    modalTitle.onchange(function() { netreptable.reload() })
  })
}