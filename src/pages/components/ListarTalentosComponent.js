import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../../styles/ListarTalentosComponent.module.css"
import EditarTalentosComponent from './EditarTalentosComponent';
import { useRouter } from 'next/router';

const ListarTalentosComponent = () => {
    const [talentos, setTalentos] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchTalentos = async () => {
            try {
                const response = await axios.get('http://localhost:9005/api/v1/talent/');
                setTalentos(response.data);
            } catch (error) {
                console.error('Error al obtener los talentos:', error);
            }
        };

        fetchTalentos();
    }, []);


    const handleDelete = async (talentId) => {
        try {
            await axios.delete(`http://localhost:9005/api/v1/talent/${talentId}`);
            alert('Talento eliminado exitosamente');
            window.location.reload();
        } catch (error) {
            console.error('Error eliminando evento:', error);
            alert('Error eliminando evento');
        }
    };

    const handleEdit = (talento) => {
        setEditingEvent(talento)
        setIsEditing(true);
    };


    return (
        <div>
            {talentos.length > 0 ? (
                talentos.map(talento => (
                    <div key={talento._id} className={styles.card}>
                        <div className={styles.card_header}>Talento: {talento.name || "----------------"}</div>
                        <div className={styles.card_content}>Género: {talento.gender || "----------------"}</div>
                        <div className={styles.card_content}>Estado Económico: {talento.economicStatus || "----------------"}</div>
                        <div className={styles.card_content}>Edad: {talento.age || "----------------"}</div>
                        <div className={styles.card_content}>Email: {talento.email || "----------------"}</div>
                        <div className={styles.card_content}>Teléfono: {talento.phone || "----------------"}</div>
                        <div className={styles.card_content}>Estado: {talento.state || "----------------"}</div>
                        <div className={styles.card_content}>Ciudad: {talento.city || "----------------"}</div>
                        <div className={styles.card_content}>Escolaridad: {talento.scholarship || "----------------"}</div>
                        <div className={styles.card_content}>Profesión: {talento.profession || "----------------"}</div>
                        <div className={styles.card_content}>Idea de Inscripción: {talento.inscriptionIdea || "----------------"}</div>
                        <div className={styles.card_content}>Línea Tecnológica: {talento.technologyLine || "----------------"}</div>
                        <div className={styles.card_content}>Sublínea Tecnológica: {talento.technologySubLine || "----------------"}</div>
                        <div className={styles.card_content}>Sitio Web: {talento.webSite || "----------------"}</div>
                        <div className={styles.card_content}>Red Social: {talento.socialNetworkName || "----------------"}</div>
                        <div className={styles.card_content}>Usuario de Red Social: {talento.socialNetworkUserName || "----------------"}</div>
                        <div className={styles.card_content}>Observaciones: {talento.observations || "----------------"}</div>
                        <button
                            onClick={() => handleDelete(talento._id)}
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
                            onClick={() => handleEdit(talento)}
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
                <p>No se encontraron talentos.</p>
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
                    <EditarTalentosComponent
                        talentoEdited={editingEvent}
                        setIsEditing={setIsEditing}
                    />
                </div>
            )}
        </div>
    );
};

export default ListarTalentosComponent;
