import React from "react";

const References = () => {
  return (
    <div>
      <h2>References</h2>
      
      <p>
        This proposal is supported by expert testimony and a documented example of a successful 
        partnership model. All sources are cited below in APA format.
      </p>

      <div className="evidence-block" style={{textAlign: 'left'}}>
        <p style={{marginBottom: '1rem', paddingLeft: '2rem', textIndent: '-2rem'}}>
          <em>The Benefits of Collaboration Between University and Industry</em>. (2024, January 15). 
          <a 
            href="https://ccaps.umn.edu/story/benefits-collaboration-between-university-and-industry" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            https://ccaps.umn.edu/story/benefits-collaboration-between-university-and-industry
          </a>
        </p>

        <p style={{marginBottom: '0', paddingLeft: '2rem', textIndent: '-2rem'}}>
          Umentum, E. (2025, November 5). Email Communication.
        </p>
      </div>
    </div>
  );
}

export default References;
