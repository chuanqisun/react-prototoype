import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Home: React.FC = () => {
  return (
    <StyledAppRoot>
      <h1>Home</h1>
      <Link to="details">Details</Link>
    </StyledAppRoot>
  );
};

export default Home;

const StyledAppRoot = styled.div``;
