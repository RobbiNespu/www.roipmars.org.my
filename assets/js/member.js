$(document).ready(function () {
  $('#memberlist').DataTable({
    ajax: {
      url: 'assets/json/member.json',
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
    pageLength: 50,
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
})