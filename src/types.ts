declare global {
  interface Card {
    id: number | null | undefined;
    src: string;
    matched: boolean;
  }
}

export {};
