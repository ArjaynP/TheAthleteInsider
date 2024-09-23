// Data for the blocks per game chart
const blocksData = {
    labels: [
        'Victor Wembanyama | SAS', 
        'Walker Kessler | UTAH', 
        'Brook Lopez | MIL', 
        'Anthony Davis | LAL', 
        'Chet Holmgren | OKC'
    ],
    datasets: [{
        label: 'Blocks Per Game',
        data: [3.6, 2.4, 2.4, 2.3, 2.3],
        backgroundColor: [
            'rgba(196, 206, 211, 0.2)',  // SAS
            'rgba(0, 43, 92, 0.2)',      // UTAH
            'rgba(0, 71, 27, 0.2)',      // MIL
            'rgba(253, 185, 39, 0.2)',   // LAL
            'rgba(0, 125, 195, 0.2)'     // OKC
        ],
        borderColor: [
            'rgba(196, 206, 211, 1)',
            'rgba(0, 43, 92, 1)',
            'rgba(0, 71, 27, 1)',
            'rgba(253, 185, 39, 1)',
            'rgba(0, 125, 195, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration options for the blocks chart
const blocksChartOptions = {
    type: 'bar',
    data: blocksData,
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

// Function to create a chart with specified data and options
function createChart(chartId, chartOptions) {
    const chartElement = document.getElementById(chartId);
    if (chartElement) {
        return new Chart(chartElement, chartOptions);
    } else {
        console.error(`Element with id "${chartId}" not found.`);
        return null;
    }
}

// Create the blocks chart
createChart('blockchart', blocksChartOptions);
