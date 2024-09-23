const tackledata = {
	labels: ['Bobby Wagner | SEA', 'Zaire Franklin | IND', 'Alex Singleton | DEN', 'Foye Oluokun | JAX', "Azeez Al-Shaair | TEN"],
	datasets: [{
		label: 'Total Tackles',
	  	data: [183, 179, 177, 173, 163],
	  	backgroundColor: [
			'rgba(105, 190, 40, 0.2)',
			'rgba(0, 44, 95, 0.2)',
			'rgba(251, 79, 20, 0.2)',
			'rgba(0, 103, 120, 0.2)',
			'rgba(75, 146, 219, 0.2)',
	  	],
		borderColor: [
			'rgba(105, 190, 40, 3)',
			'rgba(0, 44, 95, 3)',
			'rgba(251, 79, 20, 3)',
			'rgba(0, 103, 120, 3)',
			'rgba(75, 146, 219, 3)',
		],
	  	borderWidth: 1
	}]
};

const tackleconfig = {
    type: 'bar',
    data: tackledata,
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


const tacklechart = new Chart(
	document.getElementById('tacklechart'), 
	tackleconfig
);