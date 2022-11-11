import { TodosResolver } from '../../graphql/schema/todos.resolver';
import { ApolloServer } from 'apollo-server-micro';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { IncomingMessage, ServerResponse } from 'http';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

const schema = await buildSchema({
    resolvers: [TodosResolver],
});

const server = new ApolloServer({ schema });

export const config = {
    api: {
        bodyParser: false,
    },
};

const startServer = server.start();

export default async function handler(req: MicroRequest, res: ServerResponse<IncomingMessage>) {
    await startServer;
    await server.createHandler({
        path: '/api/graphql',
    })(req, res);
}
