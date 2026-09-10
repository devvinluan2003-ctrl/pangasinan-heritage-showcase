const repoName = process.env.REPO_NAME || '';
const isGitHubPages = process.env.GITHUB_ACTIONS || process.env.GITHUB_PAGES;
const basePath = isGitHubPages && repoName ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
