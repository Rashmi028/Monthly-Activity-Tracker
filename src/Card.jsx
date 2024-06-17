import { useState } from 'react';
import './Card.css';

function Card({ title, onDelete }) {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const [completedDays, setCompletedDays] = useState(Array(31).fill(false));

  const toggleDayCompletion = (index) => {
    const updatedDays = [...completedDays];
    updatedDays[index] = !updatedDays[index];
    setCompletedDays(updatedDays);
  };

  return (
    <>
      <div className='cardfull'>
        <div className="heading-card">
          <h1 className='card-title'>{title}</h1>
          <h2 className='month'>{currentMonth}</h2>
        </div>
        <div className='days'>
          {Array.from({ length: 31 }, (_, i) => (
            <button
              key={i}
              className={`day ${completedDays[i] ? 'completed' : ''}`}
              onClick={() => toggleDayCompletion(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className='cross'>
          <button onClick={onDelete} className='cut'><b>X</b></button>
        </div>
      </div>
    </>
  );
}

export default Card;
