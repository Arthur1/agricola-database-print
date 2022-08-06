import type { CardType } from './CardType';
import type { Deck } from './Deck';
import type { Revision } from './Revision';

export interface Card {
  id: number;
  literal_id: string | null;
  printed_id: string | null;
  playagricola_card_id: number | null;
  revision_id: Revision;
  name_ja: string;
  name_en: string;
  min_players_number: number | null;
  imp_prereq: string | null;
  imp_cost: string | null;
  description: string;
  ja_is_official: string;
  vps: number;
  has_arrow: boolean;
  has_bonus: boolean;
  has_neg_bonus: boolean;
  has_pan_icon: boolean;
  has_bread_icon: boolean;
  products: [];
  deck: Deck | null;
  type: CardType;
  ag2_category_icon: null;
  origin_cards: Card[];
  republished_cards: Card[];
}
