import { IMessage } from '../common/interfaces';

export const loadMessages = async (url: string): Promise<IMessage[]> => {
  return fetch(url)
    .then(response => response.json())
    .then(array => array.map((i: any) => ({
      ...i,
      createdAt: new Date(i.createdAt),
      updatedAt: new Date(i.updatedAt)
    })))
};