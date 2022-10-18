import React from 'react';

export const AuthorizeCard = ({ name, id, h1, background, p, loginConnection, handleClose }) => (
  <div key={`cardAuthorize-name-${name}`} className="floating-card" id={id} >
    <h3>{h1}</h3>
    <p className="mensage-profile">{background}</p>
    <p>{p}</p>
    <div className="button-display">
      <button className="btn buttons-header" id="go-back" onClick={handleClose}>Go Back</button>
      <button className="btn buttons-header" id="go-to" onClick={(e) => {
        loginConnection(e);
        handleClose()
      }}>Go to {name}</button>
    </div>
  </div>
)
