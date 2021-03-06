import React, { FC, useEffect, useState } from 'react';
import { Header } from '../header';
import { MessageInput } from '../message-input';
import './chat.scss';
import { Loader } from '../loader';
import { loadMessages, sortMessagesByDate } from '../../helpers';
import { IMessage, IReaction, IUser } from '../../common/interfaces';
import { MessageList } from '../message-list';

interface ChatProps {
  url: string
}

const Chat: FC<ChatProps> = ({ url }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [updatedMessage, setUpdatedMessage] = useState<IMessage | undefined>(undefined);
  const [reactions, setReactions] = useState<IReaction[]>([]);
  const [currentUser] = useState<IUser>({
    userId: '1',
    user: 'Max',
    avatar: 'data:image/png;base64,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'
  });

  useEffect(() => {(async () => {
      const arr = await loadMessages(url);
      setMessages(sortMessagesByDate(arr));
      setIsLoading(false);
  })()}, [url]);

  const onMessageSend = (message: IMessage) => setMessages(messages => [...messages, message]);

  const onMessageDelete = (messageId: string): void => {
    const idx = messages.findIndex(item => item.id === messageId);
    setMessages(messages => [
      ...messages.slice(0, idx),
      ...messages.slice(idx + 1)
    ]);
  }

  const onMessageUpdate = (message: IMessage): void => {
    if (!message.text.trim()) {
      onMessageDelete(message.id)
    } else {
      const idx = messages.findIndex(item => item.id === message.id);
      setMessages(messages => [
        ...messages.slice(0, idx),
        message,
        ...messages.slice(idx + 1)
      ]);
    }
    setUpdatedMessage(undefined);
  }

  const toggleReaction = (userId: string, messageId: string): void => {
    const idx = reactions.findIndex(item => item.userId === userId && item.messageId === messageId);
    if (idx === -1) {
      setReactions(reactions => [...reactions, { userId, messageId }])
    } else {
      setReactions([
        ...reactions.slice(0, idx),
        ...reactions.slice(idx + 1)
      ]);
    }
  }

  if (isLoading) {
    return <Loader/>;
  }

  return <div className='chat'>
    <Header
      title='My Chat'
      usersCount={messages.filter((x, i, a) => a.findIndex(i => i.user === x.user) === i).length}
      messageCount={messages.length}
      lastMessageDate={messages[messages.length - 1]?.createdAt}
    />
    <MessageList
      userId={currentUser.userId}
      messages={messages}
      reactions={reactions}
      onMessageDelete={onMessageDelete}
      onSetUpdatedMessage={setUpdatedMessage}
      toggleReaction={toggleReaction}
    />
    <MessageInput
      user={currentUser}
      onMessageSend={onMessageSend}
      updatedMessage={updatedMessage}
      onMessageUpdate={onMessageUpdate}
    />
  </div>;
}

export default Chat;
