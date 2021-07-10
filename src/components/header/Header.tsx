import React, { FC } from 'react';
import './Header.scss';
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
    <h2 className="title">{ title }</h2>
    <p className=''>{ usersCount } participant{ usersCount === 1 ? '' : 's' }</p>
    <p className=''>{ messageCount } messages{ messageCount === 1 ? '' : 's' }</p>
    {lastMessageDate &&
      <p className=''>last message at: { moment(lastMessageDate).format('lll') }</p>
    }
  </header>
);