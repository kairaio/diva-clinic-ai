import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/diva-clinic-ai" : "",
  assetPrefix: isGitHubPages ? "/diva-clinic-ai/" : "",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
