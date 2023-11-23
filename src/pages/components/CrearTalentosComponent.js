import React, { useState } from 'react';
import styles from "../../styles/CrearTalentosComponent.module.css"
import axios from 'axios';
import { useRouter } from 'next/router';

const CrearTalentosComponent = () => {
    const router = useRouter();
    const [talento, setTalento] = useState({
        name: '',
        gender: '',
        economicStatus: '',
        age: '',
        email: '',
        phone: '',
        state: '',
        city: '',
        scholarship: '',
        profession: '',
        inscriptionIdea: '',
        technologyLine: '',
        technologySubLine: '',
        webSite: '',
        socialNetworkName: '',
        socialNetworkUserName: '',
        observations: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTalento({ ...talento, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:9005/api/v1/talent/', talento);
            console.log(result)
            router.push('../VerTalentos');
            alert("Se ha creado satisfactoriamente un Talento");
        } catch (error) {
            alert('Hubo un error al enviar el formulario:', error);
        }
    };

    const ageEnum = ["10 - 20", "21 - 30", "31 - 40", "41 - 50", "51 - 60", "61 - 70", "71 - 80"]
    const scholarshipEnum = ["Primaria", "Bachiller Académico", "Técnico", "Tecnólogo", "Profesional", "Especialización", "Maestría", "Doctorado", "Post doctorado"]
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
                        value={talento.name}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Género:</label>
                    <select name="gender" value={talento.gender} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona un género</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Estrato socioeconómico:</label>
                    <select name="economicStatus" value={talento.economicStatus} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona un estráto</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Edad:</label>
                    <select name="age" value={talento.age} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona un rango de edad</option>
                        {ageEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Correo electrónico:</label>
                    <input
                        type="text"
                        name="email"
                        value={talento.email}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Teléfono:</label>
                    <input
                        type="text"
                        name="phone"
                        value={talento.phone}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Departamento:</label>
                    <input
                        type="text"
                        name="state"
                        value={talento.state}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Ciudad:</label>
                    <input
                        type="text"
                        name="city"
                        value={talento.city}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Grado de escolaridad:</label>
                    <select name="scholarship" value={talento.scholarship} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona un grado de escolaridad</option>
                        {scholarshipEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Profesión:</label>
                    <input
                        type="text"
                        name="profession"
                        value={talento.profession}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Idea de inscripción:</label>
                    <input
                        type="text"
                        name="inscriptionIdea"
                        value={talento.inscriptionIdea}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Linea tecnologica:</label>
                    <select name="technologyLine" value={talento.technologyLine} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona una línea tecnológica</option>
                        {mainOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Sublinea tecnologica:</label>
                    <select name="technologySubLine" value={talento.technologySubLine} onChange={handleChange} disabled={!talento.technologyLine} className={styles.select}>
                        <option value="">Selecciona una sublínea</option>
                        {talento.technologyLine && subOptions[talento.technologyLine].map(option => (
                            <option name={option} key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Sitio web:</label>
                    <input
                        type="text"
                        name="webSite"
                        value={talento.webSite}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Red social oficial</label>
                    <input
                        type="text"
                        name="socialNetworkName"
                        value={talento.socialNetworkName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Nombre de usuario</label>
                    <input
                        type="text"
                        name="socialNetworkUserName"
                        value={talento.socialNetworkUserName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Observaciones</label>
                    <input
                        type="text"
                        name="observations"
                        value={talento.observations}
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
            }}>Crear Talento</button>
                
        </form >

    );
}

export default CrearTalentosComponent;
