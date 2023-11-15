import React, { useState } from 'react';
import styles from "../../styles/CrearTalentosComponent.module.css"
import axios from 'axios';
import { useRouter } from 'next/router';

const CrearOrganizacionComponent = ({ organizacionEdited, setIsEditing }) => {
    const router = useRouter();
    const [organizacion, setOrganizacion] = useState({
        _id : organizacionEdited._id,
        name: organizacionEdited.name,
        economicSector: organizacionEdited.economicSector,
        type: organizacionEdited.type,
        size: organizacionEdited.size,
        email: organizacionEdited.email,
        phone: organizacionEdited.phone,
        state: organizacionEdited.state,
        city: organizacionEdited.city,
        inscriptionIdea: organizacionEdited.inscriptionIdea,
        technologyLine: organizacionEdited.technologyLine,
        technologySubLine: organizacionEdited.technologySubLine,
        webSite: organizacionEdited.webSite,
        socialNetworkName: organizacionEdited.socialNetworkName,
        socialNetworkUserName: organizacionEdited.socialNetworkUserName,
        observations: organizacionEdited.observations
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrganizacion({ ...organizacion, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:9005/api/v1/organization/${organizacion._id}`, organizacion);
            alert("Se ha editado satisfactoriamente una Organizacion");
            window.location.reload();
        } catch (error) {
            alert('Hubo un error al enviar el formulario:', error);
        }
    };

    const economicSectorEnum = ["Primario", "Secundario", "Terciario"]
    const typeEnum = ["Mixta", "Privada", "Pública"]
    const sizeEnum = ["Micro", "Pequeña", "Mediana", "Grande"]
    const mainOptions = ["Biotecnología y Nanotecnología", "Ingenieria y diseño", "Electrónica y telecomunicaciones", "Tecnologías virtuales"]
    const subOptions = {
        'Biotecnología y Nanotecnología': ["Biotecnología industrial", "Microbiología agrícola y pecuaria", "Biotecnología vegetal", "Medio ambiente",
            "Nuevos materiales", "Energías verde y biocombustibles", "Agroindustria alimentaria", "Agroindustria no alimentaria"],
        'Ingenieria y diseño': ["Productos y procesos", "Diseño de conceptos y detalles", "Análisis y simulación", "Ingeniería inversa", "Mecanizado",
            "Diseño estrátegico", "Biomecánica", "Materiales", "Tecnificación de procesos agrícolas", "Aplicación de energías renovables",
            "Sistemas de aprovechamiento de recursos hídricos"],
        'Electrónica y telecomunicaciones': ["automatización e instrumentación", "Sistemas embebidos", "Agroelectrónica",
            "Infraestructura, redes, antenas", "Diseño electrónico", "Telemática", "Internet de las cosas (IoT)", "Robótica",],
        'Tecnologías virtuales': ["Aplicaciones móviles",
            "Inteligencia artificial y big data", "Realidad virtual y simulación", "Realidad aumentada", "Diseño y desarrollo de videojuegos",
            "Ingeniería de software", "Desarrollo de contenidos multimedias", "Blockchain", "Ciberseguridad"],
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form_container}>
            <div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={organizacion.name}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Sector económico:</label>
                    <select name="economicSector" value={organizacion.economicSector} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona un sector económico</option>
                        {economicSectorEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Tipo de empresa:</label>
                    <select name="type" value={organizacion.type} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona un sector económico</option>
                        {typeEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Tamaño de la empresa:</label>
                    <select name="size" value={organizacion.size} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona un sector económico</option>
                        {sizeEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Correo electrónico:</label>
                    <input
                        type="text"
                        name="email"
                        value={organizacion.email}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Teléfono:</label>
                    <input
                        type="text"
                        name="phone"
                        value={organizacion.phone}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Departamento:</label>
                    <input
                        type="text"
                        name="state"
                        value={organizacion.state}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Ciudad:</label>
                    <input
                        type="text"
                        name="city"
                        value={organizacion.city}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Idea de inscripción:</label>
                    <input
                        type="text"
                        name="inscriptionIdea"
                        value={organizacion.inscriptionIdea}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Linea tecnologica:</label>
                    <select name="technologyLine" value={organizacion.technologyLine} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona una línea tecnológica</option>
                        {mainOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Sublinea tecnologica:</label>
                    <select name="technologySubLine" value={organizacion.technologySubLine} onChange={handleChange} disabled={!organizacion.technologyLine} className={styles.select}>
                        <option value="">Selecciona una sublínea</option>
                        {organizacion.technologyLine && subOptions[organizacion.technologyLine].map(option => (
                            <option name={option} key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Sitio web:</label>
                    <input
                        type="text"
                        name="webSite"
                        value={organizacion.webSite}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Red social oficial</label>
                    <input
                        type="text"
                        name="socialNetworkName"
                        value={organizacion.socialNetworkName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Nombre de usuario</label>
                    <input
                        type="text"
                        name="socialNetworkUserName"
                        value={organizacion.socialNetworkUserName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Observaciones</label>
                    <input
                        type="text"
                        name="observations"
                        value={organizacion.observations}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
            </div>

            <button type="submit" style={{
                backgroundColor: 'green',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
            }}>Editar Organizacion</button>
            <button type="submit"
                style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    setIsEditing(false)
                }}
            >
                Cerrar
            </button>
        </form >

    );
}

export default CrearOrganizacionComponent;
