import Link from 'next/link';
export default function Button({ href, children, variant='primary', type='button', onClick, ariaLabel }) {
  const className = `button button--${variant}`;
  if (href) return <Link href={href} className={className} aria-label={ariaLabel}>{children}</Link>;
  return <button type={type} className={className} onClick={onClick} aria-label={ariaLabel}>{children}</button>;
}
