import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from 'react-router-dom';

function NewMeetupPage() {
  const history = useHistory();

    function addMeetupHandler(meetupData) {
      fetch(
        'https://react-getting-started-1b18d-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
        {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(() => {
        history.replace('/');
      });
    }

    return (
      <section>
        <h1>NewMeetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </section>
    );
}

export default NewMeetupPage;