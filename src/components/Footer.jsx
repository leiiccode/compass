export function Footer({ onNavigate }) {
  const footerLinks = [['About Us', 'about'], ['Services', 'services'], ['Our Team', 'team'], ['Customer Support & FAQs', 'faqs'], ['Privacy Policy', 'legal'], ['Terms of Service', 'legal']]

  return (
    <footer className="site-footer">
      <div className="copyright"><strong>© {new Date().getFullYear()} COMPASS.</strong><span>All rights reserved.</span></div>
      <nav className="footer-links" aria-label="Footer navigation">{footerLinks.map(([label, view]) => <button key={label} onClick={() => onNavigate(view)}>{label}</button>)}</nav>
      <div className="social-links" aria-label="Social links"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎</a><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a></div>
    </footer>
  )
}
