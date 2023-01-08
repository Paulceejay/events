import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";
import ResultsTitle from "../../components/events/ResultTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
      return (
        <>
          <ErrorAlert>
            <p className="center">Invalid Filter plase adjust your values!</p>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </>
      );
  }

  const filteredEvents = getFilteredEvents({
      year: numYear,
      month: numMonth
  });

  if(!filteredEvents || filteredEvents.length === 0){
      return (
        <>
          <ErrorAlert>
            <p className="center">No Events found for the filter!</p>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </>
      );
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <>
        <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
