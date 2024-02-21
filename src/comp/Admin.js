import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import bg from "../img/header-bg.jpg";
import firebase from "firebase/compat/app";
import "firebase/firestore";

function Admin() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const db = firebase.firestore();
    db.collection("Admin")
      .where("username", "==", username)
      .where("password", "==", password)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length > 0) {
          setLoggedIn(true);
        } else {
          alert("Invalid username or password");
        }
      });
  };

  const handleCardClick = (title) => {
    navigate("/CRUD", { state: { title: title } });
  };

  return (
    <div style={{backgroundColor:'black', minHeight:'100vh'}}>
      <img src={bg} className="hbg" alt="" />

      {loggedIn ? (
        <div className="Acontainer">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-3 Hover"
                onClick={() => handleCardClick("TopAnimes")}
              >
                <div className="Acard">
                  <h5 className="AdminTitle">Add Top Anime</h5>
                </div>
              </div>
              <div
                className="col-md-3 Hover"
                onClick={() => handleCardClick("TopMovies")}
              >
                <div className="Acard">
                  <h5 className="AdminTitle">Add Top Movies</h5>
                </div>
              </div>
              <div
                className="col-md-3 Hover"
                onClick={() => handleCardClick("Anime")}
              >
                <div className="Acard">
                  <h5 className="AdminTitle">Add Anime</h5>
                </div>
              </div>
              <div
                className="col-md-3 Hover"
                onClick={() => handleCardClick("Movies")}
              >
                <div className="Acard">
                  <h5 className="AdminTitle">Add Movies</h5>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      ) : (
        <div className="login-form" style={{width:'30%', marginLeft:'35%'}}>
          <form onSubmit={handleSubmit}>
            <h3 className="text-center" style={{color:'aliceblue', padding:'2%'}}>Admin Login</h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                required="required"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required="required"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br/>
            <div className="form-group" style={{width:'30%',marginLeft:'35%'}}>
              <button type="submit" className="btn btn-primary btn-block">
                Log in
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Admin;
