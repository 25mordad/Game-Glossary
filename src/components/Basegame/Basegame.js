import React  from 'react';


const Basegame = ( {gameUrl,coverUrl,gameName,gameGenres} ) => {
  if (coverUrl === "") {
    coverUrl = "https://i.ibb.co/YLG1zSs/co2lbd-jpg-264-352.png";
  }

  return (
    <div className="lg-col-3 md-col-3 sm-col-6 xs-col-12" >
      <div className="bg-gr-d card m4 over-hide box-shadow">
          <a href={gameUrl} ><img  className="responsive card-pic"  src={coverUrl} alt={gameName} /></a>
           <div className="bg-gr-d p2">

              <p className="line-h"> Name: {gameName}</p>

              <p className="line-h" > Genres: {gameGenres}</p>
          </div>
       </div>
    </div>
  );
}

export default Basegame;
