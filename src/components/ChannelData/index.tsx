import React, {useRef, useEffect} from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
          key={n}
          author="Mallu"
          date="03/07/2020"
          content="Au"
        />
        ))}

        <ChannelMessage
          author="Rodrigo Sakamoto"
          date="03/07/2020"
          content="dsadsadsadsadsadsa"
        />

        <ChannelMessage
          author="UG"
          date="03/07/2020"
          content={
            <>
              <Mention>@Rodrigo Sakamoto</Mention>, idsahjdsahdsajk
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #geral" />
        <InputIcon />
      </InputWrapper>


    </Container>
  );
}

export default ChannelData;