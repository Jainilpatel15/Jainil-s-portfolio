import React from 'react';
import './StickyProfile.css';
import { profile } from '../data/cms';

const socialLinks = [
  {
    href: profile.social.dribbble,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
  },
  {
    href: profile.social.twitter,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    href: profile.social.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: profile.social.email,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function StickyProfile({ image }) {
  return (
    <div className="sticky-profile">
      <div className="profile-deco profile-deco--top" />

      <div className="profile-image-wrap">
        {image ? (
          <img src={image} alt="Profile" className="profile-image" />
        ) : (
          <div className="profile-image-placeholder" aria-label="Profile image placeholder" />
        )}
      </div>

      <div className="profile-bio">
        <p className="profile-name">{profile.name}</p>
        <p className="profile-desc">{profile.bio}</p>
        <div className="social-icons">
          {socialLinks.map(({ href, icon }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="social-icon">
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="profile-deco profile-deco--bottom" />
    </div>
  );
}
