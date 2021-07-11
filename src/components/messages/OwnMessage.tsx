import React, { FC } from 'react';
import moment from 'moment';
import './message.scss';
import './own-message.scss';

interface OwnMessageProps {
  id: string
  text: string,
  time: Date,
  edited?: boolean
  userAvatarLink?: string
}

export const OwnMessage: FC<OwnMessageProps> = ({
  id,
  text,
  time,
  edited,
  userAvatarLink
}) => {
  return <div className="message-wrapper own-message-wrapper" key={id}>
    <div className="message own-message">
      <img src={userAvatarLink} alt="avatar" className="message-user-avatar"/>
      <p className="message-text">{ text }</p>
      <div className="info">
        <div className="message-time">
          { `${ edited ? 'Edited at:' : '' }${ moment(time).format('LT') }` }
        </div>
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
