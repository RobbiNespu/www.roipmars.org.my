function getBody(element) {
  let cscount = document.querySelector('.cscount')
  var originalTable = element.clone();
  var tds = $(originalTable).children('tbody').children('tr').length;
  cscount.textContent = tds + ' ahli';
}
getBody($('table.table'));

function nameSrch() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById('nameInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('cbcslist');
  tr = table.getElementsByTagName('tr');
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}

function csSrch() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById('csInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('cbcslist');
  tr = table.getElementsByTagName('tr');
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}

function locSrch() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById('locInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('cbcslist');
  tr = table.getElementsByTagName('tr');
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}