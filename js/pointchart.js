// Data for the Points Per Game chart
const ppgData = {
    labels: [
        'Luka Doncic | DAL', 
        'Giannis Antetokounmpo | MIL', 
        'Shai Gilgeous-Alexander | OKC', 
        'Jalen Brunson | NYK', 
        'Kevin Durant | PHX'
    ],
    datasets: [{
        label: 'Points Per Game',
        data: [33.9, 30.4, 30.1, 28.7, 27.1],
        backgroundColor: [
            'rgba(0, 83, 188, 0.2)',  // DAL
            'rgba(0, 71, 27, 0.2)',    // MIL
            'rgba(0, 125, 195, 0.2)',  // OKC
            'rgba(245, 132, 38, 0.2)', // NYK
            'rgba(29, 17, 96, 0.2)'    // PHX
        ],
        borderColor: [
            'rgba(0, 83, 188, 1)',
            'rgba(0, 71, 27, 1)',
            'rgba(0, 125, 195, 1)',
            'rgba(245, 132, 38, 1)',
            'rgba(29, 17, 96, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration options for the Points Per Game chart
const ppgChartOptions = {
    type: 'bar',
    data: ppgData,
    options: {
        indexAxis: 'y',  // Horizontal bar chart
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

// Function to create a chart with the given configuration
function createChart(chartId, chartConfig) {
    const chartElement = document.getElementById(chartId);
    if (chartElement) {
        return new Chart(chartElement, chartConfig);
    } else {
        console.error(`Element with id "${chartId}" not found.`);
        return null;
    }
}

// Create the Points Per Game chart
const ppgChart = createChart('ppgchart', ppgChartOptions);

// Display the Chart.js version
function displayChartVersion(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = `Chart.js version: ${Chart.version}`;
    } else {
        console.error(`Element with id "${elementId}" not found.`);
    }
}

// Display Chart.js version in the designated element
displayChartVersion('ppgchart');
