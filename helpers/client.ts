import { isServer } from './isServer';
import getConfig from 'next/config';
import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const { publicRuntimeConfig } = getConfig();

const ssrCache = ssrExchange({ isClient: !isServer });
const client = createClient({
    url: publicRuntimeConfig.GRAPHQL_URL_ENDPOINT,
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };
