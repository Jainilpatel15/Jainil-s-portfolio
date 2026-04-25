import React from 'react';
import StickyProfile from '../components/StickyProfile';
import { JobCard, ContactForm, Footer, PageTitle, SectionTitle } from '../components/Cards';
import { jobs } from '../data/cms';
import './InnerPage.css';

export default function Experience() {
  return (
    <div className="page-wrapper">
      <div className="outer">
        <div className="container">
          <div className="left-col">
            <StickyProfile />
          </div>
          <div className="right-col">
            <PageTitle>
              0 YEARS OF
              <br />
              <span className="title-dark">EXPERIENCE</span>
            </PageTitle>
            <div style={{ marginTop: 20 }}>
              {jobs.map((j) => (
                <JobCard key={j.id} {...j} />
              ))}
            </div>
            <section className="section">
              <SectionTitle>
                LET'S WORK
                <br />
                <span className="title-dark">TOGETHER</span>
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
