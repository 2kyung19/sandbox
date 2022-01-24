import React from "react";
import styled from "styled-components";

const Second = () => {
  return <Text>world!</Text>;
};

const Text = styled.div`
  color: ${({ theme }) => theme.colors.red};
`;

export default Second;
