// Data for the rebounds per game chart
const reboundsData = {
    labels: ['Domantas Sabonis | SAC', 'Rudy Gobert | MIN', 'Anthony Davis | LAL', 'Nikola Jokic | DEN', 'Jalen Duren | DET'],
    datasets: [{
        label: 'Rebounds Per Game',
        data: [13.7, 12.9, 12.6, 12.4, 11.6],
        backgroundColor: [
            'rgba(91, 43, 130, 0.2)', // SAC
            'rgba(35, 97, 146, 0.2)', // MIN
            'rgba(253, 185, 39, 0.2)', // LAL
            'rgba(13, 34, 64, 0.2)', // DEN
            'rgba(29, 66, 138, 0.2)', // DET
        ],
        borderColor: [
            'rgba(91, 43, 130, 1)',
            'rgba(35, 97, 146, 1)',
            'rgba(253, 185, 39, 1)',
            'rgba(13, 34, 64, 1)',
            'rgba(29, 66, 138, 1)',
        ],
        borderWidth: 1
    }]
};

// Function to create a chart with the specified data and configuration
function createChart(chartId, chartData, chartOptions) {
    const chartElement = document.getElementById(chartId);
    if (chartElement) {
        return new Chart(chartElement, {
            type: 'bar',
            data: chartData,
            options: chartOptions
        });
    } else {
        console.error(`Element with id ${chartId} not found.`);
        return null;
    }
}

// Configuration options for the rebounds chart
const reboundChartOptions = {
    indexAxis: 'y', // Horizontal bar chart
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
};

// Create the rebounds chart
createChart('reboundchart', reboundsData, reboundChartOptions);
