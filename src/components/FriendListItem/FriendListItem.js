import { Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status status={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};
