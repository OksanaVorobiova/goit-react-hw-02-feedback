import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  list-style-type: none;

  li {
    width: 50vw;
    height: 30px;
    border-radius: 8px;
    background-color: #d3dde4;
    border: 1px dashed #456789;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
