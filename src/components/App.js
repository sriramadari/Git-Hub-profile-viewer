import React, { useState } from "react";
import Norepo from "./norepo";
import { Octokit } from "octokit";
import UserInformation from "./UserInformation";
import RepositoryList from "./RepositoryList";
const octokit = new Octokit();
function App() {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [repositories, setRepositories] = useState([]);

  function handleInputChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);
   
    setClick(false);
    octokit
      .request("GET /users/{username}", {
        username: username,
      })
      .then(function (response) {
        setUserData(response.data);
        
        setLoading(false);
      })
      .catch(function (error) {
        setUserData(null);
        setError("User not found. Please enter a valid GitHub username.");
        
        setLoading(false);
      });
  }
  function handlerepo(event) {
    
    event.preventDefault();
    setLoading(true);
    setError(null);
    octokit
      .request("GET /users/{username}/repos", {
        username: username,
      })
      .then(function (response) {
        setRepositories(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setClick(false);
        setRepositories(null);
        setError("This user have no Repositories");
        setLoading(false);
      });
      setClick(true);
  }

  return (
    <div className="container">
      <h1 className="title">GitHub Profile Viewer</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username (e.g: sriramadari)"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="loader">
      {loading && <p class="loading">Loading  <span class="dot-1">.</span><span class="dot-2">.</span><span class="dot-3">.</span></p>
}
        {error && <p className="error">{error}</p>}
      </div>
     
      {userData && <div className="datacomponent">{userData && <UserInformation userData={userData} />}
        {userData &&<button onClick={handlerepo} className="repos-button">
          Find-Repos
        </button>}</div>
      }

      { click 
         && (repositories.length > 0 ?<RepositoryList repositories={repositories} />:<Norepo 
          Userdata={userData}
        />) 
        }
    </div>
  );
}

export default App;
