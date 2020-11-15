import React, { useState, useEffect } from 'react';
import Loading from '../../Components/Loading/Loading';
import Tours from './Tours';
import "./tours.css";

const url = 'https://course-api.com/react-tours-project'

function TourPage() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);  

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }

  useEffect(()=>{
    fetchTours();
  },[])

  const fetchTours = async() => {
    setLoading(true);
    
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error ){
      setLoading(false);
      console.log(error)
    }
    
  }

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0) {
    return (
      <main>
        <div className="tiltle">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main> 
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default TourPage
