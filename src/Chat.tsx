import React, { FC } from 'react';
import './Chat.scss'
import { Header } from './components/header';

const Chat: FC = () => {
  return <>
    <Header
      title='My Chat'
      usersCount={5}
      messageCount={10}
      lastMessageDate={new Date()}
    />
  </>;
}

export default Chat;
