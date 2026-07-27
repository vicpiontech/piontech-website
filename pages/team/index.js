import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const TeamPage = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="page_content">
        <PageTitle pageTitle={'Coming Soon'} pagesub={'Stay tuned!'} pageTop={'Team'} />
        <section className="section_space bg-light">
          <div className="container text-center py-5">
            <h2>Our Expert Team</h2>
            <p>This page is coming soon. Please check back later.</p>
          </div>
        </section>
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default TeamPage;
