const goaldata = {
	labels: ["Kylian Mbappé | PSG", 'Harry Kane | Bayern Munich', 'Vinícius Jùnior | Real Madrid', 'Eerling Haaland | Man City' , 'Antoine Griezmann | Atlético de Madrid', 'Julián Álvarez | Man City'],
	datasets: [{
	  label: 'Total Goals Scored',
	  data: [8,8,6,6,6,5],
	  backgroundColor: [
		'rgba(1, 66, 106, 0.2)',
		'rgba(220, 5, 45, 0.2)',
		'rgba(0, 82, 159, 0.2)',
        'rgba(0, 66, 140, 0.2)',
		'rgba(39, 46, 97, 0.2)',
		'rgba(108, 171, 221, 0.2)',
	  ],
	  borderColor: [
		'rgba(1, 66, 106, 3)',
		'rgba(220, 5, 45, 3)',
		'rgba(0, 82, 159, 3)',
        'rgba(0, 66, 140, 3)',
		'rgba(39, 46, 97, 3)',
		'rgba(108, 171, 221, 3)',
	  ],
	  borderWidth: 1
	}]
};

const goalconfig = {
    type: 'bar',
    data: goaldata,
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


const goalchart = new Chart(
	document.getElementById('goalchart'), 
	goalconfig
);