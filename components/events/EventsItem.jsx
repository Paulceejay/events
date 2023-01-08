import styles from "./EventItem.module.css"
import Button from "../ui/Button"
import DateIcon from "../icons/DateIcon"
import AddressIcon from "../icons/AddressIcon"
import ArrowRightIcon from "../icons/ArrowRightIcon"

const EventsItem = (props) => {
    const {title, image, date, location, id} = props

    const humanReadableDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formatedAdress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`
    return (
      <li className={styles.item}>
        <img src={`/${image}`} alt={title} />
        <div className={styles.content}>
          <div className={styles.sumarry}>
            <h2>{title}</h2>
            <div className={styles.date}>
              <DateIcon />
              <time>{humanReadableDate}</time>
            </div>
            <div className={styles.address}>
              <AddressIcon />
              <address>{formatedAdress}</address>
            </div>
          </div>

          <div className={styles.actions}>
            <Button link={exploreLink}>
              <span>Explore Events</span>
              <span className={styles.icon}><ArrowRightIcon /></span>
            </Button>
          </div>
        </div>
      </li>
    );
}

export default EventsItem