import React from 'react';
import { useNavigate } from 'react-router-dom';
import StickyProfile from '../components/StickyProfile';
import {
  ProjectCard,
  JobCard,
  ToolCard,
  BlogCard,
  ContactForm,
  Footer,
  SectionTitle,
} from '../components/Cards';
import { profile, projects, jobs, tools, blogPosts } from '../data/cms';
import './Home.css';

function ArrowLink({ bg, color, onClick }) {
  return (
    <button className="arrow-btn-hero" style={{ background: bg, color }} onClick={onClick}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <div className="outer">
        <div className="container">
          <div className="left-col">
            <StickyProfile />
          </div>

          <div className="right-col">
            <section className="hero">
              <div className="hero-info">
                <h1 className="hero-title">{profile.title}</h1>
                <p className="hero-desc">{profile.description}</p>
              </div>

              <div className="hero-stats">
                {profile.stats.map((s, i) => (
                  <div key={i} className="stat">
                    <span className="stat-num">{s.num}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="hero-cards">
                <div className="hero-card hero-card--orange">
                  <div className="hero-card-deco">
                    <div className="hero-card-wave hero-card-wave--top" />
                    <div className="hero-card-wave hero-card-wave--bottom" />
                  </div>
                  <div className="hero-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <div className="hero-card-bottom">
                    <p className="hero-card-label">DYNAMIC ANIMATION, MOTION DESIGN</p>
                    <ArrowLink bg="var(--orange)" color="var(--white)" onClick={() => navigate('/experience')} />
                  </div>
                </div>

                <div className="hero-card hero-card--green">
                  <div className="hero-card-deco">
                    <div className="hero-card-wave hero-card-wave--mint-top" />
                    <div className="hero-card-wave hero-card-wave--mint-mid" />
                    <div className="hero-card-wave hero-card-wave--mint-bottom" />
                  </div>
                  <div className="hero-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <div className="hero-card-bottom">
                    <p className="hero-card-label" style={{ color: 'black' }}>
                      FRAMER, FIGMA, WORDPRESS, REACTJS
                    </p>
                    <ArrowLink bg="var(--green)" color="var(--black)" onClick={() => navigate('/projects')} />
                  </div>
                </div>
              </div>
            </section>

            <section className="section">
              <SectionTitle>
                RECENT
                <br />
                PROJECTS
              </SectionTitle>
              {projects.slice(0, 2).map((p) => (
                <ProjectCard key={p.id} {...p} />
              ))}
            </section>

            <section className="section">
              <SectionTitle>
                12 YEARS OF
                <br />
                EXPERIENCE
              </SectionTitle>
              {jobs.slice(0, 2).map((j) => (
                <JobCard key={j.id} {...j} />
              ))}
            </section>

            <section className="section">
              <SectionTitle>
                PREMIUM
                <br />
                TOOLS
              </SectionTitle>
              <div className="tools-grid">
                {tools.slice(0, 4).map((t) => (
                  <ToolCard key={t.id} {...t} />
                ))}
              </div>
            </section>

            <section className="section">
              <SectionTitle>
                DESIGN
                <br />
                THOUGHTS
              </SectionTitle>
              <div className="blog-list">
                {blogPosts.slice(0, 1).map((b) => (
                  <BlogCard key={b.id} {...b} />
                ))}
              </div>
            </section>

            <section className="section">
              <SectionTitle>
                LET'S WORK
                <br />
                TOGETHER
              </SectionTitle>
              <ContactForm />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
