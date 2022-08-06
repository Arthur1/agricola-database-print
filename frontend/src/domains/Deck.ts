import type { Revision } from './Revision';

export interface Deck {
  id: number;
  name_ja: string;
  name_en: string;
  revision_id: Revision;
}
