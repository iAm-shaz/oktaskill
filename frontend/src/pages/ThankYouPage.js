import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div data-testid="thank-you-page" className="bg-okta-light min-h-[70vh] flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="bg-white rounded-lg p-10 shadow-sm">
          <div className="w-16 h-16 mx-auto mb-6 bg-okta-gold/10 rounded-full flex items-center justify-center">
            <CheckCircle size={36} className="text-okta-gold" />
          </div>
          <h1 className="font-montserrat text-2xl md:text-3xl font-bold text-okta-primary mb-4">THANK YOU!!!</h1>
          <p className="font-montserrat text-sm text-okta-dark/60 mb-8">
            Our team will reach out to you within 48 business hours
          </p>
          <Link
            to="/"
            data-testid="thank-you-home-btn"
            className="inline-block bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
