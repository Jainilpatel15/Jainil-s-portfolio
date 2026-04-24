import React from 'react';
import './StickyProfile.css';
import { profile } from '../data/cms';
import profilePhoto from '../assets/profile-photo.png';

const socialLinks = [
  {
    name: 'GitHub',
    href: profile.social.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.3-.4 6.8-1.6 6.8-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 15 3.13a13.38 13.38 0 0 0-6 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.8 3.78c0 5.42 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
        <path d="M8 20c-3 1-3-1.5-4-2" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
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
    name: 'LinkedIn',
    href: profile.social.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: profile.social.x,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.585-6.64 7.585H.473l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.29 19.496h2.04L6.486 3.24H4.298z" />
      </svg>
    ),
  },
];

export default function StickyProfile({ image }) {
  return (
    <div className="sticky-profile">
      <div className="profile-image-wrap">
        {image || profilePhoto ? (
          <img src={image || profilePhoto} alt="Profile" className="profile-image" />
        ) : (
          <div className="profile-image-placeholder" aria-label="Profile image placeholder" />
        )}
      </div>

      <div className="profile-body">
        <div className="profile-copy">
          <h2 className="profile-name">{profile.name}</h2>
          <p className="profile-desc">{profile.bio}</p>
        </div>
        <div className="social-icons">
          {socialLinks.map(({ name, href, icon }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className="social-icon">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
