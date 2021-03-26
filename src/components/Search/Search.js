import React , { useState, useEffect }   from 'react';
import Game from './Game/Game';
import api from '../../api/index.js';
import {  useParams } from "react-router-dom";
import Loading from '../Loading/Loading';
import nofound from "../../images/nofound.svg";


const Search = () => {
  let { name } = useParams();
  const [games, setGames] = useState();


  useEffect(() => {


    const getData = async () => {
      const resp = await api("https://api.igdb.com/v4/games",'fields name,follows,rating,cover.url,rating_count,genres.name; search "'+name+'";  limit 8;');
      setGames(resp.data);
    }
    getData();


  }, [name]);

  return (
    (!games)?
    <Loading/>

    :
    <div className="flex flex-wrap" >
    {games.length === 0? <><img  className ="svg-w"  alt="nofound"   src={nofound} /></>:
    games.map( (g) =>
      (
      <Game key={g.id} game={g} />
    ) )
    }
    </div>
  );
}

export default Search;
