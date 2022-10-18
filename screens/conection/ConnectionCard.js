import React from 'react';

export const ConnectionCard = ({ id, card, img, name, onClickHandler }) => (
  <div className="col-md-3" key={`CardConnectionSocialProfile-id-${id}`} id={card}>
    <div className="card">
      <div className="text-center">
        <img src={img} alt={name} className="img-card" />
        <p>{name}</p>
      </div>
      <div className="button-conect">
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-conect" onClick={onClickHandler}>Connect</button>
      </div>
    </div>
  </div>
);
