import { User } from "oidc-client-ts";

import { makeSnekQuery } from "snek-query";
import { Query, Mutation } from "./schema.generated";

export const pylonURL = "https://pylons.cronit.io/kassabuch";

export const sq = makeSnekQuery(
  { Query, Mutation },
  {
    apiURL: `${pylonURL}/graphql`,
    middlewares: [
      ({ context }) => {
        const oidcStorage = sessionStorage.getItem(
          `oidc.user:${__JAEN_ZITADEL__.authority}:${__JAEN_ZITADEL__.clientId}`
        );

        if (oidcStorage) {
          const user = User.fromStorageString(oidcStorage);

          context.headers["Authorization"] = `Bearer ${user.access_token}`;
        }
      },
    ],
  }
);
