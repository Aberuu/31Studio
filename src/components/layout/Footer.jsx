import { navigation } from '../../data/navigation';
import { socials } from '../../data/socials';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">Form</div>
      <nav className="footer-nav">
        {navigation.map(item => (
          <a key={item.name} href={item.href}>{item.name}</a>
        ))}
        {socials.map(social => (
          <a key={social.name} href={social.href}>{social.name}</a>
        ))}
      </nav>
      <div className="footer-copy">© 2024 Form Studio Ltd.</div>
    </footer>
  );
};

export default Footer;
