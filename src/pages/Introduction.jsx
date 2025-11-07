import React from "react";
import { Link } from "react-router-dom";
import SectionImage from "../components/SectionImage";
import graduateImage from "../images/graduate.png";


const Introduction = () => {
  return (
    <div>
      <h2>Setting the Stage: Student Success at WCTC</h2>

      {/* Opening Hook with Visual Impact */}
      <div className="intro-hook">
        <span className="hook-icon">🎓</span>
        <p className="hook-text">
          Imagine spending two years mastering HTML, JavaScript, C#, Java, databases, and frameworks—only to find
          yourself unable to graduate. Not because of your grades or effort, but because the final
          requirement, an internship, is <strong>out of reach</strong>.
        </p>
      </div>

      <p>
        This is the reality for many Software & Web Development students at Waukesha County Technical
        College (WCTC). Despite the program's strong reputation and rigorous training, a growing number
        of students are unable to complete their degrees.
      </p>

      {/* Quick Facts Box */}
      <div className="quick-facts">
        <h4>The Reality</h4>
        <div className="facts-grid">
          <div className="fact-item">
            <span className="fact-icon">📚</span>
            <div>
              <strong>2 Years</strong>
              <p>Of intensive coursework completed</p>
            </div>
          </div>
          <div className="fact-item">
            <span className="fact-icon">🚧</span>
            <div>
              <strong>1 Barrier</strong>
              <p>Stands between students and graduation</p>
            </div>
          </div>
          <div className="fact-item">
            <span className="fact-icon">💼</span>
            <div>
              <strong>Required</strong>
              <p>Internship for degree completion</p>
            </div>
          </div>
        </div>
      </div>

      <p>
        The internship requirement, intended as a bridge to the workforce, has become a barrier due to
        limited opportunities, high competition, and unrealistic expectations from employers.
      </p>

      {/* Mission Statement Box */}
      <div className="mission-statement cta-section">
        <h3>Our Mission</h3>
        <p>
          This proposal argues that WCTC must address the internship bottleneck to ensure students can
          graduate and transition successfully into their careers. By building strategic partnerships
          and dedicated support systems, we can transform this barrier into a pathway for success.
        </p>
        </div>
        <SectionImage
          src={graduateImage}
          alt="Graduate Image"
          size="wide-tall"
        />
      {/* Preview of What's Coming */}
      <div className="preview-section">
        <h4>What You'll Discover</h4>
        <div className="preview-grid">
          <div className="preview-item">
            <span className="preview-number">01</span>
            <h5>The Challenge</h5>
            <p>Understanding the scope and impact of the internship gap</p>
          </div>
          <div className="preview-item">
            <span className="preview-number">02</span>
            <h5>Our Proposal</h5>
            <p>Three strategic initiatives to expand opportunities</p>
          </div>
          <div className="preview-item">
            <span className="preview-number">03</span>
            <h5>Considerations</h5>
            <p>Addressing concerns and building consensus</p>
          </div>
        </div>
      </div>

      <div className="page-navigation">
        <div></div>
        <Link to="/problem" className="nav-button nav-button-next">
          Next: The Challenge
        </Link>
      </div>
    </div>
  );
}

export default Introduction;
