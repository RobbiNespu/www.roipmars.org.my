import PDFDocument from 'pdfkit'
import blobStream from 'blob-stream'

const doc = new PDFDocument()
const stream = doc.pipe(blobStream())

// add your content to the document here, as usual

doc.end()
stream.on('finish', function() {
  const blob = stream.toBlob('application/pdf')
  const url = stream.toBlobURL('application/pdf')
  iframe.src = url
})