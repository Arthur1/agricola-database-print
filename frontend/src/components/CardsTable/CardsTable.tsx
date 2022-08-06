import type { FC } from 'react';
import type { Card } from '../../domains';
import styles from './CardsTable.module.css';
import { CardsTableCell } from './CardsTableCell/CardsTableCell';

interface CardsTableProps {
  readonly cards: Card[];
}

export const CardsTable: FC<CardsTableProps> = ({ cards }) => {
  const cardsChunks = cards.reduce(
    (acc: Card[][], _c, i) => (i % 3 ? acc : [...acc, ...[cards.slice(i, i + 3)]]),
    [],
  );

  return (
    <table className={styles.CardsTable}>
      <tbody>
        {cardsChunks.map((cardsChunk) => (
          <tr className={styles.CardsTableRow}>
            {cardsChunk.map((card) => (
              <CardsTableCell card={card} key={card.id} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
