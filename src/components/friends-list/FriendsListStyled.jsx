import styled from 'styled-components';

export const Friends = styled.ul`
  list-style: none;

  width: 150px;

  margin: 0 auto;

  text-align: center;
  color: white;
`;
export const FriendCard = styled.li`
  margin-bottom: 8px;

  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};

  border-radius: 16px;
`;
export const Avatar = styled.img`
  display: block;

  margin: 0 auto;
`;
