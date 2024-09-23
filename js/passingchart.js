const passingdata = {
	labels: ['Tua Tagovailoa | MIA', 'Jared Goff | DET', 'Dak Prescott | DAL', 'Josh Allen | BUF', 'Brock Purdy | SF'],
	datasets: [{
		label: 'Total Passing Yds',
	  	data: [4624, 4575, 4516, 4306, 4280],
	  	backgroundColor: [
			'rgba(0, 142, 151, 0.2)',
			'rgba(0, 118, 182, 0.2)',
			'rgba(0, 34, 68, 0.2)',
			'rgba(198, 12, 48, 0.2)',
			'rgba(170, 0, 0, 0.2)',
	  	],
		borderColor: [
			'rgba(0, 142, 151, 3)',
			'rgba(0, 118, 182, 3)',
			'rgba(0, 34, 68, 3)',
			'rgba(198, 12, 48, 3)',
			'rgba(170, 0, 0, 3)',
		],
	  	borderWidth: 1
	}]
};

const passingconfig = {
    type: 'bar',
    data: passingdata,
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


const passingchart = new Chart(
	document.getElementById('passingchart'), 
	passingconfig
);