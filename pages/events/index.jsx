import { getAllEvents } from "../../dummy-data"
import EventList from "../../components/events/EventList"
import EventsSearch from "../../components/events/EventsSearch"
import { useRouter } from "next/router"

const AllEventsPage = () => {
    const router = useRouter()
    const events = getAllEvents()

    const findEventHandler = (year, month) => {
        const fullPaths = `/events/${year}/${month}`

        router.push(fullPaths)
    }

    return(
        <div>
            <EventsSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </div>
    )
}

export default AllEventsPage