import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

export default function HomepageIntro(): ReactNode {
  return (
    <main className={styles.introSection}>
      <div className={styles.introContent}>
        <p className={styles.eyebrow}>Di cosa parla questo spazio</p>
        <Heading as="h2" className={styles.introTitle}>
          Tecnologia, esperienze e idee da condividere.
        </Heading>
        <p className={styles.introDescription}>
          Un diario professionale in cui racconto il mio percorso tra sviluppo
          software, dati e lavoro di squadra: progetti, riflessioni e curiosità
          nate sul campo.
        </p>
        <Link className={styles.introLink} to="/whoami">
          Scopri chi sono <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
