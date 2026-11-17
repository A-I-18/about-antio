import type {ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import CVTemplate, {
  CVEducation,
  CVExperience,
  CVLanguage,
  CVLanguageList,
  CVNote,
  CVSection,
} from '@site/src/components/CVTemplate';

export default function CurriculumVitae(): ReactNode {
  return (
    <CVTemplate
      title={translate({id: 'cv.header.title', message: 'Curriculum'})}
      description={translate({id: 'cv.header.description', message: 'Curriculum vitae di Antonio Ionta, Software Engineer e Tech Leader.'})}
      name="Antonio Ionta"
      position={translate({id: 'cv.header.position', message: 'Software Engineer e Tech Leader'})}
      photoPath="/img/Ionta_Antonio-Foto.jpg"
      contacts={[
        {label: translate({id: 'cv.header.address', message: '04100 Latina (LT), Italia'})},
        {label: '+39 3407016687', href: 'tel:+393407016687'},
        {
          label: 'antonio.ionta.18@gmail.com',
          href: 'mailto:antonio.ionta.18@gmail.com',
        },
        {label: 'github.com/A-I-18', href: 'https://github.com/A-I-18'},
        {
          label: 'linkedin.com/in/antonio-ionta',
          href: 'https://www.linkedin.com/in/antonio-ionta/',
        },
      ]}
      personalDetails={translate({id: 'cv.header.personalDetails', message: '18 settembre 1992 · Cittadinanza italiana'})}
      downloadPath={translate({id: 'cv.header.downloadPath', message: '/resources/Ionta_Antonio-CV.Europass-IT.pdf'})}
      downloadLabel={translate({id: 'cv.header.downloadLabel', message: 'Scarica il CV in PDF'})}
      footer={translate({id: 'cv.header.footer', message: 'Agosto 2026'})}>
      <CVSection id="profile" title={translate({id: 'cv.sections.profile.title', message: 'Profilo'})}>
        <p><Translate id="cv.sections.profile.paragraph.1">Esperto nel coordinamento di progetti che coinvolgono l’intero ciclo di vita dello sviluppo software, sia dal punto di vista tecnico che gestionale. Sviluppatore di applicazioni Web back-end con Java EE e l’ausilio dei framework Spring e Quarkus e della tecnologia JPA. Ambito microservizi in-cloud. Sviluppatore di applicazioni middleware back-end con Apache WSO2, Scala e Spark, nel contesto del Data Engineering. Convinto sostenitore del Test Driven Development (TDD). Esperto nei principi di sviluppo agile e nell’adesione alla metodologia SCRUM. Affascinato dallo sviluppo front-end, coltivato solo con piccoli progetti in ambito accademico. Appassionato Community Manager.</Translate></p>
      </CVSection>

      <CVSection id="experience" title={translate({id: 'cv.sections.experience.title', message: 'Esperienza professionale'})}>

        <CVExperience
          date={translate({id: 'cv.experience.adesso.date', message: 'Gen 2026 – oggi'})}
          role={translate({id: 'cv.experience.adesso.role', message: 'Back-end Software Engineer'})}
          company="Adesso Italy S.r.l."
          location={translate({id: 'cv.experience.adesso.location', message: 'Viale Edoardo Jenner, 51 – 20159 Milano (MI), Italia'})}>
          <p><Translate id="cv.experience.adesso.paragraph.1">Nel team di sviluppo di un ecosistema a microservizi per il cliente GNV (Grandi Navi Veloci S.p.A.): porting del sistema legacy di prenotazioni per trasporto marittimo, passeggeri e merci, con focus sui processi di back-office e integrazione con sistemi portuali.</Translate></p>
          <ul>
            <li><Translate id="cv.experience.adesso.responsibility.1">Progettazione e sviluppo di servizi back-end in Java (Spring), con pattern architetturali per la gestione della complessità distribuita, tra cui Saga per la transazionalità.</Translate></li>
            <li><Translate id="cv.experience.adesso.responsibility.2">Gestione della persistenza su database relazionali tramite JPA.</Translate></li>
            <li><Translate id="cv.experience.adesso.responsibility.3">Comunicazione asincrona con Kafka e caching con Redis ed Elasticsearch per l’ottimizzazione delle performance.</Translate></li>
            <li><Translate id="cv.experience.adesso.responsibility.4">Partecipazione al contesto organizzativo LeSS (Large-Scale Scrum), con contributo alla definizione del backlog tramite reverse engineering del sistema legacy. Utilizzo della suite Atlassian (Bitbucket, Jira, Confluence).</Translate></li>
            <li><Translate id="cv.experience.adesso.responsibility.5">Utilizzo di GitHub Copilot a supporto della definizione funzionale e dello sviluppo.</Translate></li>
          </ul>
        </CVExperience>

        <CVExperience
          date={translate({id: 'cv.experience.bemind.date', message: 'Lug 2025 – Dic 2025'})}
          role={translate({id: 'cv.experience.bemind.role', message: 'Software Engineer'})}
          company="Bemind Interactive S.r.l."
          location={translate({id: 'cv.experience.bemind.location', message: 'Via del Truglio, 1 – 04100 Latina (LT), Italia'})}>
          <p><Translate id="cv.experience.bemind.paragraph.1">Sviluppo e deploy di applicazioni Web full-stack con TypeScript e Node.js e integrazione di tool AI. Impostazione del flusso di lavoro agile e dell’issue tracking.</Translate></p>
          <ul>
            <li><Translate id="cv.experience.bemind.responsibility.1">Sviluppo e deploy autonomo di un’applicazione Fastify per attività di data scraping, processamento tramite OCR (Llama Parse) e persistenza tramite ORM (Prisma).</Translate></li>
            <li><Translate id="cv.experience.bemind.responsibility.2">Sviluppo AI-driven di componenti per “Optims”, piattaforma SaaS per la gestione di cantieri, persone, attrezzature, formazione e compliance in edilizia. Lavoro in team con Next.js, NestJS e Prisma; deploy su Railway e workflow agentico con Claude Code, Codex e Cursor, integrati tramite MCP con Chrome DevTools e ClickUp.</Translate></li>
          </ul>
        </CVExperience>

        <CVExperience
          date={translate({id: 'cv.experience.aizoon.date', message: 'Mag 2023 – Giu 2025'})}
          role={translate({id: 'cv.experience.aizoon.role', message: 'Back-end Software Engineer e Tech Leader'})}
          company="AizoOn Consulting S.r.l."
          location={translate({id: 'cv.experience.aizoon.location', message: 'Via Luca Gaurico, 9/11 – 00143 Roma, Italia'})}>
          <p><Translate id="cv.experience.aizoon.paragraph.1">Progettazione, sviluppo e manutenzione di “aramis”, piattaforma di monitoraggio reti per il rilevamento di rischi cybersecurity con Machine Learning. Architettura monolitica suddivisa in componenti funzionali cooperanti secondo un plugin pattern e con Apache Kafka. Back-end Java/Spring, approccio TDD e quality assurance con SonarQube. Tra i leader tecnici del gruppo di lavoro.</Translate></p>
          <p><Translate id="cv.experience.aizoon.paragraph.2">Alla guida di un progetto per un portale Web a microservizi per la Pubblica Amministrazione, pubblicato su cloud Azure. Back-end ibrido Java/Spring e Python/FastAPI, autenticazione tramite provider multipli (tra cui SPID, CIE e CNS) e autorizzazione custom con Spring Security. Leadership tecnica e gestionale.</Translate></p>
          <p><Translate id="cv.experience.aizoon.paragraph.3">Issue tracking secondo la metodologia agile Scrum con YouTrack e Azure DevOps.</Translate></p>
          <ul>
            <li><Translate id="cv.experience.aizoon.responsibility.1">Progettazione dell’architettura e del modello di componenti funzionali Java importabili tramite Maven.</Translate></li>
            <li><Translate id="cv.experience.aizoon.responsibility.2">API Java per MongoDB con funzionalità di basso livello del driver e (de)serializzazioni custom.</Translate></li>
            <li><Translate id="cv.experience.aizoon.responsibility.3">Integrazione della libreria Java Tribuo per operazioni di Machine Learning, tra cui clustering.</Translate></li>
            <li><Translate id="cv.experience.aizoon.responsibility.4">Realizzazione di un sistema di documentazione ad accesso protetto, basato su principi Git-flow-like, con Docusaurus e GitLab Pages.</Translate></li>
            <li><Translate id="cv.experience.aizoon.responsibility.5">Deploy di applicativi Java su server Linux remoti tramite SSH e SystemD; monitoraggio con Telegraf, InfluxDB, Grafana e strumenti JVM.</Translate></li>
            <li><Translate id="cv.experience.aizoon.responsibility.6">Gestione delle modifiche ai database con supporto al rollback, tramite Liquibase e Flyway.</Translate></li>
            <li><Translate id="cv.experience.aizoon.responsibility.7">Utilizzo di servizi Azure, tra cui AD B2C, AKS, Key Vault e data storage.</Translate></li>
          </ul>
        </CVExperience>

        <CVExperience
          date={translate({id: 'cv.experience.exaltechConsulting.date', message: 'Mar 2021 – Mag 2023'})}
          role={translate({id: 'cv.experience.exaltechConsulting.role', message: 'Sviluppatore Back-end'})}
          company="Exaltech S.r.l."
          location={translate({id: 'cv.experience.exaltechConsulting.location', message: 'Via Ufente, 20 – 04100 Latina (LT), Italia'})}>
          <p><Translate id="cv.experience.exaltechConsulting.client">Consulenza full-remote per il cliente e-distribuzione S.p.A. (gruppo Enel).</Translate></p>
          <p><Translate id="cv.experience.exaltechConsulting.paragraph.1">Sviluppo di applicazioni Web back-end con Java EE, Spring e JPA secondo il modello a microservizi e di applicazioni middleware con Apache WSO2, Scala e Spark. Attività nell’ambito di un progetto internazionale di digitalizzazione (“Platformization”) dei dati della rete elettrica.</Translate></p>
          <p><Translate id="cv.experience.exaltechConsulting.paragraph.2">Attività svolte secondo la metodologia agile Scrum, con l’ausilio di Jira.</Translate></p>
          <ul>
            <li><Translate id="cv.experience.exaltechConsulting.responsibility.1">Progettazione e sviluppo di un microservizio per recuperare dati disaggregati da fonti remote (ad esempio file CSV su SharePoint), mapparli, filtrarli, esporli in un altro formato e persisterli su database relazionale tramite inserimenti batch schedulati. Sviluppo del relativo business-service proxy per l’orchestrazione in ambiente di deploy.</Translate></li>
            <li><Translate id="cv.experience.exaltechConsulting.responsibility.2">Analisi, progettazione e sviluppo di business-service batch per integrare grandi quantità di dati da più fonti remote disaggregate.</Translate></li>
            <li><Translate id="cv.experience.exaltechConsulting.responsibility.3">Monitoraggio, manutenzione e debugging di servizi server in ambiente di deploy.</Translate></li>
          </ul>
        </CVExperience>

        <CVExperience
          date={translate({id: 'cv.experience.exaltech.date', message: 'Set 2018 – Mar 2021'})}
          role={translate({id: 'cv.experience.exaltech.role', message: 'Sviluppatore Software'})}
          company="Exaltech S.r.l."
          location={translate({id: 'cv.experience.exaltech.location', message: 'Via Ufente, 20 – 04100 Latina (LT), Italia'})}>
          <p><Translate id="cv.experience.exaltech.paragraph.1">Stage iniziale finalizzato all’assunzione. Sviluppo di applicazioni Web back-end con Java EE, Spring, Quarkus e JPA secondo il modello a microservizi. Introduzione allo sviluppo front-end con AngularJS e Webpack.</Translate></p>
          <ul>
            <li><Translate id="cv.experience.exaltech.responsibility.1">Progettazione e sviluppo di un sistema dimostrativo per la gestione della movimentazione di materiali per una società di trasporti: clienti, fornitori, tratte, costi e fatturazione.</Translate></li>
            <li><Translate id="cv.experience.exaltech.responsibility.2">Progettazione e sviluppo di un sistema aziendale di gestione e archiviazione file su diverse piattaforme, con image editing.</Translate></li>
            <li><Translate id="cv.experience.exaltech.responsibility.3">Progettazione e sviluppo di un sistema interno per la gestione delle stime di occupazione dei lavoratori, integrato con il timesheet aziendale.</Translate></li>
            <li><Translate id="cv.experience.exaltech.responsibility.4">Progettazione e sviluppo di un sistema di fatturazione elettronica per banche e relativi clienti: architettura a microservizi, Oracle, Spring Boot 2 e Java 8; archiviazione e validazione di fatture XML, invio alla Pubblica Amministrazione e gestione degli esiti del Sistema di Interscambio. Cache con Redis e integrazione di sistemi BPM e Message Broker.</Translate></li>
            <li><Translate id="cv.experience.exaltech.responsibility.5">Sviluppo di un’applicazione Web dimostrativa per automatizzare l’abbinamento tra righe di fatture elettroniche e ordini di acquisto.</Translate></li>
          </ul>
        </CVExperience>
      </CVSection>

      <CVSection id="education" title={translate({id: 'cv.sections.education.title', message: 'Istruzione e formazione'})}>
        <CVEducation
          date="2017 – 2023"
          degree={translate({id: 'cv.education.master.degree', message: 'Laurea magistrale in Engineering in Computer Science'})}
          level={translate({id: 'cv.education.master.level', message: '110/110 e lode · ISCED 7'})}
          institution={translate({id: 'cv.education.master.institution', message: 'Università degli Studi di Roma “La Sapienza” · Facoltà di Ingegneria dell’Informazione, Informatica e Statistica'})}
          thesis={translate({id: 'cv.education.master.thesis', message: '“Telemetry Monitoring in Industry 4.0: A Comparative Analysis of NoSQL-based Solutions with Focus on MongoDB and InfluxDB”'})}>
          <p><Translate id="cv.education.master.paragraph.1">Reingegnerizzazione del data layer di una piattaforma per la consultazione mobile in tempo reale di serie temporali provenienti da macchinari e sensori industriali (IIoT), con analisi comparativa di MongoDB e InfluxDB. Realizzazione di un’applicazione Java per il data porting tra i due database, con mapping dei data model e benchmark delle interrogazioni tramite JMH.</Translate></p>
          <p><a href="https://github.com/ai-master-thesis/master-thesis-influxdb-porting"> <Translate id="cv.education.master.link.1">Progetto di tesi su GitHub</Translate></a></p>
        </CVEducation>
        <CVEducation
          date="2011 – 2017"
          degree={translate({id: 'cv.education.bachelor.degree', message: 'Laurea triennale in Ingegneria dell’Informazione'})}
          level={translate({id: 'cv.education.bachelor.level', message: '110/110 e lode · ISCED 6'})}
          institution={translate({id: 'cv.education.bachelor.institution', message: 'Università degli Studi di Roma “La Sapienza” · Facoltà di Ingegneria dell’Informazione, Informatica e Statistica'})}
          thesis={translate({id: 'cv.education.bachelor.thesis', message: 'Aggiornamento, sviluppo e sperimentazione di un’applicazione Web basata su Moodle per la gestione di attività di e-learning con focus sul peer-assessment.'})}
        />
      </CVSection>

      <CVSection id="skills" title={translate({id: 'cv.sections.skills.title', message: 'Competenze personali'})}>
        <CVLanguageList>
          <CVLanguage title={translate({id: 'cv.languages.native.title', message: 'Lingua madre'})}>
            <p><Translate id="cv.languages.native.paragraph.1">Italiano</Translate></p>
          </CVLanguage>
          <CVLanguage title={translate({id: 'cv.languages.english.title', message: 'Inglese'})}>
            <p><Translate id="cv.languages.english.paragraph.1">Livello B2</Translate></p>
            <p><Translate id="cv.languages.english.paragraph.2">Comprensione, lettura, interazione e produzione orale, produzione scritta.</Translate></p>
            <CVNote><Translate id="cv.languages.english.note.1">Laurea magistrale conseguita al termine di un corso erogato interamente in lingua inglese.</Translate></CVNote>
          </CVLanguage>
        </CVLanguageList>
      </CVSection>
    </CVTemplate>
  );
}
