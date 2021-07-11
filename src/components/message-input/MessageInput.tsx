import React, { FC, FormEvent, useRef } from 'react';
import './message-input.scss';
import { IMessage, IUser } from '../../common/interfaces';

interface MessageInputProps {
  user: IUser,
  onMessageSend(message: IMessage): void;
}

export const MessageInput: FC<MessageInputProps> = ({ user, onMessageSend }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const text = inputRef.current!.value;
    inputRef.current!.value = '';

    if (!text.trim()) {
      return
    }

    const message: IMessage = {
      ...user,
      text,
      id: Date.now().toString(),
      createdAt: new Date()
    }

    onMessageSend(message);
  };

  return <footer className="footer">
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        className='message-input'
        placeholder="Write a message..."
        ref={inputRef}/>
      <button type="submit" className="submit-btn">Send</button>
    </form>
  </footer>
}
