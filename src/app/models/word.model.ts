export type WordKind = 'odd' | 'even';

export interface Word {
  text: string;
  length: number;
  kind: WordKind;
}