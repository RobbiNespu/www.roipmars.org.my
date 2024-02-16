$(document).ready(function () {
  $('#cbcslist').DataTable({
    ajax: '/assets/json/cbmars.json',
    processing: true,
    ordering: false,
    pagingType: 'full_numbers',
    pageLength: 10,
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
})