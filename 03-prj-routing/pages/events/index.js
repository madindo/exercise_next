import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

function AllEventsPage() {
  const events = getAllEvents();
  const route = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    route.push(fullPath);
  }

  return <Fragment>
    <EventsSearch onSearch={findEventsHandler} />
    <EventList items={events} />
  </Fragment>
}
export default AllEventsPage;