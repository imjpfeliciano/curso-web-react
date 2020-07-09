import React from 'react';

export interface ITextArea {
  placeholder: string;
  text: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = (props: ITextArea) => {
  const { placeholder, text, onChange } = props;
 
  return (
    <textarea
      placeholder={placeholder}
      className="w-full border-solid border-2 border-gray-600 rounded text-grey-darkest flex-1 p-2 m-1 bg-transparent"
      onChange={onChange}
      value={text}
    />
  );
}

export default TextArea;
