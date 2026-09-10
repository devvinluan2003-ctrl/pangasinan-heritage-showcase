import { notFound } from 'next/navigation';
import Link from 'next/link';
import Typography from '@/components/atoms/Typography';
import Icon from '@/components/atoms/Icon';
import ResponsiveImage from '@/components/atoms/ResponsiveImage';
import { heritageSites, getHeritageSite } from '@/data/heritage';

export function generateStaticParams() {
  return heritageSites.map((site) => ({ slug: site.slug }));
}

export function generateMetadata({ params }) {
  const site = getHeritageSite(params.slug);
  return { title: site ? site.name : 'Heritage Site', description: site?.shortDescription };
}

export default function HeritageDetailPage({ params }) {
  const site = getHeritageSite(params.slug);
  if (!site) notFound();

  return (
    <article className="section-shell detail-page">
      <Link className="back-link" href="/heritage/"><Icon name="arrow-left" /> Back to heritage sites</Link>
      <div className="detail-hero">
        <div>
          <Typography as="p" variant="eyebrow">{site.category}</Typography>
          <Typography as="h1" variant="display">{site.name}</Typography>
          <p className="location-line"><Icon name="pin" /> {site.location}</p>
          <Typography as="p" variant="lead">{site.shortDescription}</Typography>
        </div>
        <ResponsiveImage src={site.image} alt={`Photo of ${site.name}`} className="detail-image" />
      </div>
      <div className="detail-content">
        <section aria-labelledby="about-site"><Typography as="h2" variant="heading" id="about-site">About this destination</Typography><p>{site.description}</p></section>
        <section aria-labelledby="highlights"><Typography as="h2" variant="heading" id="highlights">Highlights</Typography><ul className="feature-list">{site.highlights.map((item)=><li key={item}><Icon name="check" /> {item}</li>)}</ul></section>
      </div>
    </article>
  );
}
