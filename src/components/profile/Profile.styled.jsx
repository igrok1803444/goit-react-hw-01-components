import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 200px;

  margin: 0 auto;

  padding: 16px;

  background-color: white;

  border-radius: 16px;
`;
export const Description = styled.div`
  text-align: center;
`;
export const Avatar = styled.img`
  display: block;

  margin: 0 auto;
  margin-bottom: 12px;

  height: 150px;

  border-radius: 50%;

  overflow: hidden;
`;
export const UserName = styled.p`
  font-size: 28px;
  margin-bottom: 8px;
`;
export const UserTag = styled.p`
  margin-bottom: 4px;

  font-size: 20px;

  color: #987654;

  &:hover {
    color: yellowgreen;
    cursor: pointer;
  }
`;
export const UserLocation = styled.p`
  font-size: 16px;
`;
export const StatsList = styled.ul`
  list-style: none;
`;
