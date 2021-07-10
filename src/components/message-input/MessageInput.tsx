import React, { FC } from 'react';
import './MessageInput.scss';

interface MessageInputProps {
}

export const MessageInput: FC<MessageInputProps> = () => {
  return <footer className="footer">
    <form className="form">
      <input type="text" className='message-input' placeholder="Write a message..."/>
      <button type="submit" className="submit-btn">Send</button>
    </form>
  </footer>
}
