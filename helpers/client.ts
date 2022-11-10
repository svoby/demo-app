import { createClient, ssrExchange, dedupExchange, cacheExchange, fetchExchange } from 'urql';
import { isServer } from './isServer';

const ssrCache = ssrExchange({ isClient: !isServer });
const client = createClient({
    url: 'http://localhost:3000/api/graphql',
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };
