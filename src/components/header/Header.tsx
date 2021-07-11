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
    <p className='header-users-count'><span>{ usersCount }</span> participant{ usersCount === 1 ? '' : 's' }</p>
    <p className='header-messages-count'><span>{ messageCount }</span> messages{ messageCount === 1 ? '' : 's' }</p>
    {lastMessageDate &&
      <p className='header-last-message-date'>last message at: <span>{
        moment(lastMessageDate).format('MMM Do YY HH:mm')
      }</span></p>
    }
  </header>
);