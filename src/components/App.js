import { Profile } from './Profile/Profile';
import userData from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import statistics from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
import { GlobalStyles } from './GlobalStyle';

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

      <GlobalStyles/>
    </div>
  );
};
