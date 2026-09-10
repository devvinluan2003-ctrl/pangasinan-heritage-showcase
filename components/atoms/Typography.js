export default function Typography({ as: Tag='p', variant='body', className='', children, ...props }) {
  return <Tag className={`type type--${variant} ${className}`.trim()} {...props}>{children}</Tag>;
}
