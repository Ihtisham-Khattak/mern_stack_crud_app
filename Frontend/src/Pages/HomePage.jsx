import React, { useEffect, useState } from "react";
import WorkOut from "../Components/WorkOut";
import WorkOutForm from "../Components/WorkOutForm/WorkOutForm";

const HomePage = () => {
  
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchGetData = async () => {

      const response = await fetch('api/workout')
      const json = await response.json()
      setWorkout(json)
      setLoading(false);
    }

    fetchGetData()
  }, []);

  if(loading) return <h1>Loading....</h1>

  return (
    <div className="home">
      <div className="workouts">
        <WorkOut workout={workout}/>
      </div>
    </div>
  );
};

export default HomePage;
