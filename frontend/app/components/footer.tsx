import styles from "./styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        <p> Ticketera popular.</p>
        <p>Contacto: info@ticketera.com</p>
      </div>
    </footer>
  );
};
export default Footer;