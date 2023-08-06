import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li className="item" key={friend.id}>
              <FriendListItem avatar={friend.avatar}
                  name={friend.name}
                  isOnline={friend.isOnline} />
        </li>
      ))}
    </ul>
  );
};
