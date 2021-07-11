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
  <header className='header'>
    <h2 className="header-title">{ title }</h2>
    <p className='header-users-count'>{ usersCount } participant{ usersCount === 1 ? '' : 's' }</p>
    <p className='header-messages-count'>{ messageCount } messages{ messageCount === 1 ? '' : 's' }</p>
    {lastMessageDate &&
      <p className='header-last-message-date'>last message at: { moment(lastMessageDate).format('lll') }</p>
    }
  </header>
);