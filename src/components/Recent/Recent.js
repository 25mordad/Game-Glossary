import React , { useState, useEffect }   from 'react';
import Game from './Game/Game';
import api from '../../api/index.js';
import Loading from '../Loading/Loading';


const Recent = () => {

  const [games, setGames] = useState();

  useEffect(() => {


    const getData = async () => {
      const resp = await api("https://api.igdb.com/v4/release_dates","fields game.name,game.cover.url,game.genres.name ; sort date desc ;where date < "+String(Math.round((new Date()).getTime() / 1000))+";limit 8;");
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
          <Game key={g.id} row={g} />
      ) )}
      </div>
  );
}

export default Recent;
