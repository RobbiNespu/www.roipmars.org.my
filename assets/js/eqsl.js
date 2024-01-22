import { jsPDF } from 'jspdf';

const doc = new jsPDF({ orientation: 'landscape' });

const fontOrbitronBlack = fetch('../font/OrbitronBlack.woff');
doc.addFileToVFS('OrbitronBlack.woff', fontOrbitronBlack);
doc.addFont('OrbitronBlack.woff', 'OrbitronBlack', 'bold');

const fontOrbitronMedium = fetch('../font/OrbitronMedium.woff');
doc.addFileToVFS('OrbitronMedium.woff', fontOrbitronMedium);
doc.addFont('OrbitronMedium.woff', 'OrbitronMedium', 'bold');

doc.setFont('OrbitronBlack');
doc.text(takwimact, 0, 0, { align: 'center', lineHeightFactor: 1 });

doc.save('a4-landscape.pdf');

// function downeQSL(call, mode, time) {
//   const doc = new PDFDocument()
//   const stream = doc.pipe(blobStream())
//
//   // add your content to the document here, as usual
//
//   doc.fontSize(25).text(call + ' ' + mode + ' ' + time, 100, 100)
//   doc.end()
//
//   const a = document.createElement('a')
//   document.body.appendChild(a)
//   a.style = 'display: none'
//
//   let blob
//
//   function download() {
//     if (!blob) return
//     var url = window.URL.createObjectURL(blob)
//     a.href = url
//     a.download = 'test.pdf'
//     a.click()
//     window.URL.revokeObjectURL(url)
//   }
//
//   stream.on('finish', function() {
//     // get a blob you can do whatever you like with
//     blob = stream.toBlob('application/pdf')
//   })
// }