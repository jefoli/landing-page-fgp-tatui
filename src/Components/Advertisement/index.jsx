import { useState } from 'react';
import * as Styled from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';

export const Advertisement = () => {
  const [state, setState] = useState(false);

  return (
    <Styled.Folder
      onClick={() => {
        setState(true);
      }}
    >
      <div id="popupContainer">
        <AiFillCloseCircle />
        <div id="popupContent">
          <img
            src="src/assets/images/promotionalFolder.jpg"
            alt="Imagem do Pop-up"
          />
        </div>
      </div>
    </Styled.Folder>
  );
};
