import React  from 'react';
import user from "../../../images/user.svg";

const Game = ({ game }) => {

  // console.log(game);
  let coverUrl = "https://i.ibb.co/YLG1zSs/co2lbd-jpg-264-352.png";
  if (game.cover) {
    coverUrl = "https:"+game.cover.url;
    coverUrl = coverUrl.replace("t_thumb","t_cover_big")
  }


  let screenUrl = "https://i.ibb.co/G3bGBXh/o7q3ikzmkjxbftrd64ok-jpg-1280-720.png";
  if (game.screenshots) {
    screenUrl = "https:"+game.screenshots[0].url;
    screenUrl = screenUrl.replace("t_thumb","t_screenshot_huge")
  }

  // console.log(game.involved_companies);\
  let developer;
  let coName= "";
  if (game.involved_companies) {
    developer = game.involved_companies.find( a => a.developer === true)
    coName = developer.company.name;
  }
  // console.log(game);


  let gameGenres = "";
  if (game.genres) {
    gameGenres = game.genres[0].name;
  }

  let platforms = "";
  if (game.platforms) {
    platforms = game.platforms.map(a => <span key={a.id} >| {a.name} </span>);
  }

  const dateObject = new Date(game.updated_at * 1000)
  const humanDateFormat = dateObject.toLocaleString()


  return (
    <div className="lg-col-12 md-col-12 sm-col-12 xs-col-12 box-b my4" >
      <img  className="blur responsive  z-1 box-r xs-hide  sm-hide"  src={screenUrl} alt={game.name} />
        <div className="lg-col-12 md-col-12 sm-col-12 xs-col-12  bg-gr-d  card-h  p-20 box-r " >
          <div className="flex flex-wrap relative ">
              <div className=" lg-col-4  md-col-4 sm-col-12 xs-col-12 ">
               <img className="lg-pl4 p-21  xs-ma-w p2 m2" src={coverUrl} alt={game.name} />
              </div>
              <div className=" lg-col-7 md-col-8 sm-col-12 xs-col-12 xs-p0 ">
               <section className=" half-black  lg-col-7 md-col-6 sm-col-8 xs-col-12 p3  p-22">
                  <h3>  {game.name}</h3>
                  <p>Updated: {humanDateFormat}</p>
                  <div className="flex flex-wrap ">
                  <div className=" xs-col-8"> {coName}</div>
                  <div className=" left  left-text xs-col-4 "><img  alt="user"  className =" icon-wl pr2" src={user} /><span>{game.follows}</span></div>
                  </div>
                </section>
                <p className="p2"><span className="text-b">Platforms</span> {platforms}</p>
                <p className="p2">  <span className="text-b">Genres:</span> {gameGenres}</p>
                <p className="p2  mx4  justify" >{game.summary} </p>
                <p className="p2  mx4  justify" > {game.storyline} </p>
              </div>
          </div>
      </div>
    </div>


  );
}

export default Game;
