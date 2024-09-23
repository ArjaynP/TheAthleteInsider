// Data for the chart
const assistData = {
    labels: ['Tyrese Haliburton | IND', 'Trae Young | ATL', 'Luka Doncic | DAL', 'Nikola Jokic | DEN', 'James Harden | LAC'],
    datasets: [{
        label: 'Assists Per Game',
        data: [10.9, 10.8, 9.8, 9.0, 8.5],
        backgroundColor: [
            'rgba(253, 187, 48, 0.2)',
            'rgba(200, 16, 46, 0.2)',
            'rgba(0, 83, 188, 0.2)',
            'rgba(13, 34, 64, 0.2)',
            'rgba(29, 66, 148, 0.2)',
        ],
        borderColor: [
            'rgba(253, 187, 48, 1)',
            'rgba(200, 16, 46, 1)',
            'rgba(0, 83, 188, 1)',
            'rgba(13, 34, 64, 1)',
            'rgba(29, 66, 148, 1)',
        ],
        borderWidth: 1
    }]
};

// Function to create a chart with given data and configuration
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

// Configuration for the chart
const assistChartOptions = {
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
    },
    // Additional accessibility settings could be added here
};

// Create the assist chart
createChart('assistchart', assistData, assistChartOptions);
