import {Children, isValidElement, type ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import TOC from '@theme/TOC';
import TOCCollapsible from '@theme/TOCCollapsible';

import styles from './styles.module.css';

type CVContact = {
  label: string;
  href?: string;
};

type CVTemplateProps = {
  title: string;
  description: string;
  name: string;
  position: string;
  photoPath: string;
  contacts: CVContact[];
  personalDetails: string;
  downloadPath: string;
  downloadLabel: string;
  footer: string;
  children: ReactNode;
};

type CVExperienceProps = {
  date: string;
  role: string;
  company: string;
  location: string;
  children: ReactNode;
};

type CVEducationProps = {
  date: string;
  degree: string;
  level: string;
  institution: string;
  thesis: string;
  children?: ReactNode;
};

type CVSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function CVSection({
  id,
  title,
  children,
}: CVSectionProps): ReactNode {
  return (
    <section className={styles.section}>
      <Heading as="h2" id={id} className={styles.sectionTitle}>
        {title}
      </Heading>
      {children}
    </section>
  );
}

export function CVLanguageList({children}: {children: ReactNode}): ReactNode {
  return <div className={styles.languages}>{children}</div>;
}

export function CVLanguage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}): ReactNode {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export function CVNote({children}: {children: ReactNode}): ReactNode {
  return <p className={styles.note}>{children}</p>;
}

export function CVExperience({
  date,
  role,
  company,
  location,
  children,
}: CVExperienceProps): ReactNode {
  return (
    <article className={styles.entry}>
      <p className={styles.date}>{date}</p>
      <div className={styles.entryContent}>
        <Heading as="h3" className={styles.entryTitle}>
          {role}
        </Heading>
        <p className={styles.organization}>
          <strong>{company}</strong> · {location}
        </p>
        {children}
      </div>
    </article>
  );
}

export function CVEducation({
  date,
  degree,
  level,
  institution,
  thesis,
  children,
}: CVEducationProps): ReactNode {
  return (
    <article className={styles.entry}>
      <p className={styles.date}>{date}</p>
      <div className={styles.entryContent}>
        <Heading as="h3" className={styles.entryTitle}>
          {degree}
        </Heading>
        <p className={styles.level}>{level}</p>
        <p className={styles.organization}>{institution}</p>
        <p>
          <strong>
            <Translate id="cv.thesis">Tesi</Translate>
          </strong> · {thesis}
        </p>
        {children}
      </div>
    </article>
  );
}

export default function CVTemplate({
  title,
  description,
  name,
  position,
  photoPath,
  contacts,
  personalDetails,
  downloadPath,
  downloadLabel,
  footer,
  children,
}: CVTemplateProps): ReactNode {
  const photoUrl = useBaseUrl(photoPath);
  const downloadUrl = useBaseUrl(downloadPath);
  const toc = Children.toArray(children).flatMap((child) =>
    isValidElement<CVSectionProps>(child) && child.type === CVSection
      ? [{id: child.props.id, value: child.props.title, level: 2}]
      : [],
  );
  const outlineLabel = translate({
    id: 'cv.outline',
    message: 'In questa pagina',
  });

  return (
    <Layout title={title} description={description}>
      <main className={styles.page}>
        <div className={styles.contentLayout}>
          <div className={styles.document}>
            <div className={styles.toolbar}>
              <a
                className="button button--primary"
                href={downloadUrl}
                target="_blank"
                rel="noreferrer">
                {downloadLabel}
              </a>
            </div>

            <nav className={styles.mobileOutline} aria-label={outlineLabel}>
              <TOCCollapsible toc={toc} />
            </nav>

            <article className={styles.resume}>
          <header className={styles.profile}>
            <img className={styles.portrait} src={photoUrl} alt={name} />
            <div className={styles.profileContent}>
              <p className={styles.eyebrow}>
                <Translate id="cv.eyebrow">Curriculum vitae</Translate>
              </p>
              <Heading as="h1" className={styles.name}>
                {name}
              </Heading>
              <p className={styles.position}>{position}</p>
              <ul className={styles.contactList}>
                {contacts.map(({label, href}) => (
                  <li key={`${label}-${href ?? ''}`}>
                    {href ? <a href={href}>{label}</a> : label}
                  </li>
                ))}
              </ul>
              <p className={styles.personalDetails}>{personalDetails}</p>
            </div>
          </header>

          {children}

          <footer className={styles.resumeFooter}>{footer}</footer>
            </article>
          </div>
          <aside className={styles.outline}>
            <nav aria-label={outlineLabel}>
              <p className={styles.outlineTitle}>{outlineLabel}</p>
              <TOC toc={toc} />
            </nav>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
