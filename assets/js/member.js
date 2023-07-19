$(document).ready(function () {
  $('#memberlist').DataTable({
    'processing': true,
    'ordering': true,
    'pagingType': 'first_last_numbers',
    'pageLength': 10,
    'searchDelay': 500,
    'order': [
      [3, 'desc'],
      [0, 'asc']
    ],
    'keys': {
      'blurable': true,
      'keys': ['\n'.charCodeAt(0)],
      'columns': [1, 2]
    },
    'columnDefs': [
      { 'className': 'text-center', 'targets': '_all' },
      { 'searchable': false, 'targets': [0, 3] }
    ],
    'language': {
      'lengthMenu': 'Paparkan _MENU_ rekod',
      'search': 'Cari Callsign/Nama:',
      'processing': 'Rekod sedang disusun semula',
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
      'infoFiltered': ' - tapisan dari _MAX_ rekod',
      'infoPostFix': ' | Rekod diperoleh daripada maklumat sebenar.'
    }
  });
});

function getBody(element) {
  let membercount = document.querySelector('.membercount')
  var originalTable = document.getElementById('memberlist');
  var tds = $(originalTable).children('tbody').children('tr').length;
  membercount.textContent = tds + ' ahli';
}
getBody($('table.table'));