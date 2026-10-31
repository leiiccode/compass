import teamPhoto from '../assets/compass-team.jpg'
import { contactEmail, faqs, services, teamMembers } from '../data/siteData'
import { ButtonLink, Eyebrow, Icon, Illustration } from '../components/UI'

export function HomePage({ onNavigate }) {
  const principles = [
    { icon: 'heart', title: 'Listen', description: 'We listen first.' },
    { icon: 'sparkle', title: 'Care', description: 'People come first.' },
    { icon: 'arrow', title: 'Grow', description: 'Take simple steps.' },
    { icon: 'compass', title: 'Direction', description: 'Find your way.' },
  ]

  return <section className="page"><div className="hero-grid"><div className="hero-copy"><Eyebrow>COMPASS · Support</Eyebrow><h1>Here to <span className="hero-highlight">guide</span> you.</h1><p className="lead">Every person deserves a safe space to be heard and supported. Compass helps you explore resources and find your next steps easily.</p><div className="button-row"><ButtonLink onClick={() => onNavigate('services')}>View Services <Icon name="arrow" /></ButtonLink><ButtonLink secondary onClick={() => onNavigate('team')}>Our Team</ButtonLink></div><p className="small-copy">Just start with what you feel. You are welcome here.</p></div><img className="hero-image" src={teamPhoto} alt="The COMPASS counselors together" /></div><div className="principle-grid">{principles.map((principle) => <article className="principle-card" key={principle.title}><span className="principle-icon"><Illustration name={principle.icon} size={48} /></span><h3>{principle.title}</h3><p>{principle.description}</p></article>)}</div></section>
}

export function AboutPage() {
  const commitments = [['01', 'Our Mission', 'To make guidance simple and encourage personal growth.'], ['02', 'Our Vision', 'A community where everyone feels heard and supported.'], ['03', 'Our Promise', 'To communicate clearly and share helpful resources.']]
  return <section className="page about-page"><div className="about-highlight"><Eyebrow>Who we are</Eyebrow><h1>A steady guide when the path is unclear.</h1><p>Compass helps you find your direction while letting you choose your own path. We offer simple guidance and support.</p></div><div className="about-details"><Eyebrow>About Us</Eyebrow><h2>Guidance to help you move forward.</h2><p>A welcoming space where anyone can explore information and find support.</p><div className="commitment-list">{commitments.map(([number, title, description]) => <div className="commitment" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></div></section>
}

export function TeamPage({ onSelectMember }) {
  return <section className="page"><div className="team-banner"><div><Eyebrow>Meet Our Team</Eyebrow><h1>The People Behind Compass</h1><p>A dedicated group of guidance counselors committed to support, empower, and walk with you in your journey.</p></div><img className="team-banner-photo" src={teamPhoto} alt="COMPASS counselors together" /></div><div className="team-grid">{teamMembers.map((member, index) => <button className="member-card" key={member.name} onClick={() => onSelectMember(index)}><span className="member-photo"><img src={member.photo} alt={`${member.name}, Guidance Counselor`} style={{ '--photo-scale': member.photoScale }} /></span><span className="member-content"><span className="member-role">Guidance Counselor</span><strong>{member.name}</strong><span className="member-summary">{member.summary}</span><span className="member-action">View Full Profile <Icon name="arrow" size={15} /></span></span></button>)}</div></section>
}

export function MemberPage({ member, onBack, onContact }) {
  if (!member) return null
  return <section className="page member-page"><ButtonLink secondary small onClick={onBack}><Icon name="back" /> Back to Team</ButtonLink><article className="member-profile"><span className="profile-photo"><img src={member.photo} alt={`${member.name}, Guidance Counselor`} style={{ '--photo-scale': member.photoScale }} /></span><Eyebrow>Guidance Counselor</Eyebrow><h1>{member.name}</h1><span className="specialization">{member.specialization}</span><div className="profile-bio"><h2>Professional Background & Biography</h2><p>{member.bio}</p><div className="profile-cta"><div><strong>Need a session?</strong><span>Reach out via our contact form.</span></div><ButtonLink small onClick={onContact}>Contact Counselor</ButtonLink></div></div></article></section>
}

export function ServicesPage() {
  return <section className="page"><div className="page-heading"><Eyebrow>Professional Care</Eyebrow><h1>Our Counseling & Therapy Services</h1><p>Specialized therapeutic and guidance services tailored to your emotional, mental, and relational well-being.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><span className="service-icon"><Illustration name={service.icon} size={62} /></span><h2>{service.title}</h2><p>{service.description}</p><span className="service-status">{service.status}</span></article>)}</div></section>
}

export function LocationPage() {
  return <section className="page"><div className="page-heading"><Eyebrow>Location</Eyebrow><h1>Find us here.</h1><p>Visit our campus location below.</p></div><div className="location-grid"><iframe className="location-map" title="Map to AMA Computer College – Bitas, Cabanatuan City" loading="lazy" src="https://maps.google.com/maps?q=AMA%20Computer%20College%20Bitas%20Cabanatuan%20City%20Nueva%20Ecija&t=&z=14&ie=UTF8&iwloc=&output=embed" /><div className="location-card"><Eyebrow>Office</Eyebrow><h2>Visit Compass</h2><p><strong>AMA Computer College – Bitas</strong><br />Cabanatuan City, Nueva Ecija, Philippines</p><a className="button" href="https://www.google.com/maps/search/?api=1&query=AMA+Computer+College+Bitas+Cabanatuan+City+Nueva+Ecija" target="_blank" rel="noopener noreferrer">Open Maps <Icon name="external" /></a></div></div></section>
}

export function ContactPage({ status, onSubmit }) {
  return <section className="page"><div className="contact-grid"><div className="contact-intro"><Eyebrow>Get in Touch</Eyebrow><h1>You are not alone.</h1><p>Send us a quick message or ask a question. We are here to listen.</p><div className="contact-details"><div><strong>Email</strong><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div><div><strong>Location</strong><span>Cabanatuan City</span></div><div><strong>Hours</strong><span>Mon - Fri, 9am - 5pm</span></div></div></div><form className="contact-form" onSubmit={onSubmit}><h2>Send a Message</h2><p>Fill out the form below to reach out. Your email app will open with your message ready to send.</p><div className="form-row"><label>Name<input name="name" autoComplete="name" placeholder="Your name" /></label><label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label></div><label>Topic<select name="category" required defaultValue=""><option value="" disabled>Select topic</option><option>Counseling & Therapy</option><option>Marital & Family Therapy</option><option>Trauma Support</option><option>Stress Relief & Acupuncture</option><option>Other</option></select></label><label>Message<textarea name="message" required maxLength={2000} placeholder="How can we help you?" /></label><label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label><ButtonLink type="submit">Send Message <Icon name="arrow" /></ButtonLink><p className="form-status" role="status" aria-live="polite">{status}</p></form></div></section>
}

export function LegalPage() {
  return <section className="page narrow-page"><Eyebrow>Legal Information</Eyebrow><h1>Privacy Policy & Terms of Service</h1><article className="info-card"><h2>Privacy Policy</h2><p>At COMPASS, we respect and protect your personal information. Any data or message submitted through our inquiry forms is handled with strict confidentiality. We do not sell, rent, or share visitor data with third parties.</p><p>We use your information solely to respond to your inquiries and provide relevant guidance and counseling information.</p></article><article className="info-card"><h2>Terms of Service</h2><p>By accessing and using this website, you agree to abide by these terms. COMPASS provides informational guidance and support services. Our online tools and contact forms are not emergency or crisis hotlines.</p><p>All content, imagery, and resources provided on this platform are protected under copyright law and belong to COMPASS.</p></article></section>
}

export function FaqPage() {
  return <section className="page narrow-page"><Eyebrow>Customer Support</Eyebrow><h1>Frequently Asked Questions (FAQs)</h1><div className="faq-list">{faqs.map(({ question, answer }) => <article className="info-card" key={question}><h2>{question}</h2><p>{answer}</p></article>)}</div></section>
}
