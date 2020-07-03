import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="boas-vindas" />
      <ChannelButton channelName="geral" />
      <ChannelButton channelName="ajuda" />
      <ChannelButton channelName="links" />
      <ChannelButton channelName="vagas" />



    </Container>
  )
}

export default ChannelList;