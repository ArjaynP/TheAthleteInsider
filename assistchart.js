const assistdata = {
	labels: ['Tyrese Haliburton | IND', 'Trae Young | ATL', 'Luka Doncic | DAL', 'Nikola Jokic | DEN', 'James Harden | LAC'],
	datasets: [{
	  label: 'Assists Per Game',
	  data: [10.9, 10.8, 9.8, 9.0, 8.5],
	  backgroundColor: [
		'rgba(253, 187, 48, 0.2)',
		'rgba(200, 16, 46, 0.2)',
		'rgba(0, 83, 188, 0.2)',
		'rgba(13, 34, 64, 0.2)',
		'rgba(29, 66, 148, 0.2)',
	  ],
	  borderColor: [
		'rgba(253, 187, 48, 3)',
		'rgba(200, 16, 46, 3)',
		'rgba(0, 83, 188, 3)',
		'rgba(13, 34, 64, 3)',
		'rgba(29 ,66, 148, 3)',
	  ],
	  borderWidth: 1
	}]
  };

  // config 
  const assistconfig = {
	type: 'bar',
	data: assistdata,
	options: {
		indexAxis: 'y',
	  scales: {
		y: {
		  beginAtZero: true
		}
	  }
	}
  };

  // render init block
  const assistchart = new Chart(
	document.getElementById('assistchart'), 
	assistconfig
  );