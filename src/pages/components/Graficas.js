import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GraficaComponent from './GraficaComponent';
import styles from "../../styles/GraficaComponent.module.css"

const Graficas = () => {
    const [articulationAreaData, setArticulationAreaData] = useState([]);
    const [abandonReasonData, setAbandonReasonData] = useState([]);
    const [deliverData, setDeliverData] = useState([]);
    const [growPotentialData, setGrowPotentialData] = useState([]);

    useEffect(() => {
        // Función para obtener los datos de cada endpoint
        const fetchData = async () => {
            try {
                const urls = [
                    'http://localhost:9005/api/v1/articulationArea',
                    'http://localhost:9005/api/v1/abandonReason',
                    'http://localhost:9005/api/v1/deliver',
                    'http://localhost:9005/api/v1/growPotential'
                ];

                // Realiza todas las solicitudes simultáneamente
                const responses = await axios.all(urls.map(url => axios.get(url)));

                // Actualiza los estados con los datos recibidos
                console.log(responses[0].data)
                console.log(responses[1].data)
                console.log(responses[2].data)
                console.log(responses[3].data)
                setArticulationAreaData(responses[0].data);
                setAbandonReasonData(responses[1].data);
                setDeliverData(responses[2].data);
                setGrowPotentialData(responses[3].data);
            } catch (error) {
                console.error('Error al realizar las solicitudes:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <div>
            <h1>Área de articulación</h1>
            <div className={styles.chart_container}>
                <GraficaComponent data={articulationAreaData} />
            </div>
            <h1>¿Por qué abandonaría su proyecto con Tecnoparque?</h1>
            <div className={styles.chart_container}>
                <GraficaComponent data={abandonReasonData} />
            </div>
            <h1>Aporte de Tecnoparque</h1>
            <div className={styles.chart_container}>
                <GraficaComponent data={deliverData} />
            </div>
            <h1>Potencial de crecimiento</h1>
            <div className={styles.chart_container}>
                <GraficaComponent data={growPotentialData} />
            </div>
        </div>
    );
}
export default Graficas

