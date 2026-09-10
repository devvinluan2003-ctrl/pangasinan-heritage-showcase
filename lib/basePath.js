export function withBasePath(path) {
  const repo = process.env.NEXT_PUBLIC_REPO_NAME || '';
  const prefix = repo ? `/${repo}` : '';
  return `${prefix}${path}`;
}
