$(document).ready(function () {
  $('#code10').DataTable({
    'processing': true,
    'ordering': false,
    'pagingType': 'simple_numbers',
    'pageLength': 10,
    'searchDelay': 350,
    'columnDefs': [
      { 'className': 'text-center', 'targets': '_all' }
    ],
    'language': {
      'lengthMenu': 'Paparkan _MENU_ rekod',
      'search': 'Cari Kod:',
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

$(document).ready(function () {
  $('#cbpre').DataTable({
    'processing': true,
    'ordering': false,
    'pagingType': 'simple_numbers',
    'pageLength': 10,
    'searchDelay': 350,
    'columnDefs': [
      { 'className': 'text-center', 'targets': '_all' }
    ],
    'language': {
      'lengthMenu': 'Paparkan _MENU_ rekod',
      'search': 'Cari Lokal:',
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