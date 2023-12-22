document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for metrics
    const metricsData = {
        totalRevenue: 1000000,
        totalJobs: 500,
        ticketsCreated: 200,
        outstandingAmount: 100000,
        membershipsSold: 50,
        jobsCompleted: 300,
    };

    // Update metric values
    Object.keys(metricsData).forEach(metric => {
        document.getElementById(metric).textContent = `${metric.charAt(0).toUpperCase()}${metric.slice(1)}: $${metricsData[metric]}`;
    });

    // Dummy data for charts
    const revenueByLocationData = {
        labels: ['Location 1', 'Location 2', 'Location 3'],
        datasets: [{
            label: 'Revenue by Location',
            data: [300000, 400000, 300000], // Dummy values
            backgroundColor: ['#ffcc00', '#ff6600', '#ff9999'],
        }],
    };

    const revenueByJobTypeData = {
        labels: ['Job Type A', 'Job Type B', 'Job Type C'],
        datasets: [{
            label: 'Revenue by Job Type',
            data: [150000, 250000, 200000], // Dummy values
            backgroundColor: ['#3399ff', '#ff3366', '#66ff66'],
        }],
    };

    // Create charts
    createBarChart('revenueByLocationChart', revenueByLocationData);
    createBarChart('revenueByJobTypeChart', revenueByJobTypeData);
});

function createBarChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}
