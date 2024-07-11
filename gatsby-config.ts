import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: `gatsby-plugin-jaen`,
      options: {
        remote: {
          repository: "getcronit/cronit.io",
        },
        zitadel: {
          organizationId: "252746033782587395",
          clientId: "252746210698395651@services",
          authority: "https://accounts.cronit.io",
          redirectUri:
            process.env.NODE_ENV === "production"
              ? "https://cronit.io"
              : "http://localhost:8000",
          projectIds: [
            "252765861113233411",
            "252899191242620931",
            "260237544631828483",
          ],
        },
        sentry: {
          org: "cronit",
          project: "cronit-io",
          dsn: "https://d09bdda1cf0a74ccc8f1041bf6ba8d0d@sentry.cronit.io/11",
        },
        googleAnalytics: {
          // trackingIds: ["G-M58K75M9PG"],
        },
      },
    },
    "gatsby-jaen-mailpress",
    // "gatsby-plugin-postcss",
  ],
};

export default config;
