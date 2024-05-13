const reboundsdata = {
	labels: ['Domontas Sabonis | SAC', 'Rudy Gobert | MIN', 'Anthony Davis | LAL', 'Nikola Jokic | DEN', 'Jalen Duren | DET'],
	datasets: [{
	  label: 'Rebounds Per Game',
	  data: [13.7, 12.9, 12.6, 12.4, 11.6],
	  backgroundColor: [
		'rgba(91, 43, 130, 0.2)',
		'rgba(35, 97, 146, 0.2)',
		'rgba(253, 185, 39, 0.2)',
		'rgba(13, 34, 64, 0.2)',
		'rgba(29, 66, 138, 0.2)',
	  ],
	  borderColor: [
		'rgba(91, 43, 130, 3)',
		'rgba(35, 97, 146, 3)',
		'rgba(253, 185, 39, 3)',
		'rgba(13, 34, 64, 3)',
		'rgba(29, 66, 138, 3)',
	  ],
	  borderWidth: 1
	}]
  };

  // config 
  const reboundconfig = {
	type: 'bar',
	data: reboundsdata,
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
  const reboundchart = new Chart(
	document.getElementById('reboundchart'), 
	reboundconfig
  );