# OktaSkill EdTech Website - PRD

## Problem Statement
Build a multi-page marketing website for OktaSkill EdTech startup based on provided design mockups. Font: Montserrat. Colors: #502D3C (primary), #FDB71C (gold accent). Forms via Formspree.

## Architecture
- **Frontend**: React + Tailwind CSS (CRA with craco)
- **Backend**: FastAPI (minimal, not actively used for this marketing site)
- **Forms**: Formspree (https://formspree.io/f/mjgevqan)
- **No auth** required

## Core Requirements (Static)
- Multi-page website with consistent branding
- Montserrat font, #502D3C + #FDB71C color scheme
- Responsive design (desktop + mobile hamburger menu)
- Forms submit to Formspree
- Legal pages (T&C + Privacy Policy) with tab navigation

## What's Been Implemented (2026-02-08)
- **12 pages**: Home, Hire Talent, Find Work, Consultants, Why Us, Refer & Earn, Contact, Find Talent Form, Find Work Form, Thank You, Legal, Service Detail (dynamic)
- **Navbar**: Sticky, responsive with mobile hamburger menu
- **Footer**: Logo, social links, Services/Resource/Company sections, copyright
- **Forms**: Find Talent (7 fields) + Find Work (8 fields) with Formspree integration
- **Legal**: Terms & Conditions + Privacy Policy with tab navigation
- **12 service detail pages** accessible via /service/:slug
- **100% test pass rate** (16/16 tests)

## User Personas
- **Businesses**: Looking to hire consultants/freelancers
- **Freelancers/Consultants**: Looking for work opportunities
- **Referrers**: People who want to refer and earn

## Prioritized Backlog
### P0 (Deferred by user)
- "Why hire this role?" detailed content for each service page

### P1
- Success Stories page
- Talent Stories page
- Blog/Discover Insights content

### P2
- SEO optimization (meta tags, Open Graph)
- Analytics integration
- Contact form email notifications
- Performance optimization (image lazy loading, code splitting)

## Next Tasks
- Add "Why hire this role?" content when user provides it
- Add real brand logos in Trusted By section
- Add real consultant photos
- Add real illustrations/images to hero sections
