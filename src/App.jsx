import { useState } from 'react';
import './App.css';
import Card from './Card.jsx';

function App() {
  const [activity, setActivity] = useState('');
  const [activities, setActivities] = useState([]);

  const handleAddActivity = () => {
    if (activity.trim() !== '') {
      setActivities([...activities, activity]); // Add new activity to the list
      setActivity(''); // Clear the input field after adding the activity
    }
  };

  const handleInputChange = (event) => {
    setActivity(event.target.value);
  };

  const deleteActivity = (index) => {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  };
  return (
    <>
      <div>
        <h1 className='heading'>Monthly Activity Tracker!</h1>
        <input
          className='input-text'
          placeholder="e.g coding"
          type="text"
          value={activity}
          onChange={handleInputChange}
        />
        <button className='button-add' onClick={handleAddActivity}>Add Activity</button>
        {activities.map((activity, index) => (
          <Card
            key={index}
            title={activity}
            onDelete={() => deleteActivity(index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
