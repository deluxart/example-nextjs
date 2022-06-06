import Link from 'next/link';

import styles from './Navigation.module.scss';

export const Navigation = () => (
  <nav className={styles.Navigation}>
    <ul>
      <li>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href={'/how-it-works'}>
          <a>How it works?</a>
        </Link>
      </li>
      <li>
        <Link href={'/contacts'}>
          <a>Contacts</a>
        </Link>
      </li>
    </ul>
  </nav>
);
