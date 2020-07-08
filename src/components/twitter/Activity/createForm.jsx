import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/button/button';
import Label from '../../ui/label/label';

const ActivityContainer = styled.div``;
const ActivityFooter = styled.div`
`;

const publishTweet = (event) => {
  console.log('Se ha publicado');
};


const CreateForm = ({ onClick }) => {
  return (
    <div className="w-full">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Label label="Que quieres compartir hoy?" />
        <textarea
          // placeholder="hey"
          className="w-full border-solid border-2 border-gray-600 rounded text-grey-darkest flex-1 p-2 m-1 bg-transparent"
        >
          hello world
        </textarea>
    
        <div className="flex items-center justify-between">
          <Button
            label="publicar"
            onClick={onClick}
          />
        </div>
      </form>
    </div>
  );
};

const CreateFormWrapper = () => {

};

export default CreateFormWrapper;
export { CreateForm };
