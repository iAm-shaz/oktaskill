import { useSearchParams, Link } from 'react-router-dom';

const termsContent = `The following terms and conditions are deemed to have been accepted by the user upon accessing and using the website www.oktaskill.com. The terms "You" and "User" refer to all individuals and/or entities accessing this website for any purpose.`;

const termsSections = [
  {
    title: 'GENERAL DISCLAIMER',
    content: `Every effort has been made to ensure the accuracy of the information presented on this website. www.oktaskill.com is designed, developed, updated, and maintained by Axetronium Technologies Pvt. Ltd. The content provided is intended solely for general informational purposes and personal use. While we strive to keep the information current and correct, www.oktaskill.com does not guarantee the accuracy, completeness, or reliability of any content, advertisement, or material available through the website or linked resources.\n\nThis site may contain typographical or clerical errors, and the information is subject to change without prior notice. www.oktaskill.com reserves the right to modify, alter, or delete any content or representations without liability or notification.`,
  },
  {
    title: 'NO WARRANTIES',
    content: `The website and all its content are provided on an "as-is" and "as-available" basis. www.oktaskill.com makes no warranties, express or implied, including but not limited to:`,
    bullets: ['Merchantability', 'Fitness for a particular purpose', 'Non-infringement', 'Absence of viruses or harmful components'],
    footer: 'We do not guarantee that the website will operate uninterrupted or error-free.',
  },
  {
    title: 'INDEMNITY',
    content: `You agree to indemnify, defend, and hold harmless www.oktaskill.com, its affiliates, officers, directors, employees, agents, partners, and licensors from and against any and all claims, liabilities, damages, losses, or expenses (including legal fees) arising from:`,
    bullets: [
      'Your use of the website or services',
      'Content submitted, posted, or transmitted by you',
      'Any violation of these Terms and Conditions',
      'Any violation of applicable laws or third-party rights',
    ],
  },
  {
    title: 'LIMITATION OF LIABILITY',
    content: `In no event shall www.oktaskill.com be liable for any direct, indirect, incidental, special, punitive, or consequential damages of any kind, including but not limited to:`,
    bullets: ['Loss of profits or revenue', 'Loss of data', 'Business interruption', 'Personal injury', 'Loss of goodwill'],
    footer: 'This limitation applies regardless of whether such damages were foreseeable or arise from contract, negligence, or tort.',
  },
  {
    title: 'INTELLECTUAL PROPERTY RIGHTS',
    content: `All intellectual property rights, including copyrights, trademarks, logos, and content, are the sole property of Axetronium Technologies Pvt. Ltd. No part of this website may be:`,
    bullets: [
      'Reproduced or copied',
      'Transmitted in any form',
      'Stored in any electronic or non-electronic format',
      'Included in any third-party platform or retrieval system',
    ],
    footer: 'without prior written permission from Axetronium Technologies Pvt. Ltd. Any unauthorized use will be considered a violation and may be legally actionable.',
  },
  {
    title: 'OTHER TERMS AND CONDITIONS',
    content: `By accessing and using www.oktaskill.com, you agree to abide by these Terms and Conditions. We reserve the right to update or modify them at any time. We do not disclose your personal information unless:`,
    bullets: [
      'Required by law',
      'Necessary to comply with legal processes',
      'Required to enforce these Terms',
      'Necessary to protect the rights, safety, or property of www.oktaskill.com, its users, or the public',
    ],
  },
  {
    title: 'THIRD-PARTY LINKS AND SERVICES',
    content: `This website may contain links to external websites for your convenience. However, www.oktaskill.com has no control over the content, accuracy, or availability of those external sites and does not endorse or accept responsibility for them. We are not liable for any damages or consequences arising from your use of or reliance on third-party websites, even if linked directly from our platform. We expressly disclaim responsibility for any redirection to offensive, obscene, or unlawful content.`,
  },
  {
    title: 'JURISDICTION',
    content: `This website is owned and operated by Axetronium Technologies Pvt. Ltd., and all disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Varanasi, India.\n\nRegistered Office\nJ4/106 A-F, Pilikothi\nVaranasi 221001\nUttar Pradesh\nCIN: U78300UP2025PTC220644`,
  },
];

const privacySections = [
  {
    title: '1. Scope of this Privacy Policy',
    content: `This Privacy Policy covers our data practices, including how we collect, process, share, and protect your personal information through our Platform. "Personal Information" refers to any information that identifies an individual, either directly or indirectly.`,
  },
  {
    title: '2. Personal Information We Collect',
    content: 'We may collect information such as:',
    bullets: [
      'Name, email address, phone number',
      'Job title, organization name',
      'Country, city, and other demographic data',
      'Resume/CV, employment history',
      'Educational qualifications',
      'Background verification data',
    ],
    footer: 'This data may be collected through forms, communications, or employment applications submitted by you or authorized third parties.',
  },
  {
    title: '3. Use of Your Personal Information',
    content: 'We use personal information to:',
    bullets: [
      'Improve website usability and performance',
      'Understand user engagement',
      'Create and manage user profiles',
      'Respond to inquiries and requests',
      'Deliver content based on preferences',
      'Process job applications and recruitment',
      'Publish participant details for competitions (where applicable)',
      'Conduct background verification and onboarding',
    ],
  },
  {
    title: '4. Legal Basis for Processing',
    content: 'We process personal data based on:',
    bullets: [
      'Your consent (where required)',
      'Legitimate interests pursued by Axetronium Technologies Pvt. Ltd.',
      'Compliance with legal obligations',
      'Performance of contractual obligations',
    ],
  },
  {
    title: '5. Your Rights',
    content: 'Under applicable laws, you may:',
    bullets: [
      'Access, correct, or update your personal data',
      'Request deletion or restrict usage',
      'Object to processing',
      'Request data portability',
      'Withdraw consent (where processing is based on consent)',
    ],
    footer: 'Requests can be submitted to: privacy@oktaskill.com',
  },
  {
    title: '6. Data Security',
    content: `We implement appropriate administrative, technical, and physical safeguards to protect personal data against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is 100% secure.`,
  },
  {
    title: '7. Data Retention',
    content: `We retain personal data only as long as necessary for the purposes stated in this Policy, or as required by applicable laws. Data no longer needed is securely deleted.`,
  },
  {
    title: '8. Data Transfers',
    content: `We may transfer personal data to jurisdictions outside of your location. Such transfers are made in accordance with applicable data protection laws and we take measures to ensure confidentiality and security.`,
  },
  {
    title: '9. Disclosures and Sharing',
    content: 'We may share your personal data with:',
    bullets: [
      'Internal departments',
      'Subsidiaries and affiliates',
      'Authorized service providers',
      'Business partners and consultants',
      'Government bodies, regulators, and law enforcement (as required)',
    ],
  },
  {
    title: '10. Grievance Officer / Data Protection Officer',
    content: `If you have any complaints or concerns regarding your personal data, please contact:\n\nData Protection Officer\nJ4/106 A-F, Pilikothi\nVaranasi 221001\nUttar Pradesh\nCIN: U78300UP2025PTC220644\nEmail: privacy@oktaskill.com`,
  },
  {
    title: '11. Changes to this Policy',
    content: `This Privacy Policy may be updated from time to time. The updated version will be available on the website with the effective date. Continued use of the Platform constitutes acceptance of the changes.`,
  },
  {
    title: '12. Additional Use Cases',
    content: 'We may also process personal information including:',
    bullets: [
      'Government-issued IDs, photographs, legal and tax documentation',
      'Financial and banking data for payroll and compliance',
      'Details of next of kin or dependents for employment purposes',
    ],
  },
];

function SectionRenderer({ sections }) {
  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="font-montserrat font-bold text-base text-okta-dark mb-3">{section.title}</h3>
          <p className="font-montserrat text-sm text-okta-dark/70 leading-relaxed whitespace-pre-line">{section.content}</p>
          {section.bullets && (
            <ul className="mt-3 space-y-1.5 ml-4">
              {section.bullets.map((b) => (
                <li key={b} className="font-montserrat text-sm text-okta-dark/70 flex items-start gap-2">
                  <span className="text-okta-gold mt-1">&#8226;</span>
                  {b}
                </li>
              ))}
            </ul>
          )}
          {section.footer && (
            <p className="font-montserrat text-sm text-okta-dark/70 leading-relaxed mt-3">{section.footer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function LegalPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'terms';

  return (
    <div data-testid="legal-page">
      {/* Hero */}
      <section className="bg-okta-primary text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="font-montserrat text-2xl md:text-3xl font-bold">OktaSkill Legal</h1>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            {/* Sidebar */}
            <div className="flex md:flex-col gap-3">
              <button
                onClick={() => setSearchParams({ tab: 'terms' })}
                data-testid="legal-terms-tab"
                className={`font-montserrat text-sm font-medium px-4 py-2 rounded text-left transition-colors ${
                  activeTab === 'terms' ? 'bg-okta-primary text-white' : 'bg-okta-lighter text-okta-dark hover:bg-okta-primary/10'
                }`}
              >
                Terms &amp; conditions
              </button>
              <button
                onClick={() => setSearchParams({ tab: 'privacy' })}
                data-testid="legal-privacy-tab"
                className={`font-montserrat text-sm font-medium px-4 py-2 rounded text-left transition-colors ${
                  activeTab === 'privacy' ? 'bg-okta-primary text-white' : 'bg-okta-lighter text-okta-dark hover:bg-okta-primary/10'
                }`}
              >
                Privacy Policy
              </button>
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              {activeTab === 'terms' ? (
                <div data-testid="terms-content">
                  <p className="font-montserrat text-sm text-okta-dark/70 leading-relaxed mb-8">{termsContent}</p>
                  <SectionRenderer sections={termsSections} />
                </div>
              ) : (
                <div data-testid="privacy-content">
                  <p className="font-montserrat text-sm text-okta-dark/70 leading-relaxed mb-8">
                    At Axetronium Technologies Pvt. Ltd., we are committed to respecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect the personal information of users accessing our websites, mobile applications, and related online services (collectively, the "Platform"). This Policy applies to all visitors and users of the Platform. "You" or "Your" refers to the individual accessing or using the Platform.
                  </p>
                  <SectionRenderer sections={privacySections} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
