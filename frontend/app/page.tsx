import  Navbar  from "./components/nav-bar";
import Ticket from './components/ticket';
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <> 
    <Navbar />
    <div>
      <h1>Bienvenido a ticketera popular</h1>
      <Ticket title="Recital" buttonText="Reservar">
        <p>Proximamente</p>
      </Ticket>
    </div>
    <Footer />
    </>
  );
}