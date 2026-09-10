import './globals.css';
import HeaderNavigation from '@/components/organisms/HeaderNavigation';
import Footer from '@/components/organisms/Footer';

export const metadata = {
  title: { default: 'Pangasinan Heritage Digital Showcase', template: '%s | Pangasinan Heritage' },
  description: 'A fast, accessible, mobile-first digital showcase of selected Pangasinan heritage and tourism sites.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <HeaderNavigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
