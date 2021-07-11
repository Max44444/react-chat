import React, { FC } from 'react';
import moment from 'moment';
import './message.scss';
import './own-message.scss';
import { IMessage } from '../../common/interfaces';

interface OwnMessageProps {
  message: IMessage,
  onDelete(id: string): void,
  onUpdate(message: IMessage): void
}

export const OwnMessage: FC<OwnMessageProps> = ({
  message,
  onDelete,
  onUpdate
}) => {
  return <div className="message-wrapper own-message-wrapper" key={message.id}>
    <div className="message own-message">
      <img src={message.avatar} alt="avatar" className="message-user-avatar"/>
      <p className="message-text">{ message.text }</p>
      <div className="info">
        <div className="message-time">
          {
            !!message.editedAt ?
              `Edited at: ${moment(message.editedAt).format('LT')}` :
              moment(message.createdAt).format('LT')
          }
        </div>
        <div className="control">
          <button
            className="message-edit"
            onClick={() => onUpdate(message)}
          >
            <i className="fas fa-edit"/>
          </button>
          <button
            className="message-delete"
            onClick={() => onDelete(message.id)}
          >
            <i className="fas fa-trash-alt"/>
          </button>
        </div>
      </div>
    </div>
  </div>
}
