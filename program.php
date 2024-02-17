<!DOCTYPE html>
<html lang='ms-MY' data-bs-theme='auto'>

	<head>
		<title>RoIPMARS Network | Jadual Aktiviti & Program</title>
		<link rel='stylesheet' href='https://cdn.datatables.net/v/bs5/jszip-3.10.1/dt-1.13.8/af-2.6.0/b-2.4.2/b-colvis-2.4.2/b-html5-2.4.2/b-print-2.4.2/cr-1.7.0/date-1.5.1/fc-4.3.0/fh-3.4.0/kt-2.11.0/r-2.5.0/rg-1.4.1/rr-1.4.1/sc-2.3.0/sb-1.6.0/sp-2.2.0/sl-1.7.0/sr-1.3.0/datatables.min.css' crossorigin='anonymous'>
	</head>

	<body>
		<?php require_once 'header.php' ?>
		<div class='container-fluid'>
			<div class='row text-center'>
				<div class='col my-2 jumbotron-fluid'>
					<h1 class='h1-responsive'>Aktiviti &amp; Program RoIPMARS</h1>
				</div>
			</div>
		</div>
		<div class='container'>
			<div class='row'>
				<div class='col-lg-6 my-1 align-self-center'>
					<div class='row text-center'>
						<div class='col-xxl'>Waktu Tempatan:<br><span id='UserTime'></span></div>
						<div class='col-xxl'>Waktu UTC:<br><span id='ZuluTime'></span></div>
					</div>
					<div class='ratio ratio-21x9'>
						<embed loading='lazy' class='rounded-4' src='https://calendar.google.com/calendar/embed?src=2j7dblv8rh7gpdsfv4cd3rrtf0%40group.calendar.google.com&hl=ms&mode=AGENDA&ctz=Asia%2FKuala_Lumpur&wkst=2&showTitle=0&showDate=0&showNav=0&showCalendars=0&showTabs=0&showPrint=0'></embed>
					</div>
					<p class='text-center my-2'>Bagi individu / kumpulan / komuniti / kelab yang berhasrat untuk menjalankan sebarang aktiviti bersama kami ataupun menyampaikan selingan hebahan semasa aktiviti kami berlansung, anda boleh berhubung terus dengan:;</p>
					<div class='d-grid gap-2 col-8 mx-auto'>
						<a class='btn btn-success' role='button' href='https://wa.me/601153440440?text=bantuan'><i class='bi-whatsapp'></i></a>
					</div>
					<div class='mt-3 text-center'>
						<h4>Suapan Langsung Rangkaian RoIPMARS</h4>
						<div id='bcfy'><div class='spinner-border my-3' role='status'><span class='visually-hidden'>Memuatkan...</span></div></div>
						<div id='bcfy-audio'></div>
					</div>
				</div>
				<div class='col-lg-6 my-3 d-block text-center'>
					<h4>Aktiviti Net Mingguan RoIPMARS</h4>
					<table class='table table-sm table-bordered text-center align-middle'>
						<thead><th>Hari</th><th>Masa</th><th>Program</th><th>Penganjur</th></thead>
						<tbody>
							<tr class='table-primary'><td>Isnin</td><td>1300z<br>2100my</td><td>RoIPMARS Net Awal Minggu</td><td>Rangkaian HAM RoIPMARS</td></tr>
							<tr class='table-danger'><td>Selasa</td><td>1300z<br>2000wib</td><td>Net Mingguan SMP</td><td>SMP RoIPMARS</td></tr>
							<tr class='table-success'><td>Wednesday</td><td>1300z<br>2100my</td><td>RoIPMARS Learning English Net</td><td>Rangkaian HAM RoIPMARS</td></tr>
							<tr class='table-danger'><td>Kamis</td><td>1300z<br>2000wib</td><td>Net Mingguan SMP</td><td>SMP RoIPMARS</td></tr>
							<tr class='opacity-25'><td>Jumaat</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr>
							<tr class='table-primary'><td>Sabtu</td><td>1300z<br>2100my</td><td>RoIPMARS Net Malam Minggu</td><td>Rangkaian HAM RoIPMARS</td></tr>
							<tr class='table-danger'><td>Minggu</td><td>1300z<br>2000wib</td><td>SMP Net Akhir Minggu</td><td>SMP RoIPMARS</td></tr>
						</tbody>
					</table>
					<h4>Barisan Petugas Bahagian Siaraya &amp; Aktiviti</h4>
					<div id='ncsgroup' class='carousel slide' data-bs-ride='carousel'>
						<div class='carousel-inner my-0'>
							<div class='carousel-item active'>
								<div class='hstack gap-2'>
									<div class='vstack gap-3'>
										<img class='img-fluid rounded-circle object-fit-cover w-75 mx-auto' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/ncs/9m2sfl.png' alt='9M2SFL'>
										<p class='lh-1'>9M2SFL<br>SAIFUL</p>
									</div>
									<div class='vstack gap-3'>
										<img class='img-fluid rounded-circle object-fit-cover w-75 mx-auto' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/025.png'alt='9W2AYP'>
										<p class='lh-1'>9W2AYP<br>SABRI</p>
									</div>
									<div class='vstack gap-3'>
										<img class='img-fluid rounded-circle object-fit-cover w-75 mx-auto' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/011.png' alt='9W2NDI'>
										<p class='lh-1'>9W2NDI<br>NASA</p>
									</div>
								</div>
							</div>
							<div class='carousel-item'>
								<div class='hstack gap-2'>
									<div class='vstack gap-3'>
										<img class='img-fluid rounded-circle object-fit-cover w-75 mx-auto' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/ncs/9w2ybt.png' alt='9W2YBT'>
										<p class='lh-1'>9W2YBT<br>FAISAL</p>
									</div>
									<div class='vstack gap-3'>
										<img class='img-fluid rounded-circle object-fit-cover w-75 mx-auto' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/ncs/9m6jay.png' alt='9M6JAY'>
										<p class='lh-1'>9M6JAY<br>JOHN JUNIOR</p>
									</div>
									<div class='vstack gap-3'>
										<img class='img-fluid rounded-circle object-fit-cover w-75 mx-auto' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/010.png' alt='9M6AUA'>
										<p class='lh-1'>9M6AUA<br>JEOFREY</p>
									</div>
								</div>
							</div>
							<div class='carousel-item'>
								<div class='hstack gap-2'>
									<div class='vstack gap-3'>
										<img class='img-fluid rounded-circle object-fit-cover w-75 mx-auto' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/017.png' alt='9M6RDY'>
										<p class='lh-1'>9M6RDY<br>MATTHEUS &commat; RUDY</p>
									</div>
									<div class='vstack gap-3'>
										<img class='img-fluid rounded-circle object-fit-cover w-75 mx-auto' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/ncs/9w6rhn.png' alt='9W6RHN'>
										<p class='lh-1'>9W6RHN<br>ROSLAN</p>
									</div>
									<div class='vstack gap-3'>
										<img class='img-fluid rounded-circle object-fit-cover w-75 mx-auto' loading='lazy' src='https://ik.imagekit.io/mhrtech/roipmars-org-my/media/image/member/032.png' alt='V85AFF'>
										<p class='lh-1'>V85AFF<br>MAHATHIR</p>
									</div>
								</div>
							</div>
						</div>
						<div class='carousel-indicators position-relative my-0 mx-auto pe-none'>
							<button type='button' data-bs-target='#ncsgroup' data-bs-slide-to='0' aria-label='ncsgroup-1' class='active' aria-current='true'></button>
							<button type='button' data-bs-target='#ncsgroup' data-bs-slide-to='1' aria-label='ncsgroup-2'></button>
							<button type='button' data-bs-target='#ncsgroup' data-bs-slide-to='2' aria-label='ncsgroup-3'></button>
						</div>
					</div>
				</div>
			</div>
			<hr>
			<div class='row'>
				<div class='col-12 my-1 text-center'>
					<h2 class='font-weight-bold'>Takwim Program</h2>
					<span><?php
						$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
						$scheduleLastMod = filemtime(__DIR__ . '/assets/json/sch.json');
						echo 'kemaskini: ' . datefmt_format($dtfmt, $scheduleLastMod);
					?></span>
				</div>
				<div class='table'>
					<table class='table table-sm table-striped text-center align-middle' id='takwim'>
						<caption class='text-center'>
							<ul class='list-group'>
								<li class='list-group-item list-group-item-secondary'><sup>1</sup> Tertakluk kepada Pengisytiharaan Penyimpan Mohor Besar Raja-Raja Melayu</li>
								<li class='list-group-item list-group-item-secondary'><sup>2</sup> Pilihan Acara oleh NCS</li>
							</ul>
							<ul class='list-group list-group-horizontal'>
								<li class='list-group-item list-group-item-danger flex-fill'><i class='bi-person-slash text-danger'></i> Pengawal gagal hadir</li>
								<li class='list-group-item list-group-item-danger flex-fill'><i class='bi-envelope-slash text-danger'></i> Laporan gagal dihantar</li>
								<li class='list-group-item list-group-item-danger flex-fill'><i class='bi-send-slash text-danger'></i> Laporan belum diterima</li>
							</ul>
						</capton>
					</table>
					<div class='modal fade' id='netrep' tabindex='-1' aria-labelledby='netreport' aria-hidden='true'>
						<div class='modal-dialog modal-dialog-centered'>
							<div class='modal-content'>
								<div class='modal-header'>
									<h4 class='modal-title text-center' id='netreport'>Laporan Aktiviti</h4>
								</div>
								<div class='modal-body'>
									<div class='row'>
										<div class='col-8'>
											<table class='table table-sm table-striped text-center align-middle' id='netRep'></table>
										</div>
										<div class='col-4 align-self-center text-center' style='font-size: x-small'>
											<table class='table table-sm text-center align-middle'>
												<thead class='table-primary'><tr><td colspan='2'>Mod Penghantaran</td></tr></thead>
												<tbody>
													<tr><td>DC</td><td>Discord</td></tr>
													<tr><td>EL</td><td>EchoLink</td></tr>
													<tr><td>FRN</td><td>Free Radio Network</td></tr>
													<tr><td>MBL</td><td>Mumble</td></tr>
													<tr><td>PNT</td><td>Peanut for HAM</td></tr>
													<tr><td>RF</td><td>Radio Transceiver</td></tr>
													<tr><td>TG</td><td>Telegram</td></tr>
													<tr><td>TS</td><td>TeamSpeak</td></tr>
													<tr><td>TT</td><td>Team Talk</td></tr>
													<tr><td>WA</td><td>WhatsApp</td></tr>
													<tr><td>ZL</td><td>Zello</td></tr>
												</tbody>
											</table>
											<!-- <table class='table table-sm table-striped text-center align-middle' id='netRepMod'></table> -->
											<span class='lh-1 fst-italic'><?php
												$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
												$reportLastMod = filemtime(__DIR__.'/assets/json/netrep.json'); echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
											?></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr>
			<div class='row'>
				<div class='col-12 my-2 d-block mx-auto'>
					<h2 class='text-center'>Statistik Program</h2>
					<h6 class='text-center'><i class='fas fa-quote-left fa-xs'></i> Penyertaan &amp; Sokongan Anda adalah Kebanggaan Kita Semua <i class='fas fa-quote-right fa-xs'></i></h6>
				</div>
				<div class='col-lg-6 figure my-1'>
					<canvas id='byTime' loading='lazy' alt='NetGraphTime'></canvas>
				</div>
				<div class='col-lg-6 figure my-1'>
					<canvas id='byDate' loading='lazy' alt='NetGraphDaily'></canvas>
				</div>
				<div class='col-lg-6 figure my-1'>
					<canvas id='byDay' loading='lazy' alt='NetGraphDay'></canvas>
				</div>
				<div class='col-lg-6 figure my-1'>
					<canvas id='byWeekDay' loading='lazy' alt='NetGraphWeekDay'></canvas>
				</div>
				<div class='col-lg-6 figure my-1'>
					<canvas id='byWeek' loading='lazy' alt='NetGraphWeekly'></canvas>
				</div>
				<div class='col-lg-6 figure my-1'>
					<canvas id='byMonth' loading='lazy' alt='NetGraphMonthly'></canvas>
				</div>
				<div class='col-lg-6 figure my-1'>
					<canvas id='byQuarter' loading='lazy' alt='NetGraphQuarterly'></canvas>
				</div>
				<div class='col-lg-6 figure my-1'>
					<canvas id='byMode' loading='lazy' alt='NetGraphMode'></canvas>
				</div>
				<div class='col-lg-6 figure my-1'>
					<canvas id='byCSLocaleDays' loading='lazy' alt='NetGraphCallerDays'></canvas>
				</div>
				<div class='col-lg-6 figure my-1'>
					<canvas id='byCSLocaleWeek' loading='lazy' alt='NetGraphCallerWeek'></canvas>
				</div>
				<div class='col-lg-6 figure my-1'>
					<canvas id='byCSLocaleMonth' loading='lazy' alt='NetGraphCallerMonth'></canvas>
				</div>
				<div class='col-lg-6 figure my-1'>
					<canvas id='byCSLocaleQuarter' loading='lazy' alt='NetGraphCallerQuarter'></canvas>
				</div>
				<div class='col-lg-9 figure my-1 align-items-center'>
					<canvas id='byCountry' loading='lazy' alt='NetGraphMap'></canvas>
				</div>
				<div class='col-lg-3 align-self-center'>
					<p class='text-center fst-italic mb-0'><sub><?php
					$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
					$reportLastMod = filemtime(__DIR__ . '/assets/json/s-origin.json');
					echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
					?></sub></p>
					<table class='table table-sm table-striped text-center align-middle' id='uniq-ham-origin'></table>
				</div>
			</div>
			<hr>
			<div class='row my-1'>
				<div class='col-12'><h3 class='text-center'>Kedudukan Kategori Jalur Amatur</h3></div>
				<div class='col-12'>
					<p class='text-center'>RoIPMARS HAM Net</p>
					<div class='row'>
						<div class='col-lg-6'>
							<h4 class='text-center'>Pengawal Tertinggi</h4>
							<p class='text-center fst-italic mb-0'><sub><?php
							$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
							$reportLastMod = filemtime(__DIR__ . '/assets/json/r-ncs-a.json');
							echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
							?></sub></p>
							<table class='table table-sm table-striped text-center align-middle' id='all-ncs-rank'></table>
						</div>
						<div class='col-lg-6'>
							<h4 class='text-center'>Stesen Aktif</h4>
							<p class='text-center fst-italic mb-0'><sub><?php
							$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
							$reportLastMod = filemtime(__DIR__ . '/assets/json/r-stn-a.json');
							echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
							?></sub></p>
							<table class='table table-sm table-striped text-center align-middle' id='all-stn-rank'></table>
						</div>
					</div>
				</div>
				<div class='col-lg-4'>
					<p class='text-center'>RoIPMARS HAM Net Bahasa Inggeris</p>
					<div class='row'>
						<div class='col-lg-12'>
							<h4 class='text-center'>Pengawal Tertinggi</h4>
							<p class='text-center fst-italic mb-0'><sub><?php
							$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
							$reportLastMod = filemtime(__DIR__ . '/assets/json/r-ncs-en.json');
							echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
							?></sub></p>
							<table class='table table-sm table-striped text-center align-middle' id='en-ncs-rank'></table>
						</div>
						<div class='col-lg-12'>
							<h4 class='text-center'>Stesen Aktif</h4>
							<p class='text-center fst-italic mb-0'><sub><?php
							$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
							$reportLastMod = filemtime(__DIR__ . '/assets/json/r-stn-en.json');
							echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
							?></sub></p>
							<table class='table table-sm table-striped text-center align-middle'id='en-stn-rank'></table>
						</div>
					</div>
				</div>
				<div class='col-lg-4'>
					<p class='text-center'>RoIPMARS HAM Net Bahasa Melayu</p>
					<div class='row'>
						<div class='col-lg-12'>
							<h4 class='text-center'>Pengawal Tertinggi</h4>
							<p class='text-center fst-italic mb-0'><sub><?php
							$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
							$reportLastMod = filemtime(__DIR__ . '/assets/json/r-ncs-ms.json');
							echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
							?></sub></p>
							<table class='table table-sm table-striped text-center align-middle' id='ms-ncs-rank'></table>
						</div>
						<div class='col-lg-12'>
							<h4 class='text-center'>Stesen Aktif</h4>
							<p class='text-center fst-italic mb-0'><sub><?php
							$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
							$reportLastMod = filemtime(__DIR__ . '/assets/json/r-stn-ms.json');
							echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
							?></sub></p>
							<table class='table table-sm table-striped text-center align-middle' id='ms-stn-rank'></table>
						</div>
					</div>
				</div>
				<div class='col-lg-4'>
					<p class='text-center'>RoIPMARS HAM Net Bahasa Indonesia</p>
					<div class='row'>
						<div class='col-lg-12'>
							<h4 class='text-center'>Pengawal Tertinggi</h4>
							<p class='text-center fst-italic mb-0'><sub><?php
							$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
							$reportLastMod = filemtime(__DIR__ . '/assets/json/r-ncs-id.json');
							echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
							?></sub></p>
							<table class='table table-sm table-striped text-center align-middle' id='id-ncs-rank'></table>
						</div>
						<div class='col-lg-12'>
							<h4 class='text-center'>Stesen Aktif</h4>
							<p class='text-center fst-italic mb-0'><sub><?php
							$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
							$reportLastMod = filemtime(__DIR__ . '/assets/json/r-stn-id.json');
							echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
							?></sub></p>
							<table class='table table-sm table-striped text-center align-middle' id='id-stn-rank'></table>
						</div>
					</div>
				</div>
			</div>
			<div class='row my-1'>
				<div class='col-lg-6'>
					<h3 class='text-center'>Kedudukan Kategori Jalur Rakyat</h3>
					<p class='text-center'>RoIPMARS CB Net Bahasa Melayu</p>
					<div class='row'>
						<div class='col-lg-6'>
							<h4 class='text-center'>Pengawal Tertinggi</h4>
							<p class='text-center fst-italic mb-0'><sub><?php
							$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
							$reportLastMod = filemtime(__DIR__ . '/assets/json/r-ncs-cb.json');
							echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
							?></sub></p>
							<table class='table table-sm table-striped text-center align-middle' id='cb-ncs-rank'></table>
						</div>
						<div class='col-lg-6'>
							<h4 class='text-center'>Stesen Paling Aktif</h4>
							<p class='text-center fst-italic mb-0'><sub><?php
							$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
							$reportLastMod = filemtime(__DIR__ . '/assets/json/r-stn-cb.json');
							echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
							?></sub></p>
							<table class='table table-sm table-striped text-center align-middle' id='cb-stn-rank'></table>
						</div>
					</div>
				</div>
				<div class='col-lg-6'>
					<h3 class='text-center'>Kedudukan Kategori Terbuka &lpar;VoIP&rpar;</h3>
					<p class='text-center'>RoIPMARS OpenVoIP Net Bahasa Melayu</p>
					<div class='row'>
						<div class='col-lg-6'>
							<h4 class='text-center'>Pengawal Tertinggi</h4>
							<p class='text-center fst-italic mb-0'><sub><?php
							$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
							$reportLastMod = filemtime(__DIR__ . '/assets/json/r-ncs-voi.json');
							echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
							?></sub></p>
							<table class='table table-sm table-striped text-center align-middle' id='voi-ncs-rank'></table>
						</div>
						<div class='col-lg-6'>
							<h4 class='text-center'>Stesen Paling Aktif</h4>
							<p class='text-center fst-italic mb-0'><sub><?php
							$dtfmt = datefmt_create('ms_MY', IntlDateFormatter::FULL, IntlDateFormatter::FULL, $_SERVER['HTTP_CF_TIMEZONE'], IntlDateFormatter::GREGORIAN, 'EEEE, d MMMM yyyy, h:mm BBBB zzzz');
							$reportLastMod = filemtime(__DIR__ . '/assets/json/r-stn-voi.json');
							echo 'kemaskini:<br>' . datefmt_format($dtfmt, $reportLastMod);
							?></sub></p>
							<table class='table table-sm table-striped text-center align-middle' id='voi-stn-rank'></table>
						</div>
					</div>
				</div>
			</div>
			<hr>
			<div class='row my-1'>
				<div class='col-12'>
					<h3 class='text-center'>Pemenang Bertuah Rangkaian RoIPMARS</h3>
				</div>
				<div class='col-lg-6'>
					<h4 class='text-center'>HAM Net Khas Ambang Tahun Baru 2023</h4>
					<table class='table table-bordered table-sm table-responsive-sm text-center align-middle'>
						<thead><th>No</th><th>Stesen</th></thead>
						<tbody>
							<tr><td>1<sup>st</sup></td><td>9W6AFF</td></tr>
							<tr><td>2<sup>nd</sup></td><td>YD5NCU</td></tr>
							<tr><td>3<sup>rd</sup></td><td>9W6MOZ</td></tr>
							<tr><td>4<sup>th</sup></td><td>9W2YJT</td></tr>
							<tr><td>5<sup>th</sup></td><td>YC3RDY</td></tr>
						</tbody>
					</table>
				</div>
				<div class='col-lg-6'>
					<h4 class='text-center'>CB Net Khas Sambutan Tahun Baru 2023</h4>
					<table class='table table-bordered table-sm table-responsive-sm text-center align-middle'>
						<thead><th>No</th><th>Stesen</th></thead>
						<tbody>
							<tr><td>1<sup>st</sup></td><td>113DAHRY</td></tr>
							<tr><td>2<sup>nd</sup></td><td>113DAZIK</td></tr>
							<tr><td>3<sup>rd</sup></td><td>225BSLIM</td></tr>
							<tr><td>4<sup>th</sup></td><td>113DAISS</td></tr>
							<tr><td>5<sup>th</sup></td><td>113MSUZL</td></tr>
						</tbody>
					</table>
				</div>
				<div class='col-lg-6'>
					<h4 class='text-center'>HAM Net Khas Ambang Tahun Baru Cina 2023</h4>
					<table class='table table-bordered table-sm table-responsive-sm text-center align-middle'>
						<thead><th>No</th><th>Stesen</th></thead>
						<tbody>
							<tr><td>1<sup>st</sup></td><td>9W2EVQ</td></tr>
							<tr><td>2<sup>nd</sup></td><td>9M2RAN</td></tr>
							<tr><td>3<sup>rd</sup></td><td>9W2JCP</td></tr>
							<tr><td>4<sup>th</sup></td><td>9W2ESR</td></tr>
							<tr><td>5<sup>th</sup></td><td>V85AFF</td></tr>
						</tbody>
					</table>
				</div>
				<div class='col-lg-6'>
					<h4 class='text-center'>CB Net Khas Sambutan Tahun Baru Cina 2023</h4>
					<table class='table table-bordered table-sm table-responsive-sm text-center align-middle'>
						<thead><th>No</th><th>Stesen</th></thead>
						<tbody>
							<tr><td>1<sup>st</sup></td><td>91DATHP</td></tr>
							<tr><td>2<sup>nd</sup></td><td>113MSSAM</td></tr>
							<tr><td>3<sup>rd</sup></td><td>113DANDI</td></tr>
							<tr><td>4<sup>th</sup></td><td>91DAGBW</td></tr>
							<tr><td>5<sup>th</sup></td><td>91KMAGP</td></tr>
						</tbody>
					</table>
				</div>
				<div class='col-lg-6'>
					<h4 class='text-center'>Hadiah Misteri Petugas Aktiviti 2023</h4>
					<table class='table table-bordered table-sm table-responsive-sm text-center align-middle'>
						<thead><th>No</th><th>Stesen</th><th>Kategori</th></thead>
						<tbody>
							<tr><td>1<sup>st</sup></td><td>9M2SFL</td><td>Rekod <sup>2nd</sup>, Tugasan <sup>2nd</sup>, KPI <sup>2nd</sup></td></tr>
							<tr><td>2<sup>nd</sup></td><td>9W6RHN</td><td>Tugasan <sup>3rd</sup>, KPI <sup>3rd</sup></td></tr>
							<tr><td>3<sup>rd</sup></td><td>9M6JAY</td><td>KPI <sup>4th</sup></td></tr>
						</tbody>
					</table>
				</div>
				<div class='col-lg-6'>
					<h4 class='text-center'>Saguhati Petugas Aktiviti 2023</h4>
					<table class='table table-bordered table-sm table-responsive-sm text-center align-middle'>
						<thead><th>No</th><th>Stesen</th><th>Sokongan</th></thead>
						<tbody>
							<tr><td>1<sup>st</sup></td><td>9W2AYP</td><td>99%</td></tr>
							<tr><td>2<sup>nd</sup></td><td>V85AFF</td><td>76%</td></tr>
							<tr><td>3<sup>rd</sup></td><td>9W6MOZ</td><td>63%</td></tr>
							<tr><td>4<sup>th</sup></td><td>9W2SNN</td><td>59%</td></tr>
							<tr><td>5<sup>th</sup></td><td>9W2YBT</td><td>58%</td></tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<?php require_once 'footer.php' ?>
		<script src='https://cdn.datatables.net/v/bs5/jszip-3.10.1/dt-1.13.8/af-2.6.0/b-2.4.2/b-colvis-2.4.2/b-html5-2.4.2/b-print-2.4.2/cr-1.7.0/date-1.5.1/fc-4.3.0/fh-3.4.0/kt-2.11.0/r-2.5.0/rg-1.4.1/rr-1.4.1/sc-2.3.0/sb-1.6.0/sp-2.2.0/sl-1.7.0/sr-1.3.0/datatables.min.js' crossorigin='anonymous'></script>
		<script src='https://cdn.jsdelivr.net/combine/npm/pdfmake@latest,npm/pdfmake@latest/build/vfs_fonts.js' crossorigin='anonymous'></script>
		<script src='/assets/js/program.js'></script>
		<script src='https://cdn.jsdelivr.net/npm/jspdf@latest/dist/jspdf.umd.min.js' crossorigin='anonymous'></script>
		<script src='/assets/js/eqsl.js'></script>
		<script src='https://cdn.jsdelivr.net/npm/chart.js@latest/dist/chart.umd.min.js' crossorigin='anonymous'></script>
		<script src='https://cdn.jsdelivr.net/npm/chartjs-chart-geo@latest/build/index.umd.min.js' crossorigin='anonymous'></script>
		<script src='https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation@latest/dist/chartjs-plugin-annotation.min.js' crossorigin='anonymous'></script>
		<script src='https://cdn.jsdelivr.net/npm/chartjs-plugin-deferred@latest/dist/chartjs-plugin-deferred.min.js' crossorigin='anonymous'></script>
		<script src='https://cdn.jsdelivr.net/npm/chartjs-plugin-stacked100@latest/build/index.min.js' crossorigin='anonymous'></script>
		<script src='https://cdn.jsdelivr.net/npm/chartjs-plugin-watermark@latest/chartjs-plugin-watermark.min.js' crossorigin='anonymous'></script>
		<script src='/assets/js/stats.js'></script>
		<script src='/assets/js/bcfy-stat.js'></script>
	</body>

</html>