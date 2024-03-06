const { jsPDF } = window.jspdf

function generateQsl(date, activity, ncs, caller, modes, utctime) {
	switch (modes) {
		case 'RF':
			var mode = 'FM (144.800MHz)'
			break
		default:
			var mode = 'VOI'
			break
	}

	var doc = new jsPDF({
		orientation: 'l',
		unit: 'mm',
		format: 'a4',
		compress: true,
	})

	doc.addFont('/assets/font/Orbitron-Regular.ttf', 'Orbitron-Regular', 'normal')
	// doc.addFont('/assets/font/Orbitron-Medium.ttf', 'Orbitron-Medium', 'normal')
	// doc.addFont('/assets/font/Orbitron-SemiBold.ttf', 'Orbitron-SemiBold', 'normal')
	// doc.addFont('/assets/font/Orbitron-Bold.ttf', 'Orbitron-Bold', 'normal')
	// doc.addFont('/assets/font/Orbitron-ExtraBold.ttf', 'Orbitron-ExtraBold', 'normal')
	doc.addFont('/assets/font/Orbitron-Black.ttf', 'Orbitron-Black', 'normal')
	doc.addFont('/assets/font/KodeMono-Regular.ttf', 'KodeMono-Regular', 'normal')
	doc.addFont('/assets/font/KodeMono-Medium.ttf', 'KodeMono-Medium', 'normal')
	doc.addFont('/assets/font/KodeMono-SemiBold.ttf', 'KodeMono-SemiBold', 'normal')
	doc.addFont('/assets/font/KodeMono-Bold.ttf', 'KodeMono-Bold', 'normal')

	doc.addImage('/assets/eqsl/eQSL_template_site.png', 'PNG', 0, 0, 297, 210)
	doc.setFont('Orbitron-Regular').setFontSize(30).setTextColor('#72c7ef').text(date.toUpperCase(), 148.5, 45, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 280 })
	doc.setFont('Orbitron-Black').setFontSize(35).setTextColor('#336699').text(activity.toUpperCase(), 148.5, 55, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 250 })
	doc.setFont('KodeMono-Bold').setFontSize(70).setTextColor('#5cce54').text(caller, 148.5, 110, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 280 })
	doc.setFont('KodeMono-SemiBold').setFontSize(25).setTextColor('black').text(`MODE\n${mode}`, 49.5, 145, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
	doc.setFont('KodeMono-Medium').setFontSize(30).setTextColor('black').text(`NCS\n${ncs}`, 148.5, 145, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
	doc.setFont('KodeMono-SemiBold').setFontSize(25).setTextColor('black').text(`UTC\n${utctime.replaceAll(':','')}`, 247.5, 145, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 90, renderingMode: 'fillThenStroke' })
	doc.setFont('KodeMono-Regular').setFontSize(8).setTextColor('#414a4c').text(`© ${new Date().getFullYear()} RoIPMARS Network | developed by 9W2LGX | generated via web on ${new Date().toISOString()}`, 148.5, 200, { align: 'center', baseline: 'middle', lineHeightFactor: 1, maxWidth: 280 })

	doc.save(date.split(' ').reverse().join('-') + '_' + caller + '.pdf')
}