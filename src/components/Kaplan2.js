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
import { useQuery } from 'react-query';
import { fetchKaplanData, fetchKaplanData2 } from '../api';

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
for (let index = 0; index < 100; index += 5) {
    labels.push(index);
}

export default function Kaplan2({ strokeColor, backgroundColor }) {
    const fetchResult = useQuery(['kaplan2'], fetchKaplanData2);
    const [graphData, setGraphData] = useState({});

    useEffect(() => {
        if (fetchResult.data) {
            setGraphData(fetchResult.data.data);
        } else {
            return;
        }
    }, [fetchResult.isLoading]);

    labels = labels.map((data) => String(data));

    useEffect(() => {
        setData({
            labels,
            datasets: [
                {
                    label: `At least on positive axillary detected`,
                    data: graphData.km1,
                    borderColor: '#3498db',
                    backgroundColor: '#3498db',
                    yAxisID: 'y',
                },
                {
                    label: 'No positive axillary nodes detected',
                    data: graphData.km2,
                    borderColor: '#e67e22',
                    backgroundColor: '#e67e22',
                    yAxisID: 'y',
                },
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
                text: 'Plot',
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
    return data ? (
        <Line options={options} data={data} style={{ marginBottom: '30px' }} />
    ) : null;
}
