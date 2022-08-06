import { useCards } from '../hooks';
import { CardsTable } from './CardsTable/CardsTable';
import styles from './App.module.css';

const App = () => {
  const cards = useCards(2, { product_id: 31 });
  return (
    <div className={styles.App}>{cards === undefined ? <></> : <CardsTable cards={cards} />}</div>
  );
};

export default App;
