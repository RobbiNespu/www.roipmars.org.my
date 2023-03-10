$(document).ready(function () {
  $('#cbcslist').DataTable({
    'processing': true,
    'ordering': false,
    'pagingType': 'first_last_numbers',
    'pageLength': 10,
    'search': {
      'smart': true
    },
    'searchDelay': 350,
    'order': [0, 'desc'],
    'keys': {
      'blurable': true,
      'keys': ['\n'.charCodeAt(0)],
      'columns': [2, 3, 4]
    },
    'stripeClasses': ['bg-light-subtle', 'bg-secondary-subtle'],
    'columnDefs': [
      {'className': 'text-center', 'targets': '_all'}
    ],
    'language': {
      'lengthMenu': 'Paparkan _MENU_ rekod',
      'search': 'Cari:',
      'processing': 'Jadual sedang disusun semula',
      'emptyTable': 'Rekod Tidak Ditemui',
      'infoEmpty': 'Rekod Tidak Ditemui',
      'zeroRecords': 'Rekod Tidak Ditemui',
      'paginate': {
        'first': 'Mula',
        'previous': 'Sebelum',
        'next': 'Selepas',
        'last': 'Akhir'
      },
      'info': 'Menunjukkan _START_ - _END_ dari _TOTAL_ rekod',
      'infoFiltered': ' - tapisan dari _MAX_ rekod',
      'infoPostFix': ' | Semua rekod yang ditunjukkan adalah diperoleh daripada maklumat sebenar.'
    }
  });
});

function getBody(element) {
  let cscount = document.querySelector('.cscount')
  var originalTable = element.clone();
  var tds = $(originalTable).children('tbody').children('tr').length;
  cscount.textContent = tds - 4 + ' ahli berdaftar';
}
getBody($('table.table'));