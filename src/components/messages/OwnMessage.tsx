import React, { FC } from 'react';
import moment from 'moment';
import './message.scss';
import './own-message.scss';

interface OwnMessageProps {
  text: string,
  time: Date,
  userAvatarLink: string
}

export const OwnMessage: FC<OwnMessageProps> = ({
  text,
  time,
  userAvatarLink
}) => {
  return <div className="message-wrapper own-message-wrapper">
    <div className="message own-message">
      <img src={userAvatarLink} alt="avatar" className="message-user-avatar"/>
      <h3 className="message-user-name">You</h3>
      <p className="message-text">{ text }</p>
      <div className="info">
        <div className="message-time">{ moment(time).format('LT') }</div>
        <div className="control">
          <button className="message-edit">
            <i className="fas fa-edit"/>
          </button>
          <button className="message-delete">
            <i className="fas fa-trash-alt"/>
          </button>
        </div>
      </div>
    </div>
  </div>
}
