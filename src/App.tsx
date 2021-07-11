import React, { FC } from 'react';
import './app.scss';
import Chat from './components/chat';

const App: FC = () => {
  const url = 'https://edikdolynskyi.github.io/react_sources/messages.json';
  return <Chat url={url}/>
}

export default App;
