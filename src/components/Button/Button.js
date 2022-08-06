import css from 'components/Button/Button.module.css';

export const Button = ({ loadMore }) => (
  <button onClick={loadMore} type="button" className={css.button}>
    Load more
  </button>
);
