import type { Metadata } from 'next';

import { ROUTES } from '@/shared/lib/constants/routes';
import styles from '@/shared/lib/styles/not-found.module.css';

export const metadata: Metadata = {
  description:
    'Страница не найдена. Возможно, вы набрали неправильный адрес или перешли по устаревшей ссылке',
  title: '404 Страница не найдена',
};

export default function NotFound() {
  return (
    <>
      <main>
        <section className={styles.section}>
          <span className={styles.number}>404</span>
          <h1 className={styles.title}>Страница не найдена</h1>
          <p className={styles.text}>
            Возможно, вы набрали неправильный адрес или перешли по устаревшей
            ссылке
          </p>
          <a className={styles.link} href={ROUTES.main}>
            Вернуться на главную
          </a>
        </section>
      </main>
    </>
  );
}
