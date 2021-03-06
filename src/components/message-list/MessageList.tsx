import React, { FC, useEffect, useRef, useState } from 'react';
import { IMessage, IMessagesDictionary, IReaction } from '../../common/interfaces';
import './message-list.scss';
import { Message, OwnMessage } from '../messages';
import { mapMessagesByDate } from '../../helpers';

interface MessageListProps {
  userId: string,
  messages: IMessage[],
  reactions: IReaction[],
  onMessageDelete(id: string): void,
  onSetUpdatedMessage(message: IMessage): void,
  toggleReaction(userId: string, messageId: string): void
}

export const MessageList: FC<MessageListProps> = ({
  userId,
  messages,
  reactions,
  onMessageDelete,
  onSetUpdatedMessage,
  toggleReaction
}) => {

  const [messageDictionary, setMessageDictionary] = useState<IMessagesDictionary>({});
  useEffect(() => setMessageDictionary(mapMessagesByDate(messages)), [messages]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => messagesEndRef.current!.scrollIntoView());

  return <main className="message-list">
    {
      Object.keys(messageDictionary).map((key, index) => <div key={index}>
        <div className="divider" key={index}>
          <div className="messages-divider">{ key }</div>
        </div>
        { messageDictionary[key].map(message => (
          message.userId === userId ?
            <OwnMessage
              key={message.id + Date.now() + index}
              message={message}
              likeCount={reactions.filter(item => item.messageId === message.id).length}
              onDelete={onMessageDelete}
              onUpdate={onSetUpdatedMessage}
            /> :
            <Message
              key={message.id + Date.now() + index}
              message={message}
              likeCount={reactions.filter(item => item.messageId === message.id).length}
              toggleReaction={messageId => toggleReaction(userId, messageId)}
              isCurrentUserLike={
                reactions.findIndex(item => item.userId === userId && item.messageId === message.id) !== -1
              }
            />
        )) }
      </div>)
    }
    <div ref={messagesEndRef}/>
  </main>;
}