import { useRouter } from 'next/router';
import React, { Component, Fragment } from 'react'
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert'
import Button from '../../components/ui/button';

function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className='center'>Loading</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth < 1 || numMonth > 12) {
    return <Fragment>
        <ErrorAlert>
          <p>Invalid Filter. Please adjust filters</p>
          <div class="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </ErrorAlert>
      </Fragment>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents === 0) {
    return <Fragment>
      <ErrorAlert>
      <p>No events found</p>
      <div class="center">
        <Button link="/events">Show All Events</Button>
      </div>
      </ErrorAlert>
    </Fragment>;
  }

  const date = new Date(numYear, numMonth -1);

  return (
    <Fragment>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventsPage;