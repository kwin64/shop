import React from 'react';
import './Description.scss';

const Description = ({ setOpenModal }) => {
  return (
    <div className="ContainerPopUp">
      <div className="PopUp">
        <button onClick={() => setOpenModal(false)}>Click</button>
      </div>
    </div>
  );
};

export default Description;
