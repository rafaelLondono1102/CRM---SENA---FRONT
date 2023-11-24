import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraficaComponent = ({ data }) => {
    // Preparar los datos para el gráfico
    const chartData = {
        labels: data.map(item => item._id || 'Sin Identificar'),
        datasets: [
            {
                label: 'Conteo',
                data: data.map(item => item.count),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };

    return <Bar data={chartData} />;
};

export default GraficaComponent;
