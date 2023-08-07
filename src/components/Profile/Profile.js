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
    <Container>
      <UserDescr>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <Description>@{tag} </Description>
        <Description>{location}</Description>
      </UserDescr>

      <Stats>
        <Stat>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{stats.followers}</StatQuantity>
        </Stat>
        <Stat>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{stats.views}</StatQuantity>
        </Stat>
        <Stat>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{stats.likes}</StatQuantity>
        </Stat>
      </Stats>
    </Container>
  );
};
