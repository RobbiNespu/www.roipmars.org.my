$(document).ready(function () {
  $('#takwim').DataTable({
    'columnDefs': {
      'searchable': false,
      'targets': [0, 1, 4]
    },
    'displayStart': 160,
    'keys': {
      'blurable': true,
      'columns': [2, 3],
      'keys': ['\n'.charCodeAt(0)]
    },
    'language': {
      'emptyTable': 'Rekod Tidak Ditemui',
      'info': 'Menunjukkan _START_ - _END_ dari _TOTAL_ rekod',
      'infoEmpty': 'Rekod Tidak Ditemui',
      'infoFiltered': ' - tapisan dari _MAX_ rekod',
      'lengthMenu': 'Paparan _MENU_ rekod',
      'paginate': {
        'first': '<<',
        'last': '>>',
        'next': '>',
        'previous': '<'
      },
      'processing': '<div class="spinner-border" role="status"><span class="visually-hidden">Sedang memuat...</span></div>',
      'search': 'Cari Acara/Pengawal:',
      'zeroRecords': 'Rekod Tidak Ditemui'
    },
    'ordering': false,
    'pageLength': 10,
    'pagingTag': 'button',
    'pagingType': 'full_numbers',
    'processing': true,
    'searchDelay': 350
  })
})