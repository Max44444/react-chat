import React, { FC, useEffect, useRef, useState } from 'react';
import { IMessage, IMessagesDictionary } from '../../common/interfaces';
import './message-list.scss';
import { Message, OwnMessage } from '../messages';
import { mapMessagesByDate } from '../../helpers';

interface MessageListProps {
  userId: string,
  messages: IMessage[]
}

export const MessageList: FC<MessageListProps> = ({ userId, messages }) => {

  const [messageDictionary, setMessageDictionary] = useState<IMessagesDictionary>({});
  useEffect(() => setMessageDictionary(mapMessagesByDate(messages)), [messages]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => messagesEndRef.current!.scrollIntoView());

  return <main className="message-list">
    {
      Object.keys(messageDictionary).map(key => <>
        <div className="date" data-date={key}/>
        { messageDictionary[key].map(message => (
          message.userId === userId ?
            <OwnMessage
              id={message.id}
              text={message.text}
              time={message.editedAt ? message.editedAt : message.createdAt}
              userAvatarLink={message.avatar}
              edited={!!message.editedAt}/> :
            <Message
              id={message.id}
              text={message.text}
              time={message.editedAt ? message.editedAt : message.createdAt}
              username={message.user}
              userAvatarLink={message.avatar}
              edited={!!message.editedAt}/>
        )) }
      </>)
    }
    <div ref={messagesEndRef}/>
  </main>;
}