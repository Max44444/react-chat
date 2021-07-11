export interface IMessage {
  id: string,
  userId: string,
  avatar?: string,
  user: string,
  text: string,
  createdAt: Date,
  editedAt?: Date,
  likeCount?: number
}

export interface IMessagesDictionary {
  [id: string]: IMessage[]
}

export interface IUser {
  userId: string,
  user: string,
  avatar?: string
}