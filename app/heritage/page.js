import Typography from '@/components/atoms/Typography';
import SearchableHeritageGrid from '@/components/organisms/SearchableHeritageGrid';
import { heritageSites } from '@/data/heritage';

export const metadata = { title: 'Heritage Sites' };

export default function HeritagePage() {
  return (
    <section className="section-shell page-intro" aria-labelledby="heritage-title">
      <Typography as="p" variant="eyebrow">Heritage directory</Typography>
      <Typography as="h1" variant="display" id="heritage-title">Explore the showcase</Typography>
      <Typography as="p" variant="lead">Search the featured sites by destination, location, or category.</Typography>
      <SearchableHeritageGrid sites={heritageSites} />
    </section>
  );
}
