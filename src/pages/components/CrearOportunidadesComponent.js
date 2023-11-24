import React, { useState } from 'react';
import styles from "../../styles/CrearTalentosComponent.module.css"
import axios from 'axios';
import { useRouter } from 'next/router';

const CrearOportunidadesComponent = () => {
    const router = useRouter();
    const [oportunidad, setOportunidad] = useState({
        priority: '',
        projectName: '',
        growthPotential: '',
        articulationArea: '',
        articulationInteres: [],
        initialTRL: '',
        achivedTRL: '',
        deliver: '',
        abandonReason: '',
        prototipeUse: '',
        inovationLevel: '',
        observations: ''
    });

    const handleChange = (e) => {
        const { name, options } = e.target;
        if (name === "articulationInteres") {
            const valoresSeleccionados = Array.from(options).filter(option => option.selected).map(option => option.value);
            setOportunidad({ ...oportunidad, [name]: valoresSeleccionados });
        } else {
            setOportunidad({ ...oportunidad, [name]: e.target.value });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:9005/api/v1/oportunity/', oportunidad);
            console.log(result)
            router.push('../VerOportunidades');
            alert("Se ha creado satisfactoriamente un Oportunidad");
        } catch (error) {
            alert('Hubo un error al enviar el formulario:', error);
        }
    };

    const priorityEnum = ["Alta", "Media", "Baja"]
    const growthPotentialEnum = ["Corto plazo", "Medio plazo", "Largo plazo"]
    const articulationAreaEnum = ["SENA", "Organizaciones gubernamentales", "Instituciones académicas", "ONG"]
    const articulationInterestEnum = ["Recursos económicos", "Recursos técnicos", "Recursos digitales", "Fortalecimiento en la gestión", "Internacionalización", "Propiedad intelectual", "Participación en ferias", "Networking"]
    const TRLEnum = ["TRL 6", "TRL 7", "TRL 8"]
    const TRLFinalEnum = ["","TRL 6", "TRL 7", "TRL 8", "Proyecto sin terminar"]
    const deliverEnum = ["Aceleración de proyectos", "Identificación de oportunidades", "No generó impacto", "Otros"]
    const abandonReasonEnum = ["Motivos ecónomicos", "Falta de tiempo", "Falta de conocimiento de los servicios", "Falta de interés", "Otros"]
    const inovationLevelEnum = ["Incremental", "Radical", "Disruptiva"]

    return (
        <form onSubmit={handleSubmit} className={styles.form_container}>
            <div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Prioridad:</label>
                    <select name="priority" value={oportunidad.priority} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona una prioridad</option>
                        {priorityEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Nombre del proyecto:</label>
                    <input
                        type="text"
                        name="projectName"
                        value={oportunidad.projectName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Potencial de crecimiento:</label>
                    <select name="growthPotential" value={oportunidad.growthPotential} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona un potencial</option>
                        {growthPotentialEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Area de articulación:</label>
                    <select name="articulationArea" value={oportunidad.articulationArea} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona una prioridad</option>
                        {articulationAreaEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className={styles.label}>Interes de articulación:</label>
                    <select multiple={true} value={oportunidad.articulationInteres} onChange={handleChange} name="articulationInteres" className={styles.select}>
                        {articulationInterestEnum.map(opcion => (
                            <option key={opcion} value={opcion}>{opcion}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>TRL inicial:</label>
                    <select name="initialTRL" value={oportunidad.initialTRL} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona un TRL</option>
                        {TRLEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>TRL final:</label>
                    <select name="achivedTRL" value={oportunidad.achivedTRL} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona un TRL</option>
                        {TRLFinalEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Aporte de tecnoparque:</label>
                    <select name="deliver" value={oportunidad.deliver} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona un aporte</option>
                        {deliverEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>¿Por qué abandonaría su proyecto con Tecnoparque?:</label>
                    <select name="abandonReason" value={oportunidad.abandonReason} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona una razón</option>
                        {abandonReasonEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Que uso le daría a su prototipo:</label>
                    <input
                        type="text"
                        name="prototipeUse"
                        value={oportunidad.prototipeUse}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>¿Qué nivel de innovación tiene su proyecto?:</label>
                    <select name="inovationLevel" value={oportunidad.inovationLevel} onChange={handleChange} className={styles.select}>
                        <option value="">Selecciona un nivel</option>
                        {inovationLevelEnum.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label className={styles.label}>Observaciones</label>
                    <input
                        type="text"
                        name="observations"
                        value={oportunidad.observations}
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
            }}>Crear Oportunidad</button>

        </form >

    );
}

export default CrearOportunidadesComponent;
