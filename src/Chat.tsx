import React, { FC } from 'react';
import './Chat.scss'
import { Header } from './components/header';
import { MessageInput } from './components/message-input';

const Chat: FC = () => {
  return <div className='chat'>
    <Header
      title='My Chat'
      usersCount={5}
      messageCount={10}
      lastMessageDate={new Date()}
    />
    <MessageInput/>
  </div>;
}

export default Chat;
