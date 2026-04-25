import React from 'react';
import './Cards.css';

export function ArrowButton({ bg, color, onClick }) {
  return (
    <button className="arrow-btn" style={{ background: bg, color }} onClick={onClick}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  );
}

export function ProjectCard({ name, tag, color = '#2a2a2a', image }) {
  return (
    <div className="project-card" style={{ marginBottom: 20 }}>
      <div className="project-thumb" style={{ background: color }}>
        {image ? <img src={image} alt={name} /> : <div className="project-thumb-placeholder" aria-label="Project image placeholder" />}
      </div>
      <div className="project-info">
        <div className="project-copy">
          <div className="project-name">{name}</div>
          <div className="project-tag">{tag}</div>
        </div>
        <span className="project-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function JobCard({ company, date, desc, highlighted }) {
  return (
    <div className={`job-card ${highlighted ? 'job-card--highlighted' : ''}`}>
      <div className="job-header">
        <span className="job-company">{company}</span>
        <span className="job-arrow-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
      <div className="job-date">{date}</div>
      <div className="job-desc">{desc}</div>
    </div>
  );
}

export function ToolCard({ name, category, emoji }) {
  return (
    <div className="tool-card">
      <div className="tool-emoji">{emoji}</div>
      <div className="tool-info">
        <div className="tool-name">{name}</div>
        <div className="tool-cat">{category}</div>
      </div>
    </div>
  );
}

export function BlogCard({ title, desc, date, readTime, thumbColor = '#2a2a2a' }) {
  return (
    <div className="blog-card">
      <div className="blog-content">
        <div className="blog-title">{title}</div>
        <div className="blog-desc">{desc}</div>
        <div className="blog-meta">
          <span>{date}</span>
          {readTime && <span>{readTime}</span>}
        </div>
        <span className="blog-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [state, setState] = React.useState({ name: '', email: '', budget: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ name: '', email: '', budget: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            placeholder="Your Name"
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
          />
        </div>
        <div className="form-field">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            placeholder="Your@email.com"
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
          />
        </div>
      </div>
      <div className="form-field">
        <label className="form-label">Budget</label>
        <select
          className="form-input form-select"
          value={state.budget}
          onChange={(e) => setState((s) => ({ ...s, budget: e.target.value }))}
        >
          <option value="">Select...</option>
          <option value="5k-10k">$5k - $10k</option>
          <option value="10k-25k">$10k - $25k</option>
          <option value="25k-50k">$25k - $50k</option>
          <option value="50k+">$50k+</option>
        </select>
      </div>
      <div className="form-field">
        <label className="form-label">Message</label>
        <textarea
          className="form-input form-textarea"
          placeholder="Message"
          rows={5}
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
        />
      </div>
      <button className="form-btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p>Made by Templyo | Powered by Framer</p>
    </footer>
  );
}

export function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

export function PageTitle({ children }) {
  return <h1 className="page-title">{children}</h1>;
}
