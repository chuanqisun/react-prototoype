import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Details: React.FC = () => {
  return (
    <StyledAppRoot>
      <h1>Details</h1>
      <Link to="/">Home</Link>
    </StyledAppRoot>
  );
};

export default Details;

const StyledAppRoot = styled.div``;
