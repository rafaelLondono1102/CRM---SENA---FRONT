import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../../styles/ListarTalentosComponent.module.css"
import EditarOrganizacionesComponent from './EditarOrganizacionesComponent';
import { useRouter } from 'next/router';

const ListarOrganizacionComponent = () => {
    const [organizaciones, setorganizaciones] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchOrganizaciones = async () => {
            try {
                const response = await axios.get('http://localhost:9005/api/v1/organization/');
                setorganizaciones(response.data);
            } catch (error) {
                console.error('Error al obtener las organizaciones:', error);
            }
        };

        fetchOrganizaciones();
    }, []);


    const handleDelete = async (talentId) => {
        try {
            await axios.delete(`http://localhost:9005/api/v1/organization/${talentId}`);
            alert('Organizacion eliminada exitosamente');
            window.location.reload();
        } catch (error) {
            console.error('Error eliminando Organizacion:', error);
            alert('Error eliminando Organizacion');
        }
    };

    const handleEdit = (organizacion) => {
        setEditingEvent(organizacion)
        setIsEditing(true);
    };


    return (
        <div>
            {organizaciones.length > 0 ? (
                organizaciones.map(organizacion => (
                    <div key={organizacion._id} className={styles.card}>
                        <div className={styles.card_header}>organizacion: {organizacion.name || "----------------"}</div>
                        <div className={styles.card_content}>Sector Económico: {organizacion.economicSector || "----------------"}</div>
                        <div className={styles.card_content}>Tipo de empresa: {organizacion.type || "----------------"}</div>
                        <div className={styles.card_content}>Tamaño de empresa: {organizacion.size || "----------------"}</div>
                        <div className={styles.card_content}>Email: {organizacion.email || "----------------"}</div>
                        <div className={styles.card_content}>Teléfono: {organizacion.phone || "----------------"}</div>
                        <div className={styles.card_content}>Estado: {organizacion.state || "----------------"}</div>
                        <div className={styles.card_content}>Ciudad: {organizacion.city || "----------------"}</div>
                        <div className={styles.card_content}>Idea de Inscripción: {organizacion.inscriptionIdea || "----------------"}</div>
                        <div className={styles.card_content}>Línea Tecnológica: {organizacion.technologyLine || "----------------"}</div>
                        <div className={styles.card_content}>Sublínea Tecnológica: {organizacion.technologySubLine || "----------------"}</div>
                        <div className={styles.card_content}>Sitio Web: {organizacion.webSite || "----------------"}</div>
                        <div className={styles.card_content}>Red social oficial: {organizacion.oficialSocialNetwork || "----------------"}</div>
                        <div className={styles.card_content}>Usuario de Red Social: {organizacion.socialNetworkName || "----------------"}</div>
                        <div className={styles.card_content}>Linkedin: {organizacion.linkedin || "----------------"}</div>
                        <div className={styles.card_content}>Observaciones: {organizacion.observations || "----------------"}</div>
                        <button
                            onClick={() => handleDelete(organizacion._id)}
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
                            onClick={() => handleEdit(organizacion)}
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
                <p>No se encontraron organizaciones.</p>
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
                    <EditarOrganizacionesComponent
                        organizacionEdited={editingEvent}
                        setIsEditing={setIsEditing}
                    />
                </div>
            )}
        </div>
    );
};

export default ListarOrganizacionComponent;
