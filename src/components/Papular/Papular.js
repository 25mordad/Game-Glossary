import React , { useState, useEffect }   from 'react';
import Game from './Game/Game';
import api from '../../api/index.js';
import Loading from '../Loading/Loading';




const Papular = () => {

  const [games, setGames] = useState();

  useEffect(() => {

    const getData = async () => {
      const resp = await api("https://api.igdb.com/v4/games","fields name,follows,rating,cover.url,rating_count,genres.name; sort follows desc; where follows != null;  limit 8;");
      setGames(resp.data);
    }
    getData();


  }, []);

  return (
    (!games)?
      <Loading/>
    :
    <div className="flex flex-wrap lg-my" >

    {games.map( (g) =>
      (
      <Game key={g.id} game={g} />
    ) )}
    </div>
  );
}

export default Papular;
