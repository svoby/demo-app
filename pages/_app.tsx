import BasicLayout from '../components/layout/BasicLayout';
import { client, ssrCache } from '../helpers/client';
import GlobalStyle from '../styles/GlobalStyle';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    if (pageProps.urqlState !== undefined) {
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
