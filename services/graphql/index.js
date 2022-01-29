import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

export const BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export default function createApolloClient(initialState, ctx) {
  const httpLink = new HttpLink({
    uri: BASE_URL,
  });

  const errorLink = onError(({ networkError, graphQLErrors }) => {
    if (networkError) {
      return console.log("Oops, something went wrong", {
        description: networkError.message,
      });
    }
  });

  let link = from([errorLink, httpLink]);

  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            stores: {
              keyArgs: false,

              merge(existing = [], incoming) {
                return [...existing, ...incoming];
              },
            },
          },
        },
      },
    }).restore(initialState),
  });
}
