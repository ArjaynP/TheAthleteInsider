const passaccuracydata = {
	labels: ['Kobbie Mainoo | Manchester United', 'Valdemar Lund | Copenhagen', "Oleksiy Kashchuk | Shaktar Donetsk", 'Leo Sauer | Feyenoord', 'Danny Namaso | FC Porto', 'Bouna Sarr | Bayern Munich'],
	datasets: [{
	  label: 'Pass Accuracy (%)',
	  data: [100,100,100,100,100,100],
	  backgroundColor: [
        'rgba(218, 41, 28, 0.2)',
        'rgba(55, 81, 151, 0.2)',
		'rgba(240, 97, 44, 0.2)',
		'rgba(216, 35, 42, 0.2)',
        'rgba(0, 66, 140, 0.2)',
		'rgba(220, 5, 45, 0.2)',
	  ],
	  borderColor: [
        'rgba(218, 41, 28, 3)',
        'rgba(55, 81, 151, 3)',
		'rgba(240, 97, 44, 3)',
		'rgba(216, 35, 42, 3)',
        'rgba(0, 66, 140, 3)',
		'rgba(220, 5, 45, 3)',
	  ],
	  borderWidth: 1
	}]
};

const passaccuracyconfig = {
    type: 'bar',
    data: passaccuracydata,
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'whitesmoke'
                }
            },
            x: {
                ticks: {
                    color: 'whitesmoke'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'whitesmoke' 
                }
            }
        }
    }
};


const passaccuracychart = new Chart(
	document.getElementById('passaccuracychart'), 
	passaccuracyconfig
);