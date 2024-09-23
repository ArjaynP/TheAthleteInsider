const interceptiondata = {
	labels: ['DaRon Bland | DAL', 'Geno Stone | BAL', 'Jessie Bates III | ATL', 'Rasul Douglas | BUF', "Charvarius Ward | SF"],
	datasets: [{
		label: 'Total Tackles',
	  	data: [9,7,6,5,5],
	  	backgroundColor: [
			'rgba(0, 34, 68, 0.2)',
			'rgba(26, 25, 95, 0.2)',
			'rgba(167, 25, 48, 0.2)',
			'rgba(198, 12, 48, 0.2)',
			'rgba(170, 0, 0, 0.2)',
	  	],
		borderColor: [
			'rgba(0, 34, 68, 3)',
			'rgba(26, 25, 95, 3)',
			'rgba(167, 25, 48, 3)',
			'rgba(198, 12, 48, 3)',
			'rgba(170, 0, 0, 3)',
		],
	  	borderWidth: 1
	}]
};

const interceptionconfig = {
    type: 'bar',
    data: interceptiondata,
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


const interceptionchart = new Chart(
	document.getElementById('interceptionchart'), 
	interceptionconfig
);