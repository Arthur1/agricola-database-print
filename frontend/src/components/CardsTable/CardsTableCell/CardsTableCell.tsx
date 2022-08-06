import type { FC } from 'react';
import { Card } from '../../../domains';
import styles from './CardsTableCell.module.css';

interface CardsTableCellProps {
  card: Card;
}

export const CardsTableCell: FC<CardsTableCellProps> = ({ card }) => {
  return (
    <td className={styles.CardsTableCell}>
      <span className={styles.CardTitle}>
        [{card.printed_id}] {card.name_ja}
      </span>
      <br />
      {card.imp_prereq && (
        <>
          <span>(前提) {card.imp_prereq}</span>
          <br />
        </>
      )}
      <span>{card.description}</span>
    </td>
  );
};
