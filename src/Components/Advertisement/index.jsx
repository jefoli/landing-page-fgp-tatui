import { useState } from 'react';
import * as Styled from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';

export const Advertisement = () => {
  const [stateFolder, setCloseFolder] = useState(true);

  function handleChange() {
    setCloseFolder(false);
  }

  return (
    <>
      {stateFolder && (
        <Styled.Folder>
          <div id="popupContainer">
            <AiFillCloseCircle onClick={handleChange} />
            <div id="popupContent">
              <img
                src="src/assets/images/promotionalFolder.jpg"
                alt="Imagem do Pop-up"
              />
            </div>
          </div>
        </Styled.Folder>
      )}
    </>
  );
};
