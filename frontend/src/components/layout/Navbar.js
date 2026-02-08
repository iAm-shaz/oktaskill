import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Find Work', path: '/find-work' },
  { label: 'Hire Talent', path: '/hire-talent' },
  { label: 'Discover Insights', path: '/consultants' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Refer & Earn', path: '/refer-earn' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav data-testid="navbar" className="bg-okta-primary text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" data-testid="navbar-logo" className="flex items-center gap-2">
            <img src="/logos/oktaskill-logo.png" alt="OktaSkill" className="w-8 h-8 object-contain" />
            <span className="font-montserrat font-bold text-lg tracking-wide">OktaSkill</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                className={`font-montserrat text-sm font-medium transition-all duration-300 hover:text-okta-gold relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-okta-gold after:transition-all after:duration-300 ${
                  location.pathname === link.path ? 'text-okta-gold after:w-full' : 'text-white after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div data-testid="mobile-menu" className="lg:hidden bg-okta-primary border-t border-okta-muted/30 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 font-montserrat text-sm font-medium border-b border-okta-muted/20 transition-colors hover:text-okta-gold ${
                location.pathname === link.path ? 'text-okta-gold' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
