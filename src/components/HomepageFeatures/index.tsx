import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate id="homepage.features.easyToUse.title">Facile da usare</Translate>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate id="homepage.features.easyToUse.description">
        Progettato per essere installato facilmente e per aiutarti a mettere
        online il tuo sito in poco tempo.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.focus.title">
        Concentrati su ciò che conta
      </Translate>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate id="homepage.features.focus.description">
        Concentrati sulla documentazione: sposta i tuoi contenuti nella cartella
        docs e lascia a Docusaurus il resto.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.react.title">Realizzato con React</Translate>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate id="homepage.features.react.description">
        Estendi o personalizza il tuo sito riutilizzando i componenti React e lo
        stesso layout per intestazione e piè di pagina.
      </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
