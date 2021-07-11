import React, { FC, useEffect, useRef, useState } from 'react';
import { IMessage, IMessagesDictionary } from '../../common/interfaces';
import './message-list.scss';
import { Message, OwnMessage } from '../messages';
import { mapMessagesByDate } from '../../helpers';

interface MessageListProps {
  userId: string,
  messages: IMessage[],
  onMessageDelete(id: string): void,
  onSetUpdatedMessage(message: IMessage): void
}

export const MessageList: FC<MessageListProps> = ({
  userId,
  messages,
  onMessageDelete,
  onSetUpdatedMessage
}) => {

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
              message={message}
              onDelete={onMessageDelete}
              onUpdate={onSetUpdatedMessage}
            /> :
            <Message message={message} />
        )) }
      </>)
    }
    <div ref={messagesEndRef}/>
  </main>;
}