import React from 'react';

export interface IButton {
  label: string;
  onClick: () => void;
};

const Button = (props: IButton) => {
  const { label, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {label}
    </button>
  );
}

export default Button;
