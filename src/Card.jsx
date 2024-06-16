import './Card.css'

 function Card({title}){
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    return(
<>
<div className='cardfull'>
<div className="heading-card">
<h1 className='card-title'>{title}</h1>
<h2 className='month'>{currentMonth}</h2>
</div>
<div className='days'>
    {Array.from({ length: 31 }, (_, i) => (
            <button key={i} className='day'>{i + 1}</button>
          ))}

</div>
</div>
</>
    )
 }

 export default Card