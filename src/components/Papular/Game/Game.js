import React  from 'react';
import Basegame from '../../Basegame/Basegame';

const Game = ({ game }) => {


  let coverUrl = "https:"+game.cover.url;
  coverUrl = coverUrl.replace("t_thumb","t_cover_big")

  const gameUrl = "/game/"+game.id;
  let gameGenres = "";
  if (game.genres) {
    gameGenres = game.genres[0].name;
  }

  return (

    <Basegame gameUrl={gameUrl} coverUrl={coverUrl} gameName={game.name} gameGenres={gameGenres} />


  );
}

export default Game;
