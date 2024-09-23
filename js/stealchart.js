// Data for the steals per game chart
const stealsData = {
    labels: ["De'Aaron Fox | SAC", 'Shai Gilgeous-Alexander | OKC', 'Donovan Mitchell | CLE', 'Matisse Thybulle | POR', 'Alex Caruso | CHI'],
    datasets: [{
        label: 'Steals Per Game',
        data: [2.0, 2.0, 1.8, 1.7, 1.7],
        backgroundColor: [
            'rgba(91, 43, 130, 0.2)',  // SAC
            'rgba(0, 125, 195, 0.2)',  // OKC
            'rgba(134, 0, 56, 0.2)',   // CLE
            'rgba(224, 58, 62, 0.2)',  // POR
            'rgba(206, 17, 65, 0.2)'   // CHI
        ],
        borderColor: [
            'rgba(91, 43, 130, 1)',
            'rgba(0, 125, 195, 1)',
            'rgba(134, 0, 56, 1)',
            'rgba(224, 58, 62, 1)',
            'rgba(206, 17, 65, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration options for the steals chart
const stealsChartOptions = {
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
};

// Function to create a chart with specified data and options
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

// Create the steals chart
createChart('stealchart', stealsData, stealsChartOptions);
