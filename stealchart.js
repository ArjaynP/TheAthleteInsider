const stealdata = {
	labels: ["De'Aaron Fox | SAC", 'Shai Gilgeous-Alexander | OKC', 'Donovan Mitchell | CLE', 'Matisse Thybulle | POR', 'Alex Caruso | CHI'],
	datasets: [{
	  label: 'Steals Per Game',
	  data: [2.0, 2.0, 1.8, 1.7, 1.7],
	  backgroundColor: [
		'rgba(91, 43, 130, 0.2)',
		'rgba(0, 125, 195, 0.2)',
		'rgba(134, 0, 56, 0.2)',
		'rgba(224, 58, 62, 0.2)',
		'rgba(206, 17, 65, 0.2)',
	  ],
	  borderColor: [
		'rgba(91, 43, 130, 3)',
		'rgba(0, 125, 195, 3)',
		'rgba(134, 0, 56, 3)',
		'rgba(224, 58, 62, 3)',
		'rgba(206, 17, 65, 3)',
	  ],
	  borderWidth: 1
	}]
  };

  // config 
  const stealconfig = {
	type: 'bar',
	data: stealdata,
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
  const stealchart = new Chart(
	document.getElementById('stealchart'), 
	stealconfig
  );