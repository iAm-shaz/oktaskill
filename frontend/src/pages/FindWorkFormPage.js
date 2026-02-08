import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { hearAboutUsOptions, findWorkRequirements } from '@/data/siteData';

export default function FindWorkFormPage() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.target);
    try {
      await fetch('https://formspree.io/f/mkovnazd', {
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

  return (
    <div data-testid="find-work-form-page" className="bg-okta-light min-h-screen">
      <section className="bg-okta-primary text-white py-10">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-montserrat text-2xl md:text-3xl font-bold">Find Work</h1>
          <p className="font-montserrat text-sm text-white/70 mt-2">Share your profile and get matched with exciting opportunities.</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4">
          <form onSubmit={handleSubmit} data-testid="find-work-form" className="bg-white rounded-lg p-6 md:p-8 shadow-sm space-y-5">
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                data-testid="find-work-email"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Full Name *</label>
              <input
                type="text"
                name="fullName"
                required
                data-testid="find-work-name"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Mobile Number *</label>
              <input
                type="tel"
                name="mobile"
                required
                data-testid="find-work-mobile"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Where did you hear about us? *</label>
              <select
                name="hearAboutUs"
                required
                data-testid="find-work-hear"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors bg-white"
              >
                <option value="">Select an option</option>
                {hearAboutUsOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Select your requirements *</label>
              <select
                name="requirements"
                required
                data-testid="find-work-requirements"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors bg-white"
              >
                <option value="">Select an option</option>
                {findWorkRequirements.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">LinkedIn Profile Link *</label>
              <input
                type="url"
                name="linkedinProfile"
                required
                data-testid="find-work-linkedin"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
            {/* <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Upload Resume *</label>
              <input
                type="file"
                name="resume"
                required
                data-testid="find-work-resume"
                accept=".pdf,.doc,.docx"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-okta-primary file:text-white file:font-montserrat file:text-xs file:font-bold file:cursor-pointer"
              />
            </div> */}
            <div>
              <label className="block font-montserrat text-sm font-bold text-okta-dark mb-1.5">Description (paste Resume)</label>
              <textarea
                name="description"
                rows={4}
                data-testid="find-work-description"
                className="w-full border border-okta-lighter rounded px-4 py-2.5 font-montserrat text-sm focus:outline-none focus:border-okta-primary transition-colors resize-none"
                placeholder="Tell us about your expertise and experience..."
              />
            </div>
            <input type="hidden" name="_form_type" value="find_work" />
            <button
              type="submit"
              disabled={submitting}
              data-testid="find-work-submit-btn"
              className="w-full bg-okta-gold text-okta-primary font-montserrat font-bold text-sm py-3 rounded hover:brightness-110 transition-all disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
