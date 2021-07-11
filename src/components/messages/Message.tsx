import React, { FC } from 'react';
import moment from 'moment';
import './message.scss';

interface MessageProps {
  id: string,
  text: string,
  time: Date,
  edited?: boolean,
  username: string,
  userAvatarLink?: string
}

export const Message: FC<MessageProps> = ({
  id,
  text,
  time,
  edited,
  username,
  userAvatarLink
}) => {
  return <div className="message-wrapper" key={id}>
    <div className="message">
      <img src={userAvatarLink} alt="avatar" className="message-user-avatar"/>
      <h3 className="message-user-name">{ username }</h3>
      <p className="message-text">{ text }</p>
      <div className="info">
        <button className="message-like">
          <i className="fas fa-thumbs-up"/>
        </button>
        <div className="message-time">
          { `${ edited ? 'Edited at: ' : '' }${ moment(time).format('LT') }` }
        </div>
      </div>
    </div>
  </div>
}