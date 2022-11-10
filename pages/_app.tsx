import type { AppProps } from 'next/app';
import BasicLayout from '../components/layout/BasicLayout';
import GlobalStyle from '../styles/GlobalStyle';
import { client, ssrCache } from '../helpers/client';
import { Provider } from 'urql';

export default function App({ Component, pageProps }: AppProps) {
    if (pageProps.urqlState) {
        ssrCache.restoreData(pageProps.urqlState);
    }

    return (
        <Provider value={client}>
            <BasicLayout>
                <GlobalStyle />
                <Component {...pageProps} />
            </BasicLayout>
        </Provider>
    );
}
