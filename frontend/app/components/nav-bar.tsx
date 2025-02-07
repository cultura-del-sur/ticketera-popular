import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./styles/Navbar.module.css"

const Example = () => {
  return (
      <Navbar bg="dark" data-bs-theme="dark" className={styles.Navbar}>
        <Container>
           <Link className="nav-link" href="/">Home</Link>
        </Container>
      </Navbar>
  );
};
export default Example;