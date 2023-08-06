import { Profile } from './Profile';
import userData from '../data/user.json';
import { Statistics } from './Statistics';
import statistics from '../data/data.json';
import { FriendList } from './FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statistics} />

      <FriendList friends={friends} />
    
      <TransactionHistory items={transactions} />
    </div>
  );
};
