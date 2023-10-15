import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin: 0 auto;

  width: 400px;

  background-color: white;

  border-radius: 16px;

  text-align: center;
`;
export const TypesList = styled.ul`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;

  list-style: none;

  border: 1px solid green;
  & li {
    height: 100%;
    width: calc((100% - 32px) / 5);
    border: 1px dashed green;
  }
  & span {
    display: block;
  }
`;
