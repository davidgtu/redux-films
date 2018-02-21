import React from 'react';
import Film from './Film';
import Carousel from 'nuka-carousel';

const FilmList = ({films, loading}) => {
  if (films === undefined) {
    return (<div>Loading...</div>)
  } else {
    return (
      <div className="film--list">
        <Carousel slidesToShow={6.3}>
          { films.map(film => {
            return (
              <div>
                <Film title={film.title} imageLink={film.images.image[0].src}/>
              </div>
            )
          }) }
        </Carousel>
      </div>
    );
  }
}

export default FilmList;
