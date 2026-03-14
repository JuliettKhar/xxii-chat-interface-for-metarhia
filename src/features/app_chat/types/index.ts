export interface IChatMessage {
  title: string;
  author: string;
  time: string | Date;
  body: string;
  replies: number;
  reactions: IChatMessageReaction[];
}

interface IChatMessageReaction {
  emoji: string;
  count: number;
}
