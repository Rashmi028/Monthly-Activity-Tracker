import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'
function App() {
const [activity,setactivity]=useState('');
const [showCard, setShowCard] = useState(false);

const handleAddActivity = () => {
  setShowCard(true);
};

const handleInputChange = (event) => {
  setactivity(event.target.value);
};
return (
<>
<div>
<h1 className='heading' >Monthly Activity Tracker!</h1>
<input className='input-text'  value={activity}
          onChange={handleInputChange} placeholder ="  e.g coding" type="text">
</input>
<button className='button-add' onClick={handleAddActivity}>Add Activity</button>
{showCard && <Card title={activity} />}

</div>
     
    </>
  )
}

export default App
