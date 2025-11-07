import React from "react";
import { Link } from "react-router-dom";
import SectionImage from "../components/SectionImage";
import budget from "../images/budget.png";
import interview from "../images/interview.png";

const CounterArgument = () => {
  return (
    <div>
      <h2>Addressing Concerns: A Balanced Perspective</h2>
      
      {/* Introduction with visual emphasis */}
      <div className="balanced-intro">
        <span className="intro-icon">⚖️</span>
        <p>
          Any significant initiative requires careful consideration of potential challenges and 
          objections. We've identified two primary concerns that stakeholders might raise about 
          this proposal. Here, we address each concern directly and explain why our solution 
          remains the best path forward.
        </p>
      </div>

      {/* Concern #1 Card */}
      <div className="concern-card">
        <div className="concern-header">
          <span className="concern-number">1</span>
          <h3>Concern: Cost and Resource Allocation</h3>
        </div>
        
        <div className="concern-quote-block">
          <span className="quote-icon">💬</span>
          <p className="concern-quote">
            "It's too expensive to hire a dedicated internship coordinator."
          </p>
        </div>

        <div className="section-image-wrapper">
          <SectionImage 
            src={budget} 
            alt="Budget planning and allocation" 
            size="wide"
          />
        </div>

        <div className="concern-context">
          <h4>The Valid Concern</h4>
          <p>
            Some might argue that creating a new staff position or expanding responsibilities to 
            an existing staff member could require funding that WCTC doesn't currently have. This 
            is a valid concern in an era of tight educational budgets.
          </p>
        </div>

        <div className="response-section">
          <div className="response-header">
            <span className="response-icon">✓</span>
            <h4>Our Response</h4>
          </div>
          <p>
            While hiring a new staff member may present an initial financial challenge, the long-term 
            benefits far outweigh the cost. Consider the return on investment:
          </p>

          <div className="benefits-grid">
            <div className="benefit-item">
                <div className="benefit-header">
                    <span className="benefit-icon">📈</span>
                    <strong>Improved Graduation Rates</strong>
                </div>
              <p>More students complete their programs on time</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-header">
                  <span className="benefit-icon">💼</span>
                  <strong>Enhanced Job Placement</strong>
              </div>
              <p>Students enter the workforce with experience</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-header">
                  <span className="benefit-icon">🏆</span>
                  <strong>Stronger Reputation</strong>
              </div>
              <p>Better outcomes attract more students</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-header">
                  <span className="benefit-icon">👥</span>
                  <strong>Increased Enrollment</strong>
              </div>
              <p>Success stories lead to program growth</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-header">
                  <span className="benefit-icon">💰</span>
                  <strong>Funding Opportunities</strong>
              </div>
              <p>Strong outcomes unlock grants and partnerships</p>
            </div>
          </div>

          <div className="cost-mitigation">
            
            <h4>💵 Cost-Effective Structuring Options</h4>
            <ol className="mitigation-list">
              <li>
                A part-time position initially, scaling up as partnerships grow
              </li>
              <li>
                A shared role across multiple IT programs
              </li>
              <li>
                A position funded partially through employer partnerships or grants
              </li>
            </ol>
          </div>
        </div>

        <div className="key-takeaway">
          <strong>Key Takeaway:</strong> The investment in one coordinator could help hundreds of students 
          graduate and launch successful careers, a measurable impact on student success and institutional reputation.
        </div>
      </div>

      <hr className="section-divider" />

      {/* Concern #2 Card */}
      <div className="concern-card">
        <div className="concern-header">
          <span className="concern-number">2</span>
          <h3>Concern: Student Responsibility</h3>
        </div>
        
        <div className="concern-quote-block">
          <span className="quote-icon">💬</span>
          <p className="concern-quote">
            "It's the student's responsibility to find internships, not the school's."
          </p>
        </div>

        <div className="section-image-wrapper">
          <SectionImage 
            src={interview} 
            alt="Interview process and candidate evaluation" 
            size="wide"
          />
        </div>

        <div className="concern-context">
          <h4>The Valid Concern</h4>
          <p>
            Critics may believe that students should take the initiative to network and apply 
            independently, as this is part of real-world job hunting. This perspective values 
            self-reliance and personal accountability.
          </p>
        </div>

        <div className="response-section">
          <div className="response-header">
            <span className="response-icon">✓</span>
            <h4>Our Response</h4>
          </div>
          <p>
            While it's true that students should take initiative in their career development, 
            educational institutions have a responsibility to provide <strong>equitable access</strong> to 
            opportunities. Not all students start from the same place:
          </p>

          <div className="equity-grid">
            <div className="equity-item">
              <div className="equity-header">
                <span className="equity-icon">🎯</span>
                <strong>Different Resource Levels</strong>
              </div>
              <p>Some students lack professional networks or family connections in tech</p>
            </div>
            <div className="equity-item">
              <div className="equity-header">
                <span className="equity-icon">🌟</span>
                <strong>Varied Backgrounds</strong>
              </div>
              <p>Career-changers and first-generation college students need additional guidance</p>
            </div>
            <div className="equity-item">
              <div className="equity-header">
                <span className="equity-icon">🤝</span>
                <strong>Diverse Support Systems</strong>
              </div>
              <p>Not every student has mentors or industry contacts</p>
            </div>
            <div className="equity-item">
              <div className="equity-header">
                <span className="equity-icon">📍</span>
                <strong>Geographic Limitations</strong>
              </div>
              <p>Some students have transportation or location constraints</p>
            </div>
          </div>

          <div className="equity-statement">
            <p>
              By actively supporting internship placement, WCTC ensures that <em>all</em> students—regardless 
              of their background or circumstances—can meet graduation requirements and gain real-world 
              experience. <strong>This doesn't eliminate personal responsibility; it levels the playing field.</strong>
            </p>
          </div>
        </div>

        <div className="key-takeaway">
          <strong>Key Takeaway:</strong> Education is about creating opportunities for success. When we make 
          internships more accessible, we are not doing the work for students, we are removing barriers that 
          prevent them from doing the work themselves.
        </div>
      </div>

      <hr className="section-divider" />

      {/* Closing Statement */}
      <div className="closing-statement cta-section">
        <h3>Moving Forward</h3>
        <div className="forward-content">
          <span className="forward-icon">🚀</span>
          <div>
            <p>
              These concerns are important, and we've designed our proposal to address them directly. 
              By focusing on strategic, cost-effective initiatives and maintaining high expectations 
              for student effort, we can enhance internship access while respecting both fiscal 
              responsibility and the value of personal initiative.
            </p>
            <div className="next-step-prompt">
              <p><Link to="/references">Review our references and supporting evidence.</Link></p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-navigation">
        <Link to="/solution" className="nav-button nav-button-prev">
          Previous: Our Proposal
        </Link>
        <Link to="/references" className="nav-button nav-button-next">
          Next: References
        </Link>
      </div>
    </div>
  );
}

export default CounterArgument;
