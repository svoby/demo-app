import type { AppProps } from 'next/app';
import AppContainer from '../components/layout/BasicLayout';
import GlobalStyle from '../styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppContainer>
            <GlobalStyle />
            <Component {...pageProps} />
        </AppContainer>
    );
}
