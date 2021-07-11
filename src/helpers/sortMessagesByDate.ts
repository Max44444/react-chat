import { IMessage } from '../common/interfaces';

export const sortMessagesByDate = (messages: IMessage[]): IMessage[] => {
  return messages
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
}