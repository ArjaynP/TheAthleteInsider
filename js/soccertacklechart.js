const soccertackledata = {
	labels: ["Mats Hummels | Dortmund", 'Eduardo Camavinga | Real Madrid', "Nico Schlotterbeck | Dortmund", 'Jude Bellingham | Real Madrid', 'Federico Valverde | Real Madrid', "Emre Can | Dortmund"],
	datasets: [{
	  label: 'Total Tackles',
	  data: [57,39,36,27,25,25],
	  backgroundColor: [
        'rgba(253, 225, 0, 0.2)',
        'rgba(0, 82, 159, 0.2)',
		'rgba(253, 225, 0, 0.2)',
		'rgba(0, 82, 159, 0.2)',
        'rgba(0, 82, 159, 0.2)',
		'rgba(253, 225, 0, 0.2)',
	  ],
	  borderColor: [
        'rgba(253, 225, 0, 3)',
        'rgba(0, 82, 159, 3)',
		'rgba(253, 225, 0, 3)',
		'rgba(0, 82, 159, 3)',
        'rgba(0, 82, 159, 3)',
		'rgba(253, 225, 0, 3)',
	  ],
	  borderWidth: 1
	}]
};

const soccertackleconfig = {
    type: 'bar',
    data: soccertackledata,
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


const soccertacklechart = new Chart(
	document.getElementById('soccertacklechart'), 
	soccertackleconfig
);