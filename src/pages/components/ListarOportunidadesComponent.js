import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../../styles/ListarTalentosComponent.module.css"
import EditarOportunidadesComponent from './EditarOportunidadesComponent';
import { useRouter } from 'next/router';

const ListarTalentosComponent = () => {
    const [oportunidades, setTalentos] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchTalentos = async () => {
            try {
                const response = await axios.get('http://localhost:9005/api/v1/oportunity/');
                setTalentos(response.data);
            } catch (error) {
                console.error('Error al obtener los oportunidades:', error);
            }
        };

        fetchTalentos();
    }, []);


    const handleDelete = async (talentId) => {
        try {
            await axios.delete(`http://localhost:9005/api/v1/oportunity/${talentId}`);
            alert('Talento eliminado exitosamente');
            window.location.reload();
        } catch (error) {
            console.error('Error eliminando evento:', error);
            alert('Error eliminando evento');
        }
    };

    const handleEdit = (oportunidad) => {
        setEditingEvent(oportunidad)
        setIsEditing(true);
    };


    return (
        <div>
            {oportunidades.length > 0 ? (
                oportunidades.map(oportunidad => (
                    <div key={oportunidad._id} className={styles.card}>
                        <div className={styles.card_header}>Prioridad: {oportunidad.priority || "----------------"}</div>
                        <div className={styles.card_content}>Nombre del proyecto: {oportunidad.projectName || "----------------"}</div>
                        <div className={styles.card_content}>Potencial de crecimiento: {oportunidad.grwothPotential || "----------------"}</div>
                        <div className={styles.card_content}>Area de articulación: {oportunidad.articulationArea || "----------------"}</div>
                        <div className={styles.card_content}>Interes de articulación: {oportunidad.articulationInteres || "----------------"}</div>
                        <div className={styles.card_content}>TRL inicial: {oportunidad.initialTRL || "----------------"}</div>
                        <div className={styles.card_content}>TRL alcanzado: {oportunidad.achivedTRL || "----------------"}</div>
                        <div className={styles.card_content}>Aporte de tecnoparque: {oportunidad.deliver || "----------------"}</div>
                        <div className={styles.card_content}>¿Por qué abandonaría su proyecto con Tecnoparque?: {oportunidad.abandonReason || "----------------"}</div>
                        <div className={styles.card_content}>Que uso le daría a su prototipo: {oportunidad.prototipeUse || "----------------"}</div>
                        <div className={styles.card_content}>Observaciones: {oportunidad.observations || "----------------"}</div>
                        <button
                            onClick={() => handleDelete(oportunidad._id)}
                            style={{
                                backgroundColor: 'red',
                                color: 'white',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Eliminar
                        </button>
                        <button
                            onClick={() => handleEdit(oportunidad)}
                            style={{
                                backgroundColor: 'blue',
                                color: 'white',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginRight: '10px',
                            }}
                        >
                            Editar
                        </button>
                    </div>
                ))
            ) : (
                <p>No se encontraron oportunidades.</p>
            )}
            {isEditing && (
                <div
                    style={{
                        position: "fixed", /* Se queda fijo en la pantalla */
                        zIndex: 1, /* Se sitúa sobre el resto de la página */
                        left: 0,
                        top: 0,
                        width: "100%", /* Anchura completa */
                        height: "100%", /* Altura completa */
                        overflow: "auto", /* Habilita el desplazamiento si es necesario */
                        backgroundColor: "rgba(0, 0, 0, 0.4)" /* Color de fondo semi-transparente */
                    }}
                >
                    <EditarOportunidadesComponent
                        oportunidadEdited={editingEvent}
                        setIsEditing={setIsEditing}
                    />
                </div>
            )}
        </div>
    );
};

export default ListarTalentosComponent;
