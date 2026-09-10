import Link from 'next/link';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import HeritageGrid from '@/components/organisms/HeritageGrid';
import { heritageSites } from '@/data/heritage';

export default function HomePage() {
  return (
    <>
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero__content">
          <Typography as="p" variant="eyebrow">Pangasinan Provincial Tourism Showcase</Typography>
          <Typography as="h1" variant="display" id="hero-title">Discover Pangasinan’s heritage, one place at a time.</Typography>
          <Typography as="p" variant="lead">A lightweight, mobile-first static website featuring selected natural, coastal, built, and cultural destinations across Pangasinan.</Typography>
          <div className="hero__actions">
            <Button href="/heritage/">Explore heritage sites</Button>
            <Link className="text-link" href="/about/">About this project</Link>
          </div>
        </div>
        <div className="hero__panel" aria-label="Project qualities">
          <span>Fast on mobile</span><span>Accessible</span><span>Static & deployable</span><span>Atomic Design</span>
        </div>
      </section>
      <section className="section-shell section-block" aria-labelledby="featured-title">
        <div className="section-heading">
          <Typography as="p" variant="eyebrow">Featured destinations</Typography>
          <Typography as="h2" variant="heading" id="featured-title">Six Pangasinan highlights</Typography>
        </div>
        <HeritageGrid sites={heritageSites} />
      </section>
    </>
  );
}
