import React, { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Introduction from './pages/Introduction'
import Problem from './pages/Problem'
import Solution from './pages/Solution'
import CounterArgument from './pages/CounterArgument'
import References from './pages/References'
import './App.css'
import './components.css'

const NavLink = ({ children, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      className={`nav-link ${isActive ? 'active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
};

// Custom smooth scroll function with adjustable speed
function smoothScrollToTop(duration = 1000) {
  const start = window.pageYOffset;
  const startTime = performance.now();

  function scroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth deceleration (ease-out cubic)
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    
    window.scrollTo(0, start * (1 - easeOutCubic));

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll with custom duration (1000ms = 1 second)
    smoothScrollToTop(1000);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div style={{padding: '20px'}}>
      <ScrollToTop />
      
      {/* Header */}
      <header className="proposal-header">
        <h1 className="proposal-title">Enhancing Student Success at WCTC</h1>
        <p className="proposal-subtitle">A Strategic Proposal for IT Program Development</p>
      </header>

      {/* Navigation - sticky positioning removed to fix scroll issues */}
      <nav className="navigation">
        <div className="nav-container">
          <NavLink to="/">Introduction</NavLink>
          <NavLink to="/problem">The Challenge</NavLink>
          <NavLink to="/solution">Our Proposal</NavLink>
          <NavLink to="/counter-argument">Considerations</NavLink>
          <NavLink to="/references">References</NavLink>
        </div>
      </nav>

      <div className="content-area">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/counter-argument" element={<CounterArgument />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
