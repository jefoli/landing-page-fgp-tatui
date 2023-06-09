import { useState } from 'react';
import * as Styled from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';
import imgFolder from './promotionalFolder.jpg';
export const Advertisement = () => {
  const [stateFolder, setCloseFolder] = useState(false);

  function handleChange() {
    setCloseFolder(false);
  }

  return (
    <>
      {stateFolder && (
        <Styled.Folder>
          <div>
            <AiFillCloseCircle onClick={handleChange} />
            <div>
              <img src={imgFolder} alt="Imagem do Pop-up" />
            </div>
          </div>
        </Styled.Folder>
      )}
    </>
  );
};
