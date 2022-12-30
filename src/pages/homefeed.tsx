import React from 'react';
import CreateForm from '../components/twitter/Activity/createForm';
import Container from '../components/ui/container';

const HomeFeed = () => {
  return (
    <Container>
      <CreateForm
        onClick={() => console.log}
      />
    </Container>
  );
};

export default HomeFeed;