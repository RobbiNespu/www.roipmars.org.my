$(document).ready(function () {
  $('#takwim').DataTable({
    'processing': true,
    'ordering': false,
    'pagingType': 'full_numbers',
    'pageLength': 10,
    'searchDelay': 350,
    'keys': {
      'blurable': true,
      'keys': ['\n'.charCodeAt(0)],
      'columns': [2, 3]
    },
    'stripeClasses': [
      'bg-body-secondary',
      'bg-body-tertiary'
    ],
    'columnDefs': [
      { 'className': 'text-center text-white', 'targets': '_all' },
      { 'searchable': false, 'targets': [0, 1, 4] }
    ],
    'displayStart': 120,
    'language': {
      'lengthMenu': 'Paparan _MENU_ rekod',
      'search': 'Cari Acara/Pengawal:',
      'processing': '<div class="spinner-border" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
      'emptyTable': 'Rekod Tidak Ditemui',
      'infoEmpty': 'Rekod Tidak Ditemui',
      'zeroRecords': 'Rekod Tidak Ditemui',
      'paginate': {
        'first': '<<',
        'previous': '<',
        'next': '>',
        'last': '>>'
      },
      'info': 'Menunjukkan _START_ - _END_ dari _TOTAL_ rekod',
      'infoFiltered': ' - tapisan dari _MAX_ rekod'
    }
  });
});

// function getBody(element) {
//   let cscount = document.querySelector('.cscount')
//   var originalTable = document.getElementById('cbcslist');
//   var tds = $(originalTable).children('tbody').children('tr').length;
//   cscount.textContent = tds + ' ahli berdaftar';
// }
// getBody($('table.table'));