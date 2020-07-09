import React, { FunctionComponent } from 'react';

export interface IContainer {
};

const Container: FunctionComponent<IContainer> = (props) => {
  const { children } = props;

  return (
    <div className="container mx-auto">
      {children}
    </div>
  );
};

export default Container;