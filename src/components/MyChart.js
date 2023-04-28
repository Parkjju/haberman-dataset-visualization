import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        setData({
            labels,
            datasets: [
                ...Object.values(graphData).map((data, index) => {
                    return {
                        label: `Dataset ${index}`,
                        data,
                        borderColor: `#${Math.floor(
                            Math.random() * 16777215
                        ).toString(16)}`,
                        backgroundColor: `#${Math.floor(
                            Math.random() * 16777215
                        ).toString(16)}`,
                        yAxisID: 'y',
                    };
                }),
            ],
        });
    }, [graphData]);

    const [data, setData] = useState({
        labels,
        datasets: [
            ...Object.values(graphData).map((data, index) => {
                return {
                    label: `Dataset ${index}`,
                    data: data,
                    borderColor: `#${Math.floor(
                        Math.random() * 16777215
                    ).toString(16)}`,
                    backgroundColor: `#${Math.floor(
                        Math.random() * 16777215
                    ).toString(16)}`,
                    yAxisID: 'y',
                };
            }),
        ],
    });

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
