import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function DocusaurusFeatures(): ReactNode {
  return (
    <Layout
      title="Docusaurus Features"
      description="Easy to use, focused on your content, and powered by React.">
      <HomepageFeatures />
    </Layout>
  );
}
