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
          redirectUri: "http://localhost:8000",
          projectIds: ["252765861113233411", "252899191242620931"],
        },
        sentry: {
          org: "cronit",
          project: "website",
          dsn: "https://bd955e9e6b6ae7d38e1dccdd04afc51d@sentry.cronit.io/2",
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
