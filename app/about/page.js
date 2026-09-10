import Typography from '@/components/atoms/Typography';

export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <section
      className="section-shell page-intro content-page"
      aria-labelledby="about-title"
    >
      <Typography as="p" variant="eyebrow">
        About the project
      </Typography>

      <Typography
        as="h1"
        variant="display"
        id="about-title"
      >
        Built for speed, accessibility, and maintainability.
      </Typography>

      <Typography as="p" variant="lead">
        This academic prototype applies Static Site Generation and Atomic
        Design to a tourism-focused Pangasinan heritage showcase.
      </Typography>

      <div className="content-columns">
        <section>
          <Typography as="h2" variant="heading">
            Architecture
          </Typography>

          <p>
            Next.js 14 App Router is configured with{' '}
            <code>output: &apos;export&apos;</code>, producing static HTML,
            CSS, and JavaScript files that can be served by GitHub Pages.
          </p>
        </section>

        <section>
          <Typography as="h2" variant="heading">
            Atomic Design
          </Typography>

          <p>
            The UI is separated into atoms, molecules, and organisms so each
            part can be reused and maintained independently.
          </p>
        </section>

        <section>
          <Typography as="h2" variant="heading">
            Accessibility
          </Typography>

          <p>
            Semantic headings, keyboard focus states, descriptive image
            alternatives, labels, a skip link, and strong color contrast are
            included to support WCAG-oriented development.
          </p>
        </section>
      </div>
    </section>
  );
}