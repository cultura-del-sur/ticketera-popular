import  Navbar  from "./components/nav-bar";

import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./components/styles/Page.module.css"
import EventsList from "./components/EventList";



 const Home = () => {
  return (
    <>
    <Navbar />
    <h1 className={styles.h1}>Bienvenido a ticketera popular</h1>
    <EventsList />
    <Footer />
    </>
  );
}
export default Home