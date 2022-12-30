import React, { useState, SyntheticEvent } from 'react';
import Button from '../../ui/button/button';
import Label from '../../ui/label/label';
import TextArea from '../../ui/form/textarea';

export interface IForm {
  onClick: () => {}
}

const CreateForm = (props: IForm) => {
  const { onClick } = props;

  const [message, setMessage] = useState<string>('');

  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Label label="Que quieres compartir hoy?" />
        <TextArea
          placeholder="Que te gustaria compartir"
          text={message}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)}
        />
    
        <div className="flex items-center justify-between">
          <Button
            label="Publicar"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

const CreateFormWrapper = (props: IForm) => {
  const { onClick } = props;

  return (
    <CreateForm
      onClick={onClick}
    />
  );
};

export default CreateFormWrapper;
export { CreateForm };
