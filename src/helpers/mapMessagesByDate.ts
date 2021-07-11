import { IMessage, IMessagesDictionary } from '../common/interfaces';
import moment from 'moment';

export const mapMessagesByDate = (messages: IMessage[]): IMessagesDictionary => {
  const result: IMessagesDictionary = {};

  messages
    .forEach(item => {
      const date = moment(item.createdAt).calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        lastDay: '[Yesterday]',
        sameElse: 'dddd, DD MMMM'
      });
      !result[date] ? result[date] = [item] : result[date].push(item);
    });

  return result
}