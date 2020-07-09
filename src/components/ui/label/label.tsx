import React from 'react';

export interface ILabel {
  label: string;
};

const Label = (props : ILabel) => {
  const { label } = props;

  return (
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
  );
};

export default Label;
