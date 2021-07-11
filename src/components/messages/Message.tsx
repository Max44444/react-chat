import React, { FC } from 'react';
import moment from 'moment';
import './message.scss';
import { IMessage } from '../../common/interfaces';

interface MessageProps {
  message: IMessage,
  likeCount: number,
  isCurrentUserLike: boolean,
  toggleReaction(messageId: string): void
}

export const Message: FC<MessageProps> = ({
  message,
  likeCount,
  isCurrentUserLike,
  toggleReaction
}) => {
  return <div className="message-wrapper">
    <div className={`message ${isCurrentUserLike && 'message-liked'}`}>
      <img src={message.avatar} alt="avatar" className="message-user-avatar"/>
      <h3 className="message-user-name">{ message.user }</h3>
      <p className="message-text">{ message.text }</p>
      <div className="info">
        <div className={`likes ${isCurrentUserLike && 'liked'}`}>
          <button
            className="message-like"
            onClick={() => toggleReaction(message.id)}
          >
            <i className="fas fa-thumbs-up"/>
          </button>
          <div className='like-count'>{ likeCount }</div>
        </div>
        <div className="message-time">
          {
            !!message.editedAt ?
              `Edited at: ${moment(message.editedAt).format('HH:mm')}` :
              moment(message.createdAt).format('HH:mm')
          }
        </div>
      </div>
    </div>
  </div>
}