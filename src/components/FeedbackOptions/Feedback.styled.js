import styled from 'styled-components';

export const FeedbackList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;

  button {
    width: 90px;
    height: 30px;
    border-radius: 8px;
    background-color: #d3dde4;
    border: 1px dashed #456789;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
