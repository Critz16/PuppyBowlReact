import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const cohortName = '2211-FTB-ET-WEB-AM';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`

const RenderAllPlayers = () =>{
    
    const[allPlayers, setAllPlayers] = useState([]);
    const navigate = useNavigate();

useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-AM/players"
        );
        const result = await response.json();
        console.log(result);
        const puppies = result.data.players;
        console.log(allPlayers);
        setAllPlayers(puppies);
      } catch (error) {
        console.log("uh oh, cant fetch all players", error);
      }
    };

    fetchAllPlayers();
  }, []);

  if (!allPlayers || !allPlayers.length) {
    return (<h2>No players to display</h2>);
  } else {
    return (allPlayers.map((allPlayers) => {
        return(
            <div>
                <div className="single-player-card">
                    <h1 key = "name">{allPlayers.name}</h1>
                    <h1 key = "breed">{allPlayers.breed}</h1>
                    <h1 key = "status">{allPlayers.status}</h1>
                    <h1 key = "id">{allPlayers.id}</h1>
                    <img key = "image" id = "image" src = {allPlayers.imageUrl}></img>
                    <button onClick={() => navigate(`/player/${allPlayers.id}`)}> See Player Details</button>
                </div>
            </div>
          
        )
      }))
    }
}
      
  export default RenderAllPlayers;
