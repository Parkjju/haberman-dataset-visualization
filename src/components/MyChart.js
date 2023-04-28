import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

let labels = [];
for (let index = 30; index < 80; index += 1) {
    labels.push(index);
}

export default function MyChart() {
    const graphData = useSelector((state) => state.graph);

    labels = labels.map((data) => String(data));
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: graphData[0],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Dataset 2',
                data: graphData[1],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y1',
            },
            {
                label: 'Dataset 3',
                data: graphData[2],
                borderColor: '#e67e22',
                backgroundColor: '#f1c40f',
                yAxisID: 'y1',
            },
        ],
    };

    const options = {
        elements: {
            point: {
                radius: 0,
            },
        },

        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis',
            },
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };
    return <Line options={options} data={data} />;
}
