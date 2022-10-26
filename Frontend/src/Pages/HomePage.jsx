import React, { useEffect, useState } from "react";
import axios from 'axios'
import WorkOut from "../Components/WorkOut";
const HomePage = () => {
  const [workout, setWorkout] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("api/workout")
      .then((res) => setWorkout(res.data))
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workout && workout.map((workouts) => 
        <WorkOut key={workouts._id} workouts={workouts} />
       )}
      </div>
    </div>
  );
};

export default HomePage;
