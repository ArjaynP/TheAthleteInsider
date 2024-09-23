const passdata = {
	labels: ['Jude Bellingham | Real Madrid', 'Vinícius Jùnior | Real Madrid', "Marcel Sabitzer | Dortmund", 'Galeno | FC Porto', 'Raphinia | Barcelona' , 'Bukayo Saka | Arsenal'],
	datasets: [{
	  label: 'Total Passes',
	  data: [5,5,5,4,4,4],
	  backgroundColor: [
        'rgba(0, 82, 159, 0.2)',
        'rgba(0, 82, 159, 0.2)',
		'rgba(253, 225, 0, 0.2)',
		'rgba(0, 66, 140, 0.2)',
        'rgba(0, 77, 152, 0.2)',
		'rgba(239, 1, 7, 0.2)',
	  ],
	  borderColor: [
        'rgba(0, 82, 159, 3)',
        'rgba(0, 82, 159, 3)',
		'rgba(253, 225, 0, 3)',
		'rgba(0, 66, 140, 3)',
        'rgba(0, 77, 152, 3)',
		'rgba(239, 1, 7, 3)',
	  ],
	  borderWidth: 1
	}]
};

const passconfig = {
    type: 'bar',
    data: passdata,
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


const passchart = new Chart(
	document.getElementById('passchart'), 
	passconfig
);