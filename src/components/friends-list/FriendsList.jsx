import { Friends, FriendCard, Avatar } from './FriendsListStyled';

export const FriendsList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendCard key={id} isOnline={isOnline}>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </FriendCard>
        );
      })}
    </Friends>
  );
};
