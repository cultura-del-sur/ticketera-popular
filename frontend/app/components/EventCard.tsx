import styles from "./styles/Ticket.module.css";

interface EventProps {
  title: string;
  date: string;
  price: string;
}

const EventCard: React.FunctionComponent<EventProps> = ({ title, date, price }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{price}</p>
    </div>
  );
};

export default EventCard;