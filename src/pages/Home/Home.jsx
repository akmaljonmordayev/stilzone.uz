import React from 'react';
import './Home.css';

const Home = () => {
  return (
       <>
      <h1>
        Grooming,<span>Synchronized</span>.
      </h1>

      <p>
        Find the best local barbers, see live wait times, and skip the line.
        Your time is precious—spend it looking good, not waiting.
      </p>
      <span className="input">
        <FaMapMarkerAlt />
        <input
          type="text"
          placeholder="Enter your location..."
          
        />
        <button>
          <CiSearch />
          Find Near Me
        </button>
      </span>

      <div className="user">
        <p><LiaUserSolid /> 10k+ Barbers</p>
        <p><RiStarSFill /> 4.9/5 Avg Rating</p>
        <p><IoIosFlash /> Real-time Queues</p>
      </div>
    </>
  );
};

export default Home;
