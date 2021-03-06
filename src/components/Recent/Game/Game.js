import React  from 'react';
import Basegame from '../../Basegame/Basegame';



const Game = ({ row }) => {


  let coverUrl = "https://i.ibb.co/YLG1zSs/co2lbd-jpg-264-352.png";
  if (row.game.cover) {
  coverUrl = "https:"+row.game.cover.url;
  coverUrl = coverUrl.replace("t_thumb","t_cover_big")
  }
  const gameUrl = "/game/"+row.game.id;
  let gameGenres = "";
  if (row.game.genres) {
    gameGenres = row.game.genres[0].name;
  }

  return (
    <Basegame gameUrl={gameUrl} coverUrl={coverUrl} gameName={row.game.name} gameGenres={gameGenres} />

  );
}

export default Game;
