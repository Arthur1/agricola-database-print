import axios from 'axios';
import type { Card, Revision } from '../domains';

export interface FetchCardsParams {
  product_id?: number;
}

interface ApiCardsResponse {
  cards: Card[];
}

export const fetchCards = async (
  revision: Revision,
  params: FetchCardsParams,
): Promise<Card[] | undefined> => {
  try {
    const res = await axios.get<ApiCardsResponse>(
      `https://api.db.buratsuki.page/AG${revision}/cards`,
      {
        params,
      },
    );
    return res.data.cards;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
