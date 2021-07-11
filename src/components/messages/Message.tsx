import React, { FC } from 'react';
import moment from 'moment';
import './message.scss';
import { IMessage } from '../../common/interfaces';

interface MessageProps {
  message: IMessage
}

export const Message: FC<MessageProps> = ({ message }) => {
  return <div className="message-wrapper" key={message.id}>
    <div className="message">
      <img src={message.avatar} alt="avatar" className="message-user-avatar"/>
      <h3 className="message-user-name">{ message.user }</h3>
      <p className="message-text">{ message.text }</p>
      <div className="info">
        <div className="likes">
          <button className="message-like">
            <i className="fas fa-thumbs-up"/>
          </button>
          { message.likeCount && <div className="like-count">{ message.likeCount }</div> }
        </div>
        <div className="message-time">
          {
            !!message.editedAt ?
              `Edited at: ${moment(message.editedAt).format('LT')}` :
              moment(message.createdAt).format('LT')
          }
        </div>
      </div>
    </div>
  </div>
}