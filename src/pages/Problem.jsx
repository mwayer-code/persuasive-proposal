import React from "react";
import { Link } from "react-router-dom";
import SectionImage from "../components/SectionImage";
import programmingFrustrationImage from "../images/programming-frustration.png";

const Problem = () => {
    return (
        <div>
            <h2>The Challenge: Understanding the Internship Gap</h2>

            {/* Problem Overview Card */}
            <div className="problem-overview">
                <span className="overview-badge">⚠️ Critical Issue</span>
                <p className="overview-text">
                    At WCTC, completing an internship is a graduation requirement for the IT: Software & Web
                    Development Associate program, <strong>but securing one has become increasingly difficult.</strong>
                </p>
            </div>

            <h3>The Current Landscape</h3>
            <p>
                Internships are designed to provide students with practical coding experience,
                professional networking, and preparation for the job market. However, the path to securing
                these vital opportunities is fraught with obstacles.
            </p>

            {/* Barriers Breakdown */}
            <div className="barriers-section">
                <h4>The Three Major Barriers</h4>
                <div className="barrier-grid">
                    <div className="barrier-card">
                        <span className="barrier-icon">📍</span>
                        <h5>Limited Local Opportunities</h5>
                        <p>Few tech companies in the surrounding area offer internship programs</p>
                    </div>
                    <div className="barrier-card">
                        <span className="barrier-icon">🏆</span>
                        <h5>High Competition</h5>
                        <p>Multiple students competing for the same limited positions</p>
                    </div>
                    <div className="barrier-card">
                        <span className="barrier-icon">🎯</span>
                        <h5>Unrealistic Requirements</h5>
                        <p>Employers asking for 4-year degrees or prior experience from 2-year students</p>
                    </div>
                </div>
            </div>

            {/* Expert Testimony with Enhanced Design */}
            <div className="evidence-block">
                <span className="evidence-badge">👤 Expert Testimony</span>
                <p className="expert-quote">
                    "In my experience working with students and employers, the IT: Web & Software Developer
                    Associate Degree Program has consistently been one of the more challenging areas for students
                    to secure internships. This is primarily due to the high skill expectations from employers, who
                    often look for candidates with advanced programming experience or a strong project portfolio before
                    extending internship opportunities.  In addition, following the layoffs that occurred during COVID, 
                    many senior-level developers have moved into mid-level positions, and mid-level developers have taken
                    on entry-level roles, leaving limited opportunities for entry-level or junior developers. 
                    Also, with the rapid advancement of AI, many companies are streamlining traditional developer roles 
                    or shifting their focus toward AI-assisted coding, data integration, and automation, which has reduced the 
                    number of more traditional internship opportunities."
                </p>
                <p className="expert-attribution">
                    — Ellen Umentum, Career Specialist at WCTC
                </p>
            </div>

            <h3>The Impact on Students</h3>
            <p>
                These challenges leave many students unable to graduate despite completing all of their coursework.
                The consequences extend far beyond a delayed diploma...
            </p>

            <SectionImage
                src={programmingFrustrationImage}
                alt="Programming Frustration Image"
                position="center"
                size="wide"
            />

            {/* Impact Visualization */}
            <div className="impact-section">
                <h4>What Students Miss Without Internships</h4>
                <div className="impact-grid">
                    <div className="impact-item">
                        <div className="impact-header">
                            <span className="impact-icon">💻</span>
                            <strong>Practical Experience</strong>
                        </div>
                        <p>Unable to apply their classroom knowledge into real-world projects</p>
                    </div>
                    <div className="impact-item">
                        <div className="impact-header">
                            <span className="impact-icon">🤝</span>
                            <strong>Professional Network</strong>
                        </div>
                        <p>Miss out on connections within the tech industry</p>
                    </div>
                    <div className="impact-item">
                        <div className="impact-header">
                            <span className="impact-icon">🗣️</span>
                            <strong>Soft Skills</strong>
                        </div>
                        <p>Limited development of collaborating in team environments</p>
                    </div>
                    <div className="impact-item">
                        <div className="impact-header">
                            <span className="impact-icon">💪</span>
                            <strong>Confidence</strong>
                        </div>
                        <p>Reduced self-assurance in their technical abilities</p>
                    </div>
                    <div className="impact-item">
                        <div className="impact-header">
                            <span className="impact-icon">💰</span>
                            <strong>Earning Potential</strong>
                        </div>
                        <p>Lower starting salaries without experience and a degree</p>
                    </div>
                    <div className="impact-item">
                        <div className="impact-header">
                            <span className="impact-icon">🎓</span>
                            <strong>Graduation</strong>
                        </div>
                        <p>Unable to complete their degree requirements and miss out on graduating with fellow classmates</p>
                    </div>
                </div>
            </div>

            {/* Enhanced Statistic */}
            {/* <div className="statistic-highlight">
                <div className="stat-content">
                    <span className="statistic-number">100%</span>
                    <div className="stat-text">
                        <p className="stat-main">of Software & Web Development students must complete an internship to graduate</p>
                        <p className="stat-sub">Yet many are unable to secure one</p>
                    </div>
                </div>
            </div> */}

            <div className="cta-section">
                <h4>The Bottom Line</h4>
                <p style={{ marginBottom: 0 }}>
                    Addressing this challenge is essential to ensure student success, and upholds WCTC's promise of
                    preparing graduates for meaningful careers in technology. <strong>The solution requires institutional
                    action, not just individual student effort.</strong>
                </p>
            </div>

            <div className="page-navigation">
                <Link to="/" className="nav-button nav-button-prev">
                    Previous: Introduction
                </Link>
                <Link to="/solution" className="nav-button nav-button-next">
                    Next: Our Proposal
                </Link>
            </div>
        </div>
    );
}

export default Problem;
