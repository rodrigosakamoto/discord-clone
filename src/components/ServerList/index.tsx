import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome mentions={1} />

      <Separator />

      <ServerButton hasNotifications mentions={4} />
      <ServerButton  hasNotifications />
      <ServerButton  mentions={3} />
      {Array.from(Array(15).keys()).map((n) => (
        <ServerButton key={n} />
      ))}
    </Container>
  )
}

export default ServerList;