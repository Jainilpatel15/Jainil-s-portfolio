import React from 'react';
import { useNavigate } from 'react-router-dom';
import StickyProfile from '../components/StickyProfile';
import CardSwap, { Card } from '../components/CardSwap';
import {
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
  const homeRef = React.useRef(null);
  const titleParts = profile.title.trim().split(/\s+/);
  const highlightedTitleWord = titleParts.pop() || profile.title;
  const titleLead = titleParts.join(' ');

  React.useEffect(() => {
    const root = homeRef.current;
    if (!root) return;

    const targets = root.querySelectorAll('.scroll-float-target');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-wrapper" ref={homeRef}>
      <div className="outer">
        <div className="container">
          <div className="left-col">
            <StickyProfile />
          </div>

          <div className="right-col">
            <section className="hero">
              <div className="hero-info">
                <h1 className="hero-title scroll-float-target">
                  {titleLead ? `${titleLead} ` : ''}
                  <span className="title-dark">{highlightedTitleWord}</span>
                </h1>
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

            <section className="section section-projects">
              <div className="scroll-float-target scroll-float-delay-1">
                <SectionTitle>
                  RECENT
                  <br />
                  <span className="title-dark">PROJECTS</span>
                </SectionTitle>
              </div>
              <div className="projects-swap-wrapper">
                <CardSwap
                  width={600}
                  height={450}
                  cardDistance={50}
                  verticalDistance={60}
                  delay={4000}
                  pauseOnHover={true}
                  skewAmount={4}
                  easing="elastic"
                >
                  {projects.slice(0, 4).map((project) => (
                    <Card key={project.id}>
                      <div className="project-card-swap">
                        {project.image && (
                          <img src={project.image} alt={project.name} className="project-card-image" />
                        )}
                        <div className="project-card-content">
                          <h3 className="project-card-title">{project.name}</h3>
                          <p className="project-card-tag">{project.tag}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </section>

            <section className="section">
              <div className="scroll-float-target scroll-float-delay-1">
                <SectionTitle>
                  0 YEARS OF
                  <br />
                  <span className="title-dark">EXPERIENCE</span>
                </SectionTitle>
              </div>
              {jobs.slice(0, 2).map((j) => (
                <JobCard key={j.id} {...j} />
              ))}
            </section>

            <section className="section">
              <div className="scroll-float-target scroll-float-delay-1">
                <SectionTitle>
                  PREMIUM
                  <br />
                  <span className="title-dark">TOOLS</span>
                </SectionTitle>
              </div>
              <div className="tools-grid">
                {tools.slice(0, 4).map((t) => (
                  <ToolCard key={t.id} {...t} />
                ))}
              </div>
            </section>

            <section className="section">
              <div className="scroll-float-target scroll-float-delay-1">
                <SectionTitle>
                  DESIGN
                  <br />
                  <span className="title-dark">THOUGHTS</span>
                </SectionTitle>
              </div>
              <div className="blog-list">
                {blogPosts.map((b) => (
                  <BlogCard key={b.id} {...b} />
                ))}
              </div>
            </section>

            <section className="section">
              <div className="scroll-float-target scroll-float-delay-1">
                <SectionTitle>
                  LET'S WORK
                  <br />
                  <span className="title-dark">TOGETHER</span>
                </SectionTitle>
              </div>
              <ContactForm />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
