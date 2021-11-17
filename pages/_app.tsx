import type { AppProps } from 'next/app';
import Layout from '@layout/index';

import '@layout/look/styles/resources.scss';

const NextApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default NextApp;
