import React from 'react';

const TextArea = ({ placeholder, text}) => {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full border-solid border-2 border-gray-600 rounded text-grey-darkest flex-1 p-2 m-1 bg-transparent"
    >
      {text}
    </textarea>
  );
}

export default TextArea;
