import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { hearAboutUsOptions, findTalentRequirements } from '@/data/siteData';

export default function FindTalentFormPage() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [hearAbout, setHearAbout] = useState('');
  const [requirement, setRequirement] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.target);
    try {
      await fetch('https://formspree.io/f/mjgevqan', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });
      navigate('/thank-you');
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  const isHearOther = hearAbout === 'Other (Please specify)';
  const isReqOther = requirement === 'Other';

  return (
    <div data-testid="find-talent-form-page" className="bg-okta-light min-h-screen">
      <section className="bg-okta-primary text-white py-10">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-montserrat text-2xl md:text-3xl font-bold">Find Talent</h1>
          <p className="font-montserrat text-sm text-white/70 mt-2">Fill out the form below and our team will get back to you within 48 business hours.</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4">
          <form onSubmit={handleSubmit} data-testid="find-talent-form" className="bg-white rounded-lg p-6 md:p-8 shadow-sm space-y-5">
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Company Email Address *</label>
              <input type="email" name="email" required data-testid="find-talent-email"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors"
                placeholder="your@company.com" />
            </div>
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Full Name *</label>
              <input type="text" name="fullName" required data-testid="find-talent-name"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors"
                placeholder="John Doe" />
            </div>
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Mobile Number *</label>
              <input type="tel" name="mobile" required data-testid="find-talent-mobile"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors"
                placeholder="+91 98765 43210" />
            </div>
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Company Name *</label>
              <input type="text" name="companyName" required data-testid="find-talent-company"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors"
                placeholder="Acme Inc." />
            </div>
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Where did you hear about us? *</label>
              <select name="hearAboutUs" required data-testid="find-talent-hear" value={hearAbout}
                onChange={(e) => setHearAbout(e.target.value)}
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors bg-white">
                <option value="">Select an option</option>
                {hearAboutUsOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {isHearOther && (
                <input type="text" name="hearAboutUsOther" required data-testid="find-talent-hear-other"
                  className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors mt-2"
                  placeholder="Please specify..." />
              )}
            </div>
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Select your requirements *</label>
              <select name="requirements" required data-testid="find-talent-requirements" value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors bg-white">
                <option value="">Select an option</option>
                {findTalentRequirements.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {isReqOther && (
                <input type="text" name="requirementsOther" required data-testid="find-talent-requirements-other"
                  className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors mt-2"
                  placeholder="Please specify your requirement..." />
              )}
            </div>
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Description (Optional)</label>
              <textarea name="description" rows={4} data-testid="find-talent-description"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors resize-none"
                placeholder="Tell us more about your needs..." />
            </div>
            <input type="hidden" name="_form_type" value="find_talent" />
            <button type="submit" disabled={submitting} data-testid="find-talent-submit-btn"
              className="w-full bg-okta-gold text-okta-primary font-montserrat font-bold text-sm py-3 rounded hover:brightness-110 transition-all disabled:opacity-50">
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
