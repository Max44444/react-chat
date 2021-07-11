import React, { FC, FormEvent, useEffect, useState } from 'react';
import './message-input.scss';
import { IMessage, IUser } from '../../common/interfaces';

interface MessageInputProps {
  user: IUser,
  onMessageSend(message: IMessage): void,
  updatedMessage?: IMessage,
  onMessageUpdate(message: IMessage): void
}

export const MessageInput: FC<MessageInputProps> = ({
  user,
  onMessageSend,
  updatedMessage,
  onMessageUpdate
}) => {
  const [inputText, setInputText] = useState<string>('');

  useEffect(() => setInputText(updatedMessage?.text || ''), [updatedMessage]);

  const createMessage = (text: string, message: IMessage = {
    text: '',
    ...user,
    id: Date.now().toString(),
    createdAt: new Date()
  }): IMessage => ({ ...message, text: text.trim() });

  const onSubmit = (event: FormEvent): void => {
    event.preventDefault();

    if (updatedMessage) {
      onMessageUpdate(createMessage(inputText, { ...updatedMessage, editedAt: new Date() }))
    } else if (inputText.trim()) {
      onMessageSend(createMessage(inputText));
    }
    setInputText('');
  };

  return <footer className="footer">
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        className='message-input'
        placeholder="Write a message..."
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <button
        type="submit"
        className="submit-btn"
      >Send</button>
    </form>
  </footer>
}
