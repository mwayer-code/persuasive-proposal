import React from "react";
import { Link } from "react-router-dom";
import SectionImage from "../components/SectionImage";
import team from "../images/team.png";

const Solution = () => {
  return (
    <div>
      <h2><strong>Proposal:</strong> Building Strategic Partnerships</h2>

      <p>
        Rather than replacing the existing internship course, WCTC should enhance it through
        strategic initiatives that expand access and relevance. This solution centers on creating
        formal partnerships with local tech companies, startups, and nonprofits.
      </p>

      <h3>A Proven Model</h3>
      <div className="evidence-block">
        <span className="evidence-badge">📊 Case Study</span>
        <p>
        The University of Minnesota’s College of Continuing and
        Professional Studies (CCAPS) has built strong partnerships 
        with local industries to bridge the gap between academic 
        theory and real-world practice.
        </p>
        <p>
          These collaborations have led to internships and job placements
          for students, particularly in technical and healthcare fields.
        </p>
        <p className="expert-attribution">
          Source: <a href="https://ccaps.umn.edu/story/benefits-collaboration-between-university-and-industry" 
          target="_blank" rel="noopener noreferrer">
            ("The Benefits of Collaboration Between University and Industry," 2024)
          </a>
        </p>
      </div>


      <hr className="section-divider" />

      <h3>Three Key Initiatives</h3>

      <div className="initiative-card">
        <div className="initiative-header">
          <span className="initiative-number">1</span>
          <h4>Create a Dedicated Internship Coordinator Role</h4>
        </div>
        <p className="initiative-description">
          Establish a position within the IT department specifically focused on finding and 
          maintaining partnerships with local employers. This coordinator would:
        </p>
        <ul className="initiative-list">
          <li>Build relationships with local tech companies, startups, and nonprofits</li>
          <li>Match students with appropriate opportunities based on their skills and interests</li>
          <li>Maintain an updated database of internship opportunities</li>
          <li>Provide ongoing support to both students and employers</li>
        </ul>
      </div>

      <div className="initiative-card">
        <div className="initiative-header">
          <span className="initiative-number">2</span>
          <h4>Launch a Local Business Outreach Campaign</h4>
        </div>
        <p className="initiative-description">
          Actively recruit companies willing to host interns through targeted outreach. This campaign would:
        </p>
        <ul className="initiative-list">
          <li>Highlight the benefits of hosting WCTC interns</li>
          <li>Showcase student talent and capabilities</li>
          <li>Offer flexible arrangements including remote and hybrid options</li>
          <li>Provide resources and support for first-time host companies</li>
        </ul>
      </div>

      <div className="initiative-card">
        <div className="initiative-header">
          <span className="initiative-number">3</span>
          <h4>Offer Employer Education Workshops</h4>
        </div>
        <p className="initiative-description">
          Help employers better understand how to structure effective internships for students with 
          limited prior experience. These workshops would:
        </p>
        <ul className="initiative-list">
          <li>Educate employers on realistic expectations for two-year program students</li>
          <li>Provide templates for internship programs and projects</li>
          <li>Share best practices from successful internship hosts</li>
          <li>Address common concerns about hosting less-experienced interns</li>
        </ul>
      </div>

      <hr className="section-divider" />

      <h3>Building on Success</h3>
      <p>
        These improvements would enhance WCTC's existing internship course rather than replace it. 
        By providing additional structure, support, and opportunities, this would ensure that students have 
        access to internships that match their skills and allow them to meet graduation requirements.
      </p>

      <SectionImage src={team} alt="Hands piled together in teamwork" position="center" size="wide"/>

      <div className="cta-section">
        <h3>The Expected Outcome</h3>
        <p style={{ fontSize: '1.1rem', marginBottom: 0 }}>
          More students graduate on time, employers gain access to talented emerging 
          developers, and WCTC strengthens its reputation as a program that delivers real career outcomes.
        </p>
      </div>

      <div className="page-navigation">
        <Link to="/problem" className="nav-button nav-button-prev">
          Previous: The Challenge
        </Link>
        <Link to="/counter-argument" className="nav-button nav-button-next">
          Next: Considerations
        </Link>
      </div>
    </div>
  );
}

export default Solution;
