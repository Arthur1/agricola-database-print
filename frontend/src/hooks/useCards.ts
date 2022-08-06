import { useEffect, useState } from 'react';
import { fetchCards, FetchCardsParams } from '../api/cards';
import type { Card, Revision } from '../domains';

export const useCards = (revision: Revision, params: FetchCardsParams) => {
  const [cards, setCards] = useState<Card[] | undefined>(undefined);

  useEffect(() => {
    const updateCards = async (revision: Revision, params: FetchCardsParams) => {
      setCards(await fetchCards(revision, params));
    };
    updateCards(revision, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return cards;
};
