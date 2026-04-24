import React from 'react';
import StickyProfile from '../components/StickyProfile';
import { ToolCard, ContactForm, Footer, PageTitle, SectionTitle } from '../components/Cards';
import { tools } from '../data/cms';
import './InnerPage.css';

export default function Tools() {
  return (
    <div className="page-wrapper">
      <div className="outer">
        <div className="container">
          <div className="left-col">
            <StickyProfile />
          </div>
          <div className="right-col">
            <PageTitle>
              PREMIUM
              <br />
              TOOLS
            </PageTitle>
            <div className="tools-grid" style={{ marginTop: 20 }}>
              {tools.map((t) => (
                <ToolCard key={t.id} {...t} />
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
