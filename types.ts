export interface MemoryImage {
  id: string;
  url: string;
  caption?: string;
}

export interface FilmReelProps {
  images: MemoryImage[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
}

export interface FriendMessage {
  id: string;
  name: string;
  message: string;
}

export interface MessageRowProps {
  messages: FriendMessage[];
  title?: string;
}