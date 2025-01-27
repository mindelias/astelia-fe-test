/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  webpack(config) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
            titleProp: true,
            ref: true,
          },
        },
      ],
    });
    return config;
  },
};

export default config;
