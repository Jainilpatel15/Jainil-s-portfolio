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
              12 YEARS OF
              <br />
              EXPERIENCE
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
