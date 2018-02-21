import React from 'react';

const Film = ({title, imageLink}) => {
  return (
    <div>
      <img className="film--image" src={imageLink}/>
      <p className="film--title">{title}</p>
    </div>
  );
}

export default Film;
