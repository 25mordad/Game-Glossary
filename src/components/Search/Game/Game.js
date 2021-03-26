import React  from 'react';
import Basegame from '../../Basegame/Basegame';


const Game = ({ game }) => {

  const gameUrl = "/game/"+game.id;

  let coverUrl ="";
  if (game.cover) {

    coverUrl = "https:"+game.cover.url;
    coverUrl = coverUrl.replace("t_thumb","t_cover_big")
  }
  let gameGenres = "";
  if (game.genres) {
    gameGenres = game.genres[0].name;
  }

  return (
      <Basegame gameUrl={gameUrl} coverUrl={coverUrl} gameName={game.name} gameGenres={gameGenres} />

  );
}

export default Game;
