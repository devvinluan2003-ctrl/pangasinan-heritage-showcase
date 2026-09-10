import { withBasePath } from '@/lib/basePath';
export default function ResponsiveImage({ src, alt, className='' }) {
  return <img src={withBasePath(src)} alt={alt} className={`responsive-image ${className}`.trim()} loading="lazy" decoding="async" />;
}
