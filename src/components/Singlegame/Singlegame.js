import React , { useState, useEffect }   from 'react';
import api from '../../api/index.js';
import {  useParams } from "react-router-dom";
import Loading from '../Loading/Loading';
import Game from './Game/Game';



const Singlegame = () => {

  let { id } = useParams();
  const [games, setGames] = useState();



  useEffect(() => {

    const getData = async () => {
      const resp = await api("https://api.igdb.com/v4/games","fields name,follows,rating,cover.url,rating_count,genres.name  , platforms.name,screenshots.url, storyline, summary, updated_at, involved_companies.company.name, involved_companies.developer  ; where id = "+id+";  limit 1;");
      setGames(resp.data);
    }
    getData();


  }, [id]);

// console.log(games);

  return (
    (!games)?
    <Loading/>
    :
    <div className="" >

    {games.map( (g) =>
      (
        <Game key={g.id} game={g} />
    ) )}
    </div>
  );
}

export default Singlegame;
