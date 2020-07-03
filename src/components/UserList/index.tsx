import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps  {
  nickname: string;
  status: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, status }) => {
  return (
    <User>
      <Avatar status={status} className={isBot ? 'bot': ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>

  );
};


const UserList: React.FC = () => {
  return(
    <Container>
      <Role>Disponível - 1</Role>

      <UserRow nickname="Rodrigo Sakamoto" status="disponivel" />
      <UserRow nickname="CaptainMirai" status="ausente" />
      <UserRow nickname="Mallu" status="ocupado" />


      <Role>Offline - 18</Role>

      <UserRow nickname="UG" isBot status="offline"/>
      <UserRow nickname="Helio" isBot status="offline"/>

      {Array.from(Array(15).keys()).map((n) => (
        <UserRow key={n} nickname="BOT" status="offline"/>

      ))}

    </Container>
  );
} 

export default UserList;