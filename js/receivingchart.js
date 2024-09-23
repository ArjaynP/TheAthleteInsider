const receivingdata = {
	labels: ['CeeDee Lamb | DAL', 'Tyreek Hill | MIA', 'Amon-Ra St. Brown | DET', 'Puca Nacua | LAR', "A.J Brown | PHI"],
	datasets: [{
		label: 'Total Receiving Yds',
	  	data: [1799, 1749, 1515, 1486, 1456],
	  	backgroundColor: [
			'rgba(0, 34, 68, 0.2)',
			'rgba(0, 142, 151, 0.2)',
			'rgba(0, 118, 182, 0.2)',
			'rgba(0, 53, 148, 0.2)',
			'rgba(0, 76, 84, 0.2)',
	  	],
		borderColor: [
			'rgba(0, 34, 68, 3)',
			'rgba(0, 142, 151, 3)',
			'rgba(0, 118, 182, 3)',
			'rgba(0, 53, 148, 3)',
			'rgba(0, 76, 84, 3)',
		],
	  	borderWidth: 1
	}]
};

const receivingconfig = {
    type: 'bar',
    data: receivingdata,
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


const receivingchart = new Chart(
	document.getElementById('receivingchart'), 
	receivingconfig
);