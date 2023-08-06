import {
  Container,
  UserDescr,
  Avatar,
  UserName,
  Description,
  Stats,
  Stat,
  StatLabel,
  StatQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container className="profile">
      <UserDescr className="description">
        <Avatar src={avatar} alt={username} className="avatar" />
        <UserName className="name">{username}</UserName>
        <Description className="tag">@{tag} </Description>
        <Description className="location">{location}</Description>
      </UserDescr>

      <Stats className="stats">
        <Stat>
          <StatLabel className="label">Followers</StatLabel>
          <StatQuantity className="quantity">{stats.followers}</StatQuantity>
        </Stat>
        <Stat>
          <StatLabel className="label">Views</StatLabel>
          <StatQuantity className="quantity">{stats.views}</StatQuantity>
        </Stat>
        <Stat>
          <StatLabel className="label">Likes</StatLabel>
          <StatQuantity className="quantity">{stats.likes}</StatQuantity>
        </Stat>
      </Stats>
    </Container>
  );
};
