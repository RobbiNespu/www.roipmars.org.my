import 'https://cdn.statuspage.io/se-v2.js';
var sp = new StatusPage.page({ page: 'l6phyl70dpbh' });

var syssummary = fetch('https://l6phyl70dpbh.statuspage.io/api/v2/summary.json');
var allsysstat = fetch('https://l6phyl70dpbh.statuspage.io/api/v2/status.json');
var syscompstat = fetch('https://l6phyl70dpbh.statuspage.io/api/v2/components.json');

document('#sysstat').innerhtml = allsysstat.status.description