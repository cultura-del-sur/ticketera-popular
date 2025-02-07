import  Navbar  from "./components/nav-bar";
import Ticket from './components/ticket';
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./components/styles/Page.module.css"


 const Home = () => {
  return (
    <>
    <Navbar />
    <h1 className={styles.h1}>Bienvenido a ticketera popular</h1>
    <div>
      <Ticket title="Recital" buttonText="Reservar">
        <p>Proximamente</p>
      </Ticket>
    </div>
    <Footer />
    </>
  );
}
export default Home