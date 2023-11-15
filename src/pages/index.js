import styles from '../styles/CRMExplanation.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¿Qué es un CRM?</h1>
      <p className={styles.description}>
        Un sistema de gestión de relaciones con clientes (CRM) es una herramienta
        que ayuda a las empresas a gestionar, analizar y mejorar sus relaciones con
        los clientes. Un CRM centraliza datos como historiales de contacto, preferencias
        del cliente, y registros de ventas, permitiendo a los equipos de ventas, marketing
        y servicio al cliente trabajar de manera más eficiente y ofrecer una experiencia
        más personalizada y satisfactoria al cliente.
      </p>
      <h2 className={styles.subtitle}>Beneficios Clave</h2>
      <ul className={styles.list}>
        <li>Mejor entendimiento de las necesidades del cliente</li>
        <li>Automatización de tareas y procesos de ventas</li>
        <li>Análisis detallado de datos para una toma de decisiones informada</li>
        <li>Mejora en la retención y fidelización de clientes</li>
      </ul>
    </div>
  );
};
