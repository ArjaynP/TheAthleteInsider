const rushingdata = {
	labels: ['Christian McCaffrey | SF', 'Derrick Henry | TEN', 'Kyren Williamas | LAR', 'James Cook | BUF', "D'Andre Swift | PHI"],
	datasets: [{
		label: 'Total Rushing Yds',
	  	data: [1459, 1167, 1144, 1122, 1049],
	  	backgroundColor: [
			'rgba(170, 0, 0, 0.2)',
			'rgba(75, 146, 219, 0.2)',
			'rgba(0, 53, 148, 0.2)',
			'rgba(198, 12, 48, 0.2)',
			'rgba(0, 76, 84, 0.2)',
	  	],
		borderColor: [
			'rgba(170, 0, 0, 3)',
			'rgba(75, 146, 219, 3)',
			'rgba(0, 53, 148, 3)',
			'rgba(198, 12, 48, 3)',
			'rgba(0, 76, 84, 3)',
		],
	  	borderWidth: 1
	}]
};

const rushingconfig = {
    type: 'bar',
    data: rushingdata,
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

  
const rushingchart = new Chart(
	document.getElementById('rushingchart'), 
	rushingconfig
);