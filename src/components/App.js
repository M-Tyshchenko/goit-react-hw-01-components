import { Profile } from "./Profile";
import userData from '../data/user.json';
import { Statistics } from "./Statistics";
import statistics from '../data/data.json';

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

      <Statistics
        title="Upload stats"
        stats={statistics}
      />
 

    </div>
  );
};
