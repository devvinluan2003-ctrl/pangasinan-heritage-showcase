import Link from 'next/link';
import Icon from '@/components/atoms/Icon';
import ResponsiveImage from '@/components/atoms/ResponsiveImage';
export default function HeritageCard({ site }) {
  return <article className="heritage-card"><ResponsiveImage src={site.image} alt={`Photo of ${site.name}`} className="heritage-card__image"/><div className="heritage-card__body"><span className="badge">{site.category}</span><h3>{site.name}</h3><p className="location-line"><Icon name="pin" size={18}/>{site.location}</p><p>{site.shortDescription}</p><Link className="card-link" href={`/heritage/${site.slug}/`}>View destination <span aria-hidden="true">→</span><span className="sr-only">: {site.name}</span></Link></div></article>;
}
