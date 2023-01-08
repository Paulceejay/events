import EventsItem from "./EventsItem";
import styles from "./EventList.module.css";

const EventList = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map((event) => (
        <EventsItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
