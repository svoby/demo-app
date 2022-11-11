import { isServer } from './isServer';
import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const ssrCache = ssrExchange({ isClient: !isServer });
const client = createClient({
    url: 'http://localhost:3000/api/graphql',
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };
