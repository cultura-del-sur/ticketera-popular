import { ReactNode } from "react";
import styles from "./styles/Ticket.module.css";

interface TicketProps {
  title: string;
  children: ReactNode;
  buttonText: string;
}

const Ticket = ({ title, children, buttonText }: TicketProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
};

export default Ticket;