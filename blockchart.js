const blockdata = {
	labels: ['Victor Wembanyama | SAS', 'Walker Kessler | UTAH' , 'Brook Lopez | MIL', 'Anthony Davis | LAL', 'Chet Holmgren | OKC'],
	datasets: [{
	  label: 'Blocks Per Game',
	  data: [3.6, 2.4, 2.4, 2.3, 2.3],
	  backgroundColor: [
		'rgba(196, 206, 211, 0.2)',
		'rgba(0, 43, 92, 0.2)',
		'rgba(0, 71, 27, 0.2)',
		'rgba(253, 185, 39, 0.2)',
		'rgba(0, 125, 195, 0.2)',
	  ],
	  borderColor: [
		'rgba(196, 206, 211, 3)',
		'rgba(0, 43, 92, 3)',
		'rgba(0, 71, 27, 3)',
		'rgba(253, 185, 39, 3)',
		'rgba(0, 125, 195, 3)',
	  ],
	  borderWidth: 1
	}]
  };

  // config 
  const blockconfig = {
	type: 'bar',
	data: blockdata,
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
  const blockchart = new Chart(
	document.getElementById('blockchart'), 
	blockconfig
  );