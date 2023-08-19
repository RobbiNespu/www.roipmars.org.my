import PDFDocument from 'pdfkit'
import blobStream from 'blob-stream'

function eQSLasPDF(call,mode,time) {
  const doc = new PDFDocument()
  const stream = doc.pipe(blobStream())

  doc.image('../../media/image/brands/roipmars/brand.png',{
    fit: [100,500],
    align: 'top',
    valign: 'center'
  })
  doc.font('Calibri').fontSize(12).text(call)
  doc.font('Calibri').fontSize(12).text(mode)
  doc.font('Calibri').fontSize(12).text(time)

  doc.end()
  stream.on('finish',function() {
    const blob = stream.toBlob('application/pdf')
    const url = stream.toBlobURL('application/pdf')
    iframe.src = url
  })
}