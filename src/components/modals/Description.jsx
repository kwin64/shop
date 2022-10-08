import React from 'react';
import './Description.scss';
import pizzaData from '../../store/pizza';
import { observer } from 'mobx-react-lite';

const Description = observer(({ setModalOpen }) => {
  return (
    <div className="ContainerPopUp">
      <div className="PopUp">
        <p>{pizzaData.descriptionPizza}</p>
        <button onClick={() => setModalOpen(false)}>Закрыть</button>
      </div>
    </div>
  );
});

export default Description;
