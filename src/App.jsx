import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import {
  FaPhone,
  FaLocationArrow,
  FaVoicemail,
  FaEnvelope,
  FaCalendar,
} from "react-icons/fa";

function App() {
  const [user, setUser] = useState();

  const getRandomUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  return (
    <div className="App">
      {user ? (
        <div className="user-card">
          <h1 className="random-users">Random Users</h1>
          <div className="user-card-child">
            <img src={user?.picture.large} alt="" />
            <h1>
              {user?.name.first} {user?.name.last}
            </h1>
            <p>@{user?.login.username}</p>
            <div className="phone">
              <FaPhone />
              <p>{user?.phone}</p>
            </div>
            <div className="location">
              <FaLocationArrow />
              <p>{user?.location.country}</p>
            </div>
            <div className="age">
              <FaCalendar />
              <p>{user?.dob.age}</p>
            </div>
            <div className="email">
              <FaEnvelope />
              <p>{user?.email}</p>
            </div>
          </div>
          <button onClick={getRandomUser}>Generate user</button>{" "}
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}

export default App;
