'use client';
import type { Metadata } from 'next';

import styles from '@/shared/lib/styles/not-found.module.css';

export const metadata: Metadata = {
  description:
    'По неизвестной причине произошла ошибка. Приносим свои извинения за доставленные неудобства. Мы оперативно пытаемся решить возникшую проблему.',
  title: 'Проблемы в работе сайта',
};

type TProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const GlobalError = ({ reset }: TProps) => (
  <>
    <main>
      <section className={styles.section}>
        <span className={styles.number}>Error</span>
        <h1 className={styles.title}>Что-то пошло не так</h1>
        <p className={styles.text}>
          По неизвестной причине произошла ошибка. Приносим свои извинения за
          доставленные неудобства. Мы оперативно пытаемся решить возникшую
          проблему.
        </p>
        <button onClick={() => reset()}>Попробовать еще раз</button>
      </section>
    </main>
  </>
);

export default GlobalError;
