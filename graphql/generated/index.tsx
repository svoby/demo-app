import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type QueryApi = {
  __typename?: 'Query';
  todo: TodoApi;
  todos: Array<TodoApi>;
};


export type QueryTodoArgsApi = {
  id: Scalars['String'];
};

export type TodoApi = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type GetTodoQueryVariablesApi = Exact<{
  id: Scalars['String'];
}>;


export type GetTodoQueryApi = { __typename?: 'Query', todo: { __typename?: 'Todo', id: string, title: string, completed: boolean } };

export type GetTodoListQueryVariablesApi = Exact<{ [key: string]: never; }>;


export type GetTodoListQueryApi = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, title: string, completed: boolean }> };


export const GetTodoDocumentApi = gql`
    query getTodo($id: String!) {
  todo(id: $id) {
    id
    title
    completed
  }
}
    `;

export function useGetTodoQueryApi(options: Omit<Urql.UseQueryArgs<GetTodoQueryVariablesApi>, 'query'>) {
  return Urql.useQuery<GetTodoQueryApi, GetTodoQueryVariablesApi>({ query: GetTodoDocumentApi, ...options });
};
export const GetTodoListDocumentApi = gql`
    query getTodoList {
  todos {
    id
    title
    completed
  }
}
    `;

export function useGetTodoListQueryApi(options?: Omit<Urql.UseQueryArgs<GetTodoListQueryVariablesApi>, 'query'>) {
  return Urql.useQuery<GetTodoListQueryApi, GetTodoListQueryVariablesApi>({ query: GetTodoListDocumentApi, ...options });
};