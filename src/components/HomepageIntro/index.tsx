import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

export default function HomepageIntro(): ReactNode {
  return (
    <main className={styles.introSection}>
      <div className={styles.introContent}>
        <p className={styles.eyebrow}>
          <Translate id="homepage.intro.eyebrow">
            Di cosa parla questo spazio
          </Translate>
        </p>
        <Heading as="h2" className={styles.introTitle}>
          <Translate id="homepage.intro.title">
            Tecnologia, esperienze e idee da condividere.
          </Translate>
        </Heading>
        <p className={styles.introDescription}>
          <Translate id="homepage.intro.description">
            Un diario professionale in cui racconto il mio percorso tra sviluppo
            software, dati e lavoro di squadra: progetti, riflessioni e curiosità
            nate sul campo.
          </Translate>
        </p>
        <Link className={styles.introLink} to="/whoami">
          <Translate id="homepage.intro.link">Scopri chi sono</Translate>{' '}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
