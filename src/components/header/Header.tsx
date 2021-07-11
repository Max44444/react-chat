import React, { FC } from 'react';
import './header.scss';
import moment from 'moment';

interface HeaderProps {
  title: string,
  usersCount: number,
  messageCount: number,
  lastMessageDate?: Date
}

export const Header: FC<HeaderProps> = ({
  title,
  usersCount,
  messageCount,
  lastMessageDate
}) => (
  <header className="header">
    <h2 className="header-title">{ title }</h2>
    <div className="block">
      <div className="header-users-count block-value">{ usersCount }</div>
      <div className="block-title">participant{ usersCount === 1 ? '' : 's' }</div>
    </div>
    <div className="block">
      <div className="header-messages-count block-value">{ messageCount }</div>
      <div className="block-title">messages{ messageCount === 1 ? '' : 's' }</div>
    </div>

    {lastMessageDate &&
    <div className="block">
      <div className="block-title">last message at:</div>
      <div className="header-last-message-date block-value">
        { moment(lastMessageDate).format('MMM Do YY HH:mm') }
      </div>
    </div>
    }
  </header>
);