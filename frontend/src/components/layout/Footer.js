import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-okta-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-okta-gold rounded-full flex items-center justify-center">
                <span className="text-okta-primary font-bold text-sm">O</span>
              </div>
              <span className="font-montserrat font-bold text-lg">OktaSkill</span>
            </Link>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-sm font-montserrat text-white/80">Follow us</span>
              <a href="https://www.linkedin.com/company/oktaskill" target="_blank" rel="noopener noreferrer" data-testid="footer-linkedin" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-okta-gold/20 transition-colors">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div className="flex gap-16 md:gap-24">
            <div>
              <h4 className="font-montserrat font-bold text-sm mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/hire-talent" className="font-montserrat text-sm text-white/70 hover:text-okta-gold transition-colors">Hire talent</Link></li>
                <li><Link to="/find-work" className="font-montserrat text-sm text-white/70 hover:text-okta-gold transition-colors">Find work</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-bold text-sm mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/why-us" className="font-montserrat text-sm text-white/70 hover:text-okta-gold transition-colors">Why us</Link></li>
                <li><Link to="/contact" className="font-montserrat text-sm text-white/70 hover:text-okta-gold transition-colors">Contact us</Link></li>
                <li><Link to="/refer-earn" className="font-montserrat text-sm text-white/70 hover:text-okta-gold transition-colors">Refer & earn</Link></li>
                <li><Link to="/legal?tab=privacy" className="font-montserrat text-sm text-white/70 hover:text-okta-gold transition-colors">Privacy policy</Link></li>
                <li><Link to="/legal?tab=terms" className="font-montserrat text-sm text-white/70 hover:text-okta-gold transition-colors">Terms & conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6">
          <p className="font-montserrat text-xs text-white/50 text-center">
            &copy; 2025 OktaSkill. All rights reserved. CIN: U78300UP2025PTC220644
          </p>
          <p className="font-montserrat text-xs text-white/50 text-center mt-1">
            Registered office: Axetronium Technologies Pvt. Ltd. J4/106, A-F, Pilikothi, Varanasi- 221001, Uttar Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}
