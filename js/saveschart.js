const savesdata = {
	labels: ["Gregor Kobel | Dortmund", 'Jan Oblak | Atlético De Madrid', "Andriy Lunin | Real Madrid", 'Gianluigi Donnarumma | PSG', 'Alex Meret | Napoli', "Anthony Racioppi | Young Boys"],
	datasets: [{
	  label: 'Total Saves',
	  data: [46,40,38,37,32,31],
	  backgroundColor: [
        'rgba(253, 225, 0, 0.2)',
		'rgba(39, 46, 97, 0.2)',
        'rgba(0, 82, 159, 0.2)',
		'rgba(1, 66, 106, 0.2)',
        'rgba(18, 160, 215, 0.2)',
		'rgba(249, 204, 17, 0.2)',
	  ],
	  borderColor: [
        'rgba(253, 225, 0, 3)',
        'rgba(39, 46, 97, 3)',
		'rgba(0, 82, 159, 3)',
		'rgba(1, 66, 106, 3)',
        'rgba(18, 160, 215, 3)',
		'rgba(249, 204, 17, 3)',
	  ],
	  borderWidth: 1
	}]
};

const savesconfig = {
    type: 'bar',
    data: savesdata,
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


const saveschart = new Chart(
	document.getElementById('saveschart'), 
	savesconfig
);