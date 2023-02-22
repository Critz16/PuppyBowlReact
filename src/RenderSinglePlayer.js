import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const cohortName = '2211-FTB-ET-WEB-AM';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`

const RenderSinglePlayer = () => {

    const [ singlePlayer, setSinglePlayer] = useState({})
    const {id} = useParams();

    useEffect(() => {
    const fetchSinglePlayer = async (id) => {
        try{
            const response = await fetch(`${APIURL}/players/${id}`
            )
            const result = await response.json();
            setSinglePlayer(result.data.player)
        } catch(err){
            console.error("cant find puppy")
        }
        
    }
    fetchSinglePlayer(id);
    console.log(singlePlayer)
}, [])


    return (
        <div>
            <div className="single-player-card">
                    <h1 key = "name">{singlePlayer.name}</h1>
                    <h1 key = "breed">{singlePlayer.breed}</h1>
                    <h1 key = "status">{singlePlayer.status}</h1>
                    <h1 key = "id">{singlePlayer.id}</h1>
                    <h1 key = "team">{singlePlayer.team}</h1>
                    <img key = "image" id = "image" src = {singlePlayer.imageUrl}></img>
                    
                </div>
        </div>

    )
}





export default RenderSinglePlayer